import { Modal } from '@components/UI/Modal'
import { PencilAltIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { usePublicationStore } from 'src/store/publication'
import { PUBLICATION } from 'src/tracking'

import NewPost from '.'

const NewPostModal: FC = () => {
  const { t } = useTranslation('common')
  const { query, isReady } = useRouter()
  const showNewPostModal = usePublicationStore((state) => state.showNewPostModal)
  const setShowNewPostModal = usePublicationStore((state) => state.setShowNewPostModal)
  const setPublicationContent = usePublicationStore((state) => state.setPublicationContent)

  useEffect(() => {
    if (isReady && query.text) {
      const { text, url, via, hashtags } = query
      let processedHashtags

      if (hashtags) {
        processedHashtags = (hashtags as string)
          .split(',')
          .map((tag) => `#${tag} `)
          .join('')
      }
      setShowNewPostModal(true)
      setPublicationContent(
        `${text}${processedHashtags ? ` ${processedHashtags} ` : ''}${url ? `\n\n${url}` : ''}${
          via ? `\n\nvia @${via}` : ''
        }`
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <button
        type="button"
        className="flex items-start"
        onClick={() => {
          setShowNewPostModal(!showNewPostModal)
          Mixpanel.track(PUBLICATION.OPEN_NEW)
        }}
      >
        <PencilAltIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <Modal
        title={t('New post')}
        icon={<PencilAltIcon className="w-5 h-5 text-brand" />}
        size="md"
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
      >
        <NewPost hideCard />
      </Modal>
    </>
  )
}

export default NewPostModal
