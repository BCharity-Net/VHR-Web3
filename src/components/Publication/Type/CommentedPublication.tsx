import Slug from '@components/Shared/Slug'
import { BCharityPublication } from '@generated/bcharitytypes'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  publication: BCharityPublication
}

const CommentedPublication: FC<Props> = ({ publication }) => {
  const sourceIsGroup = publication?.commentOn?.metadata?.attributes[0]?.value === 'group post'
  // @ts-ignore
  const sourceId = publication?.commentOn?.id
  const sourceProfileHandle = publication?.commentOn?.profile?.handle

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <ChatAlt2Icon className="w-4 h-4" />
      <div className="flex items-center space-x-1">
        <Link href={`/posts/${sourceId}`}>
          Commented on {sourceIsGroup ? 'post' : publication?.commentOn?.__typename?.toLowerCase()} by
        </Link>
        <Link href={`/u/${sourceProfileHandle}`}>
          <Slug slug={sourceProfileHandle} prefix="@" />
        </Link>
      </div>
    </div>
  )
}

export default CommentedPublication
