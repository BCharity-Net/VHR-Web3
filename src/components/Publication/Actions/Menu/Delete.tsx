import { gql, useMutation } from '@apollo/client'
import { BCharityPublication } from '@generated/bcharitytypes'
import { Mutation } from '@generated/types'
import { Menu } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { PUBLICATION } from 'src/tracking'

export const HIDE_POST_MUTATION = gql`
  mutation HidePublication($request: HidePublicationRequest!) {
    hidePublication(request: $request)
  }
`

interface Props {
  publication: BCharityPublication
}

const Delete: FC<Props> = ({ publication }) => {
  const { t } = useTranslation('common')
  const { pathname, push } = useRouter()
  const [hidePost] = useMutation<Mutation>(HIDE_POST_MUTATION, {
    onCompleted: () => {
      Mixpanel.track(PUBLICATION.DELETE)
      pathname === '/posts/[id]' ? push('/') : location.reload()
    }
  })

  return (
    <Menu.Item
      as="div"
      className={({ active }: { active: boolean }) =>
        clsx(
          { 'dropdown-active': active },
          'block px-4 py-1.5 text-sm text-red-500 m-2 rounded-lg cursor-pointer'
        )
      }
      onClick={() => {
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
