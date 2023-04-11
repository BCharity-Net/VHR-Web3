import MetaTags from '@components/Common/MetaTags'
import NFTFeed from '@components/NFT/NFTFeed'
import { APP_NAME, STATIC_IMAGES_URL } from 'data/constants'
import { FeatureFlag } from 'data/feature-flags'
import type { Profile } from 'lens'
import { useProfileQuery } from 'lens'
import formatHandle from 'lib/formatHandle'
import isFeatureEnabled from 'lib/isFeatureEnabled'
import isVerified from 'lib/isVerified'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProfileFeedType } from 'src/enums'
import Custom404 from 'src/pages/404'
import Custom500 from 'src/pages/500'
import { useAppStore } from 'src/store/app'
import { GridItemEight, GridItemFour, GridLayout, Modal } from 'ui'

import Cover from './Cover'
import Details from './Details'
import Feed from './Feed'
import FeedType from './FeedType'
import FollowDialog from './FollowDialog'
import FundraiseFeed from './FundraiseFeed'
import FundraiseOrgFeed from './FundraiseOrgFeed'
import HourFeed from './HourFeed'
import NftGallery from './NftGallery'
import OpportunitiesFeed from './OpportunitiesFeed'
import OpportunitiesOrgFeed from './OpportunitiesOrgFeed'
import OrganizationFeed from './OrganizationFeed'
import ProfilePageShimmer from './Shimmer'

const ViewProfile: NextPage = () => {
  const {
    query: { username, type, followIntent }
  } = useRouter()
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [feedType, setFeedType] = useState(
    type && ['feed', 'replies', 'media', 'collects', 'nft'].includes(type as string)
      ? type.toString().toUpperCase()
      : ProfileFeedType.Feed
  )

  const handle = formatHandle(username as string, true)
  const { data, loading, error } = useProfileQuery({
    variables: { request: { handle }, who: currentProfile?.id ?? null },
    skip: !handle
  })

  const profile = data?.profile
  const [following, setFollowing] = useState<boolean | null>(null)
  const [showFollowModal, setShowFollowModal] = useState(false)

  const isFollowedByMe = Boolean(currentProfile) && Boolean(profile?.isFollowedByMe)

  const followType = profile?.followModule?.__typename

  const initState = following === null
  // profile is not defined until the second render
  if (initState && profile) {
    const canFollow = followType !== 'RevertFollowModuleSettings' && !isFollowedByMe
    if (followIntent && canFollow) {
      setShowFollowModal(true)
    }
    setFollowing(isFollowedByMe)
  }

  // profile changes when user selects a new profile from search box
  useEffect(() => {
    if (profile) {
      setFollowing(null)
    }
  }, [profile])

  useEffect(() => {
    if (following) {
      setShowFollowModal(false)
    }
  }, [following])

  if (error) {
    return <Custom500 />
  }

  if (loading || !data) {
    return <ProfilePageShimmer />
  }

  if (!data?.profile) {
    return <Custom404 />
  }

  return (
    <>
      <Modal show={showFollowModal} onClose={() => setShowFollowModal(false)}>
        <FollowDialog
          profile={profile as any}
          setFollowing={setFollowing}
          setShowFollowModal={setShowFollowModal}
        />
      </Modal>

      {profile?.name ? (
        <MetaTags title={`${profile?.name} (@${formatHandle(profile?.handle)}) • ${APP_NAME}`} />
      ) : (
        <MetaTags title={`@${formatHandle(profile?.handle)} • ${APP_NAME}`} />
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
              <Details profile={profile as any} following={Boolean(following)} setFollowing={setFollowing} />
            </GridItemFour>
            <GridItemEight className="space-y-5">
              <FeedType
                address={profile?.ownedBy}
                id={profile?.id}
                setFeedType={setFeedType}
                feedType={feedType}
                profile={profile as any}
              />
              {(feedType === ProfileFeedType.Feed ||
                feedType === ProfileFeedType.Replies ||
                feedType === ProfileFeedType.Media ||
                feedType === ProfileFeedType.Collects) && <Feed profile={profile as Profile} type={feedType} />}
              {feedType === ProfileFeedType.Nft ? (
                isFeatureEnabled(FeatureFlag.NftGallery, currentProfile?.id) ? (
                  <NftGallery profile={profile as Profile} />
                ) : (
                  <NFTFeed profile={profile as Profile} />
                )
              ) : null}
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
