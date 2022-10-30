/* eslint-disable react/jsx-no-useless-fragment */
import { useQuery } from '@apollo/client'
import { CommentValue } from '@components/Publication/Fundraise'
import { CommentFeedDocument, PublicationRevenueDocument } from '@generated/types'
import Logger from '@lib/logger'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useAppStore } from 'src/store/app'
interface Props {
  pubId: string
  callback?: Function
}

const PublicationRevenue: FC<Props> = ({ pubId, callback }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [revenue, setRevenue] = useState(0)

  let commentValue = 0

  const { data: revenueData, loading: revenueLoading } = useQuery(PublicationRevenueDocument, {
    variables: {
      request: {
        publicationId: pubId
      }
    },
    onCompleted: () => {
      Logger.log('[Query]', `Fetched fundraise revenue details Fundraise:${pubId}`)
    }
  })

  const { data, loading } = useQuery(CommentFeedDocument, {
    variables: {
      request: { commentsOf: pubId },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    setRevenue(parseFloat((revenueData?.publicationRevenue?.revenue?.total?.value as any) ?? 0))
  }, [revenueData])

  return (
    <>
      {!revenueLoading && !loading && (
        <div>
          {data?.publications.items.map((i: any, index: number) => {
            const length = data?.publications.items.length
            return (
              <CommentValue
                key={index}
                id={i.id}
                callback={(data: any) => {
                  if (data?.publicationRevenue) {
                    const value = data?.publicationRevenue?.revenue.total.value
                    commentValue += Number(value)
                  }
                  setRevenue(revenue + commentValue)
                  if (callback && index === length - 1) {
                    callback(revenue + commentValue)
                  }
                }}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default PublicationRevenue
