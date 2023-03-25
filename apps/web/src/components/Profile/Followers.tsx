import { FollowSource } from '@components/Shared/Follow'
import Loader from '@components/Shared/Loader'
import UserProfile from '@components/Shared/UserProfile'
import WalletProfile from '@components/Shared/WalletProfile'
import { EmptyState } from '@components/UI/EmptyState'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import InfiniteLoader from '@components/UI/InfiniteLoader'
import { UsersIcon } from '@heroicons/react/outline'
import formatHandle from '@lib/formatHandle'
import { SCROLL_THRESHOLD } from 'data/constants'
import type { FollowersRequest, Profile, Wallet } from 'lens'
import { useFollowersQuery } from 'lens'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  profile: Profile
}

const Followers: FC<Props> = ({ profile }) => {
  const { t } = useTranslation('common')
  const [hasMore, setHasMore] = useState(true)

  // Variables
  const request: FollowersRequest = { profileId: profile?.id, limit: 10 }

  const { data, loading, error, fetchMore } = useFollowersQuery({
    variables: { request },
    skip: !profile?.id
  })

  const followers = data?.followers?.items
  const pageInfo = data?.followers?.pageInfo

  const loadMore = async () => {
    await fetchMore({
      variables: { request: { ...request, cursor: pageInfo?.next } }
    }).then(({ data }) => {
      setHasMore(data?.followers?.items?.length > 0)
    })
  }

  if (loading) {
    return <Loader message="Loading followers" />
  }

  if (followers?.length === 0) {
    return (
      <EmptyState
        message={
          <div>
            <span className="mr-1 font-bold">@{formatHandle(profile?.handle)}</span>
            <span>{t('No followers')}</span>
          </div>
        }
        icon={<UsersIcon className="w-8 h-8 text-brand" />}
        hideCard
      />
    )
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto" id="scrollableFollowersDiv">
      <ErrorMessage className="m-5" title="Failed to load followers" error={error} />
      <InfiniteScroll
        dataLength={followers?.length ?? 0}
        scrollThreshold={SCROLL_THRESHOLD}
        hasMore={hasMore}
        next={loadMore}
        loader={<InfiniteLoader />}
        scrollableTarget="scrollableFollowersDiv"
      >
        <div className="divide-y dark:divide-gray-700">
          {followers?.map((follower, index) => (
            <div className="p-5" key={follower?.wallet?.defaultProfile?.id}>
              {follower?.wallet?.defaultProfile ? (
                <UserProfile
                  profile={follower?.wallet?.defaultProfile as Profile}
                  isFollowing={follower?.wallet?.defaultProfile?.isFollowedByMe}
                  followPosition={index + 1}
                  followSource={FollowSource.FOLLOWERS_MODAL}
                  showBio
                  showFollow
                  showUserPreview={false}
                />
              ) : (
                <WalletProfile wallet={follower?.wallet as Wallet} />
              )}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Followers
