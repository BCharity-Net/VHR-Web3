import GetModuleIcon from '@components/utils/GetModuleIcon'
import { CashIcon } from '@heroicons/react/outline'
import { getModule } from '@lib/getModule'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCollectModuleStore } from 'src/store/collect-module'
import { Modal, Tooltip } from 'ui'

import CollectForm from './CollectForm'

const CollectSettings: FC = () => {
  const { t } = useTranslation('common')
  const selectedCollectModule = useCollectModuleStore((state) => state.selectedCollectModule)
  const reset = useCollectModuleStore((state) => state.reset)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Tooltip placement="top" content={getModule(selectedCollectModule).name}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setShowModal(!showModal)}
          aria-label={t('Choose collect module')}
        >
          <div className="text-brand">
            <GetModuleIcon module={selectedCollectModule} size={5} />
          </div>
        </motion.button>
      </Tooltip>
      <Modal
        title="Collect settings"
        icon={<CashIcon className="w-5 h-5 text-brand" />}
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
      >
        <CollectForm setShowModal={setShowModal} />
      </Modal>
    </>
  )
}

export default CollectSettings
