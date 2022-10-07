import Beta from '@components/Shared/Beta'
import { Card, CardBody } from '@components/UI/Card'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SETTINGS } from 'src/tracking'

const CrossPost: FC = () => {
  const { t } = useTranslation('common')
  return (
    <Card>
      <CardBody className="space-y-2 linkify">
        <div className="flex items-center space-x-2">
          <div className="text-lg font-bold">{t('Twitter cross post')}</div>
          <Beta />
        </div>
        <div className="pb-3">{t('Twitter cross post description')}</div>
        <a
          href="https://reflect.withlens.app/"
          className="flex items-center space-x-1.5"
          onClick={() => {
            Mixpanel.track(SETTINGS.ACCOUNT.OPEN_REFLECT)
          }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{t('Setup')}</span>
          <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </CardBody>
    </Card>
  )
}

export default CrossPost
