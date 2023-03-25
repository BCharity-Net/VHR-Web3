import UserProfile from '@components/Shared/UserProfile'
import { Button } from '@components/UI/Button'
import { Card } from '@components/UI/Card'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import { Spinner } from '@components/UI/Spinner'
import { ExclamationIcon, PencilIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import formatHandle from '@lib/formatHandle'
import getSignature from '@lib/getSignature'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { LensHubProxy } from 'abis'
import { APP_NAME, LENSHUB_PROXY, SIGN_WALLET } from 'data/constants'
import type { CreateSetDefaultProfileRequest, Profile } from 'lens';
import { useBroadcastMutation, useCreateSetDefaultProfileTypedDataMutation } from 'lens'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { SETTINGS } from 'src/tracking'
import { useAccount, useContractWrite, useSignTypedData } from 'wagmi'

const SetProfile: FC = () => {
  const { t } = useTranslation('common')
  const profiles = useAppStore((state) => state.profiles)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const [selectedUser, setSelectedUser] = useState('')
  const { address } = useAccount()
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })

  const onCompleted = () => {
    toast.success('Default profile updated successfully!')
    Mixpanel.track(SETTINGS.ACCOUNT.SET_DEFAULT_PROFILE)
  }

  const {
    isLoading: writeLoading,
    error,
    write
  } = useContractWrite({
    address: LENSHUB_PROXY,
    abi: LensHubProxy,
    functionName: 'setDefaultProfileWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const hasDefaultProfile = Boolean(profiles.find((o) => o.isDefault))
  const sortedProfiles: Profile[] = profiles?.sort((a, b) =>
    a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1
  )

  useEffect(() => {
    setSelectedUser(sortedProfiles[0]?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [broadcast, { loading: broadcastLoading }] = useBroadcastMutation({
    onCompleted
  })
  const [createSetDefaultProfileTypedData, { loading: typedDataLoading }] =
    useCreateSetDefaultProfileTypedDataMutation({
      onCompleted: async ({ createSetDefaultProfileTypedData }) => {
        const { id, typedData } = createSetDefaultProfileTypedData
        const { wallet, profileId, deadline } = typedData.value
        const signature = await signTypedDataAsync(getSignature(typedData))
        const { v, r, s } = splitSignature(signature)
        const sig = { v, r, s, deadline }
        const inputStruct = {
          follower: address,
          wallet,
          profileId,
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

  const setDefaultProfile = async () => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    try {
      const request: CreateSetDefaultProfileRequest = { profileId: selectedUser }
      await createSetDefaultProfileTypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request
        }
      })
    } catch {}
  }

  if (!currentProfile) {
    return <Custom404 />
  }

  const isLoading = typedDataLoading || signLoading || writeLoading || broadcastLoading

  return (
    <Card className="space-y-5 p-5">
      {error && <ErrorMessage title="Transaction failed!" error={error} />}
      {hasDefaultProfile ? (
        <>
          <div className="text-lg font-bold">{t('Your default profile')}</div>
          <UserProfile profile={sortedProfiles[0]} />
        </>
      ) : (
        <div className="flex items-center space-x-1.5 font-bold text-yellow-500">
          <ExclamationIcon className="w-5 h-5" />
          <div>{t('No default profile')}</div>
        </div>
      )}
      <div className="text-lg font-bold">{t('Select default profile')}</div>
      <p>{t('Select default profile description')}</p>
      <div className="text-lg font-bold">{t('What else')}</div>
      <div className="text-sm text-gray-500 divide-y dark:divide-gray-700">
        <p className="pb-3">
          {APP_NAME}, {t('What else1')}
        </p>
        <p className="py-3">{t('What else2')}</p>
      </div>
      <div>
        <div className="label">{t('Select profile')}</div>
        <select
          className="w-full bg-white rounded-xl border border-gray-300 outline-none dark:bg-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:border-gray-700/80 focus:border-brand-500 focus:ring-brand-400"
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {sortedProfiles?.map((profile: Profile) => (
            <option key={profile?.id} value={profile?.id}>
              @{formatHandle(profile?.handle)}
            </option>
          ))}
        </select>
      </div>
      <Button
        className="ml-auto"
        type="submit"
        disabled={isLoading}
        onClick={setDefaultProfile}
        icon={isLoading ? <Spinner size="xs" /> : <PencilIcon className="w-4 h-4" />}
      >
        Save
      </Button>
    </Card>
  )
}

export default SetProfile
