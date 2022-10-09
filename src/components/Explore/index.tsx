import RecommendedProfiles from '@components/Home/RecommendedProfiles'
import Trending from '@components/Home/Trending'
import Footer from '@components/Shared/Footer'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import MetaTags from '@components/utils/MetaTags'
import { PublicationSortCriteria } from '@generated/types'
import isFeatureEnabled from '@lib/isFeatureEnabled'
import { Mixpanel } from '@lib/mixpanel'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { PAGEVIEW } from 'src/tracking'

import Feed from './Feed'
import FeedType from './FeedType'

const Explore: NextPage = () => {
  const { t } = useTranslation('common')
  const {
    query: { type }
  } = useRouter()
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [feedType, setFeedType] = useState(
    type && ['curated_profiles', 'top_commented', 'top_collected', 'top_mirrored'].includes(type as string)
      ? type.toString().toUpperCase()
      : PublicationSortCriteria.CuratedProfiles
  )

  useEffect(() => {
    Mixpanel.track('Pageview', { path: PAGEVIEW.EXPLORE })
  }, [])

  return (
    <GridLayout>
      <MetaTags title={t('Explore web')} description={t('Web description')} />
      <GridItemEight className="space-y-5" data-test="explore-feed">
        <FeedType setFeedType={setFeedType} feedType={feedType} />
        <Feed feedType={feedType as PublicationSortCriteria} />
      </GridItemEight>
      <GridItemFour>
        {isFeatureEnabled('trending-widget', currentProfile?.id) && <Trending />}
        {currentProfile ? <RecommendedProfiles /> : null}
        <Footer />
      </GridItemFour>
    </GridLayout>
  )
}

export default Explore
