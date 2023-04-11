import { ArrowRightIcon } from '@heroicons/react/outline'
import { HANDLE_SUFFIX } from 'data/constants'
import { useHasTxHashBeenIndexedQuery } from 'lens'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Spinner } from 'ui'

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
            <a href={`/u/${handle}${HANDLE_SUFFIX}`}>
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
