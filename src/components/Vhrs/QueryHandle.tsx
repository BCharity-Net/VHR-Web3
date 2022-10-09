import { gql, useQuery } from '@apollo/client'
import { ProfileFields } from '@gql/ProfileFields'
import { FC } from 'react'

export const USER_PROFILES_QUERY = gql`
  query UserProfiles($ownedBy: [EthereumAddress!]) {
    profiles(request: { ownedBy: $ownedBy }) {
      items {
        ...ProfileFields
        isDefault
        dispatcher {
          canUseRelay
        }
      }
    }
    userSigNonces {
      lensHubOnChainSigNonce
    }
  }
  ${ProfileFields}
`

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
