import Markup from '@components/Shared/Markup'
import UserPreview from '@components/Shared/UserPreview'
import type { MessageDescriptor } from '@generated/types'
import { SunIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import { formatTime, getTimeFromNow } from '@lib/formatTime'
import dayjs from 'dayjs'
import hasGm from '@lib/hasGm'
import relativeTime from 'dayjs/plugin/relativeTime'
import type { NewReactionNotification } from 'lens'
import Link from 'next/link'
import type { FC } from 'react'

import { NotificationProfileAvatar, NotificationProfileName } from '../Profile'

interface Props {
  notification: NewReactionNotification
}

const LikeNotification: FC<Props> = ({ notification }) => {
  const isGM = hasGm(notification?.publication?.metadata?.content)

  return (
    <div className="flex justify-between items-start">
      <div className="space-y-2 w-4/5">
        <div className="flex items-center space-x-3">
          {isGM ? (
            <SunIcon className="h-6 w-6 text-yellow-600/70" />
          ) : (
            <HeartIcon className="h-6 w-6 text-pink-500/70" />
          )}
          <UserPreview profile={notification?.profile}>
            <NotificationProfileAvatar profile={notification?.profile} />
          </UserPreview>
        </div>
        <div className="ml-9">
          <NotificationProfileName profile={notification?.profile} />{' '}
          <span className="pl-0.5 text-gray-600 dark:text-gray-400">liked your </span>
          <Link href={`/posts/${notification?.publication?.id}`} className="font-bold">
            {notification?.publication?.__typename?.toLowerCase()}
          </Link>
          <Link
            href={`/posts/${notification?.publication?.id}`}
            className="text-gray-500 line-clamp-2 linkify mt-2"
          >
            <Markup>{notification?.publication?.metadata?.content}</Markup>
          </Link>
        </div>
      </div>
      <div className="text-gray-400 text-[12px]" title={formatTime(notification?.createdAt)}>
        {getTimeFromNow(notification?.createdAt)}
      </div>
    </div>
  )
}

export default LikeNotification
