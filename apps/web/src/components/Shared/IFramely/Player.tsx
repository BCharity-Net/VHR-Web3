import type { FC } from 'react'
import type { OG } from 'src/types'

interface Props {
  og: OG
}

const Player: FC<Props> = ({ og }) => {
  return (
    <div className="mt-4 w-5/6 text-sm" data-testid={`rich-oembed-${og.url}`}>
      <div className="iframely-player" dangerouslySetInnerHTML={{ __html: og.html }} />
    </div>
  )
}

export default Player
