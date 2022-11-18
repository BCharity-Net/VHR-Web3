import type { BCharityPublication } from '@generated/bcharitytypes'
import type { FC } from 'react'

import ThreadBody from '../ThreadBody'

interface Props {
  publication: BCharityPublication
}

const Commented: FC<Props> = ({ publication }) => {
  const commentOn: BCharityPublication | any = publication?.commentOn
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
