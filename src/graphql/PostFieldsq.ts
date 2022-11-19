import { gql } from '@apollo/client'

import { MinimalCollectModuleFields } from './CollectModuleFieldsq'
import { MetadataFields } from './MetadataFieldsq'
import { ProfileFields } from './ProfileFieldsq'
import { StatsFields } from './StatsFieldsq'

export const PostFields = gql`
  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    reaction(request: $reactionRequest)
    mirrors(by: $profileId)
    canComment(profileId: $profileId) {
      result
    }
    canMirror(profileId: $profileId) {
      result
    }
    hasCollectedByMe
    collectedBy {
      address
      defaultProfile {
        ...ProfileFields
      }
    }
    collectModule {
      ...MinimalCollectModuleFields
    }
    collectNftAddress
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    createdAt
    appId
  }
  ${ProfileFields}
  ${MinimalCollectModuleFields}
  ${MetadataFields}
  ${StatsFields}
`
