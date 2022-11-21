import { useQuery } from '@apollo/client'
import { ProfileDocument, ProfileFeedDocument, PublicationTypes } from 'lens'
import type { FC } from 'react'
import { useAppStore } from 'src/store/app'

import { Data } from './Individual'

interface ProfileProps {
  id: string
  nft: Data
  callback?: Function
}

interface Props {
  nft: Data
  callback?: Function
}

const Profile: FC<ProfileProps> = ({ id, nft, callback }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)

  useQuery(ProfileFeedDocument, {
    variables: {
      request: {
        publicationTypes: [PublicationTypes.Post],
        profileId: id
      },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (!callback) {
        return
      }
      data?.publications?.items?.forEach((item: any) => {
        if (item?.metadata?.attributes[3]?.value === nft.uuid) {
          callback(item)
          return
        }
      })
    }
  })

  return <div />
}

const NFT: FC<Props> = ({ nft, callback }) => {
  const { data, loading } = useQuery(ProfileDocument, {
    variables: {
      request: { handle: nft.orgName }
    }
  })

  return <div>{!loading && <Profile id={data?.profile?.id} nft={nft} callback={callback} />}</div>
}

export default NFT
