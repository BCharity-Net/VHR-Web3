import MetaTags from '@components/Common/MetaTags'
import { GridItemEight, GridItemFour, GridItemTwelve, GridLayout } from '@components/UI/GridLayout'
import isVerified from '@lib/isVerified'
import { APP_NAME, STATIC_IMAGES_URL } from 'data/constants'
import { useProfileQuery } from 'lens'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Custom404 from 'src/pages/404'
import Custom500 from 'src/pages/500'
import { useAppStore } from 'src/store/app'

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

  const { data, loading, error } = useProfileQuery({
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
        <MetaTags title={`${profile?.name} (@${profile?.handle}) • ${APP_NAME}`} />
      ) : (
        <MetaTags title={`@${profile?.handle} • ${APP_NAME}`} />
      )}
      <Cover
        cover={
          profile?.coverPicture?.__typename === 'MediaSet'
            ? profile?.coverPicture?.original?.url
            : `${STATIC_IMAGES_URL}/patterns/2.svg`
        }
      />
      <GridLayout className="pt-6">
        {feedType === 'org' || feedType === 'vhr' || feedType === 'opp' || feedType === 'org-opp' ? (
          <GridItemTwelve className="space-y-5">
            <FeedType
              stats={profile?.stats as any}
              address={profile?.ownedBy}
              id={profile?.id}
              setFeedType={setFeedType}
              feedType={feedType}
              profile={profile as any}
            />
            {isVerified(profile?.id) ? (
              feedType === 'org' ? (
                <OrganizationFeed profile={profile as any} />
              ) : (
                feedType === 'org-opp' && <OpportunitiesOrgFeed profile={profile as any} />
              )
            ) : feedType === 'vhr' ? (
              <HourFeed profile={profile as any} />
            ) : (
              feedType === 'opp' && <OpportunitiesFeed profile={profile as any} />
            )}
          </GridItemTwelve>
        ) : (
          <>
            <GridItemFour>
              <Details profile={profile as any} />
            </GridItemFour>
            <GridItemEight className="space-y-5">
              <FeedType
                stats={profile?.stats as any}
                address={profile?.ownedBy}
                id={profile?.id}
                setFeedType={setFeedType}
                feedType={feedType}
                profile={profile as any}
              />
              {(feedType === 'FEED' || feedType === 'REPLIES' || feedType === 'MEDIA') && (
                <Feed profile={profile as any} type={feedType} />
              )}
              {feedType === 'NFT' && <NFTFeed profile={profile as any} />}
              {feedType === 'funds' && <FundraiseFeed profile={profile as any} />}
              {feedType === 'funds-org' && <FundraiseOrgFeed profile={profile as any} />}
            </GridItemEight>
          </>
        )}
      </GridLayout>
    </>
  )
}

export default ViewProfile
