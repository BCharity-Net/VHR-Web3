import { useMutation } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import { Group } from '@generated/types'
import { PlusIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { LensHubProxy } from 'abis'
import { LENSHUB_PROXY, SIGN_WALLET } from 'data/constants'
import type { Mutation } from 'lens'
import { CreateCollectBroadcastItemResult, useCreateCollectTypedDataMutation, useBroadcastMutation, } from 'lens'
import type { Dispatch, FC } from 'react'
import toast from 'react-hot-toast'
import { useAppStore } from 'src/store/app'
import { useAccount, useContractWrite, useSignTypedData } from 'wagmi'

interface Props {
  group: Group
  setJoined: Dispatch<boolean>
  showJoin?: boolean
}

const Join: FC<Props> = ({ group, setJoined, showJoin = true }) => {
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { address } = useAccount()
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })

  const onCompleted = () => {
    setJoined(true)
    toast.success('Joined successfully!')
  }

  const { isLoading: writeLoading, write } = useContractWrite({
    address: LENSHUB_PROXY,
    abi: LensHubProxy,
    functionName: 'collectWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const [broadcast, { loading: broadcastLoading }] = useBroadcastMutation({
    onCompleted
  })
  const [createCollectTypedData, { loading: typedDataLoading }] = useCreateCollectTypedDataMutation({
    onCompleted: async ({
      createCollectTypedData
    }: {
      createCollectTypedData: CreateCollectBroadcastItemResult
    }) => {
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
      const { data } = await broadcast({ variables: { request: { id, signature } } })
      if (data?.broadcast.__typename === 'RelayError') {
      return write?.({ recklesslySetUnpreparedArgs: [inputStruct] })
      }
    },
    onError
  })

  const createCollect = async () => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    try {
      await createCollectTypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request: { publicationId: group.id }
        }
      })
    } catch {}
  }

  return (
    <Button
      onClick={createCollect}
      disabled={typedDataLoading || signLoading || writeLoading || broadcastLoading}
      icon={
        typedDataLoading || signLoading || writeLoading || broadcastLoading ? (
          <Spinner variant="success" size="xs" />
        ) : (
          <PlusIcon className="w-4 h-4" />
        )
      }
      variant="success"
      outline
    >
      {showJoin && 'Join'}
    </Button>
  )
}

export default Join
