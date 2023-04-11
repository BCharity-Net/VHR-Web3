import { formatTime } from '@lib/formatTime'
import dayjs from 'dayjs'
import type { Publication } from 'lens'
import getAppName from 'lib/getAppName'
import type { FC } from 'react'

import PublicationActions from './Actions'
import HiddenPublication from './HiddenPublication'
import PublicationBody from './PublicationBody'
import PublicationHeader from './PublicationHeader'
import PublicationStats from './PublicationStats'
import PublicationType from './Type'

interface Props {
  publication: Publication
}

const FullPublication: FC<Props> = ({ publication }) => {
  const publicationType = publication?.metadata?.attributes[0]?.value
  const isMirror = publication.__typename === 'Mirror'
  const timestamp = isMirror ? publication?.mirrorOf?.createdAt : publication?.createdAt

  // Count check to show the publication stats only if the publication has a comment, like or collect
  const mirrorCount = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfMirrors
    : publication?.stats?.totalAmountOfMirrors
  const reactionCount = isMirror
    ? publication?.mirrorOf?.stats?.totalUpvotes
    : publication?.stats?.totalUpvotes
  const collectCount = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfCollects
    : publication?.stats?.totalAmountOfCollects
  const showStats = mirrorCount > 0 || reactionCount > 0 || collectCount > 0

  return (
    <article className="p-5" data-testid={`publication-${publication.id}`}>
      <PublicationType publication={publication} showType />
      <div>
        <div className="flex justify-between pb-4 space-x-1.5">
          {/* @ts-ignore */}
          <UserProfile
            profile={
              publicationType === 'group' && !!publication?.collectedBy?.defaultProfile
                ? publication?.collectedBy?.defaultProfile
                : profile
            }
            showStatus
          />
          <PublicationHeader publication={publication} />
          <span className="text-sm text-gray-500">{dayjs(new Date(timestamp)).fromNow()}</span>
        </div>
        <div className="ml-[53px]">
          {publication?.hidden ? (
            <HiddenPublication type={publication.__typename} />
          ) : (
            <>
              <PublicationBody publication={publication} />
              <div className="text-sm text-gray-500 my-3">
                <span title={formatTime(timestamp)}>
                  {dayjs(new Date(timestamp)).format('hh:mm A · MMM D, YYYY')}
                </span>
                {publication?.appId ? <span> · Posted via {getAppName(publication?.appId)}</span> : null}
              </div>
              {showStats && (
                <>
                  <div className="divider" />
                  <PublicationStats publication={publication} />
                </>
              )}
              <div className="divider" />
              <PublicationActions publication={publication} showCount />
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default FullPublication
