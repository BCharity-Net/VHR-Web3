import { Image } from '@components/UI/Image'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import getAvatar from '@lib/getAvatar'
import type { Profile } from 'lens'
import Link from 'next/link'
import type { FC } from 'react'
import formatHandle from 'utils/formatHandle'
import isVerified from 'utils/isVerified'

interface Props {
  profile: Profile
}

export const NotificationProfileAvatar: FC<Props> = ({ profile }) => {
  return (
    <Link href={`/u/${formatHandle(profile?.handle)}`}>
      <Image
        onError={({ currentTarget }) => {
          currentTarget.src = getAvatar(profile, false);
        }}
        src={getAvatar(profile)}
        className="w-8 h-8 bg-gray-200 rounded-full border dark:border-gray-700/80"
        height={32}
        width={32}
        alt={formatHandle(profile?.handle)}
      />
    </Link>
  )
}

export const NotificationProfileName: FC<Props> = ({ profile }) => {
  return (
    <Link
      href={`/u/${formatHandle(profile?.handle)}`}
      className="inline-flex items-center space-x-1 font-bold"
    >
      <div>{profile?.name ?? formatHandle(profile?.handle)}</div>
      {isVerified(profile?.id) && <BadgeCheckIcon className="w-4 h-4 text-brand" />}
    </Link>
  )
}
