import { BellIcon } from '@heroicons/react/outline'
import { CustomFiltersTypes, useNotificationCountQuery } from 'lens'
import Link from 'next/link'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useAppPersistStore, useAppStore } from 'src/store/app'

const NotificationIcon: FC = () => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const notificationCount = useAppPersistStore((state) => state.notificationCount)
  const setNotificationCount = useAppPersistStore((state) => state.setNotificationCount)
  const [showBadge, setShowBadge] = useState(false)
  const { data } = useNotificationCountQuery({
    variables: { request: { profileId: currentProfile?.id, customFilters: [CustomFiltersTypes.Gardeners] } },
    skip: !currentProfile?.id,
    fetchPolicy: 'no-cache' // without no-cache the totalcount is NaN and returns the same.
  })

  useEffect(() => {
    if (currentProfile && data) {
      const currentCount = data?.notifications?.pageInfo?.totalCount || 0
      setShowBadge(notificationCount !== currentCount)
    }
  }, [currentProfile, data])

  return (
    <Link
      href="/notifications"
      className="md:flex hidde items-start justify-center rounded-md hover:bg-gray-300 p-1 hover:bg-opacity-20 min-w-[40px]"
      onClick={() => {
        setNotificationCount(data?.notifications?.pageInfo?.totalCount || 0)
        setShowBadge(false)
      }}
    >
      <BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      {showBadge && <span className="w-2 h-2 bg-red-500 rounded-full" />}
    </Link>
  )
}

export default NotificationIcon
