import { gql, useQuery } from '@apollo/client'
import { GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { PageLoading } from '@components/UI/PageLoading'
import MetaTags from '@components/utils/MetaTags'
import { GroupDocument } from '@generated/types'
import { GroupFields } from '@gql/GroupFields'
import { ChartBarIcon, FireIcon, SparklesIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { APP_NAME } from 'src/constants'
import Custom500 from 'src/pages/500'

import List from './List'

const GROUP_QUERY = gql`
  query Group(
    $topCommented: ExplorePublicationRequest!
    $topCollected: ExplorePublicationRequest!
    $latest: ExplorePublicationRequest!
  ) {
    topCommented: explorePublications(request: $topCommented) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
    topCollected: explorePublications(request: $topCollected) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
    latest: explorePublications(request: $latest) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
  }
  ${GroupFields}
`

const Groups: NextPage = () => {
  const { t } = useTranslation('common')
  const { data, loading, error } = useQuery(GROUP_QUERY, {
    variables: {
      topCommented: {
        sources: `${APP_NAME} Group`,
        sortCriteria: 'TOP_COMMENTED',
        publicationTypes: ['POST'],
        limit: 8
      },
      topCollected: {
        sources: `${APP_NAME} Group`,
        sortCriteria: 'TOP_COLLECTED',
        publicationTypes: ['POST'],
        limit: 8
      },
      latest: {
        sources: `${APP_NAME} Group`,
        sortCriteria: 'LATEST',
        publicationTypes: ['POST'],
        limit: 8
      }
    }
  })

  if (error) {
    return <Custom500 />
  }

  if (loading || !data) {
    return <PageLoading message="Loading group" />
  }

  return (
    <GridLayout>
      <MetaTags title={`Groups • ${APP_NAME}`} />
      <GridItemFour>
        <div className="flex items-center mb-2 space-x-1.5 font-bold text-gray-500">
          <FireIcon className="w-5 h-5 text-yellow-500" />
          <div>{t('Most Active')}</div>
        </div>
        <List groups={data?.topCommented.items} />
      </GridItemFour>
      <GridItemFour>
        <div className="flex items-center mb-2 space-x-1.5 font-bold text-gray-500">
          <ChartBarIcon className="w-5 h-5 text-green-500" />
          <div>{t('Fastest Growing')}</div>
        </div>
        <List groups={data?.topCollected.items} />
      </GridItemFour>
      <GridItemFour>
        <div className="flex items-center mb-2 space-x-1.5 font-bold text-gray-500">
          <SparklesIcon className="w-5 h-5 text-green-500" />
          <div>{t('Latest')}</div>
        </div>
        <List groups={data?.latest.items} />
      </GridItemFour>
    </GridLayout>
  )
}

export default Groups
