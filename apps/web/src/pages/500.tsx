import { Button } from '@components/UI/Button'
import MetaTags from '@components/utils/MetaTags'
import { HomeIcon } from '@heroicons/react/outline'
import { Leafwatch } from '@lib/leafwatch'
import { APP_NAME } from 'data/constants'
import Link from 'next/link'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PAGEVIEW } from 'src/tracking'

export default function Custom500() {
  const { t } = useTranslation('common')

  useEffect(() => {
    Leafwatch.track('Pageview', { path: PAGEVIEW.ERROR_500 })
  }, [])

  return (
    <div className="flex-col page-center">
      <MetaTags title={`500 • ${APP_NAME}`} />
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">{t('Something went wrong')}</h1>
        <div className="mb-4 text-gray-500">{t('Something went wrong description')}</div>
        <Link href="/">
          <Button className="flex mx-auto item-center" size="lg" icon={<HomeIcon className="w-4 h-4" />}>
            <div>{t('Go Home')}</div>
          </Button>
        </Link>
      </div>
    </div>
  )
}
