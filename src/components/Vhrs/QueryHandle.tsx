import { useQuery } from '@apollo/client'
import { USER_PROFILES_QUERY } from '@components/Layout'
import { FC } from 'react'

interface Props {
  address: string
  callback?: Function
}

const QueryHandle: FC<Props> = ({ address, callback }) => {
  useQuery(USER_PROFILES_QUERY, {
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
