import Markup from '@components/Shared/Markup'
import type { NewCollectNotification } from '@generated/types'
import getIPFSLink from '@lib/getIPFSLink'
import imageProxy from '@lib/imageProxy'
import Link from 'next/link'
import type { FC } from 'react'
import { AVATAR } from 'src/constants'

interface Props {
  notification: NewCollectNotification
}

const CollectedContent: FC<Props> = ({ notification }) => {
  const publicationType =
    notification?.collectedPublication?.metadata?.attributes[0]?.value ??
    notification?.collectedPublication.__typename?.toLowerCase()

  return (
    <div className="text-gray-500 line-clamp-2 mt-2">
      {publicationType === 'group' ? (
        <Link href={`/communities/${notification?.collectedPublication?.id}`}>
          <a
            href={`/groups/${notification?.collectedPublication?.id}`}
            className="flex items-center space-x-1.5 font-bold"
          >
            <img
              src={imageProxy(
                getIPFSLink(
                  notification?.collectedPublication?.metadata?.cover?.original?.url
                    ? notification?.collectedPublication?.metadata?.cover?.original?.url
                    : `https://avatar.tobi.sh/${notification?.collectedPublication?.id}.png`
                ),
                AVATAR
              )}
              className="w-4 h-4 bg-gray-200 rounded ring-2 ring-gray-50 dark:bg-gray-700 dark:ring-black"
              height={16}
              width={16}
              alt={notification?.collectedPublication?.id}
            />
            <div>{notification?.collectedPublication?.metadata?.name}</div>
          </a>
        </Link>
      ) : publicationType === 'fundraise' ? (
        <Link href={`/posts/${notification?.collectedPublication?.id}`}>
          {notification?.collectedPublication?.metadata?.name}
        </Link>
      ) : (
        <Link href={`/posts/${notification?.collectedPublication?.id}`} className="linkify">
          <Markup>{notification?.collectedPublication?.metadata?.content}</Markup>
        </Link>
      )}
    </div>
  )
}

export default CollectedContent
