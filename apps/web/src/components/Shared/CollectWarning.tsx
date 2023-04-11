import Slug from '@components/Shared/Slug'
import { StarIcon, UsersIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from 'ui'

interface Props {
  handle: string
  isSuperFollow?: boolean | null | undefined
}

const CollectWarning: FC<Props> = ({ handle, isSuperFollow = false }) => {
  const { t } = useTranslation('common')
  return (
    <Card
      className={clsx(
        { '!bg-pink-100 border-pink-300': isSuperFollow },
        'flex items-center space-x-1.5 text-sm font-bold text-gray-500 p-5'
      )}
    >
      {isSuperFollow ? (
        <>
          <StarIcon className="w-4 h-4 text-pink-500" />
          <span>{t('Only')} </span>
          <Slug slug={`${handle}'s`} prefix="@" />
          <span className="text-pink-500"> {t('Super followers')}</span>
          <span> {t('Can')}</span>
        </>
      ) : (
        <>
          <UsersIcon className="w-4 h-4 text-brand" />
          <span>{t('Only')}</span>
          <Slug slug={`${handle}'s`} prefix="@" />
          <span> {t('Followers can collect')}</span>
        </>
      )}
    </Card>
  )
}

export default CollectWarning
