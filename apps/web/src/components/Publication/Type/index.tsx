import type { BCharityPublication } from '@generated/types'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import Collected from './Collected'
import Commented from './Commented'
import CommentedPublication from './CommentedPublication'
import GroupPublication from './GroupPost'
import Mirrored from './Mirrored'

interface Props {
  publication: BCharityPublication
  showType?: boolean
  showThread?: boolean
}

const PublicationType: FC<Props> = ({ publication, showType, showThread }) => {
  const { pathname } = useRouter()
  const type = publication.__typename
  const publicationType = publication?.metadata?.attributes[0]?.value
  const isCollected = Boolean(publication?.collectedBy)

  if (!showType) {
    return null
  }

  return (
    <>
      {type === 'Mirror' && <Mirrored publication={publication} />}
      {type === 'Comment' && pathname === '/posts/[id]' && publicationType !== 'group post' && (
        <CommentedPublication publication={publication} />
      )}
      {type === 'Comment' && !showThread && !isCollected && publicationType !== 'group post' && (
        <Commented publication={publication} />
      )}
      {publicationType === 'group post' && pathname !== '/groups/[id]' && type !== 'Mirror' && (
        <GroupPublication publication={publication} />
      )}
      {isCollected && publicationType !== 'group' && publicationType !== 'fundraise' && (
        <Collected publication={publication} type="collected" />
      )}
      {isCollected && publicationType === 'fundraise' && (
        <Collected publication={publication} type="funded" />
      )}
    </>
  )
}

export default PublicationType
