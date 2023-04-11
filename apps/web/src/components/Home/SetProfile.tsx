import New from '@components/Shared/Badges/New'
import { MinusCircleIcon, PencilAltIcon, PhotographIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Mixpanel } from '@lib/mixpanel'
import clsx from 'clsx'
import { APP_NAME } from 'data/constants'
import Link from 'next/link'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { ONBOARDING } from 'src/tracking'
import { Card } from 'ui'

interface StatusProps {
  finished: boolean
  title: string
}

const Status: FC<StatusProps> = ({ finished, title }) => (
  <div className="flex items-center space-x-1.5">
    {finished ? (
      <CheckCircleIcon className="w-5 h-5 text-green-500" />
    ) : (
      <MinusCircleIcon className="w-5 h-5 text-yellow-500" />
    )}
    <div className={clsx(finished ? 'text-green-500' : 'text-yellow-500')}>{title}</div>
  </div>
)

const SetProfile: FC = () => {
  const { t } = useTranslation('common')
  const profiles = useAppStore((state) => state.profiles)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const hasDefaultProfile = Boolean(profiles.find((o) => o.isDefault))
  const doneSetup =
    Boolean(currentProfile?.name) &&
    Boolean(currentProfile?.bio) &&
    Boolean(currentProfile?.picture) &&
    Boolean(currentProfile?.interests?.length)

  if (!hasDefaultProfile || doneSetup) {
    return null
  }

  return (
    <Card
      as="aside"
      className="mb-4 space-y-4 !border-green-600 !bg-green-50 p-5 text-green-600 dark:bg-green-900"
    >
      <div className="flex items-center space-x-2 font-bold">
        <PhotographIcon className="w-5 h-5" />
        <p>
          {t('Setup profile')} - {APP_NAME}
        </p>
      </div>
      <div className="space-y-1 text-sm leading-[22px]">
        <Status finished={Boolean(currentProfile?.name)} title="Set profile name" />
        <Status finished={Boolean(currentProfile?.bio)} title="Set profile bio" />
        <Status finished={Boolean(currentProfile?.picture)} title="Set your avatar" />
        <div>
          <Link
            className="flex items-center space-x-2"
            onClick={() => Mixpanel.track(ONBOARDING.NAVIGATE_UPDATE_PROFILE_INTERESTS)}
            href="/settings/interests"
          >
            <Status finished={Boolean(currentProfile?.interests?.length)} title="Select profile interests" />
            <New />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-1.5 text-sm font-bold">
        <PencilAltIcon className="w-4 h-4" />
        <Link onClick={() => Mixpanel.track(ONBOARDING.NAVIGATE_UPDATE_PROFILE)} href="/settings">
          {t('Update profile')}
        </Link>
      </div>
    </Card>
  )
}

export default SetProfile
