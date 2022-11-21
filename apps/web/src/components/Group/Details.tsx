import Markup from '@components/Shared/Markup'
import Collectors from '@components/Shared/Modal/Collectors'
import { Button } from '@components/UI/Button'
import { Modal } from '@components/UI/Modal'
import type { BCharityPublication } from '@generated/types'
import { ClockIcon, CogIcon, HashtagIcon, PencilAltIcon, UsersIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import imageProxy from '@lib/imageProxy'
import nFormatter from '@lib/nFormatter'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import dynamic from 'next/dynamic'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AVATAR } from 'data/constants'
import { useAppStore } from 'src/store/app'

import Join from './Join'

const Settings = dynamic(() => import('./Settings'), {
  loading: () => <div className="m-5 h-5 rounded-lg shimmer" />
})

dayjs.extend(relativeTime)

interface Props {
  group: BCharityPublication
}

const Details: FC<Props> = ({ group }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [showMembersModal, setShowMembersModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [joined, setJoined] = useState(group?.hasCollectedByMe)

  const { t } = useTranslation('common')
  const MetaDetails = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => (
    <div className="flex gap-2 items-center">
      {icon}
      {children}
    </div>
  )

  return (
    <div className="px-5 mb-4 space-y-5 sm:px-0">
      <div className="relative w-32 h-32 sm:w-72 sm:h-72">
        <img
          src={imageProxy(
            getIPFSLink(
              group?.metadata?.cover?.original?.url
                ? group?.metadata?.cover?.original?.url
                : `https://avatar.tobi.sh/${group?.id}.png`
            ),
            AVATAR
          )}
          className="w-32 h-32 bg-gray-200 rounded-xl ring-2 ring-gray-200 sm:w-72 sm:h-72 dark:bg-gray-700 dark:ring-gray-700/80"
          height={128}
          width={128}
          alt={group?.id}
        />
      </div>
      <div className="pt-1 text-2xl font-bold">
        <div className="truncate">{group?.metadata?.name}</div>
      </div>
      <div className="space-y-5">
        {group?.metadata?.description && (
          <div className="mr-0 leading-7 sm:mr-10 linkify">
            <Markup>{group?.metadata?.description}</Markup>
          </div>
        )}
        <div className="flex items-center space-x-2">
          {joined ? (
            <div className="py-0.5 px-2 text-sm text-white rounded-lg shadow-sm bg-brand-500 w-fit">
              {t('member')}
            </div>
          ) : (
            <Join group={group} setJoined={setJoined} />
          )}
          {currentProfile?.id === group?.profile?.id && (
            <>
              <Button
                variant="secondary"
                className="!py-1.5"
                icon={<PencilAltIcon className="w-5 h-5" />}
                onClick={() => {
                  setShowSettingsModal(!showSettingsModal)
                }}
              />
              <Modal
                title={t('Settings')}
                icon={<CogIcon className="w-5 h-5 text-brand" />}
                show={showSettingsModal}
                onClose={() => setShowSettingsModal(false)}
              >
                <Settings group={group} />
              </Modal>
            </>
          )}
        </div>
        <div className="space-y-2">
          <MetaDetails icon={<HashtagIcon className="w-4 h-4" />}>{group?.id}</MetaDetails>
          <MetaDetails icon={<UsersIcon className="w-4 h-4" />}>
            <>
              <button
                type="button"
                onClick={() => {
                  setShowMembersModal(!showMembersModal)
                }}
              >
                {nFormatter(group?.stats?.totalAmountOfCollects)}{' '}
                {group?.stats?.totalAmountOfCollects === 1 ? t('member') : t('member')}
              </button>
              <Modal
                title={t('Members')}
                icon={<UsersIcon className="w-5 h-5 text-brand" />}
                show={showMembersModal}
                onClose={() => setShowMembersModal(false)}
              >
                <Collectors publicationId={group.id} />
              </Modal>
            </>
          </MetaDetails>
          <MetaDetails icon={<UsersIcon className="w-4 h-4" />}>
            <>
              {nFormatter(group?.stats?.totalAmountOfComments)}{' '}
              {group?.stats?.totalAmountOfComments === 1 ? 'post' : 'posts'}
            </>
          </MetaDetails>
          <MetaDetails icon={<ClockIcon className="w-4 h-4" />}>
            {dayjs(new Date(group?.createdAt)).fromNow()}
          </MetaDetails>
        </div>
      </div>
    </div>
  )
}

export default Details
