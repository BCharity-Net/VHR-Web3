// import { Profile } from '@generated/types'
import { gql, useQuery } from '@apollo/client'
import { GridItemEight, GridItemFour, GridItemTwelve, GridLayout } from '@components/GridLayout'
import Seo from '@components/utils/Seo'
import isVerified from '@lib/isVerified'
import { Mixpanel } from '@lib/mixpanel'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { APP_NAME } from 'src/constants'
import Custom404 from 'src/pages/404'
import Custom500 from 'src/pages/500'
import { useAppStore } from 'src/store/app'
import { PAGEVIEW } from 'src/tracking'

import Cover from './Cover'
import Details from './Details'
import Feed from './Feed'
import FeedType from './FeedType'
import FundraiseFeed from './FundraiseFeed'
import FundraiseOrgFeed from './FundraiseOrgFeed'
import HourFeed from './HourFeed'
import NFTFeed from './NFTFeed'
import OpportunitiesFeed from './OpportunitiesFeed'
import OpportunitiesOrgFeed from './OpportunitiesOrgFeed'
import OrganizationFeed from './OrganizationFeed'
import ProfilePageShimmer from './Shimmer'

export const PROFILE_QUERY = gql`
  query Profile($request: SingleProfileQueryRequest!, $who: ProfileId) {
    profile(request: $request) {
      id
      handle
      ownedBy
      name
      bio
      metadata
      followNftAddress
      isFollowedByMe
      isFollowing(who: $who)
      attributes {
        key
        value
      }
      dispatcher {
        canUseRelay
      }
      onChainIdentity {
        ens {
          name
        }
        worldcoin {
          isHuman
        }
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
      }
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
        }
      }
      coverPicture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      followModule {
        __typename
      }
    }
  }
`

const ViewProfile: NextPage = () => {
  const {
    query: { username, type }
  } = useRouter()
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [feedType, setFeedType] = useState(
    type && ['feed', 'replies', 'media', 'nft'].includes(type as string)
      ? type.toString().toUpperCase()
      : 'FEED'
  )

  useEffect(() => {
    Mixpanel.track('Pageview', { path: PAGEVIEW.PROFILE })
  }, [])

  const { data, loading, error } = useQuery(PROFILE_QUERY, {
    variables: { request: { handle: username }, who: currentProfile?.id ?? null },
    skip: !username
  })

  if (error) {
    return <Custom500 />
  }

  if (loading || !data) {
    return <ProfilePageShimmer />
  }

  if (!data?.profile) {
    return <Custom404 />
  }

  const profile = data?.profile

  return (
    <>
      {profile?.name ? (
        <Seo title={`${profile?.name} (@${profile?.handle}) • ${APP_NAME}`} />
      ) : (
        <Seo title={`@${profile?.handle} • ${APP_NAME}`} />
      )}
      <Cover cover={profile?.coverPicture?.original?.url} />
      <GridLayout className="pt-6">
        {feedType === 'org' || feedType === 'vhr' || feedType === 'opp' || feedType === 'org-opp' ? (
          <GridItemTwelve className="space-y-5">
            <FeedType
              stats={profile?.stats}
              address={profile?.ownedBy}
              id={profile?.id}
              setFeedType={setFeedType}
              feedType={feedType}
              profile={profile}
            />
            {isVerified(profile?.id) ? (
              feedType === 'org' ? (
                <OrganizationFeed profile={profile} />
              ) : (
                feedType === 'org-opp' && <OpportunitiesOrgFeed profile={profile} />
              )
            ) : feedType === 'vhr' ? (
              <HourFeed profile={profile} />
            ) : (
              feedType === 'opp' && <OpportunitiesFeed profile={profile} />
            )}
          </GridItemTwelve>
        ) : (
          <>
            <GridItemFour>
              <Details profile={profile} />
            </GridItemFour>
            <GridItemEight className="space-y-5">
              <FeedType
                stats={profile?.stats}
                address={profile?.ownedBy}
                id={profile?.id}
                setFeedType={setFeedType}
                feedType={feedType}
                profile={profile}
              />
              {(feedType === 'FEED' || feedType === 'REPLIES' || feedType === 'MEDIA') && (
                <Feed profile={profile} type={feedType} />
              )}
              {feedType === 'NFT' && <NFTFeed profile={profile} />}
              {feedType === 'funds' && <FundraiseFeed profile={profile} />}
              {feedType === 'funds-org' && <FundraiseOrgFeed profile={profile} />}
            </GridItemEight>
          </>
        )}
      </GridLayout>
    </>
  )
}

export default ViewProfile
