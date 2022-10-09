import { LensHubProxy } from '@abis/LensHubProxy'
import { VHR_ABI } from '@abis/VHR_ABI'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import { BCharityPublication } from '@generated/bcharitytypes'
import {
  CreateCollectBroadcastItemResult,
  CreateCommentBroadcastItemResult,
  EnabledModule,
  Mutation
} from '@generated/types'
import { BROADCAST_MUTATION } from '@gql/BroadcastMutation'
import { CollectModuleFields } from '@gql/CollectModuleFields'
import { CommentFields } from '@gql/CommentFields'
import {
  CREATE_COMMENT_TYPED_DATA_MUTATION,
  CREATE_COMMENT_VIA_DISPATHCER_MUTATION
} from '@gql/TypedAndDispatcherData/CreateComment'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { defaultFeeData, defaultModuleData, FEE_DATA_TYPE, getModule } from '@lib/getModule'
import getSignature from '@lib/getSignature'
import Logger from '@lib/logger'
import { Mixpanel } from '@lib/mixpanel'
import splitSignature from '@lib/splitSignature'
import uploadToArweave from '@lib/uploadToArweave'
import { ethers } from 'ethers'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import {
  APP_NAME,
  ERROR_MESSAGE,
  ERRORS,
  LENSHUB_PROXY,
  RELAY_ON,
  SIGN_WALLET,
  VHR_TOKEN
} from 'src/constants'
import { useAppStore } from 'src/store/app'
import { useCollectModuleStore } from 'src/store/collectmodule'
import { v4 as uuid } from 'uuid'
import { useAccount, useContractWrite, useSignTypedData } from 'wagmi'

import IndexStatus from '../../Shared/IndexStatus'

export const COLLECT_QUERY = gql`
  query CollectModule($request: PublicationQueryRequest!) {
    publication(request: $request) {
      ... on Post {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
      ... on Comment {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
      ... on Mirror {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
    }
  }
  ${CollectModuleFields}
`

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

const COMMENT_FEED_QUERY = gql`
  query CommentFeed(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Comment {
          ...CommentFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${CommentFields}
`

interface Props {
  publication: BCharityPublication
}

