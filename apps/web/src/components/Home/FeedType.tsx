import { SparklesIcon, ViewListIcon } from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import type { Dispatch, FC } from 'react'
import { MISCELLANEOUS } from 'src/tracking'
import { TabButton } from 'ui'

import FeedEventFilters from './FeedEventFilters'
import SeeThroughLens from './SeeThroughLens'

interface Props {
  setFeedType: Dispatch<'TIMELINE' | 'HIGHLIGHTS'>
  feedType: 'TIMELINE' | 'HIGHLIGHTS'
}

const FeedType: FC<Props> = ({ setFeedType, feedType }) => {
  return (
    <div className="flex flex-wrap items-center md:px-0 px-1 justify-between">
      <div className="flex overflow-x-auto gap-3 sm:px-0">
        <TabButton
          name="Timeline"
          icon={<ViewListIcon className="w-4 h-4" />}
          active={feedType === 'TIMELINE'}
          showOnSm={false}
          onClick={() => {
            setFeedType('TIMELINE');
            Mixpanel.track(MISCELLANEOUS.SWITCH_TIMELINE);
          }}
        />
        <TabButton
          name="Highlights"
          icon={<SparklesIcon className="w-4 h-4" />}
          active={feedType === 'HIGHLIGHTS'}
          showOnSm={false}
          onClick={() => {
            setFeedType('HIGHLIGHTS');
            Mixpanel.track(MISCELLANEOUS.SWITCH_HIGHLIGHTS);
          }}
        />
      </div>
      <div className="flex items-center space-x-4">
        <SeeThroughLens />
        {feedType === 'TIMELINE' && <FeedEventFilters />}
      </div>
    </div>
  )
}

export default FeedType
