import { Card } from '@components/UI/Card'
import { BeakerIcon, CurrencyDollarIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { APP_NAME, IS_MAINNET } from 'src/constants'

const BetaWarning: FC = () => {
  const { t } = useTranslation('common')
  return (
    <Card
      as="aside"
      className="mb-4 border-yellow-400 !bg-yellow-300 !bg-opacity-20 space-y-2.5 text-yellow-600 p-5"
    >
      <div className="flex items-center space-x-2 font-bold">
        <BeakerIcon className="w-5 h-5" />
        <p>{t('Beta Title')}</p>
      </div>
      <p className="text-sm leading-[22px]">
        {APP_NAME} {t('Beta Description')}
      </p>
      {!IS_MAINNET && (
        <div className="flex items-center space-x-1.5 text-sm font-bold">
          <CurrencyDollarIcon className="w-4 h-4" />
          <a href="https://faucet.polygon.technology/" target="_blank" rel="noreferrer noopener">
            {t('Get Testnet')}
          </a>
        </div>
      )}
    </Card>
  )
}

export default BetaWarning
