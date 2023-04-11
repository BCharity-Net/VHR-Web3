import { StarIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import type { Profile } from 'lens'
import formatHandle from 'lib/formatHandle'
import dynamic from 'next/dynamic'
import type { Dispatch, FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { useAuthStore } from 'src/store/auth'
import { PROFILE } from 'src/tracking'
import { Button, Modal } from 'ui'

import Loader from '../Loader'
import Slug from '../Slug'

const FollowModule = dynamic(() => import('./FollowModule'), {
  loading: () => <Loader message="Loading super follow" />
})

interface Props {
  profile: Profile
  setFollowing: Dispatch<boolean>
  showText?: boolean
  again?: boolean
}

const SuperFollow: FC<Props> = ({ profile, setFollowing, showText = false, again = false }) => {
  const { t } = useTranslation('common')
  const [showFollowModal, setShowFollowModal] = useState(false)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const setShowAuthModal = useAuthStore((state) => state.setShowAuthModal)

  return (
    <>
      <Button
        className="text-sm !px-3 !py-1.5"
        variant="super"
        outline
        onClick={() => {
          if (!currentProfile) {
            setShowAuthModal(true)
            return
          }
          setShowFollowModal(!showFollowModal)
          Mixpanel.track(PROFILE.OPEN_SUPER_FOLLOW)
        }}
        aria-label={t('Super follow')}
        icon={<StarIcon className="w-4 h-4" />}
      >
        {showText && `Super follow`}
      </Button>
      <Modal
        title={
          <span>
            {t('Super follow')} <Slug slug={formatHandle(profile?.handle)} prefix="@" /> {again ? 'again' : ''}
          </span>
        }
        icon={<StarIcon className="w-5 h-5 text-pink-500" />}
        show={showFollowModal}
        onClose={() => setShowFollowModal(false)}
      >
        <FollowModule
          profile={profile}
          setFollowing={setFollowing}
          setShowFollowModal={setShowFollowModal}
          again={again}
        />
      </Modal>
    </>
  )
}

export default SuperFollow
