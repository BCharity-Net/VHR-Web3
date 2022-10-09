import { LensHubProxy } from '@abis/LensHubProxy'
import { useMutation, useQuery } from '@apollo/client'
import ChooseFile from '@components/Shared/ChooseFile'
import Pending from '@components/Shared/Pending'
import SettingsHelper from '@components/Shared/SettingsHelper'
import Autosuggest from '@components/UI/Autosuggest'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Form, useZodForm } from '@components/UI/Form'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { Input } from '@components/UI/Input'
import { PageLoading } from '@components/UI/PageLoading'
import { Spinner } from '@components/UI/Spinner'
import { TextArea } from '@components/UI/TextArea'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import MetaTags from '@components/utils/MetaTags'
import {
  CreatePostBroadcastItemResult,
  CreatePostTypedDataDocument,
  CreatePostViaDispatcherDocument,
  EnabledCurrencyModulesDocument,
  Erc20,
  Mutation,
  PublicationMainFocus
} from '@generated/types'
import { PlusIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import getSignature from '@lib/getSignature'
import getTokenImage from '@lib/getTokenImage'
import imagekitURL from '@lib/imagekitURL'
import isVerified from '@lib/isVerified'
import { Mixpanel } from '@lib/mixpanel'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import uploadMediaToIPFS from '@lib/uploadMediaToIPFS'
import uploadToArweave from '@lib/uploadToArweave'
import { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import {
  APP_NAME,
  CATEGORIES,
  DEFAULT_COLLECT_TOKEN,
  LENSHUB_PROXY,
  RELAY_ON,
  SIGN_WALLET
} from 'src/constants'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { FUNDRAISE, PAGEVIEW } from 'src/tracking'
import { v4 as uuid } from 'uuid'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const NewFundraise: NextPage = () => {
  const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [cover, setCover] = useState('')
  const [coverType, setCoverType] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_COLLECT_TOKEN)
  const [selectedCurrencySymobol, setSelectedCurrencySymobol] = useState('WMATIC')
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })
  const { data: currencyData, loading } = useQuery(EnabledCurrencyModulesDocument)

  const newFundraiseSchema = object({
    title: string()
      .min(2, { message: 'Title should be atleast 2 characters' })
      .max(255, { message: 'Title should not exceed 255 characters' }),
    category: string()
      .min(1, { message: 'You must write a category!' })
      .max(40, { message: 'Category name should not exceed 40 characters!' }),
    amount: string().min(1, { message: 'Invalid amount' }),
    goal: string(),
    recipient: string()
      .max(42, { message: 'Ethereum address should be within 42 characters' })
      .regex(/^0x[\dA-Fa-f]{40}$/, { message: 'Invalid Ethereum address' }),
    description: string().max(1000, {
      message: 'Description should not exceed 1000 characters'
    })
  })

  useEffect(() => {
    Mixpanel.track('Pageview', { path: PAGEVIEW.CREATE_FUNDRAISE })
  }, [])

  const onCompleted = () => {
    Mixpanel.track(FUNDRAISE.NEW)
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
    schema: newFundraiseSchema,
    defaultValues: {
      recipient: currentProfile?.ownedBy
    }
  })

  const handleUpload = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setUploading(true)
    try {
      const attachment = await uploadMediaToIPFS(evt.target.files)
      if (attachment[0]?.item) {
        setCover(attachment[0].item)
        setCoverType(attachment[0].type)
      }
    } finally {
      setUploading(false)
    }
  }

  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })
  const [createFundraiseTypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
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

  const [createFundraiseViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] = useMutation(
    CreatePostViaDispatcherDocument,
    { onCompleted, onError }
  )

  const createFundraise = async (
    title: string,
    category: string,
    amount: string,
    goal: string,
    recipient: string,
    description: string | null
  ) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    setIsUploading(true)
    const id = await uploadToArweave({
      version: '2.0.0',
      metadata_id: uuid(),
      description: description ? description : title,
      content: description ? description : title,
      external_url: `https://bcharity-test.vercel.app/u/${currentProfile?.handle}`,
      image: cover ? cover : `https://avatar.tobi.sh/${uuid()}.png`,
      imageMimeType: coverType,
      name: title,
      mainContentFocus: PublicationMainFocus.Article,
      contentWarning: null,
      attributes: [
        {
          traitType: 'string',
          key: 'type',
          value: 'fundraise'
        },
        {
          traitType: 'string',
          key: 'goal',
          value: goal
        },
        {
          traitType: 'string',
          key: 'creator',
          value: currentProfile?.handle
        },
        {
          traitType: 'string',
          key: 'uuid',
          value: uuid()
        },
        {
          traitType: 'string',
          key: 'category',
          value: category
        }
      ],
      media: [],
      locale: 'en',
      createdOn: new Date(),
      appId: `${APP_NAME} Fundraise`
    }).finally(() => setIsUploading(false))

    const request = {
      profileId: currentProfile?.id,
      contentURI: `https://arweave.net/${id}`,
      collectModule: {
        feeCollectModule: {
          amount: {
            currency: selectedCurrency,
            value: amount
          },
          recipient,
          referralFee: 0, // parseInt(referralFee),
          followerOnly: false
        }
      },
      referenceModule: {
        followerOnlyReferenceModule: false
      }
    }

    if (currentProfile?.dispatcher?.canUseRelay) {
      createFundraiseViaDispatcher({ variables: { request } })
    } else {
      createFundraiseTypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request
        }
      })
    }
  }

  if (loading) {
    return <PageLoading message="Loading create fundraise" />
  }
  if (!currentProfile) {
    return <Custom404 />
  }

  const isLoading =
    typedDataLoading || dispatcherLoading || isUploading || signLoading || writeLoading || broadcastLoading
  const txHash =
    data?.hash ??
    broadcastData?.broadcast?.txHash ??
    (dispatcherData?.createPostViaDispatcher.__typename === 'RelayerResult' &&
      dispatcherData?.createPostViaDispatcher.txHash)

  return (
    <GridLayout>
      <MetaTags title={`Create Fundraise • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper heading={t('Create fundraise')} description={t('Create fundraise description')} />
      </GridItemFour>
      <GridItemEight>
        <Card>
          {txHash ? (
            <Pending
              txHash={txHash}
              indexing={t('Fundraise creation')}
              indexed={t('Fundraise created successfully')}
              type="fundraise"
              urlPrefix="posts"
            />
          ) : (
            <Form
              form={form}
              className="p-5 space-y-4"
              onSubmit={({ title, category, amount, goal, recipient, description }) => {
                createFundraise(title, category, amount, goal, recipient, description)
              }}
            >
              <Input
                label={t('Cause')}
                type="text"
                placeholder={`${APP_NAME} DAO`}
                {...form.register('title')}
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
              <div>
                <div className="label">{t('Select currency')}</div>
                <select
                  className="w-full bg-white rounded-xl border border-gray-300 outline-none dark:bg-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:border-gray-700/80 focus:border-brand-500 focus:ring-brand-400"
                  onChange={(e) => {
                    const currency = e.target.value.split('-')
                    setSelectedCurrency(currency[0])
                    setSelectedCurrencySymobol(currency[1])
                  }}
                >
                  {currencyData?.enabledModuleCurrencies?.map((currency: Erc20) => (
                    <option key={currency.address} value={`${currency.address}-${currency.symbol}`}>
                      {currency.name}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                label={t('Contribution')}
                type="number"
                step="0.0001"
                min="0"
                max="100000"
                prefix={
                  <img
                    className="w-6 h-6"
                    height={24}
                    width={24}
                    src={getTokenImage(selectedCurrencySymobol)}
                    alt={selectedCurrencySymobol}
                  />
                }
                placeholder="5"
                {...form.register('amount')}
              />
              <Input
                label={t('Funding goal')}
                type="number"
                step="0.0001"
                min="0"
                max="100000"
                prefix={
                  <img
                    className="w-6 h-6"
                    height={24}
                    width={24}
                    src={getTokenImage(selectedCurrencySymobol)}
                    alt={selectedCurrencySymobol}
                  />
                }
                placeholder="420"
                {...form.register('goal')}
              />
              <Input
                label={t('Recipient')}
                type="text"
                placeholder="0x3A5bd...5e3"
                {...form.register('recipient')}
              />
              <TextArea
                label={t('Fundraise description')}
                placeholder={t('Fundraise description placeholder')}
                {...form.register('description')}
              />
              <div className="space-y-1.5">
                <div className="label">{t('Cover image')}</div>
                <div className="space-y-3">
                  {cover && (
                    <img
                      className="object-cover w-full h-60 rounded-lg"
                      height={240}
                      src={imagekitURL(getIPFSLink(cover), 'attachment')}
                      alt={cover}
                    />
                  )}
                  <div className="flex items-center space-x-3">
                    <ChooseFile
                      id="cover"
                      onChange={(evt: ChangeEvent<HTMLInputElement>) => handleUpload(evt)}
                    />
                    {uploading && <Spinner size="sm" />}
                  </div>
                </div>
              </div>
              {!isVerified(currentProfile?.id) ? (
                <a className="ml-auto text-red-500">You need to be verified to create a fundraiser</a>
              ) : (
                <Button
                  className="ml-auto"
                  type="submit"
                  disabled={isLoading}
                  icon={isLoading ? <Spinner size="xs" /> : <PlusIcon className="w-4 h-4" />}
                >
                  {t('Create')}
                </Button>
              )}
            </Form>
          )}
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default NewFundraise