const Apply: FC<Props> = ({ publication }) => {
  // const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { address } = useAccount()
  const [hoursAddressDisable, setHoursAddressDisable] = useState(false)
  const resetCollectSettings = useCollectModuleStore((state) => state.reset)
  const payload = useCollectModuleStore((state) => state.payload)
  const [txnData, setTxnData] = useState('')
  const [hasVhrTxn, setHasVrhTxn] = useState(false)
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({
    onError: (error) => {
      toast.error(error?.message)
    }
  })

  useQuery(COMMENT_FEED_QUERY, {
    variables: {
      request: { commentsOf: publication.id },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      const publications = data.publications.items.filter((i: any) =>
        ethers.utils.isHexString(i.metadata.content)
      )
      if (publications.length !== 0) {
        setHasVrhTxn(true)
      }
    }
  })

  useQuery(COLLECT_QUERY, {
    variables: { request: { publicationId: publication?.id } },
    onCompleted: () => {
      if (
        publication?.metadata.attributes[0].value === 'hours' &&
        publication?.metadata.attributes[1].value !== currentProfile?.ownedBy
      ) {
        setHoursAddressDisable(true)
      }
      Logger.log('[Query]', `Fetched collect module details Publication:${publication?.id}`)
    }
  })

  const { isLoading: vhrWriteLoading, write: writeVhrTransfer } = useContractWrite({
    addressOrName: VHR_TOKEN,
    contractInterface: VHR_ABI,
    functionName: 'transfer',
    args: [publication.profile.ownedBy, publication.metadata.attributes[4].value],
    mode: 'recklesslyUnprepared',
    onSuccess(data) {
      setTxnData(data.hash)
      createComment(data.hash)
    },
    onError: (error: any) => {
      toast.error(error?.data?.message ?? error?.message)
    }
  })

  const { isLoading: commentWriteLoading, write: commentWrite } = useContractWrite({
    addressOrName: LENSHUB_PROXY,
    contractInterface: LensHubProxy,
    functionName: 'commentWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: () => {
      resetCollectSettings()
    },
    onError: (error: any) => {
      if (txnData) {
        createComment(txnData)
      }
      toast.error(error?.data?.message ?? error?.message)
    }
  })

  const [commentBroadcast, { loading: commentBroadcastLoading }] = useMutation(BROADCAST_MUTATION, {
    onError: (error) => {
      if (error.message === ERRORS.notMined) {
        toast.error(error.message)
      }
      Logger.error('[Relay Error]', error.message)
    }
  })
  const [createCommentTypedData] = useMutation<Mutation>(CREATE_COMMENT_TYPED_DATA_MUTATION, {
    onCompleted: async ({
      createCommentTypedData
    }: {
      createCommentTypedData: CreateCommentBroadcastItemResult
    }) => {
      Logger.log('[Mutation]', 'Generated createCommentTypedData')

      try {
        const { id, typedData } = createCommentTypedData
        const {
          profileId,
          profileIdPointed,
          pubIdPointed,
          contentURI,
          collectModule,
          collectModuleInitData,
          referenceModule,
          referenceModuleData,
          referenceModuleInitData,
          deadline
        } = typedData?.value
        const signature = await signTypedDataAsync(getSignature(typedData))
        const { v, r, s } = splitSignature(signature)
        const sig = { v, r, s, deadline }
        const inputStruct = {
          profileId,
          profileIdPointed,
          pubIdPointed,
          contentURI,
          collectModule,
          collectModuleInitData,
          referenceModule,
          referenceModuleData,
          referenceModuleInitData,
          sig
        }

        setUserSigNonce(userSigNonce + 1)
        if (!RELAY_ON) {
          return commentWrite?.({ recklesslySetUnpreparedArgs: inputStruct })
        }

        const {
          data: { broadcast: result }
        } = await commentBroadcast({
          variables: { request: { id, signature } }
        })

        if ('reason' in result) {
          commentWrite?.({ recklesslySetUnpreparedArgs: inputStruct })
        }
      } catch {}
    },
    onError: (error) => {
      toast.error(error.message ?? ERROR_MESSAGE)
    }
  })

  const createComment = async (hash: string) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    // TODO: Add animated_url support
    const id = await uploadToArweave({
      version: '1.0.0',
      metadata_id: uuid(),
      description: 'VHR transfer transaction token',
      content: hash,
      name: `VHR transfer transaction token`,
      contentWarning: null, // TODO
      attributes: [
        {
          traitType: 'string',
          key: 'type',
          value: 'comment'
        }
      ],
      createdOn: new Date(),
      appId: APP_NAME
    }).finally(() => {})
    createCommentTypedData({
      variables: {
        options: { overrideSigNonce: userSigNonce },
        request: {
          profileId: currentProfile?.id,
          publicationId: publication?.__typename === 'Mirror' ? publication?.mirrorOf?.id : publication?.id,
          contentURI: `https://arweave.net/${id}`,
          collectModule: payload,
          referenceModule: {
            followerOnlyReferenceModule: false
          }
        }
      }
    })
  }

  const onCompleted = () => {
    toast.success('Transaction submitted successfully!')
    Mixpanel.track('oppos.collect')
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
      {!hoursAddressDisable && (
        <>
          <Button
            className="sm:mt-0 sm:ml-auto"
            onClick={() => {
              if (!hasVhrTxn) {
                writeVhrTransfer()
              }
              createCollect()
            }}
            disabled={
              typedDataLoading ||
              signLoading ||
              vhrWriteLoading ||
              commentWriteLoading ||
              collectWriteLoading ||
              commentBroadcastLoading ||
              collectBroadcastLoading
            }
            variant="success"
            icon={
              typedDataLoading ||
              signLoading ||
              vhrWriteLoading ||
              commentWriteLoading ||
              collectWriteLoading ||
              commentBroadcastLoading ||
              collectBroadcastLoading ? (
                <Spinner variant="success" size="xs" />
              ) : (
                <CheckCircleIcon className="w-4 h-4" />
              )
            }
          >
            Apply
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

export default Apply
