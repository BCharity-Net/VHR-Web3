import { useLazyQuery, useMutation } from '@apollo/client'
import ChooseFiles from '@components/Shared/ChooseFiles'
import Pending from '@components/Shared/Pending'
import SettingsHelper from '@components/Shared/SettingsHelper'
import Autosuggest from '@components/UI/Autosuggest'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Form, useZodForm } from '@components/UI/Form'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { Input } from '@components/UI/Input'
import { OrganizationNameInput } from '@components/UI/OrganizationNameInput'
import { Spinner } from '@components/UI/Spinner'
import { TextArea } from '@components/UI/TextArea'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import MetaTags from '@components/utils/MetaTags'
import { PlusIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import getSignature from '@lib/getSignature'
import imageProxy from '@lib/imageProxy'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import uploadMediaToIPFS from '@lib/uploadMediaToIPFS'
import uploadToArweave from '@lib/uploadToArweave'
import { LensHubProxy } from 'abis'
import type { CreatePostBroadcastItemResult } from 'lens'
import {
  CreatePostTypedDataDocument,
  CreatePostViaDispatcherDocument,
  ProfileDocument
} from 'lens'
import type { NextPage } from 'next'
import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { APP_NAME, CATEGORIES, LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'data/constants'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { v4 as uuid } from 'uuid'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const newHourSchema = object({
  orgName: string()
    .min(2, { message: 'Name should be at least 2 characters' })
    .max(100, { message: 'Name should not exceed 100 characters' }),
  orgWalletAddress: string()
    .max(42, { message: 'Ethereum address should be within 42 characters' })
    .regex(/^0x[\dA-Fa-f]{40}$/, { message: 'Invalid Ethereum address' }),

  startDate: string().max(10, { message: 'Invalid date' }).min(10, { message: 'Invalid date' }),

  endDate: string()
    .max(10, { message: 'Invalid date' })
    .min(10, { message: 'Invalid date' })
    .optional()
    .refine(
      (val) => {
        if (val === '') {
          return false
        }
        return true
      },
      { message: 'You should enter an end date' }
    ),

  totalHours: string()
    .regex(/^(0*[1-9]\d*(\.\d+)?|0+\.\d*[1-9]\d*)$/, {
      message: 'Total hours should be larger than zero'
    })
    .regex(/^\d+(?:\.\d)?$/, {
      message: 'Total hours should be a whole number or to one decimal place'
    }),

  program: string()
    .min(1, { message: 'You must write a program name!' })
    .max(40, { message: 'Program name should not exceed 40 characters!' }),

  city: string()
    .min(1, { message: 'You must write your city!' })
    .max(40, { message: 'City name should not exceed 40 characters!' }),

  category: string()
    .min(1, { message: 'You must write a category!' })
    .max(40, { message: 'Category name should not exceed 40 characters!' }),

  description: string()
    .min(1, { message: 'You must write a description!' })
    .max(250, { message: 'Description should not exceed 250 characters' })
})

interface Props {
  media: string
}

const Media: FC<Props> = ({ media }) => {
  let attachments = []
  if (media) {
    attachments = JSON.parse(media)
  }
  return (
    <div>
      {attachments &&
        attachments.map((i: any) => (
          <img
            key="attachment"
            className="object-cover w-full h-60 rounded-lg"
            height={240}
            src={imageProxy(getIPFSLink(i.item), 'attachment')}
            alt={i.item}
          />
        ))}
    </div>
  )
}

const NewHour: NextPage = () => {
  const { t } = useTranslation('common')
  const [cover, setCover] = useState('')
  const [singleDay, setSingleDay] = useState(true)
  const [coverType, setCoverType] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [media, setMedia] = useState('')
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })

  const [getWalletAddress] = useLazyQuery(ProfileDocument)
  const fetchWalletAddress = (username: string) =>
    getWalletAddress({
      variables: {
        request: { handle: username }
      }
    }).then(({ data }) => {
      return data?.profile?.ownedBy
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
    schema: newHourSchema
  })

  const handleUpload = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setUploading(true)
    try {
      const attachment = await uploadMediaToIPFS(evt.target.files)
      if (attachment[0]?.item) {
        const result = JSON.stringify(attachment)
        setMedia(result)
        setCover(attachment[0].item)
        setCoverType(attachment[0].type)
      }
    } finally {
      setUploading(false)
    }
  }

  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })
  const [createHourTypedData, { loading: typedDataLoading }] = useMutation(CreatePostTypedDataDocument, {
    onCompleted: async ({ createPostTypedData }: { createPostTypedData: CreatePostBroadcastItemResult }) => {
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
        if (RELAY_ON) {
          const {
            data: { broadcast: result }
          } = await broadcast({ request: { id, signature } })

          if ('reason' in result) {
            write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
          }
        } else {
          write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
        }
      } catch {}
    },
    onError
  })

  const [createHourViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] = useMutation(
    CreatePostViaDispatcherDocument,
    { onCompleted, onError }
  )

  const createHour = async (
    orgName: string,
    orgWalletAddress: string,
    startDate: string,
    endDate: string | undefined,
    totalHours: string,
    program: string,
    city: string,
    category: string,
    description: string
  ) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    setIsUploading(true)
    const id = await uploadToArweave({
      version: '2.0.0',
      metadata_id: uuid(),
      description: description,
      content: `@${orgName} VHR submission`,
      external_url: null,
      image: cover ? cover : `https://avatar.tobi.sh/${uuid()}.png`,
      imageMimeType: coverType,
      name: orgName,
      contentWarning: null, // TODO
      attributes: [
        {
          traitType: 'string',
          key: 'type',
          value: 'hours'
        },
        {
          traitType: 'string',
          key: 'orgWalletAddress',
          value: orgWalletAddress
        },
        {
          traitType: 'string',
          key: 'startDate',
          value: startDate
        },
        {
          traitType: 'string',
          key: 'endDate',
          value: singleDay ? startDate : endDate
        },
        {
          traitType: 'number',
          key: 'totalHours',
          value: totalHours
        },
        {
          traitType: 'string',
          key: 'program',
          value: program
        },
        {
          traitType: 'string',
          key: 'city',
          value: city
        },
        {
          traitType: 'string',
          key: 'category',
          value: category
        },
        {
          traitType: 'string',
          key: 'media',
          value: media
        }
      ],
      media: [],
      createdOn: new Date(),
      appId: `${APP_NAME} Hour`
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
      createHourViaDispatcher({ variables: { request } })
    } else {
      createHourTypedData({
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
      <MetaTags title={`Verify Hours • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper heading={t('Verify Hours')} description={t('Hours Description')} />
      </GridItemFour>
      <GridItemEight>
        <Card>
          {data?.hash ?? broadcastData?.broadcast?.txHash ? (
            <Pending
              txHash={data?.hash ? data?.hash : broadcastData?.broadcast?.txHash}
              indexing="Hour Submission creation in progress, please wait!"
              indexed="Hour Submission created successfully"
              type="hours"
              urlPrefix="posts"
            />
          ) : (
            <Form
              form={form}
              className="p-5 space-y-4"
              onSubmit={({
                orgName,
                orgWalletAddress,
                startDate,
                endDate,
                totalHours,
                program,
                city,
                category,
                description
              }) => {
                createHour(
                  orgName,
                  orgWalletAddress,
                  startDate,
                  endDate,
                  totalHours,
                  program,
                  city,
                  category,
                  description
                )
              }}
            >
              <Controller
                control={form.control}
                name="orgName"
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <OrganizationNameInput
                    label={t('Organization Name')}
                    error={error?.message}
                    placeholder={'BCharity'}
                    value={value}
                    onChange={onChange}
                    onAdd={(e: string) => {
                      fetchWalletAddress(e).then((val) => {
                        form.setValue('orgWalletAddress', val)
                      })
                    }}
                  />
                )}
              />
              <Input
                label={t('Organization Wallet Address')}
                type="text"
                placeholder={'0x3A5bd...5e3'}
                {...form.register('orgWalletAddress')}
              />
              <Input
                label={singleDay ? `${t('Date')}` : `${t('Start Date')}`}
                type="date"
                placeholder={'  yyyy-mm-dd'}
                change={() => {
                  if (singleDay === true) {
                    setSingleDay(false)
                  } else {
                    setSingleDay(true)
                  }
                  const startDate = form.getValues('startDate')
                  const endDate = form.getValues('endDate')
                  if (endDate === '') {
                    form.setValue('endDate', startDate)
                  }
                }}
                {...form.register('startDate')}
              />
              {!singleDay && (
                <Input
                  label={t('End Date')}
                  type="date"
                  placeholder={'  yyyy-mm-dd'}
                  change={() => {
                    const startDate = form.getValues('startDate')
                    form.setValue('endDate', startDate)
                  }}
                  {...form.register('endDate')}
                />
              )}
              <Input
                label={t('Total Hours')}
                type="number"
                step="0.1"
                min="0.1"
                placeholder="5"
                {...form.register('totalHours')}
              />

              <Input
                label={t('Program')}
                type="text"
                placeholder={t('Volunteer program name(s)')}
                {...form.register('program')}
              />

              <Input
                label={t('City/Region')}
                type="text"
                placeholder={t('Calgary, AB')}
                {...form.register('city')}
              />

              <Controller
                control={form.control}
                name="category"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <Autosuggest
                    label="Category"
                    lang={CATEGORIES}
                    type="text"
                    placeholder={t('Education')}
                    error={error?.message}
                    onChange={onChange}
                    onAdd={async (e: string) => {
                      form.setValue('category', e)
                    }}
                  />
                )}
              />

              <TextArea
                label={t('Activity Description')}
                placeholder={t('Activity TextArea')}
                {...form.register('description')}
              />

              <div className="space-y-1.5">
                <div className="label">{t('Activity Images (Optional)')}</div>
                <div className="space-y-3">
                  <Media media={media} />
                  <div className="flex items-center space-x-3">
                    <ChooseFiles onChange={(evt: ChangeEvent<HTMLInputElement>) => handleUpload(evt)} />
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
                {t('Hours')}
              </Button>
            </Form>
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default NewHour
