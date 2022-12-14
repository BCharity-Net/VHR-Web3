import WalletSelector from '@components/Shared/Login/WalletSelector'
import { IS_MAINNET, STATIC_IMAGES_URL } from 'data/constants'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import NewProfile from './New'

const Login: FC = () => {
  const [hasConnected, setHasConnected] = useState(false)
  const [hasProfile, setHasProfile] = useState(true)
  const { t } = useTranslation('common')

  return (
    <div className="p-5">
      {hasProfile ? (
        <div className="space-y-5">
          {hasConnected ? (
            <div className="space-y-1">
              <div className="text-xl font-bold">{t('Sign')}</div>
              <div className="text-sm text-gray-500">{t('Sign Description')}</div>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-xl font-bold">{t('Connect Wallet')}</div>
              <div className="text-sm text-gray-500">{t('Connect Wallet Description')}</div>
            </div>
          )}
          <WalletSelector setHasConnected={setHasConnected} setHasProfile={setHasProfile} />
        </div>
      ) : IS_MAINNET ? (
        <div className="mb-2 space-y-4">
          <img
            className="w-16 h-16 rounded-full"
            height={64}
            width={64}
            src={`${STATIC_IMAGES_URL}/brands/lens.png`}
            alt="Logo"
          />
          <div className="text-xl font-bold">Claim your Lens profile 🌿</div>
          <div className="space-y-1">
            <div className="linkify">
              Visit{' '}
              <a
                className="font-bold"
                href="https://claim.lens.xyz"
                target="_blank"
                rel="noreferrer noopener"
              >
                claiming site
              </a>{' '}
              to claim your profile now 🏃‍♂️
            </div>
            <div className="text-sm text-gray-500">Make sure to check back here when done!</div>
          </div>
        </div>
      ) : (
        <NewProfile isModal />
      )}
    </div>
  )
}

export default Login
