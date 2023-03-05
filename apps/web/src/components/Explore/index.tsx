import MetaTags from '@components/Common/MetaTags'
import RecommendedProfiles from '@components/Home/RecommendedProfiles'
import Trending from '@components/Home/Trending'
import Footer from '@components/Shared/Footer'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { Tab } from '@headlessui/react'
import { Analytics } from '@lib/analytics'
import isFeatureEnabled from '@lib/isFeatureEnabled'
import clsx from 'clsx'
import { APP_NAME, STATIC_IMAGES_URL } from 'data/constants'
import type { PublicationMainFocus } from 'lens'
import { PublicationSortCriteria } from 'lens'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'

import Feed from './Feed'
import FeedType from './FeedType'

const Explore: NextPage = () => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [focus, setFocus] = useState<PublicationMainFocus>()
  const router = useRouter()

  const tabs = [
    { name: 'For you', emoji: 'leaf-fluttering-in-wind.png', type: PublicationSortCriteria.CuratedProfiles },
    { name: 'Popular', emoji: 'hundred-points.png', type: PublicationSortCriteria.TopCommented },
    { name: 'Trending', emoji: 'heart-on-fire.png', type: PublicationSortCriteria.TopCollected },
    { name: 'Interesting', emoji: 'hushed-face.png', type: PublicationSortCriteria.TopMirrored }
  ]

  return (
    <GridLayout>
      <MetaTags title={t('Explore web')} description={t('Web description')} />
      <GridItemEight className="space-y-5" data-test="explore-feed">
        <Tab.Group
          defaultIndex={Number(router.query.tab)}
          onChange={(index) => {
            router.replace({ query: { ...router.query, tab: index } }, undefined, { shallow: true });
          }}
        >
          <Tab.List className="divider space-x-8">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                defaultChecked={index === 1}
                onClick={() => {
                  Analytics.track(`switch to ${tab.type?.toLowerCase()} tab in explore`)
                }}
                className={({ selected }) =>
                  clsx(
                    { 'border-b-2 border-brand-500 !text-black dark:!text-white': selected },
                    'px-4 pb-2 text-gray-500 outline-none font-medium text-sm'
                  )
                }
              >
                <span className="flex items-center space-x-2">
                  <span className="hidden sm:block">{tab.name}</span>
                  <img className="h-4" src={`${STATIC_IMAGES_URL}/emojis/${tab.emoji}`} alt={tab.name} />
                </span>
              </Tab>
            ))}
          </Tab.List>
          <FeedType setFocus={setFocus} focus={focus} />
          <Tab.Panels>
            {tabs.map((tab, index) => (
              <Tab.Panel key={index}>
                <Feed focus={focus} feedType={tab.type} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
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
