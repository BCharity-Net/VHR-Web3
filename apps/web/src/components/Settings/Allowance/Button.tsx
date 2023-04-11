import { ExclamationIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import { getModule } from '@lib/getModule'
import onError from '@lib/onError'
import type { ApprovedAllowanceAmount } from 'lens'
import { useGenerateModuleCurrencyApprovalDataLazyQuery } from 'lens'
import type { Dispatch, FC } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { SETTINGS } from 'src/tracking'
import { useTranslation } from 'react-i18next'
import { Button, Modal, Spinner, WarningMessage } from 'ui'
import { useSendTransaction, useWaitForTransaction } from 'wagmi'

interface Props {
  title?: string
  module: ApprovedAllowanceAmount
  allowed: boolean
  setAllowed: Dispatch<boolean>
}

const AllowanceButton: FC<Props> = ({ title = 'Allow', module, allowed, setAllowed }) => {
  const { t } = useTranslation('common')
  const [showWarningModal, setShowWarningModal] = useState(false)
  const [generateAllowanceQuery, { loading: queryLoading }] =
    useGenerateModuleCurrencyApprovalDataLazyQuery()

  // const { config } = usePrepareSendTransaction({
  //   request: {}
  // })

  const {
    data: txData,
    isLoading: transactionLoading,
    sendTransaction
  } = useSendTransaction({
    // ...config,
    mode: 'recklesslyUnprepared',
    onError
  })
  const { isLoading: waitLoading } = useWaitForTransaction({
    hash: txData?.hash,
    onSuccess: () => {
      toast.success(`Module ${allowed ? 'disabled' : 'enabled'} successfully!`)
      setShowWarningModal(false)
      setAllowed(!allowed)
      Mixpanel.track(SETTINGS.ALLOWANCE.TOGGLE, {
        allowance_module: module.module,
        allowance_currency: module.currency,
        allowance_allowed: !allowed
      })
    },
    onError
  })

  const handleAllowance = (currencies: string, value: string, selectedModule: string) => {
    generateAllowanceQuery({
      variables: {
        request: {
          currency: currencies,
          value: value,
          [getModule(module.module).field]: selectedModule
        }
      }
    }).then((res) => {
      const data = res?.data?.generateModuleCurrencyApprovalData
      sendTransaction?.({
        recklesslySetUnpreparedRequest: {
          from: data?.from,
          to: data?.to,
          data: data?.data
        }
      })
    })
  }

  return allowed ? (
    <Button
      variant="warning"
      icon={
        queryLoading || transactionLoading || waitLoading ? (
          <Spinner variant="warning" size="xs" />
        ) : (
          <MinusIcon className="w-4 h-4" />
        )
      }
      onClick={() => handleAllowance(module.currency, '0', module.module)}
    >
      {t('Revoke')}
    </Button>
  ) : (
    <>
      <Button icon={<PlusIcon className="w-4 h-4" />} onClick={() => setShowWarningModal(!showWarningModal)}>
        {title}
      </Button>
      <Modal
        title="Warning"
        icon={<ExclamationIcon className="w-5 h-5 text-yellow-500" />}
        show={showWarningModal}
        onClose={() => setShowWarningModal(false)}
      >
        <div className="p-5 space-y-3">
          <WarningMessage
            title={t('Handle with care')}
            message={
              <div className="leading-6">
                {t('Care 1')}
                <b>{t('Collect')}</b>,<b> {t('fund')}</b> {t('And')} <b>{t('Super follow')}</b>.
              </div>
            }
          />
          <Button
            icon={
              queryLoading || transactionLoading || waitLoading ? (
                <Spinner size="xs" />
              ) : (
                <PlusIcon className="w-4 h-4" />
              )
            }
            onClick={() =>
              handleAllowance(module.currency, Number.MAX_SAFE_INTEGER.toString(), module.module)
            }
          >
            {title}
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default AllowanceButton
