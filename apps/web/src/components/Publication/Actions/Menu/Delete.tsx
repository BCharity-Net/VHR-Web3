import { Menu } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'
import { publicationKeyFields } from '@lib/keyFields'
import { Mixpanel } from '@lib/mixpanel'
import { stopEventPropagation } from '@lib/stopEventPropagation'
import clsx from 'clsx'
import type { Publication } from 'lens'
import { useHidePublicationMutation } from 'lens'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { PUBLICATION } from 'src/tracking'

interface Props {
  publication: Publication
  forceReloadOnDelete?: boolean
}

const Delete: FC<Props> = ({ publication, forceReloadOnDelete = false }) => {
  const { t } = useTranslation('common')
  const { push } = useRouter()
  const [hidePost] = useHidePublicationMutation({
    onCompleted: () => {
      Mixpanel.track(PUBLICATION.DELETE)
      if (forceReloadOnDelete) {
        push('/')
      }
      toast.success(t`Publication deleted successfully`)
    },
    update: (cache) => {
      cache.evict({ id: publicationKeyFields(publication) })
    }
  })

  return (
    <Menu.Item
      as="div"
      className={({ active }) =>
        clsx(
          { 'dropdown-active': active },
          'block px-4 py-1.5 text-sm text-red-500 m-2 rounded-lg cursor-pointer'
        )
      }
      onClick={(event) => {
        stopEventPropagation(event)
        if (confirm(t('Delete confirm'))) {
          hidePost({ variables: { request: { publicationId: publication?.id } } })
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <TrashIcon className="w-4 h-4" />
        <div>{t('Delete')}</div>
      </div>
    </Menu.Item>
  )
}

export default Delete
