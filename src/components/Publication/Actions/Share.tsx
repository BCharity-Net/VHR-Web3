import { Modal } from '@components/UI/Modal'
import { Tooltip } from '@components/UI/Tooltip'
import type { BCharityPublication } from '@generated/bcharitytypes'
import { ShareIcon } from '@heroicons/react/outline'
import { ShareIcon as ShareIconSolid } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
interface Props {
  publication: BCharityPublication
}

const Share: FC<Props> = ({ publication }) => {
  const { t } = useTranslation('common')
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const [showShareModal, setShowShareModal] = useState(false)

  const ShareModal = (postId: string) => {
    console.log('share post', postId)
    return (
      <Modal
        title={t('Share')}
        icon={<ShareIcon className="w-5 h-5 text-brand" />}
        size="md"
        show={showShareModal}
        onClose={() => setShowShareModal(false)}
      >
        <div className="text-center text-xl font-bold center">{'Share with your friends!'}</div>
        <br />
        <div className="text-center text-m font-bold center">Or copy the link</div>
        <div>
          {/* make a button that copies url */}
          <input
            type="text"
            value={`${window.location.origin}/posts/${postId}`}
            className="w-full h-10 p-2 border border-gray-300 rounded-lg"
            readOnly
          />
        </div>
      </Modal>
    )
  }
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setShowShareModal(!showShareModal)
        }}
        aria-label="Like"
        data-test="publication-like"
      >
        <div className="flex items-center space-x-1 text-gray-500">
          <div className="p-1.5 rounded-full hover:bg-gray-300 hover:bg-opacity-20">
            <Tooltip placement="top" content={liked ? 'Share' : 'Share'} withDelay>
              {liked ? <ShareIconSolid className="w-[18px]" /> : <ShareIcon className="w-[18px]" />}
            </Tooltip>
          </div>
        </div>
      </motion.button>
      {showShareModal && ShareModal(publication.id)}
    </>
  )
}

export default Share
