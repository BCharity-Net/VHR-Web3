import ChooseFile from '@components/Shared/ChooseFile'
import IndexStatus from '@components/Shared/IndexStatus'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import { Form, useZodForm } from '@components/UI/Form'
import { Input } from '@components/UI/Input'
import { Spinner } from '@components/UI/Spinner'
import { TextArea } from '@components/UI/TextArea'
import { Toggle } from '@components/UI/Toggle'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import { PencilIcon } from '@heroicons/react/outline'
import { Analytics } from '@lib/analytics'
import getAttribute from '@lib/getAttribute'
import getIPFSLink from '@lib/getIPFSLink'
import getSignature from '@lib/getSignature'
import hasPrideLogo from '@lib/hasPrideLogo'
import imageProxy from '@lib/imageProxy'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import uploadToArweave from '@lib/uploadToArweave'
import uploadToIPFS from '@lib/uploadToIPFS'
import { LensPeriphery } from 'abis'
import { APP_NAME, COVER, LENS_PERIPHERY, RELAY_ON, SIGN_WALLET } from 'data/constants'
import type { CreatePublicSetProfileMetadataUriRequest, MediaSet } from 'lens';
import {
  Profile,
  useCreateSetProfileMetadataTypedDataMutation,
  useCreateSetProfileMetadataViaDispatcherMutation
} from 'lens'
import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { SETTINGS } from 'src/tracking'
import { v4 as uuid } from 'uuid'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, optional, string } from 'zod'

interface Props {
  profile: Profile & { coverPicture: MediaSet }
}

