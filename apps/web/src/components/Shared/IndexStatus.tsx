import { CheckCircleIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { POLYGONSCAN_URL } from 'data/constants'
import { useHasTxHashBeenIndexedQuery } from 'lens'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Spinner } from 'ui'

interface Props {
  type?: string
  txHash: string
  reload?: boolean
}

const IndexStatus: FC<Props> = ({ type = 'Transaction', txHash, reload = false }) => {
  const { t } = useTranslation('common')
  const [hide, setHide] = useState(false)
  const [pollInterval, setPollInterval] = useState(500)
  const { data, loading } = useHasTxHashBeenIndexedQuery({
    variables: {
      request: { txHash }
    },
    pollInterval,
    onCompleted: ({ hasTxHashBeenIndexed }) => {
      if (hasTxHashBeenIndexed.__typename === 'TransactionIndexedResult' && hasTxHashBeenIndexed?.indexed) {
        setPollInterval(0)
        if (reload) {
          location.reload()
        }
        setTimeout(() => {
          setHide(true)
        }, 5000)
      }
    }
  })

  return (
    <a
      className={clsx({ hidden: hide }, 'ml-auto text-sm font-medium')}
      href={`${POLYGONSCAN_URL}/tx/${txHash}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {loading ||
      (data?.hasTxHashBeenIndexed.__typename === 'TransactionIndexedResult' &&
        !data?.hasTxHashBeenIndexed.indexed) ? (
        <div className="flex items-center space-x-1.5">
          <Spinner size="xs" />
          <div>
            {type} {t('Indexing')}
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-1">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <div className="text-black dark:text-white">{t('Index successful')}</div>
        </div>
      )}
    </a>
  )
}

export default IndexStatus
