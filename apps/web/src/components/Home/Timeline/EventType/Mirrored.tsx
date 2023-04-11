import Profiles from '@components/Shared/Profiles'
import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import type { MirrorEvent } from 'lens'
import type { FC } from 'react'

interface Props {
  mirrors: MirrorEvent[]
}

const Mirrored: FC<Props> = ({ mirrors }) => {
  const getMirroredProfiles = () => {
    let profiles = mirrors.map((event) => event.profile)
    profiles = profiles.filter((profile, index, self) => index === self.findIndex((t) => t.id === profile.id))
    return profiles
  }

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <SwitchHorizontalIcon className="w-4 h-4" />
      <Profiles profiles={getMirroredProfiles()} context="Mirrored" />
    </div>
  )
}

export default Mirrored
