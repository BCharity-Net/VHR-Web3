import { Button } from '@components/UI/Button'
import { Spinner } from '@components/UI/Spinner'
import { useHasTxHashBeenIndexedQuery } from '@generated/types'
import { ArrowRightIcon } from '@heroicons/react/outline'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IS_MAINNET } from 'src/constants'

interface Props {
  handle: string
  txHash: string
}

const Pending: FC<Props> = ({ handle, txHash }) => {
  const { t } = useTranslation('common')
  const { data, loading } = useHasTxHashBeenIndexedQuery({
    variables: { request: { txHash } },
    pollInterval: 1000
  })

  return (
    <div className="p-5 font-bold text-center">
      {loading ||
      (data?.hasTxHashBeenIndexed.__typename === 'TransactionIndexedResult' &&
        !data?.hasTxHashBeenIndexed.indexed) ? (
        <div className="space-y-3">
          <Spinner className="mx-auto" />
          <div>{t('Account creation')}</div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-[40px]">🌿</div>
          <div>{t('Account created')}</div>
          <div className="pt-3">
            <a href={`/u/${handle}${IS_MAINNET ? '.lens' : '.test'}`}>
              <Button className="mx-auto" icon={<ArrowRightIcon className="mr-1 w-4 h-4" />}>
                {t('Go to profile')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pending
