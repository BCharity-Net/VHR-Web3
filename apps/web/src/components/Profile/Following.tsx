import { FollowSource } from '@components/Shared/Follow'
import Loader from '@components/Shared/Loader'
import UserProfile from '@components/Shared/UserProfile'
import { EmptyState } from '@components/UI/EmptyState'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import InfiniteLoader from '@components/UI/InfiniteLoader'
import { UsersIcon } from '@heroicons/react/outline'
import formatHandle from '@lib/formatHandle'
import { SCROLL_THRESHOLD } from 'data/constants'
import type { FollowingRequest, Profile } from 'lens';
import { useFollowingQuery } from 'lens'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  profile: Profile
  onProfileSelected?: (profile: Profile) => void
}

const Following: FC<Props> = ({ profile, onProfileSelected }) => {
  const { t } = useTranslation('common')

  // Variables
  const request: FollowingRequest = { address: profile?.ownedBy, limit: 10 }

  const { data, loading, error, fetchMore } = useFollowingQuery({
    variables: { request },
    skip: !profile?.id
  })

  const followings = data?.following?.items
  const pageInfo = data?.following?.pageInfo
  const hasMore = pageInfo?.next && followings?.length !== pageInfo.totalCount

  const loadMore = async () => {
    await fetchMore({
      variables: {
        request: { ...request, cursor: pageInfo?.next }
      }
    })
  }

  if (loading) {
    return <Loader message="Loading following" />
  }

  if (followings?.length === 0) {
    return (
      <EmptyState
        message={
          <div>
            <span className="mr-1 font-bold">@{formatHandle(profile?.handle)}</span>
            <span>{t('doesnt follow')}</span>
          </div>
        }
        icon={<UsersIcon className="w-8 h-8 text-brand" />}
        hideCard
      />
    )
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto" id="scrollableFollowingDiv">
      <ErrorMessage className="m-5" title="Failed to load following" error={error} />
      <InfiniteScroll
        dataLength={followings?.length ?? 0}
        scrollThreshold={SCROLL_THRESHOLD}
        hasMore={hasMore}
        next={loadMore}
        loader={<InfiniteLoader />}
        scrollableTarget="scrollableFollowingDiv"
      >
        <div className="divide-y dark:divide-gray-700">
          {followings?.map((following, index) => (
            <div
              className={`p-5 ${
                onProfileSelected && 'hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer'
              }`}
              key={following?.profile?.id}
              onClick={
                onProfileSelected && following.profile
                  ? () => {
                      onProfileSelected(following.profile as Profile)
                    }
                  : undefined
              }
            >
              <UserProfile
                profile={following?.profile as Profile}
                linkToProfile={!onProfileSelected}
                isFollowing={following?.profile?.isFollowedByMe}
                followPosition={index + 1}
                followSource={FollowSource.FOLLOWING_MODAL}
                showBio
                showFollow
                showUserPreview={false}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Following
