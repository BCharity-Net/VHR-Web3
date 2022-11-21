import { Button } from '@components/UI/Button'
import type { BCharityPublication } from '@generated/types'
import { ExclamationCircleIcon, ExternalLinkIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { Leafwatch } from '@lib/leafwatch'
import type { FC } from 'react'
import { useGlobalModalStateStore } from 'src/store/modals'
import { MOD } from 'src/tracking'

interface Props {
  publication: BCharityPublication
}

const ModAction: FC<Props> = ({ publication }) => {
  const setShowReportModal = useGlobalModalStateStore((state) => state.setShowReportModal)

  return (
    <span className="flex items-center gap-3 mt-3 text-sm">
      <Button
        onClick={(event) => {
          event.stopPropagation()
          setShowReportModal(true, publication, { type: 'spamReason', subReason: 'FAKE_ENGAGEMENT' })
          Leafwatch.track(MOD.SPAM)
        }}
        variant="warning"
        icon={<ExclamationCircleIcon className="h-4 w-4" />}
        outline
      >
        Spam
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation()
          setShowReportModal(true, publication)
          Leafwatch.track(MOD.OTHER)
        }}
        icon={<ShieldCheckIcon className="h-4 w-4" />}
        className="text-sm mt-3"
      >
        Others
      </Button>
      <Button
        onClick={(event) => {
          event.stopPropagation()
          window.open(`/posts/${publication?.id}`, '_blank')
        }}
        icon={<ExternalLinkIcon className="h-4 w-4" />}
        className="py-[6px]"
        outline
      />
    </span>
  )
}

export default ModAction