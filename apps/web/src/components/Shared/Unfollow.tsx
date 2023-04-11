import { UserRemoveIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import onError from '@lib/onError'
import splitSignature from '@lib/splitSignature'
import { FollowNFT } from 'abis'
import Errors from 'data/errors'
import type { Signer } from 'ethers'
import { Contract } from 'ethers'
import type { CreateBurnEip712TypedData, Profile } from 'lens';
import { useBroadcastMutation, useCreateUnfollowTypedDataMutation } from 'lens'
import getSignature from 'lib/getSignature'
import type { Dispatch, FC } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { PROFILE } from 'src/tracking'
import { Button, Spinner } from 'ui'
import { useSigner, useSignTypedData } from 'wagmi'

interface Props {
  profile: Profile
  setFollowing: Dispatch<boolean>
  showText?: boolean
}

const Unfollow: FC<Props> = ({ profile, showText = false, setFollowing }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [writeLoading, setWriteLoading] = useState(false)
  const { isLoading: signLoading, signTypedDataAsync } = useSignTypedData({ onError })
  const { data: signer } = useSigner()
  const { t } = useTranslation('common')

  const burnWithSig = async (signature: string, typedData: CreateBurnEip712TypedData) => {
    const { tokenId, deadline } = typedData.value
    const { v, r, s } = splitSignature(signature)
    const sig = { v, r, s, deadline }

    const followNftContract = new Contract(typedData.domain.verifyingContract, FollowNFT, signer as Signer)

    const tx = await followNftContract.burnWithSig(tokenId, sig)
    if (tx) {
      setFollowing(false)
    }
  }

  const [broadcast] = useBroadcastMutation({
    onCompleted: () => {
      setFollowing(false)
    }
  })

  const [createUnfollowTypedData, { loading: typedDataLoading }] = useCreateUnfollowTypedDataMutation({
    onCompleted: async ({ createUnfollowTypedData }) => {
      const { typedData, id } = createUnfollowTypedData
      const signature = await signTypedDataAsync(getSignature(typedData))

      setWriteLoading(true)
      try {
        const { data } = await broadcast({ variables: { request: { id, signature } } });
        if (data?.broadcast.__typename === 'RelayError') {
          await burnWithSig(signature, typedData)
        }
        toast.success('Unfollowed successfully!')
        Mixpanel.track(PROFILE.UNFOLLOW)
      } catch {
        toast.error('User rejected request')
      } finally {
        setWriteLoading(false)
      }
    },
    onError
  })

  const createUnfollow = async () => {
    if (!currentProfile) {
      return toast.error(Errors.SignWallet)
    }

    try {
      await createUnfollowTypedData({ variables: { request: { profile: profile?.id } } });
    } catch {}
  }

  return (
    <Button
      className="text-sm !px-3 !py-1.5"
      outline
      onClick={createUnfollow}
      disabled={typedDataLoading || signLoading || writeLoading}
      variant="danger"
      aria-label={t('Unfollow')}
      icon={
        typedDataLoading || signLoading || writeLoading ? (
          <Spinner variant="danger" size="xs" />
        ) : (
          <UserRemoveIcon className="w-4 h-4" />
        )
      }
    >
      {showText && t('Unfollow')}
    </Button>
  )
}

export default Unfollow
