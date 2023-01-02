import Slug from '@components/Shared/Slug'
import { BCharityPublication } from '@generated/types'
import { CollectionIcon } from '@heroicons/react/outline'
import formatAddress from '@lib/formatAddress'
import formatHandle from '@lib/formatHandle'
import { POLYGONSCAN_URL } from 'data/constants'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  publication: BCharityPublication
  type: string
}

const Collected: FC<Props> = ({ publication, type }) => {
  const publicationType = publication?.metadata?.attributes[0]?.value

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <CollectionIcon className="w-4 h-4" />
      <div className="space-x-1">
        {publication?.collectedBy?.defaultProfile ? (
          <Link href={`/u/${formatHandle(publication?.collectedBy?.defaultProfile?.handle)}`}>
            {publication?.collectedBy?.defaultProfile?.name ? (
              <b>{publication?.collectedBy?.defaultProfile?.name}</b>
            ) : (
              <Slug slug={formatHandle(publication?.collectedBy?.defaultProfile?.handle)} prefix="@" />
            )}
          </Link>
        ) : (
          <a
            href={`${POLYGONSCAN_URL}/address/${publication?.collectedBy?.address}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Slug slug={formatAddress(publication?.collectedBy?.address)} />
          </a>
        )}
        <Link href={`/posts/${publication?.id}`}>
          <span>{type} the </span>
          <b>
            {publication.__typename === 'Post'
              ? publicationType === 'fundraise'
                ? 'fundraise'
                : (publication.__typename as string)?.toLowerCase()
              : (publication.__typename as any)?.toLowerCase()}
          </b>
        </Link>
      </div>
    </div>
  )
}

export default Collected
