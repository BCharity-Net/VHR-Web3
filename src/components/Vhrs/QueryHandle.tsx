import { useQuery } from '@apollo/client'
import { UserProfilesDocument } from '@generated/types'
import { ProfileFields } from '@gql/ProfileFields'
import { FC } from 'react'

interface Props {
  address: string
  callback?: Function
}

const QueryHandle: FC<Props> = ({ address, callback }) => {
  useQuery(UserProfilesDocument, {
    variables: {
      ownedBy: address
    },
    onCompleted: (data) => {
      if (!callback) {
        return
      }
      callback(data)
    }
  })

  return <div />
}

export default QueryHandle
