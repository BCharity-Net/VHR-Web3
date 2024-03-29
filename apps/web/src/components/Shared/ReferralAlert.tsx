import Slug from '@components/Shared/Slug'
import { HeartIcon } from '@heroicons/react/solid'
import type { ElectedMirror, Publication } from 'lens'
import formatHandle from 'lib/formatHandle'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  mirror: Publication
  referralFee?: number
  electedMirror?: ElectedMirror
}

const ReferralAlert: FC<Props> = ({ mirror, electedMirror, referralFee = 0 }) => {
  const { t } = useTranslation('common')
  if ((mirror.__typename !== 'Mirror' && !electedMirror) || referralFee === 0) {
    return null
  }
  const publication = electedMirror ?? mirror

  return (
    <div className="flex items-center pt-1 space-x-1.5 text-sm text-gray-500">
      <HeartIcon className="w-4 h-4 text-pink-500" />
      <Slug slug={formatHandle(publication?.profile?.handle)} prefix="@" />
      <span>
        {' '}
        {t('Will get')} <b>{referralFee}%</b> {t('Referral 1')}
      </span>
    </div>
  )
}

export default ReferralAlert
