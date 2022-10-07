import { LensHubProxy } from '@abis/LensHubProxy'
import { gql, useMutation } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import { BCharityPublication } from '@generated/bcharitytypes'
import { CreateCollectBroadcastItemResult, Mutation } from '@generated/types'
import { BROADCAST_MUTATION } from '@gql/BroadcastMutation'
import { CheckCircleIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import Logger from '@lib/logger'
import splitSignature from '@lib/splitSignature'
import React, { FC } from 'react'
import toast from 'react-hot-toast'
import IndexStatus from 'src/components/Shared/IndexStatus'
import { ERROR_MESSAGE, ERRORS, LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'src/constants'
import { useAppStore } from 'src/store/app'
import { useAccount, useContractWrite, useSignTypedData } from 'wagmi'

const CREATE_COLLECT_TYPED_DATA_MUTATION = gql`
  mutation CreateCollectTypedData($options: TypedDataOptions, $request: CreateCollectRequest!) {
    createCollectTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          pubId
          data
        }
      }
    }
  }
`

interface Props {
  publication: BCharityPublication
}

const Approve: FC<Props> = ({ publication }) => {
  // const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { address } = useAccount()
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({
    onError: (error) => {
      toast.error(error?.message)
    }
  })

  const onCompleted = () => {
    toast.success('Transaction submitted successfully!')
  }

  const {
    data: collectWriteData,
    isLoading: collectWriteLoading,
    write: collectWrite
  } = useContractWrite({
    addressOrName: LENSHUB_PROXY,
    contractInterface: LensHubProxy,
    functionName: 'collectWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: () => {
      onCompleted()
    },
    onError: (error: any) => {
      createCollect()
      toast.error(error?.data?.message ?? error?.message)
    }
  })

  const [collectBroadcast, { data: collectBroadcastData, loading: collectBroadcastLoading }] = useMutation(
    BROADCAST_MUTATION,
    {
      onCompleted,
      onError: (error) => {
        if (error.message === ERRORS.notMined) {
          toast.error(error.message)
        }
        Logger.error('[Relay Error]', error.message)
      }
    }
  )

  const [createCollectTypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
    CREATE_COLLECT_TYPED_DATA_MUTATION,
    {
      onCompleted: async ({
        createCollectTypedData
      }: {
        createCollectTypedData: CreateCollectBroadcastItemResult
      }) => {
        Logger.log('[Mutation]', 'Generated createCollectTypedData')

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
            } = await collectBroadcast({
              variables: { request: { id, signature } }
            })

            if ('reason' in result) {
              collectWrite?.({ recklesslySetUnpreparedArgs: inputStruct })
            }
          } else {
            collectWrite?.({ recklesslySetUnpreparedArgs: inputStruct })
          }
        } catch {}
      },
      onError: (error) => {
        toast.error(error.message ?? ERROR_MESSAGE)
      }
    }
  )

  const createCollect = () => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    createCollectTypedData({
      variables: {
        options: { overrideSigNonce: userSigNonce },
        request: { publicationId: publication?.id }
      }
    })
  }

  return (
    <div className="flex items-center mt-3 space-y-0 space-x-3 sm:block sm:mt-0 sm:space-y-2">
      {publication?.commentOn?.profile.ownedBy === currentProfile?.ownedBy &&
        publication?.commentOn?.profile.handle === currentProfile?.handle && (
          <>
            <Button
              className="sm:mt-0 sm:ml-auto"
              onClick={() => {
                createCollect()
              }}
              disabled={typedDataLoading || signLoading || collectWriteLoading || collectBroadcastLoading}
              variant="success"
              icon={
                typedDataLoading || signLoading || collectWriteLoading || collectBroadcastLoading ? (
                  <Spinner variant="success" size="xs" />
                ) : (
                  <CheckCircleIcon className="w-4 h-4" />
                )
              }
            >
              Approve
            </Button>
            {collectWriteData?.hash ?? collectBroadcastData?.broadcast?.txHash ? (
              <div className="mt-2">
                <IndexStatus
                  txHash={
                    collectWriteData?.hash ? collectWriteData?.hash : collectBroadcastData?.broadcast?.txHash
                  }
                />
              </div>
            ) : null}
          </>
        )}
    </div>
  )
}

export default Approve
