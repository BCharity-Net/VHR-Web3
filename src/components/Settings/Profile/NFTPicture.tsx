import { LensHubProxy } from '@abis/LensHubProxy'
import { useLazyQuery, useMutation } from '@apollo/client'
import IndexStatus from '@components/Shared/IndexStatus'
import { Button } from '@components/UI/Button'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import { Form, useZodForm } from '@components/UI/Form'
import { Input } from '@components/UI/Input'
import { Spinner } from '@components/UI/Spinner'
import useBroadcast from '@components/utils/hooks/useBroadcast'
import { CreateSetProfileImageUriBroadcastItemResult, Mutation, NftImage, Profile } from '@generated/types'
import {
  CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA_MUTATION,
  CREATE_SET_PROFILE_IMAGE_URI_VIA_DISPATHCER_MUTATION
} from '@gql/TypedAndDispatcherData/CreateSetProfileImageURI'
import { PencilIcon } from '@heroicons/react/outline'
import getSignature from '@lib/getSignature'
import { Mixpanel } from '@lib/mixpanel'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import gql from 'graphql-tag'
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { ADDRESS_REGEX, IS_MAINNET, LENSHUB_PROXY, RELAY_ON, SIGN_WALLET } from 'src/constants'
import { useAppStore } from 'src/store/app'
import { SETTINGS } from 'src/tracking'
import { chain, useContractWrite, useSignMessage, useSignTypedData } from 'wagmi'
import { object, string } from 'zod'

const editNftPictureSchema = object({
  contractAddress: string()
    .max(42, { message: 'Contract address should be within 42 characters' })
    .regex(ADDRESS_REGEX, { message: 'Invalid Contract address' }),
  tokenId: string()
})

const CHALLENGE_QUERY = gql`
  query Challenge($request: NftOwnershipChallengeRequest!) {
    nftOwnershipChallenge(request: $request) {
      id
      text
    }
  }
`

interface Props {
  profile: Profile & { picture: NftImage }
}

