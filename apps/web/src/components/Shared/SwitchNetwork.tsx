import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import type { FC } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { CHAIN_ID } from 'src/constants'
import { SYSTEM } from 'src/tracking'
import { Button } from 'ui'
import { useSwitchNetwork } from 'wagmi'

interface Props {
  className?: string
}

const SwitchNetwork: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation('common')
  const { switchNetwork } = useSwitchNetwork()

  return (
    <Button
      className={className}
      type="button"
      variant="danger"
      icon={<SwitchHorizontalIcon className="w-4 h-4" />}
      onClick={() => {
        if (switchNetwork) {
          switchNetwork(CHAIN_ID)
        } else {
          toast.error(t('Change wallet'))
        }
        Mixpanel.track(SYSTEM.SWITCH_NETWORK)
      }}
    >
      {t('Switch network')}
    </Button>
  )
}

export default SwitchNetwork
