import Slug from '@components/Shared/Slug'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import formatHandle from '@lib/formatHandle'
import type { Comment } from 'lens'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
  publication: Comment
}

const CommentedPublication: FC<Props> = ({ publication }) => {
  const sourceIsGroup = publication?.commentOn?.metadata?.attributes[0]?.value === 'group post'
  // @ts-ignore
  const sourceId = publication?.commentOn?.id
  const sourceProfileHandle = formatHandle(publication?.commentOn?.profile?.handle)

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <ChatAlt2Icon className="w-4 h-4" />
      <Link href={`/posts/${sourceId}`}>
        Commented on {publication?.commentOn?.__typename?.toLowerCase()} by
      </Link>
      <Link href={`/u/${sourceProfileHandle}`}>
        <Slug slug={sourceProfileHandle} prefix="@" />
      </Link>
    </div>
  )
}

export default CommentedPublication
