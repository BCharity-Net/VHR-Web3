import { useQuery } from '@apollo/client'
import { CommentFeedDocument } from 'lens'
import type { FC } from 'react'
import { useAppStore } from 'src/store/app'

interface Props {
  pubId: string
  callback?: Function
}

const VHRToken: FC<Props> = ({ pubId, callback }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  useQuery(CommentFeedDocument, {
    variables: {
      request: { commentsOf: pubId },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (!callback) {
        return
      }
      callback(data)
    }
  })
  return <div />
}

export default VHRToken
