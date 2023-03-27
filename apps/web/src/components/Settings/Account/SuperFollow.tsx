
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { Form, useZodForm } from '@components/UI/Form'
import { Input } from '@components/UI/Input'
import { Spinner } from '@components/UI/Spinner'
import { StarIcon, XIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import getSignature from '@lib/getSignature'
import getTokenImage from '@lib/getTokenImage'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { LensHub } from 'abis'
import { ADDRESS_REGEX, DEFAULT_COLLECT_TOKEN, LENSHUB_PROXY, SIGN_WALLET } from 'data/constants'
import type { Erc20 } from 'lens'
import {
  useBroadcastMutation,
  useCreateSetFollowModuleTypedDataMutation,
  useEnabledCurrencyModulesWithProfileQuery
} from 'lens'
import type { FC } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { SETTINGS } from 'src/tracking'
import { useContractWrite, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const SuperFollow: FC = () => {
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { t } = useTranslation('common')
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_COLLECT_TOKEN)
  const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState('WMATIC')
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })
  const { data: currencyData, loading } = useEnabledCurrencyModulesWithProfileQuery({
    variables: { request: { profileId: currentProfile?.id } },
    skip: !currentProfile?.id
  })

  const onCompleted = () => {
    Mixpanel.track(SETTINGS.ACCOUNT.SET_SUPER_FOLLOW)
  }

  const { isLoading: writeLoading, write } = useContractWrite({
    address: LENSHUB_PROXY,
    abi: LensHub,
    functionName: 'setFollowModuleWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const newFundraiseSchema = object({
    amount: string().min(1, { message: 'Invalid amount' }),
    recipient: string()
      .max(42, { message: 'Ethereum address should be within 42 characters' })
      .regex(ADDRESS_REGEX, { message: 'Invalid Ethereum address' })
  })

  const form = useZodForm({
    schema: newFundraiseSchema,
    defaultValues: {
      recipient: currentProfile?.ownedBy
    }
  })

  const [broadcast, { loading: broadcastLoading }] = useBroadcastMutation({
    onCompleted
  })
  const [createSetFollowModuleTypedData, { loading: typedDataLoading }] =
    useCreateSetFollowModuleTypedDataMutation({
      onCompleted: async ({ createSetFollowModuleTypedData }) => {
        const { id, typedData } = createSetFollowModuleTypedData
        const { profileId, followModule, followModuleInitData, deadline } = typedData.value
        const signature = await signTypedDataAsync(getSignature(typedData))
        const { v, r, s } = splitSignature(signature)
        const sig = { v, r, s, deadline }
        const inputStruct = {
          profileId,
          followModule,
          followModuleInitData,
          sig
        }
        setUserSigNonce(userSigNonce + 1)
        const { data } = await broadcast({ variables: { request: { id, signature } } })
        if (data?.broadcast.__typename === 'RelayError') {
          return write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
        }
      },
      onError
    })

  const setSuperFollow = async (amount: string | null, recipient: string | null) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    try {
      await createSetFollowModuleTypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request: {
            profileId: currentProfile?.id,
            followModule: amount
              ? {
                  feeFollowModule: {
                    amount: {
                      currency: selectedCurrency,
                      value: amount
                    },
                    recipient
                  }
                }
              : {
                  freeFollowModule: true
                }
          }
        }
      })
    } catch {}
  }

  if (loading) {
    return (
      <Card>
        <div className="p-5 py-10 space-y-2 text-center">
          <Spinner size="md" className="mx-auto" />
          <div>{t('Loading super follow settings')}</div>
        </div>
      </Card>
    )
  }

  const followType = currencyData?.profile?.followModule?.__typename

  return (
    <Card>
      <Form
        form={form}
        className="p-5 space-y-4"
        onSubmit={({ amount, recipient }) => {
          setSuperFollow(amount, recipient)
        }}
      >
        <div className="text-lg font-bold">{t('Set super follow title')}</div>
        <p>{t('Super follow description')}</p>
        <div className="pt-2">
          <div className="label">{t('Select currency')}</div>
          <select
            className="w-full bg-white rounded-xl border border-gray-300 outline-none dark:bg-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:border-gray-700/80 focus:border-brand-500 focus:ring-brand-400"
            onChange={(e) => {
              const currency = e.target.value.split('-')
              setSelectedCurrency(currency[0])
              setSelectedCurrencySymbol(currency[1])
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
          label={t('Follow amount')}
          type="number"
          step="0.0001"
          min="0"
          max="100000"
          prefix={
            <img
              className="w-6 h-6"
              height={24}
              width={24}
              src={getTokenImage(selectedCurrencySymbol)}
              alt={selectedCurrencySymbol}
            />
          }
          placeholder="5"
          {...form.register('amount')}
        />
        <Input
          label={t('Funds recipient')}
          type="text"
          placeholder="0x3A5bd...5e3"
          {...form.register('recipient')}
        />
        <div className="ml-auto">
          <div className="block space-y-2 space-x-0 sm:flex sm:space-y-0 sm:space-x-2">
            {followType === 'FeeFollowModuleSettings' && (
              <Button
                type="button"
                variant="danger"
                outline
                onClick={() => {
                  setSuperFollow(null, null)
                }}
                disabled={typedDataLoading || signLoading || writeLoading || broadcastLoading}
                icon={<XIcon className="w-4 h-4" />}
              >
                {t('Disable super follow')}
              </Button>
            )}
            <Button
              type={t('Submit')}
              disabled={typedDataLoading || signLoading || writeLoading || broadcastLoading}
              icon={<StarIcon className="w-4 h-4" />}
            >
              {followType === 'FeeFollowModuleSettings' ? t('Update super follow') : t('Set super follow')}
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  )
}

export default SuperFollow
