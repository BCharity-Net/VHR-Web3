import { Button } from '@components/UI/Button'
import { Mixpanel } from '@lib/mixpanel'
import type { FC } from 'react'
import { useAuthStore } from 'src/store/auth'
import { useTranslation } from 'react-i18next'
import { AUTH } from 'src/tracking'

const LoginButton: FC = () => {
  const { t } = useTranslation('common')
  const setShowAuthModal = useAuthStore((state) => state.setShowAuthModal)

  return (
    <Button
      icon={<img className="mr-0.5 w-4 h-4" height={16} width={16} src="/lens.png" alt="Lens Logo" />}
      onClick={() => {
        setShowAuthModal(true);
        Mixpanel.track(AUTH.LOGIN);
      }}
      data-testid="login-button"
    >
      {t('Login')}
    </Button>
  )
}

export default LoginButton
