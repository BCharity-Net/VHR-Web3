import { Card } from '@components/UI/Card'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Analytics } from '@lib/analytics'
import isVerified from '@lib/isVerified'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { SETTINGS } from 'src/tracking'

const Verification: FC = () => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)

  return (
    <Card className="space-y-2 linkify p-5">
      <div className="text-lg font-bold">{t('Verified title')}</div>
      {isVerified(currentProfile?.id) ? (
        <div className="flex items-center space-x-1.5">
          <span>{t('Is verified2')}</span>
          <BadgeCheckIcon className="w-5 h-5 text-brand" />
        </div>
      ) : (
        <div>
          {t('Is verified1')}{' '}
          <a
            href="https://tally.so/r/wgDajK"
            onClick={() => {
              Analytics.track(SETTINGS.ACCOUNT.OPEN_VERIFICATION);
            }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t('Request verification')}
          </a>
        </div>
      )}
    </Card>
  )
}

export default Verification
