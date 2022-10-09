import { useQuery } from '@apollo/client'
import { Card } from '@components/UI/Card'
import { EmptyState } from '@components/UI/EmptyState'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import { Spinner } from '@components/UI/Spinner'
import {
  CustomFiltersTypes,
  NewCollectNotification,
  NewCommentNotification,
  NewFollowerNotification,
  NewMentionNotification,
  NewMirrorNotification,
  NewReactionNotification,
  NotificationsDocument
} from '@generated/types'
import { MailIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import { FC } from 'react'
import { useInView } from 'react-cool-inview'
import { useTranslation } from 'react-i18next'
import { PAGINATION_ROOT_MARGIN } from 'src/constants'
import { useAppStore } from 'src/store/app'
import { PAGINATION } from 'src/tracking'

import NotificationShimmer from './Shimmer'
import CollectNotification from './Type/CollectNotification'
import CommentNotification from './Type/CommentNotification'
import FollowerNotification from './Type/FollowerNotification'
import LikeNotification from './Type/LikeNotification'
import MentionNotification from './Type/MentionNotification'
import MirrorNotification from './Type/MirrorNotification'

const List: FC = () => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)

  // Variables
  const request = {
    profileId: currentProfile?.id,
    customFilters: [CustomFiltersTypes.Gardeners],
    limit: 10
  }

  const { data, loading, error, fetchMore } = useQuery(NotificationsDocument, {
    variables: { request }
  })

  const notifications = data?.notifications?.items
  const pageInfo = data?.notifications?.pageInfo

  const { observe } = useInView({
    onChange: async ({ inView }) => {
      if (!inView) {
        return
      }

      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      })
      Mixpanel.track(PAGINATION.NOTIFICATION_FEED)
    },
    rootMargin: PAGINATION_ROOT_MARGIN
  })

  if (loading) {
    return (
      <Card className="divide-y dark:divide-gray-700">
        <NotificationShimmer />
        <NotificationShimmer />
        <NotificationShimmer />
        <NotificationShimmer />
      </Card>
    )
  }

  if (error) {
    return <ErrorMessage className="m-3" title="Failed to load notifications" error={error} />
  }

  if (notifications?.length === 0) {
    return (
      <EmptyState
        message={
          <div>
            <span>{t('No inbox')}</span>
          </div>
        }
        icon={<MailIcon className="w-8 h-8 text-brand" />}
        hideCard
      />
    )
  }

  return (
    <Card className="divide-y dark:divide-gray-700">
      {notifications?.map((notification, index: number) => (
        <div key={`${notification?.notificationId}_${index}`} className="p-5">
          {notification.__typename === 'NewFollowerNotification' && (
            <FollowerNotification notification={notification as NewFollowerNotification} />
          )}
          {notification.__typename === 'NewMentionNotification' && (
            <MentionNotification notification={notification as NewMentionNotification} />
          )}
          {notification.__typename === 'NewReactionNotification' && (
            <LikeNotification notification={notification as NewReactionNotification} />
          )}
          {notification.__typename === 'NewCommentNotification' && (
            <CommentNotification notification={notification as NewCommentNotification} />
          )}
          {notification.__typename === 'NewMirrorNotification' && (
            <MirrorNotification notification={notification as NewMirrorNotification} />
          )}
          {notification.__typename === 'NewCollectNotification' && (
            <CollectNotification notification={notification as NewCollectNotification} />
          )}
        </div>
      ))}
      {pageInfo?.next && (
        <span ref={observe} className="flex justify-center p-5">
          <Spinner size="sm" />
        </span>
      )}
    </Card>
  )
}

export default List
