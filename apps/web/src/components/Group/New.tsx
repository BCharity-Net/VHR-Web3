import { useMutation } from '@apollo/client'
import MetaTags from '@components/Common/MetaTags'
import ChooseFile from '@components/Shared/ChooseFile'
import Pending from '@components/Shared/Pending'
import SettingsHelper from '@components/Shared/SettingsHelper'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Form, useZodForm } from '@components/UI/Form'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { Input } from '@components/UI/Input'
import { Spinner } from '@components/UI/Spinner'
import { TextArea } from '@components/UI/TextArea'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import { PlusIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import uploadMediaToIPFS from '@lib/uploadMediaToIPFS'
import uploadToArweave from '@lib/uploadToArweave'
import { LensHubProxy } from 'abis'
import { APP_NAME, LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'data/constants'
import {
  CreatePostBroadcastItemResult,
  CreatePostTypedDataDocument,
  CreatePostViaDispatcherDocument,
  Mutation
} from 'lens'
import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { v4 as uuid } from 'uuid'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const NewGroup: NextPage = () => {
  const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [avatar, setAvatar] = useState('')
  const [avatarType, setAvatarType] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })

  const newGroupSchema = object({
    name: string()
      .min(2, { message: 'Name should be atleast 2 characters' })
      .max(31, { message: 'Name should be less than 32 characters' }),
    description: string().max(260, {
      message: 'Description should not exceed 260 characters'
    })
  })

  const onCompleted = () => {}

  const {
    data,
    isLoading: writeLoading,
    write
  } = useContractWrite({
    address: LENSHUB_PROXY,
    abi: LensHubProxy,
    functionName: 'postWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const form = useZodForm({
    schema: newGroupSchema
  })

  const handleUpload = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setUploading(true)
    try {
      const attachment = await uploadMediaToIPFS(evt.target.files)
      if (attachment[0]?.item) {
        setAvatar(attachment[0].item)
        setAvatarType(attachment[0].type)
      }
    } finally {
      setUploading(false)
    }
  }

  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })
  const [createGroupTypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
    CreatePostTypedDataDocument,
    {
      onCompleted: async ({
        createPostTypedData
      }: {
        createPostTypedData: CreatePostBroadcastItemResult
      }) => {
        try {
          const { id, typedData } = createPostTypedData
          const {
            profileId,
            contentURI,
            collectModule,
            collectModuleInitData,
            referenceModule,
            referenceModuleInitData,
            deadline
          } = typedData?.value
          const signature = await signTypedDataAsync(getSignature(typedData))
          const { v, r, s } = splitSignature(signature)
          const sig = { v, r, s, deadline }
          const inputStruct = {
            profileId,
            contentURI,
            collectModule,
            collectModuleInitData,
            referenceModule,
            referenceModuleInitData,
            sig
          }

          setUserSigNonce(userSigNonce + 1)
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
    }
  )

  const [createGroupViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] = useMutation(
    CreatePostViaDispatcherDocument,
    { onCompleted, onError }
  )

  const createGroup = async (name: string, description: string | null) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    setIsUploading(true)
    const id = await uploadToArweave({
      version: '2.0.0',
      metadata_id: uuid(),
      description: description,
      content: description,
      external_url: null,
      image: avatar ? avatar : `https://avatar.tobi.sh/${uuid()}.png`,
      imageMimeType: avatarType,
      name: name,
      contentWarning: null, // TODO
      attributes: [
        {
          traitType: 'string',
          key: 'type',
          value: 'group'
        }
      ],
      media: [],
      locale: 'en',
      createdOn: new Date(),
      appId: `${APP_NAME} Group`
    }).finally(() => setIsUploading(false))

    const request = {
      profileId: currentProfile?.id,
      contentURI: `https://arweave.net/${id}`,
      collectModule: {
        freeCollectModule: {
          followerOnly: false
        }
      },
      referenceModule: {
        followerOnlyReferenceModule: false
      }
    }

    if (currentProfile?.dispatcher?.canUseRelay) {
      createGroupViaDispatcher({ variables: { request } })
    } else {
      createGroupTypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request
        }
      })
    }
  }

  if (!currentProfile) {
    return <Custom404 />
  }

  return (
    <GridLayout>
      <MetaTags title={`Create Group • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper heading={t('Create group')} description={t('Create group description')} />
      </GridItemFour>
      <GridItemEight>
        <Card>
          {data?.hash ?? broadcastData?.broadcast?.txHash ? (
            <Pending
              txHash={data?.hash ? data?.hash : broadcastData?.broadcast?.txHash}
              indexing={t('Group creation load')}
              indexed={t('Group created successfully')}
              type="group"
              urlPrefix="groups"
            />
          ) : (
            <Form
              form={form}
              className="p-5 space-y-4"
              onSubmit={({ name, description }) => {
                createGroup(name, description)
              }}
            >
              <Input label={t('Group name')} type="text" placeholder="minecraft" {...form.register('name')} />
              <TextArea
                label={t('Group description')}
                placeholder={t('Group description placeholder')}
                {...form.register('description')}
              />
              <div className="space-y-1.5">
                <div className="label">{t('Avatar')}</div>
                <div className="space-y-3">
                  {avatar && (
                    <img
                      className="w-60 h-60 rounded-lg"
                      height={240}
                      width={240}
                      src={avatar}
                      alt={avatar}
                    />
                  )}
                  <div className="flex items-center space-x-3">
                    <ChooseFile
                      id="avatar"
                      onChange={(evt: ChangeEvent<HTMLInputElement>) => handleUpload(evt)}
                    />
                    {uploading && <Spinner size="sm" />}
                  </div>
                </div>
              </div>
              <Button
                className="ml-auto"
                type="submit"
                disabled={typedDataLoading || isUploading || signLoading || writeLoading || broadcastLoading}
                icon={
                  typedDataLoading || isUploading || signLoading || writeLoading || broadcastLoading ? (
                    <Spinner size="xs" />
                  ) : (
                    <PlusIcon className="w-4 h-4" />
                  )
                }
              >
                {t('Create')}
              </Button>
            </Form>
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default NewGroup
