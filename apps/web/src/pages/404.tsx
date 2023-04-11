import MetaTags from '@components/Common/MetaTags'
import { HomeIcon } from '@heroicons/react/outline'
import { APP_NAME, STATIC_IMAGES_URL } from 'data/constants'
import Link from 'next/link'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'ui'

const Custom404: FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex-col page-center">
      <MetaTags title={`404 • ${APP_NAME}`} />
      <img src={`${STATIC_IMAGES_URL}/gifs/nyan-cat.gif`} alt="Nyan Cat" className="h-60" height={240} />
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">{t('Lost')}</h1>
        <div className="mb-4">{t('Lost Description')}</div>
        <Link href="/">
          <Button className="flex mx-auto item-center" size="lg" icon={<HomeIcon className="w-4 h-4" />}>
            <div>{t('Go Home')}</div>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Custom404
 