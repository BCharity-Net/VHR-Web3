import { DAI_ABI } from '@abis/DAI_ABI'
import { GOOD_ABI } from '@abis/GOOD_ABI'
import { LensHubProxy } from '@abis/LensHubProxy'
import { VHR_ABI } from '@abis/VHR_ABI'
import { useMutation, useQuery } from '@apollo/client'
import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import { BCharityPublication } from '@generated/bcharitytypes'
import {
  BroadcastDocument,
  CommentFeedDocument,
  CreateCollectBroadcastItemResult,
  CreateCollectTypedDataDocument,
  CreateCommentBroadcastItemResult,
  CreateCommentTypedDataDocument,
  Mutation
} from '@generated/types'
import { CheckCircleIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import Logger from '@lib/logger'
import { Mixpanel } from '@lib/mixpanel'
import splitSignature from '@lib/splitSignature'
import trimify from '@lib/trimify'
import uploadToArweave from '@lib/uploadToArweave'
import { ethers } from 'ethers'
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {
  APP_NAME,
  DAI_TOKEN,
  ERROR_MESSAGE,
  ERRORS,
  GIVE_DAI_LP,
  GOOD_TOKEN,
  LENSHUB_PROXY,
  RELAY_ON,
  SIGN_WALLET,
  VHR_TO_DAI_PRICE,
  VHR_TOKEN
} from 'src/constants'
import { useAppStore } from 'src/store/app'
import { useCollectModuleStore } from 'src/store/collectmodule'
import { v4 as uuid } from 'uuid'
import { useAccount, useBalance, useContractRead, useContractWrite, useSignTypedData } from 'wagmi'

import IndexStatus from '../../Shared/IndexStatus'

interface Props {
  publication: BCharityPublication
}

const Verify: FC<Props> = ({ publication }) => {
  // const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { address } = useAccount()
  const resetCollectSettings = useCollectModuleStore((state) => state.reset)
  const payload = useCollectModuleStore((state) => state.payload)
  const [txnData, setTxnData] = useState('')
  const [hasVhrTxn, setHasVrhTxn] = useState(false)
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({
    onError: (error) => {
      toast.error(error?.message)
    }
  })

  const [vhrBalance, setVhrBalance] = useState(0)
  const [goodBalance, setGoodBalance] = useState('')
  const [goodTransferAmount, setGoodTransferAmount] = useState(0)

  useQuery(CommentFeedDocument, {
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

  const bal = useContractRead({
    addressOrName: GOOD_TOKEN,
    contractInterface: GOOD_ABI,
    functionName: 'balanceOf',
    watch: true,
    args: [GIVE_DAI_LP]
  })

  const balQ = useContractRead({
    addressOrName: DAI_TOKEN,
    contractInterface: DAI_ABI,
    functionName: 'balanceOf',
    watch: true,
    args: [GIVE_DAI_LP]
  })

  const decs = useContractRead({
    addressOrName: GOOD_TOKEN,
    contractInterface: GOOD_ABI,
    functionName: 'decimals',
    watch: true
  })

  var decimals: any = decs?.data
  var balanceOfQuote = parseInt(balQ.data?._hex as string, 16)
  var balanceOf = parseInt(bal.data?._hex as string, 16)

  const quoteTokenAmountTotal = balanceOfQuote / 10 ** decimals
  const tokenAmountTotal = balanceOf / 10 ** decimals
  const goodToDAIPrice = +(quoteTokenAmountTotal / tokenAmountTotal).toFixed(8)
  const vhrToGoodPrice = +(VHR_TO_DAI_PRICE / goodToDAIPrice).toFixed(8)

  const getVhrBalance = useBalance({
    addressOrName: address,
    token: VHR_TOKEN,
    watch: true,
    chainId: 80001
  })

  const getGoodBalance = useBalance({
    addressOrName: address,
    token: GOOD_TOKEN,
    watch: true,
    chainId: 80001
  })

  useEffect(() => {
    setVhrBalance(parseInt(getVhrBalance.data?.value._hex as string, 16))
    setGoodBalance((parseInt(getGoodBalance.data?.value._hex as string, 16) / 10 ** 18).toFixed(4))
    setGoodTransferAmount(parseInt(publication.metadata.attributes[4].value as string) * vhrToGoodPrice)
  }, [getVhrBalance.data, getGoodBalance.data, vhrToGoodPrice, publication.metadata.attributes])

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

  const { isLoading: goodWriteLoading, write: writeGoodTransfer } = useContractWrite({
    addressOrName: GOOD_TOKEN,
    contractInterface: GOOD_ABI,
    functionName: 'transfer',
    args: [publication.profile.ownedBy, (goodTransferAmount * 10 ** 18).toString()],
    mode: 'recklesslyUnprepared',
    onSuccess(data) {
      setTxnData(data.hash)
      createComment(data.hash + ' "good"')
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

  const [commentBroadcast, { loading: commentBroadcastLoading }] = useMutation(BroadcastDocument, {
    onError: (error) => {
      if (error.message === ERRORS.notMined) {
        toast.error(error.message)
      }
      Logger.error('[Relay Error]', error.message)
    }
  })
  const [createCommentTypedData] = useMutation<Mutation>(CreateCommentTypedDataDocument, {
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

        const { data } = await commentBroadcast({
          variables: { request: { id, signature } }
        })

        if ('reason') {
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
    Mixpanel.track('hours.collect')
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
  const {
    broadcast: collectBroadcast,
    data: collectBroadcastData,
    loading: collectBroadcastLoading
  } = useBroadcast({ onCompleted })

  //   BroadcastDocument,
  //   {
  //     onCompleted,
  //     onError: (error) => {
  //       if (error.message === ERRORS.notMined) {
  //         toast.error(error.message)
  //       }
  //       Logger.error('[Relay Error]', error.message)
  //     }
  //   }
  // )
  const [createCollectTypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
    CreateCollectTypedDataDocument,
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
            const { data } = await collectBroadcast({
              variables: { request: { id, signature } }
            })

            if ('reason') {
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

  const checkEnoughBalance = () => {
    const vhrTransferAmount = parseInt(publication.metadata.attributes[4].value as string)

    if (vhrBalance < vhrTransferAmount) {
      toast.error('Not enough VHR in wallet. (' + vhrTransferAmount + ' needed)')
    } else if (parseInt(goodBalance) < goodTransferAmount) {
      toast.error('Not enough GOOD in wallet. (' + goodTransferAmount + ' needed)')
    } else {
      if (!hasVhrTxn) {
        writeGoodTransfer()
        writeVhrTransfer()
      }
      createCollect()
    }
  }

  return (
    <div className="flex items-center mt-3 space-y-0 space-x-3 sm:block sm:mt-0 sm:space-y-2">
      {publication?.metadata.attributes[1].value === currentProfile?.ownedBy &&
        trimify(publication?.metadata?.name ?? '') === currentProfile?.handle && (
          <>
            <Button
              className="sm:mt-0 sm:ml-auto"
              onClick={() => {
                checkEnoughBalance()
              }}
              disabled={
                typedDataLoading ||
                signLoading ||
                vhrWriteLoading ||
                goodWriteLoading ||
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
                goodWriteLoading ||
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
              Verify
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

export default Verify
