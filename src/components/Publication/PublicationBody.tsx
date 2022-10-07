import Attachments from '@components/Shared/Attachments'
import IFramely from '@components/Shared/IFramely'
import Markup from '@components/Shared/Markup'
import Collectors from '@components/Shared/Modal/Collectors'
import FundraiseShimmer from '@components/Shared/Shimmer/FundraiseShimmer'
import { Button } from '@components/UI/Button'
import { Modal } from '@components/UI/Modal'
import { BCharityPublication } from '@generated/bcharitytypes'
import { UserAddIcon, UsersIcon } from '@heroicons/react/outline'
import getIPFSLink from '@lib/getIPFSLink'
import getURLs from '@lib/getURLs'
import imagekitURL from '@lib/imagekitURL'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'

import Approve from './Approve'
import FundraiseComment from './Fundraise/Comment'
import Opportunity from './Opportunity'

const Fundraise = dynamic(() => import('./Fundraise'), {
  loading: () => <FundraiseShimmer />
})

const Hours = dynamic(() => import('./Hours'), {})

interface Props {
  publication: BCharityPublication
}

const PublicationBody: FC<Props> = ({ publication }) => {
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { t } = useTranslation('common')
  const { pathname } = useRouter()
  const publicationType = publication?.metadata?.attributes[0]?.value
  const [showMore, setShowMore] = useState(publication?.metadata?.content?.length > 450)

  return (
    <div className="break-words">
      {publicationType === 'group' ? (
        <div className="block items-center space-y-2 space-x-0 sm:flex sm:space-y-0 sm:space-x-2 linkify">
          <span className="flex items-center space-x-1.5">
            {publication?.collectedBy ? (
              <UserAddIcon className="w-4 h-4 text-brand" />
            ) : (
              <UsersIcon className="w-4 h-4 text-brand" />
            )}
            {publication?.collectedBy ? <span>{t('Joined')}</span> : <span>{t('Launched group')}</span>}
          </span>
          <Link href={`/groups/${publication?.id}`}>
            <a href={`/groups/${publication?.id}`} className="flex items-center space-x-1.5 font-bold">
              <img
                src={imagekitURL(
                  getIPFSLink(
                    publication?.metadata?.cover?.original?.url
                      ? publication?.metadata?.cover?.original?.url
                      : `https://avatar.tobi.sh/${publication?.id}.png`
                  ),
                  'avatar'
                )}
                className="bg-gray-200 rounded ring-2 ring-gray-50 dark:bg-gray-700 dark:ring-black w-[19px] h-[19px]"
                height={19}
                width={19}
                alt={publication?.id}
              />
              <div>{publication?.metadata?.name}</div>
            </a>
          </Link>
        </div>
      ) : publicationType === 'fundraise' ? (
        <Fundraise fund={publication} />
      ) : publicationType === 'fundraise-comment' ? (
        <FundraiseComment fund={publication} />
      ) : publicationType === 'hours' ? (
        <Hours publication={publication} />
      ) : publicationType === 'opportunities' ? (
        <Opportunity publication={publication} />
      ) : (
        <>
          <div
            className={clsx({
              'line-clamp-5 text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-400 dark:to-gray-900':
                showMore && pathname !== '/posts/[id]'
            })}
          >
            <div className="whitespace-pre-wrap break-words leading-md linkify text-md">
              <Markup>{publication?.metadata?.content}</Markup>
            </div>
          </div>
          {showMore && pathname !== '/posts/[id]' && (
            <button type="button" className="mt-2 text-sm font-bold" onClick={() => setShowMore(!showMore)}>
              {t('Show more')}
            </button>
          )}
        </>
      )}
      {publication?.metadata?.media?.length > 0 ? (
        <Attachments attachments={publication?.metadata?.media} />
      ) : (
        publication?.metadata?.content &&
        publicationType !== 'fundraise' &&
        publicationType !== 'group' &&
        publicationType !== 'hours' &&
        publicationType != 'opportunity' &&
        getURLs(publication?.metadata?.content)?.length > 0 && (
          <IFramely url={getURLs(publication?.metadata?.content)[0]} />
        )
      )}

      {publicationType === 'comment' &&
        publication.commentOn &&
        publication?.commentOn?.metadata?.attributes[0]?.value === 'opportunities' && (
          <div>
            {currentProfile &&
              (publication?.stats?.totalAmountOfCollects < 1 ? (
                <div className="pt-3 sm:pt-0">
                  <Approve publication={publication} />
                </div>
              ) : (
                <div className="pt-3">
                  <div className="flex items-center mt-3 space-y-0 space-x-3 sm:block sm:mt-0 sm:space-y-2">
                    <Button
                      className="sm:mt-0 sm:ml-auto"
                      onClick={() => setShowVerifyModal(!showVerifyModal)}
                      icon={<div />}
                    >
                      Approved
                    </Button>
                    <Modal
                      title="Accepted By:"
                      show={showVerifyModal}
                      onClose={() => setShowVerifyModal(false)}
                    >
                      <Collectors publicationId={publication?.id} />
                    </Modal>
                  </div>
                </div>
              ))}
          </div>
        )}
    </div>
  )
}

export default PublicationBody
