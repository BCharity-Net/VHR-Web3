import type { Group } from 'src/types/index.ts /types'
import { UsersIcon } from '@heroicons/react/outline'
import sanitizeDStorageUrl from '@lib/sanitizeDStorageUrl'
import humanize from '@lib/humanize'
import imageProxy from '@lib/imageProxy'
import Link from 'next/link'
import type { FC } from 'react'
import { AVATAR } from 'data/constants'

interface Props {
  group: Group
}

const GroupProfile: FC<Props> = ({ group }) => {
  return (
    <div className="flex justify-between items-center">
      <Link href={`/groups/${group?.id}`}>
        <div className="flex items-center space-x-3">
          <img
            src={imageProxy(
              sanitizeDStorageUrl(
                group?.metadata?.cover?.original?.url
                  ? group?.metadata?.cover?.original?.url
                  : `https://avatar.tobi.sh/${group?.id}.png`
              ),
              AVATAR
            )}
            className="w-16 h-16 bg-gray-200 rounded-xl border dark:border-gray-700/80"
            height={64}
            width={64}
            alt={group?.id}
          />
          <div className="space-y-1">
            <div className="">{group?.metadata?.name}</div>
            <div className="text-sm text-gray-500">{group?.metadata?.description}</div>
            {group?.stats?.totalAmountOfCollects !== 0 && (
              <div className="flex items-center space-x-1 text-sm">
                <UsersIcon className="w-3 h-3" />
                <div>
                  {humanize(group?.stats?.totalAmountOfCollects)}{' '}
                  {group?.stats?.totalAmountOfCollects > 1 ? 'members' : 'member'}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GroupProfile
