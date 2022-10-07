import { Tooltip } from '@components/UI/Tooltip'
import { EyeIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { usePublicationStore } from 'src/store/publication'
import { PUBLICATION } from 'src/tracking'

const Preview: FC = () => {
  const { t } = useTranslation('common')
  const previewPublication = usePublicationStore((state) => state.previewPublication)
  const setPreviewPublication = usePublicationStore((state) => state.setPreviewPublication)

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={() => {
          setPreviewPublication(!previewPublication)
          Mixpanel.track(PUBLICATION.NEW.MARKDOWN_PREVIEW)
        }}
        aria-label={t('Choose attachment')}
      >
        <Tooltip placement="top" content="Preview">
          <EyeIcon className="w-5 h-5 text-brand" />
        </Tooltip>
      </motion.button>
    </div>
  )
}

export default Preview
