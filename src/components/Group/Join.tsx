import { LensHubProxy } from '@abis/LensHubProxy'
import { useMutation } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import { Group } from '@generated/bcharitytypes'
import { CreateCollectBroadcastItemResult, CreateCollectTypedDataDocument, Mutation } from '@generated/types'
import { PlusIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import { Mixpanel } from '@lib/mixpanel'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { Dispatch, FC } from 'react'
import toast from 'react-hot-toast'
import { LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'src/constants'
import { useAppStore } from 'src/store/app'
import { GROUP } from 'src/tracking'
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
    Mixpanel.track(GROUP.JOIN)
  }

  const { isLoading: writeLoading, write } = useContractWrite({
    addressOrName: LENSHUB_PROXY,
    contractInterface: LensHubProxy,
    functionName: 'collectWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const { broadcast, loading: broadcastLoading } = useBroadcast({ onCompleted })
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

  const createCollect = () => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    createCollectTypedData({
      variables: {
        options: { overrideSigNonce: userSigNonce },
        request: { publicationId: group.id }
      }
    })
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