const NFTPicture: FC<Props> = ({ profile }) => {
  const { t } = useTranslation('common')
  const userSigNonce = useAppStore((state) => state.userSigNonce)
  const setUserSigNonce = useAppStore((state) => state.setUserSigNonce)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [chainId, setChainId] = useState(IS_MAINNET ? chain.mainnet.id : chain.kovan.id)

  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })
  const { signMessageAsync } = useSignMessage()

  const onCompleted = () => {
    toast.success('Avatar updated successfully!')
    Mixpanel.track(SETTINGS.PROFILE.SET_NFT_PICTURE)
  }

  const form = useZodForm({
    schema: editNftPictureSchema,
    defaultValues: {
      contractAddress: profile?.picture?.contractAddress,
      tokenId: profile?.picture?.tokenId
    }
  })

  const {
    data: writeData,
    isLoading: writeLoading,
    error,
    write
  } = useContractWrite({
    addressOrName: LENSHUB_PROXY,
    contractInterface: LensHubProxy,
    functionName: 'setProfileImageURIWithSig',
    mode: 'recklesslyUnprepared',
    onSuccess: onCompleted,
    onError
  })

  const [loadChallenge, { loading: challengeLoading }] = useLazyQuery(CHALLENGE_QUERY)
  const { broadcast, data: broadcastData, loading: broadcastLoading } = useBroadcast({ onCompleted })

  const [createSetProfileImageURITypedData, { loading: typedDataLoading }] = useMutation<Mutation>(
    CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA_MUTATION,
    {
      onCompleted: async ({
        createSetProfileImageURITypedData
      }: {
        createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult
      }) => {
        try {
          const { id, typedData } = createSetProfileImageURITypedData
          const { profileId, imageURI, deadline } = typedData?.value
          const signature = await signTypedDataAsync(getSignature(typedData))
          const { v, r, s } = splitSignature(signature)
          const sig = { v, r, s, deadline }
          const inputStruct = {
            profileId,
            imageURI,
            sig
          }

          setUserSigNonce(userSigNonce + 1)
          if (!RELAY_ON) {
            return write?.({ recklesslySetUnpreparedArgs: inputStruct })
          }

          const {
            data: { broadcast: result }
          } = await broadcast({ request: { id, signature } })

          if ('reason' in result) {
            write?.({ recklesslySetUnpreparedArgs: inputStruct })
          }
        } catch {}
      },
      onError
    }
  )

  const [createSetProfileImageURIViaDispatcher, { data: dispatcherData, loading: dispatcherLoading }] =
    useMutation(CREATE_SET_PROFILE_IMAGE_URI_VIA_DISPATHCER_MUTATION, { onCompleted, onError })

  const setAvatar = async (contractAddress: string, tokenId: string) => {
    if (!currentProfile) {
      return toast.error(SIGN_WALLET)
    }

    const challengeRes = await loadChallenge({
      variables: {
        request: {
          ethereumAddress: currentProfile?.ownedBy,
          nfts: {
            contractAddress,
            tokenId,
            chainId
          }
        }
      }
    })
    const signature = await signMessageAsync({
      message: challengeRes?.data?.nftOwnershipChallenge?.text
    })
    const request = {
      profileId: currentProfile?.id,
      nftData: {
        id: challengeRes?.data?.nftOwnershipChallenge?.id,
        signature
      }
    }

    if (currentProfile?.dispatcher?.canUseRelay) {
      createSetProfileImageURIViaDispatcher({ variables: { request } })
    } else {
      createSetProfileImageURITypedData({
        variables: {
          options: { overrideSigNonce: userSigNonce },
          request
        }
      })
    }
  }

  const isLoading =
    challengeLoading ||
    typedDataLoading ||
    dispatcherLoading ||
    signLoading ||
    writeLoading ||
    broadcastLoading

  return (
    <Form
      form={form}
      className="space-y-4"
      onSubmit={({ contractAddress, tokenId }) => {
        setAvatar(contractAddress, tokenId)
      }}
    >
      {error && <ErrorMessage className="mb-3" title="Transaction failed!" error={error} />}
      <div>
        <div className="label">{t('Chain')}</div>
        <div>
          <select
            className="w-full bg-white rounded-xl border border-gray-300 outline-none dark:bg-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:border-gray-700/80 focus:border-brand-500 focus:ring-brand-400"
            onChange={(e) => setChainId(parseInt(e.target.value))}
            value={chainId}
          >
            <option value={IS_MAINNET ? chain.mainnet.id : chain.kovan.id}>
              {IS_MAINNET ? 'Ethereum' : 'Kovan'}
            </option>
            <option value={IS_MAINNET ? chain.polygon.id : chain.polygonMumbai.id}>
              {IS_MAINNET ? 'Polygon' : 'Mumbai'}
            </option>
          </select>
        </div>
      </div>
      <Input
        label={t('Contract address')}
        type="text"
        placeholder="0x277f5959e22f94d5bd4c2cc0a77c4c71f31da3ac"
        {...form.register('contractAddress')}
      />
      <Input label={t('Token Id')} type="text" placeholder="1" {...form.register('tokenId')} />

      <div className="flex flex-col space-y-2">
        <Button
          className="ml-auto"
          type="submit"
          disabled={isLoading}
          icon={isLoading ? <Spinner size="xs" /> : <PencilIcon className="w-4 h-4" />}
        >
          {t('Save')}
        </Button>
        {writeData?.hash ??
        broadcastData?.broadcast?.txHash ??
        dispatcherData?.createSetProfileImageURIViaDispatcher?.txHash ? (
          <IndexStatus
            txHash={
              writeData?.hash ??
              broadcastData?.broadcast?.txHash ??
              dispatcherData?.createSetProfileImageURIViaDispatcher?.txHash
            }
          />
        ) : null}
      </div>
    </Form>
  )
}

export default NFTPicture