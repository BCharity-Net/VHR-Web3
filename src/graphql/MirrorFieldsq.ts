import { gql } from '@apollo/client'

import { MinimalCollectModuleFields } from './CollectModuleFieldsq'
import { MetadataFields } from './MetadataFieldsq'
import { PostFields } from './PostFieldsq'
import { ProfileFields } from './ProfileFieldsq'
import { StatsFields } from './StatsFieldsq'

export const MirrorFields = gql`
  fragment MirrorFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    reaction(request: $reactionRequest)
    canComment(profileId: $profileId) {
      result
    }
    canMirror(profileId: $profileId) {
      result
    }
    collectModule {
      ...MinimalCollectModuleFields
    }
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    mirrorOf {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        id
        profile {
          ...ProfileFields
        }
        reaction(request: $reactionRequest)
        mirrors(by: $profileId)
        stats {
          ...StatsFields
        }
        createdAt
      }
    }
    createdAt
    appId
  }
  ${PostFields}
  ${ProfileFields}
  ${MinimalCollectModuleFields}
  ${MetadataFields}
  ${StatsFields}
`
