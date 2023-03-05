import Sidebar from '@components/Shared/Sidebar'
import UserProfile from '@components/Shared/UserProfile'
import {
  AdjustmentsIcon,
  BookmarkIcon,
  ChipIcon,
  ExclamationIcon,
  FingerPrintIcon,
  ShareIcon,
  SparklesIcon,
  UserIcon
} from '@heroicons/react/outline'
import isFeatureEnabled from '@lib/isFeatureEnabled'
import type { Profile } from 'lens'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'

const SettingsSidebar: FC = () => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)

  return (
    <div className="px-3 mb-4 space-y-1.5 sm:px-0">
      <div className="pb-3">
        <UserProfile profile={currentProfile as Profile} showUserPreview={false} />
      </div>
      <Sidebar
        items={[
          {
            title: 'Profile',
            icon: <UserIcon className="w-4 h-4" />,
            url: '/settings'
          },
          {
            title: 'Account',
            icon: <ChipIcon className="w-4 h-4" />,
            url: '/settings/account'
          },
          {
            title: t`Preferences`,
            icon: <AdjustmentsIcon className="w-4 h-4" />,
            url: '/settings/preferences',
            enabled: isFeatureEnabled('preferences-settings', currentProfile?.id)
          },
          {
            title: 'Interests',
            icon: <BookmarkIcon className="w-4 h-4" />,
            url: '/settings/interests'
          },
          {
            title: 'Dispatcher',
            icon: <FingerPrintIcon className="w-4 h-4" />,
            url: '/settings/dispatcher'
          },
          {
            title: 'Allowance',
            icon: <ShareIcon className="w-4 h-4" />,
            url: '/settings/allowance'
          },
          {
            title: 'Cleanup',
            icon: <SparklesIcon className="w-4 h-4" />,
            url: '/settings/cleanup'
          },
          {
            title: <div className="text-red-500">Danger Zone</div>,
            icon: <ExclamationIcon className="w-4 h-4 text-red-500" />,
            url: '/settings/delete'
          }
        ]}
      />
    </div>
  )
}

export default SettingsSidebar
