import { STATIC_IMAGES_URL } from 'data/constants'
import type { Profile } from 'lens'
import type { FC } from 'react'
import { Tooltip } from 'ui'

interface Props {
  profile: Profile
}

const Ens: FC<Props> = ({ profile }) => {
  if (!profile?.onChainIdentity?.ens?.name) {
    return null
  }

  return (
    <Tooltip
      content={
        <span>
          ENS name: <b>{profile?.onChainIdentity?.ens?.name}</b>
        </span>
      }
      placement="top"
    >
      <img
        className="drop-shadow-xl"
        height={75}
        width={75}
        src={`${STATIC_IMAGES_URL}/badges/ens.png`}
        alt="ENS Badge"
        data-testid="profile-ens-badge"
      />
    </Tooltip>
  )
}

export default Ens
