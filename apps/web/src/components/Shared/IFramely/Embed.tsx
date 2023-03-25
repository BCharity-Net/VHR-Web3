import { Card } from '@components/UI/Card'
import { Image } from '@components/UI/Image'
import type { OG } from '@generated/types'
import imageProxy from '@lib/imageProxy'
import { Mixpanel } from '@lib/mixpanel'
import { stopEventPropagation } from '@lib/stopEventPropagation'
import { ATTACHMENT } from 'data/constants'
import Link from 'next/link'
import type { FC } from 'react'
import { PUBLICATION } from 'src/tracking'

interface Props {
  og: OG
}

const Embed: FC<Props> = ({ og }) => {
  return (
    <div className="mt-4 text-sm sm:w-4/6">
      <Link
        href={og.url}
        onClick={(event) => {
          stopEventPropagation(event)
          Mixpanel.track(PUBLICATION.OEMBED_CLICK)
        }}
        target={og.url.includes(location.host) ? '_self' : '_blank'}
        rel="noreferrer noopener"
      >
        <Card forceRounded>
          {!og.isSquare && og.thumbnail && (
            <Image
            className="w-full rounded-t-xl border-b"
            onError={({ currentTarget }) => {
              currentTarget.src = og.thumbnail;
            }}
            src={imageProxy(og.thumbnail, ATTACHMENT)}
            alt="Thumbnail"
          />
          )}
          <div className="flex items-center">
            {og.isSquare && og.thumbnail && (
              <Image
                className="w-36 h-36 rounded-l-xl border-b"
                height={144}
                width={144}
                onError={({ currentTarget }) => {
                  currentTarget.src = og.thumbnail;
                }}
                src={imageProxy(og.thumbnail, ATTACHMENT)}
                alt="Thumbnail"
              />
            )}
            <div className="p-5 truncate">
              <div className="space-y-1.5">
                {og.title && <div className="font-bold line-clamp-1">{og.title}</div>}
                {og.description && <div className="text-gray-500 line-clamp-2">{og.description}</div>}
                {og.site && (
                  <div className="flex items-center pt-1.5 space-x-2">
                    {og.favicon && (
                      <img
                        className="w-4 h-4 rounded-full"
                        height={16}
                        width={16}
                        src={og.favicon}
                        alt="Favicon"
                      />
                    )}
                    <div className="text-xs text-gray-500">{og.site}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default Embed
