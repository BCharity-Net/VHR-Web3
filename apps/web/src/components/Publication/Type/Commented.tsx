import type { Comment } from 'lens'
import type { FC } from 'react'

import ThreadBody from '../ThreadBody'

interface Props {
  publication: Comment
}

const Commented: FC<Props> = ({ publication }) => {
  const commentOn: Comment | any = publication?.commentOn
  const mainPost = commentOn?.mainPost
  const publicationType = mainPost?.metadata?.attributes[0]?.value

  return (
    <>
      {mainPost && publicationType !== 'group' ? <ThreadBody publication={mainPost} /> : null}
      <ThreadBody publication={commentOn} />
    </>
  )
}

export default Commented
