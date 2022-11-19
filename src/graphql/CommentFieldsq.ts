import { gql } from '@apollo/client'

import { MinimalCollectModuleFields } from './CollectModuleFieldsq'
import { MetadataFields } from './MetadataFieldsq'
import { MirrorFields } from './MirrorFieldsq'
import { PostFields } from './PostFieldsq'
import { ProfileFields } from './ProfileFieldsq'
import { StatsFields } from './StatsFieldsq'

export const CommentFields = gql`
  fragment CommentFields on Comment {
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
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    createdAt
    appId
    commentOn {
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
        hasCollectedByMe
        collectedBy {
          address
          defaultProfile {
            handle
          }
        }
        collectModule {
          ...MinimalCollectModuleFields
        }
        metadata {
          ...MetadataFields
        }
        stats {
          ...StatsFields
        }
        mainPost {
          ... on Post {
            ...PostFields
          }
          ... on Mirror {
            ...MirrorFields
          }
        }
        hidden
        createdAt
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
  }
  ${PostFields}
  ${MirrorFields}
  ${ProfileFields}
  ${MinimalCollectModuleFields}
  ${MetadataFields}
  ${StatsFields}
`
