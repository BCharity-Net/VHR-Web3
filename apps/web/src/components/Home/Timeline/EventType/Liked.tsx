import Profiles from '@components/Shared/Profiles'
import { HeartIcon } from '@heroicons/react/outline'
import type { ReactionEvent } from 'lens'
import type { FC } from 'react'

interface Props {
  reactions: ReactionEvent[]
}

const Liked: FC<Props> = ({ reactions }) => {
  const getLikedProfiles = () => {
    let profiles = reactions.map((event) => event.profile)
    profiles = profiles.filter((profile, index, self) => index === self.findIndex((t) => t.id === profile.id))
    return profiles
  }

  return (
    <div className={'flex items-center pb-4 space-x-1 text-gray-500 text-[13px]'}>
      <HeartIcon className="w-4 h-4" />
      <Profiles profiles={getLikedProfiles()} context="Liked by" />
    </div>
  )
}

export default Liked