const Profile: FC<Props> = ({ profile }) => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [pride, setPride] = useState(hasPrideLogo(profile))
  const [cover, setCover] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploading, setUploading] = useState(false)

  const onCompleted = () => {
    toast.success('Profile updated successfully!')
    Analytics.track(SETTINGS.PROFILE.UPDATE)
  }

  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })

  const {
    data: writeData,
    isLoading: writeLoading,
    error,
    write
  } = useContractWrite({
    address: LENS_PERIPHERY,
    abi: LensPeriphery,
    functionName: 'setProfileMetadataURIWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })
  const [createSetProfileMetadataTypedData, { loading: typedDataLoading }] =
    useCreateSetProfileMetadataTypedDataMutation({
      onCompleted: async ({ createSetProfileMetadataTypedData }) => {
        const { id, typedData } = createSetProfileMetadataTypedData
        const { deadline } = typedData?.value

        try {
          const { id, typedData } = createSetProfileMetadataTypedData
          const { profileId, metadata, deadline } = typedData.value
          const signature = await signTypedDataAsync(getSignature(typedData))
          const { v, r, s } = splitSignature(signature)
          const sig = { v, r, s, deadline }
          const inputStruct = {
            user: currentProfile?.ownedBy,
            profileId,
            metadata,
            sig
          }

          if (!RELAY_ON) {
            return write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
          }

          const {
            data: { broadcast: result }
          } = await broadcast({ request: { id, signature } })

          if ('reason' in result) {
            write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
          }
        } catch {}
      },
      onError
    })

  const [createSetProfileMetadataViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] =
    useCreateSetProfileMetadataViaDispatcherMutation({ onCompleted, onError })

  const createViaDispatcher = async (request: CreatePublicSetProfileMetadataUriRequest) => {
    const { data } = await createSetProfileMetadataViaDispatcher({
      variables: { request }
    })
    if (data?.createSetProfileMetadataViaDispatcher?.__typename === 'RelayError') {
      createSetProfileMetadataTypedData({
        variables: { request }
      })
    }
  }

  useEffect(() => {
    if (profile?.coverPicture?.original?.url) {
      setCover(profile?.coverPicture?.original?.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUpload = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setUploading(true)
    try {
      const attachment = await uploadToIPFS(evt.target.files)
      if (attachment[0]?.item) {
        setCover(attachment[0].item)
      }
    } finally {
      setUploading(false)
    }
  }

  const editProfileSchema = object({
    // translate
    name: string().max(100, { message: 'Name should not exceed 100 characters' }),
    location: string().max(100, {
      message: 'Location should not exceed 100 characters'
    }),
    website: optional(string().max(100, { message: t('Website exceeds') })),
    twitter: string().max(100, {
      message: 'Twitter should not exceed 100 characters'
    }),
    bio: string().max(260, { message: 'Bio should not exceed 260 characters' })
  })

  const form = useZodForm({
    schema: editProfileSchema,
    defaultValues: {
      name: profile?.name ?? '',
      location: getAttribute(profile?.attributes, 'location'),
      website: getAttribute(profile?.attributes, 'website'),
      twitter: getAttribute(profile?.attributes, 'twitter')?.replace('https://twitter.com/', ''),
      bio: profile?.bio ?? ''
    }
  })

  const editProfile = async (
    name: string,
    location: string | null,
    website?: string | null,
    twitter?: string | null,
    bio?: string | null
  ) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    setIsUploading(true)
    const id = await uploadToArweave({
      name,
      bio,
      cover_picture: cover ? cover : null,
      attributes: [
        { traitType: 'string', key: 'location', value: location },
        { traitType: 'string', key: 'website', value: website },
        { traitType: 'string', key: 'twitter', value: twitter },
        { traitType: 'boolean', key: 'hasPrideLogo', value: pride },
        { traitType: 'string', key: 'statusEmoji', value: getAttribute(profile?.attributes, 'statusEmoji') },
        {
          traitType: 'string',
          key: 'statusMessage',
          value: getAttribute(profile?.attributes, 'statusMessage')
        },
        { traitType: 'string', key: 'app', value: APP_NAME }
      ],
      version: '1.0.0',
      metadata_id: uuid(),
      createdOn: new Date(),
      appId: APP_NAME
    }).finally(() => setIsUploading(false))

    const request = {
      profileId: currentProfile?.id,
      metadata: `https://arweave.net/${id}`
    }

    if (currentProfile?.dispatcher?.canUseRelay) {
      createViaDispatcher(request)
    } else {
      createSetProfileMetadataTypedData({
        variables: { request }
      })
    }
  }

  const isLoading =
    isUploading || typedDataLoading || dispatcherLoading || signLoading || writeLoading || broadcastLoading
  const txHash =
    writeData?.hash ??
    broadcastData?.broadcast?.txHash ??
    (dispatcherData?.createSetProfileMetadataViaDispatcher.__typename === 'RelayerResult' &&
      dispatcherData?.createSetProfileMetadataViaDispatcher.txHash)

  return (
    <Card className="p-5">
      <Form
        form={form}
        className="space-y-4"
        onSubmit={({ name, location, website, twitter, bio }) => {
          editProfile(name, location, website, twitter, bio)
        }}
      >
        {error && <ErrorMessage className="mb-3" title={t('Transaction Failed!')} error={error} />}
        <Input label={t('Profile Id')} type="text" value={currentProfile?.id} disabled />
        <Input label={t('Name')} type="text" placeholder="Gavin" {...form.register('name')} />
        <Input label={t('Location')} type="text" placeholder="Miami" {...form.register('location')} />
        <Input
          label={t('Website')}
          type="text"
          placeholder="https://hooli.com"
          {...form.register('website')}
        />
        <Input
          label="Twitter"
          type="text"
          prefix="https://twitter.com"
          placeholder="gavin"
          {...form.register('twitter')}
        />
        <TextArea label={t('Bio')} placeholder="Tell us something about you!" {...form.register('bio')} />
        <div className="space-y-1.5">
          <div className="label">{t('Cover')}</div>
          <div className="space-y-3">
            {cover && (
              <div>
                <img
                  className="object-cover w-full h-60 rounded-lg"
                  src={imageProxy(getIPFSLink(cover), COVER)}
                  alt={cover}
                />
              </div>
            )}
            <div className="flex items-center space-x-3">
              <ChooseFile id="cover" onChange={(evt: ChangeEvent<HTMLInputElement>) => handleUpload(evt)} />
              {uploading && <Spinner size="sm" />}
            </div>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <div className="flex items-center space-x-2 label">
            <img className="w-5 h-5" src="/pride.svg" alt="Pride Logo" />
            <span>{t('Celebrate pride')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Toggle on={pride} setOn={setPride} />
            <div>
              {APP_NAME} {t('Pride switch')}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button
            className="ml-auto"
            type="submit"
            disabled={isLoading}
            icon={isLoading ? <Spinner size="xs" /> : <PencilIcon className="w-4 h-4" />}
          >
            {' '}
            {t('Save')}
          </Button>
          {txHash ? <IndexStatus txHash={txHash} /> : null}
        </div>
      </Form>
    </Card>
  )
}

export default Profile
