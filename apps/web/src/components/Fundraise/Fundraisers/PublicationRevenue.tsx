import { useQuery } from '@apollo/client'
import { PublicationRevenueDocument } from 'lens'
import Logger from '@lib/logger'
import type { FC } from 'react'

interface Props {
  fund: any
  callback?: Function
}

const RevenueDetails: FC<Props> = ({ fund, callback }) => {
  useQuery(PublicationRevenueDocument, {
    variables: {
      request: {
        publicationId: fund?.__typename === 'Mirror' ? fund?.mirrorOf?.id : fund?.id
      }
    },
    onCompleted: (data) => {
      Logger.log('[Query]', `Fetched fundraise revenue details Fundraise:${fund?.id}`)
      if (!callback) {
        return
      }
      callback(data?.publicationRevenue?.revenue?.total?.value)
    }
  })
  return <div />
}

export default RevenueDetails
