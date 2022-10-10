import { LensHubProxy } from '@abis/LensHubProxy'
import { useMutation } from '@apollo/client'
import ChooseFiles from '@components/Shared/ChooseFiles'
import Pending from '@components/Shared/Pending'
import SettingsHelper from '@components/Shared/SettingsHelper'
import Autosuggest from '@components/UI/Autosuggest'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Form, useZodForm } from '@components/UI/Form'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { Input } from '@components/UI/Input'
import { Spinner } from '@components/UI/Spinner'
import { TextArea } from '@components/UI/TextArea'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import MetaTags from '@components/utils/MetaTags'
import {
  CreatePostBroadcastItemResult,
  CreatePostTypedDataDocument,
  CreatePostViaDispatcherDocument,
  Profile
} from '@generated/types'
import { PlusIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import getSignature from '@lib/getSignature'
import imagekitURL from '@lib/imagekitURL'
import isVerified from '@lib/isVerified'
import { Mixpanel } from '@lib/mixpanel'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import uploadMediaToIPFS from '@lib/uploadMediaToIPFS'
import uploadToArweave from '@lib/uploadToArweave'
import { NextPage } from 'next'
import { ChangeEvent, FC, useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { APP_NAME, CATEGORIES, LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'src/constants'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { OPPOS } from 'src/tracking'
import { v4 as uuid } from 'uuid'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const newOpportunitySchema = object({
  program: string()
    .min(1, { message: 'You must write a program name!' })
    .max(40, { message: 'Program name should not exceed 40 characters!' }),

  position: string()
    .min(1, { message: 'You must write a position name!' })
    .max(40, { message: 'Program name should not exceed 40 characters!' }),

  volunteers: string()
    .regex(/^(0*[1-9]\d*(\.\d+)?|0+\.\d*[1-9]\d*)$/, {
      message: 'Total volunteers should be larger than zero'
    })
    .regex(/^\d+(?:\.\d)?$/, {
      message: 'Total volunteers should be a whole number or to one decimal place'
    }),

  city: string()
    .min(1, { message: 'You must write your city!' })
    .max(40, { message: 'City name should not exceed 40 characters!' }),

  category: string()
    .min(1, { message: 'You must write a category!' })
    .max(40, { message: 'Category name should not exceed 40 characters!' }),

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
            src={imagekitURL(getIPFSLink(i.item), 'attachment')}
            alt={i.item}
          />
        ))}
    </div>
  )
}

const Opportunity: NextPage = () => {
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

  const onCompleted = () => {
    Mixpanel.track(OPPOS.NEW)
  }

  const {
    data,
    isLoading: writeLoading,
    write
  } = useContractWrite({
    addressOrName: LENSHUB_PROXY,
    contractInterface: LensHubProxy,
    functionName: 'postWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const form = useZodForm({
    schema: newOpportunitySchema
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
  const [createOpportunityTypedData, { loading: typedDataLoading }] = useMutation(
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
          if (RELAY_ON) {
            const {
              data: { broadcast: result }
            } = await broadcast({ request: { id, signature } })

            if ('reason' in result) {
              write?.({ recklesslySetUnpreparedArgs: inputStruct })
            }
          } else {
            write?.({ recklesslySetUnpreparedArgs: inputStruct })
          }
        } catch {}
      },
      onError
    }
  )

  const [createOpportunityViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] = useMutation(
    CreatePostViaDispatcherDocument,
    { onCompleted, onError }
  )

  const createOpportunity = async (
    program: string,
    position: string,
    volunteers: string,
    city: string,
    category: string,
    startDate: string,
    endDate: string | undefined,
    totalHours: string,
    description: string,
    currentProfile: Profile | null
  ) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }
    setIsUploading(true)
    const id = await uploadToArweave({
      version: '2.0.0',
      metadata_id: uuid(),
      description: description,
      content: `@${currentProfile?.handle} Volunteer opportunities`,
      external_url: null,
      image: cover ? cover : `https://avatar.tobi.sh/${uuid()}.png`,
      imageMimeType: coverType,
      name: currentProfile?.handle,
      contentWarning: null, // TODO
      attributes: [
        {
          traitType: 'string',
          key: 'type',
          value: 'opportunities'
        },
        {
          traitType: 'string',
          key: 'program',
          value: program
        },
        {
          traitType: 'string',
          key: 'position',
          value: position
        },
        {
          traitType: 'number',
          key: 'volunteers',
          value: volunteers
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
          key: 'media',
          value: media
        }
      ],
      media: [],
      createdOn: new Date(),
      appId: `${APP_NAME} Hours`
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
      createOpportunityViaDispatcher({ variables: { request } })
    } else {
      createOpportunityTypedData({
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
      <MetaTags title={`Create Volunteering Opportunities • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper
          heading={t('Create Volunteering Opportunities')}
          description={t('Organizations can create volunteering opportunities for volunteers to apply!')}
        />
      </GridItemFour>
      <GridItemEight>
        <Card>
          {data?.hash ?? broadcastData?.broadcast?.txHash ? (
            <Pending
              txHash={data?.hash ? data?.hash : broadcastData?.broadcast?.txHash}
              indexing="Volunteer Opportunity creation in progress, please wait!"
              indexed="Volunteer Opportunity created successfully"
              type="opportunity"
              urlPrefix="posts"
            />
          ) : (
            <Form
              form={form}
              className="p-5 space-y-4"
              onSubmit={({
                program,
                position,
                volunteers,
                city,
                category,
                startDate,
                endDate,
                totalHours,
                description
              }) => {
                createOpportunity(
                  program,
                  position,
                  volunteers,
                  city,
                  category,
                  startDate,
                  endDate,
                  totalHours,
                  description,
                  currentProfile
                )
              }}
            >
              <Input
                label={t('Program')}
                type="text"
                placeholder={t('Volunteer program name(s)')}
                {...form.register('program')}
              />

              <Input
                label={t('Position')}
                type="text"
                placeholder={t('Volunteer Position')}
                {...form.register('position')}
              />

              <Input
                label={t('Number of Volunteers')}
                type="number"
                step="1"
                min="1"
                placeholder="20"
                {...form.register('volunteers')}
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
                    onAdd={(e: string) => {
                      form.setValue('category', e)
                    }}
                  />
                )}
              />

              <Input
                label={singleDay ? `${t('Date')}` : `${t('Start Date')}`}
                type="startDate"
                placeholder={'Enter your start date'}
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
                  placeholder={'Enter your end date'}
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
              <TextArea
                label={t('Activity Description and Requirements')}
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
              {!isVerified(currentProfile?.id) ? (
                <a className="ml-auto text-red-500">
                  You need to be verified to create a volunteer opportunity
                </a>
              ) : (
                <Button
                  className="ml-auto"
                  type="submit"
                  disabled={
                    typedDataLoading || isUploading || signLoading || writeLoading || broadcastLoading
                  }
                  icon={
                    typedDataLoading || isUploading || signLoading || writeLoading || broadcastLoading ? (
                      <Spinner size="xs" />
                    ) : (
                      <PlusIcon className="w-4 h-4" />
                    )
                  }
                >
                  {t('Submit')}
                </Button>
              )}
            </Form>
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default Opportunity
