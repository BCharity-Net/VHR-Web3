/* eslint-disable react/jsx-no-useless-fragment */
import { useQuery } from '@apollo/client'
import Logger from '@lib/logger'
import { CollectorsDocument, CommentFeedDocument } from 'lens'
import type { FC } from 'react'
import { useAppStore } from 'src/store/app'

interface Props {
  pubId: string
  callback?: Function
}

interface CollectProps {
  id: string
  callback?: Function
}

export const CollectDonors: FC<CollectProps> = ({ id, callback }) => {
  useQuery(CollectorsDocument, {
    variables: { request: { publicationId: id, limit: 10 } },
    skip: !id,
    onCompleted: (data) => {
      if (callback) {
        callback(data)
      }
      Logger.log('[Query]', `Fetched first 10 collectors Publication:${id}`)
    }
  })
  return <div />
}

const PublicationDonors: FC<Props> = ({ pubId, callback }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)

  const { data, loading } = useQuery(CommentFeedDocument, {
    variables: {
      request: { commentsOf: pubId },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    fetchPolicy: 'no-cache'
  })

  return (
    <>
      {!loading && (
        <div>
          {data?.publications.items.map((i: any, index: number) => {
            return (
              <CollectDonors
                key={index}
                id={i.id}
                callback={(data: any) => {
                  data?.whoCollectedPublication?.items?.forEach((pub: any) => {
                    if (callback) {
                      callback(pub.defaultProfile.handle)
                    }
                  })
                }}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default PublicationDonors
