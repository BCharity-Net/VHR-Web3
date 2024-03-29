import { useMutation, useQuery } from '@apollo/client'
import AllowanceButton from '@components/Settings/Allowance/Button'
import Uniswap from '@components/Shared/Uniswap'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import type { BCharityPublication } from 'src/types/index.ts /types'
import { CashIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { LensHubProxy } from 'abis'
import { LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'data/constants'
import type { CreateCollectBroadcastItemResult, Mutation } from 'lens'
import { ApprovedModuleAllowanceAmountDocument, CreateCollectTypedDataDocument } from 'lens'
import type { Dispatch, FC } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { useAccount, useBalance, useContractWrite, useSignTypedData } from 'wagmi'

import IndexStatus from '../../Shared/IndexStatus'

interface Props {
  fund: BCharityPublication
  collectModule: any
  setRevenue: Dispatch<number>
  revenue: number
}

const Fund: FC<Props> = ({ fund, collectModule, setRevenue, revenue }) => {
  const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [allowed, setAllowed] = useState(true)
  const { address } = useAccount()
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })
  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address: address,
    token: collectModule?.amount?.asset?.address,
    formatUnits: collectModule?.amount?.asset?.decimals,
    watch: true
  })
  let hasAmount = false

  if (balanceData && parseFloat(balanceData?.formatted) < parseFloat(collectModule?.amount?.value)) {
    hasAmount = false
  } else {
    hasAmount = true
  }

  const { data: allowanceData, loading: allowanceLoading } = useQuery(ApprovedModuleAllowanceAmountDocument, {
    variables: {
      request: {
        currencies: collectModule?.amount?.asset?.address,
        followModules: [],
        collectModules: collectModule?.type,
        referenceModules: []
      }
    },
    skip: !collectModule?.amount?.asset?.address || !currentProfile,
    onCompleted: (data) => {
      setAllowed(data?.approvedModuleAllowanceAmount[0]?.allowance !== '0x00')
    }
  })

  const onCompleted = () => {
    setRevenue(revenue + parseFloat(collectModule?.amount?.value))
    toast.success('Transaction submitted successfully!')
  }

  const {
    data: writeData,
    isLoading: writeLoading,
    write
  } = useContractWrite({
    address: LENSHUB_PROXY,
    abi: LensHubProxy,
    functionName: 'collectWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })
  const [createCollectTypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
    CreateCollectTypedDataDocument,
    {
      onCompleted: async ({
        createCollectTypedData
      }: {
        createCollectTypedData: CreateCollectBroadcastItemResult
      }) => {
        try {
          const { id, typedData } = createCollectTypedData
          const { profileId, pubId, data: collectData, deadline } = typedData?.value
          const signature = await signTypedDataAsync(getSignature(typedData))
          const { v, r, s } = splitSignature(signature)
          const sig = { v, r, s, deadline }
          const inputStruct = {
            collector: address,
            profileId,
            pubId,
            data: collectData,
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

  const createCollect = () => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    createCollectTypedData({
      variables: {
        options: { overrideSigNonce: userSigNonce },
        request: { publicationId: fund.id }
      }
    })
  }

  return allowanceLoading || balanceLoading ? (
    <div className="w-24 rounded-lg h-[34px] shimmer" />
  ) : allowed ? (
    <div className="flex items-center mt-3 space-y-0 space-x-3 sm:block sm:mt-0 sm:space-y-2">
      {hasAmount ? (
        <>
          <Button
            className="sm:mt-0 sm:ml-auto"
            onClick={createCollect}
            disabled={!hasAmount || typedDataLoading || signLoading || writeLoading || broadcastLoading}
            variant="success"
            icon={
              typedDataLoading || signLoading || writeLoading || broadcastLoading ? (
                <Spinner variant="success" size="xs" />
              ) : (
                <CashIcon className="w-4 h-4" />
              )
            }
          >
            {t('Donate')}
          </Button>
          {writeData?.hash ?? broadcastData?.broadcast?.txHash ? (
            <div className="mt-2">
              <IndexStatus txHash={writeData?.hash ?? broadcastData?.broadcast?.txHash} />
            </div>
          ) : null}
        </>
      ) : (
        <Uniswap module={collectModule} />
      )}
    </div>
  ) : (
    <AllowanceButton
      title={t('Allow')}
      module={allowanceData?.approvedModuleAllowanceAmount[0]}
      allowed={allowed}
      setAllowed={setAllowed}
    />
  )
}

export default Fund
