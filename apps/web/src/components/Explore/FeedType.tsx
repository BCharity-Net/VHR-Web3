import { Mixpanel } from '@lib/mixpanel'
import clsx from 'clsx'
import { PublicationMainFocus } from 'lens'
import type { Dispatch, FC } from 'react'
import { EXPLORE } from 'src/tracking'

interface Props {
  setFocus: Dispatch<PublicationMainFocus>
  focus?: PublicationMainFocus
}

const FeedType: FC<Props> = ({ setFocus, focus }) => {
  interface FeedLinkProps {
    name: string
    type?: string
  }

  const FeedLink: FC<FeedLinkProps> = ({ name, type }) => (
    <button
      type="button"
      onClick={() => {
        setFocus(type as PublicationMainFocus)
        Mixpanel.track(EXPLORE.SWITCH_EXPLORE_FEED_FOCUS, {
          explore_feed_focus: (type ?? 'all_posts').toLowerCase()
        })
      }}
      className={clsx(
        { '!bg-brand-500 !text-white': focus === type },
        'text-xs bg-brand-100 dark:bg-opacity-10 rounded-full px-3 sm:px-4 py-1.5 text-brand border border-brand-300'
      )}
      aria-label={name}
    >
      {name}
    </button>
  )

  return (
    <div className="flex flex-wrap gap-3 px-5 mt-3 sm:px-0 sm:mt-0">
      <FeedLink name="All posts" />
      <FeedLink name="Text" type={PublicationMainFocus.TextOnly} />
      <FeedLink name="Video" type={PublicationMainFocus.Video} />
      <FeedLink name="Audio" type={PublicationMainFocus.Audio} />
      <FeedLink name="Images" type={PublicationMainFocus.Image} />
    </div>
  )
}

export default FeedType
