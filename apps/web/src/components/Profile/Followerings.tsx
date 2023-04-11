import { UsersIcon } from '@heroicons/react/outline'
import type { Profile } from 'lens'
import humanize from 'lib/humanize'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'ui'

import Followers from './Followers'
import Following from './Following'

interface Props {
  profile: Profile
}

const Followerings: FC<Props> = ({ profile }) => {
  const [showFollowingModal, setShowFollowingModal] = useState(false)
  const [showFollowersModal, setShowFollowersModal] = useState(false)
  const { t } = useTranslation('common')

  return (
    <div className="flex gap-8">
      <button
        type="button"
        className="text-left"
        onClick={() => setShowFollowingModal(!showFollowingModal)}
        data-testid="profile-followings"
      >
        <div className="text-xl">{humanize(profile?.stats?.totalFollowing)}</div>
        <div className="text-gray-500">{t('Following')}</div>
      </button>
      <button
        type="button"
        className="text-left"
        onClick={() => setShowFollowersModal(!showFollowersModal)}
        data-testid="profile-followers"
      >
        <div className="text-xl">{humanize(profile?.stats?.totalFollowers)}</div>
        <div className="text-gray-500">{t('Followers')}</div>
      </button>
      <Modal
        title={t('Following')}
        icon={<UsersIcon className="w-5 h-5 text-brand" />}
        show={showFollowingModal}
        onClose={() => setShowFollowingModal(false)}
      >
        <Following profile={profile} />
      </Modal>
      <Modal
        title={t('Followers')}
        icon={<UsersIcon className="w-5 h-5 text-brand" />}
        show={showFollowersModal}
        onClose={() => setShowFollowersModal(false)}
      >
        <Followers profile={profile} />
      </Modal>
    </div>
  )
}

export default Followerings
