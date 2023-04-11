import MetaTags from '@components/Common/MetaTags'
import { HomeIcon } from '@heroicons/react/outline'
import { APP_NAME } from 'data/constants'
import Link from 'next/link'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'ui'

const Custom500: FC = () => {
  const { t } = useTranslation('common')

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

export default Custom500
