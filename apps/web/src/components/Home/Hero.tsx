import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Hero: FC = () => {
  const { t } = useTranslation('common')
  return (
    <div className="py-12 border-b bg-hero dark:border-b-gray-700/80" data-testid="home-hero">
      <div className="px-5 mx-auto max-w-screen-xl flex items-stretch py-8 w-full text-center sm:py-12 sm:text-left">
        <div className="flex-1 space-y-3">
          <div className="text-2xl font-extrabold sm:text-4xl">{t('Welcome')}</div>
          <div className="leading-7 text-gray-700 dark:text-gray-300">{t('Welcome Description')}</div>
          <div className="text-2xl font-extrabold sm:text-2xl">{t('VHR Title')}</div>
          <div className="leading-7 text-gray-700 dark:text-gray-300">{t('VHR Description')}</div>
        </div>
        <div className="hidden flex-1 flex-shrink-0 w-full sm:block" />
      </div>
    </div>
  )
}

export default Hero
