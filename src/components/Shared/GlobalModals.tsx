import Report from '@components/Shared/Modal/Report'
import { Modal } from '@components/UI/Modal'
import { BCharityPublication } from '@generated/bcharitytypes'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { useGlobalModalStateStore } from 'src/store/modals'

const GlobalModals: FC = () => {
  // Report modal state
  const showReportModal = useGlobalModalStateStore((state) => state.showReportModal)
  const reportPublication = useGlobalModalStateStore((state) => state.reportPublication)
  const setShowReportModal = useGlobalModalStateStore((state) => state.setShowReportModal)

  return (
    <Modal
      title="Report"
      icon={<ShieldCheckIcon className="w-5 h-5 text-brand" />}
      show={showReportModal}
      onClose={() => setShowReportModal(false, reportPublication)}
    >
      <Report publication={reportPublication as BCharityPublication} />
    </Modal>
  )
}

export default GlobalModals
