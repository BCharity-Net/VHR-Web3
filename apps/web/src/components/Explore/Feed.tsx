import SinglePublication from '@components/Publication/SinglePublication'
import PublicationsShimmer from '@components/Shared/Shimmer/PublicationsShimmer'
import { Card } from '@components/UI/Card'
import { EmptyState } from '@components/UI/EmptyState'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import InfiniteLoader from '@components/UI/InfiniteLoader'
import { CollectionIcon } from '@heroicons/react/outline'
import { SCROLL_THRESHOLD } from 'data/constants'
import type { ExplorePublicationRequest, Publication, PublicationMainFocus } from 'lens'
import { CustomFiltersTypes, PublicationSortCriteria, useExploreFeedQuery } from 'lens'
import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useAppStore } from 'src/store/app'

interface Props {
  focus?: PublicationMainFocus
  feedType?: PublicationSortCriteria
}

const Feed: FC<Props> = ({ focus, feedType = PublicationSortCriteria.CuratedProfiles }) => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [hasMore, setHasMore] = useState(true)

  // Variables
  const request: ExplorePublicationRequest = {
    sortCriteria: feedType,
    noRandomize: feedType === 'LATEST',
    customFilters: [CustomFiltersTypes.Gardeners],
    metadata: focus ? { mainContentFocus: [focus] } : null,
    limit: 10
  }
  const reactionRequest = currentProfile ? { profileId: currentProfile?.id } : null
  const profileId = currentProfile?.id ?? null

  const { data, loading, error, fetchMore } = useExploreFeedQuery({
    variables: { request, reactionRequest, profileId }
  })

  const pageInfo = data?.explorePublications?.pageInfo
  const publications = data?.explorePublications?.items

  const loadMore = async () => {
    await fetchMore({
      variables: { request: { ...request, cursor: pageInfo?.next }, reactionRequest, profileId }
    }).then(({ data }) => {
      setHasMore(data?.explorePublications?.items?.length > 0)
    })
  }

  if (loading) {
    return <PublicationsShimmer />
  }

  if (publications?.length === 0) {
    return (
      <EmptyState
        message={<div>No posts yet!</div>}
        icon={<CollectionIcon className="w-8 h-8 text-brand" />}
      />
    )
  }

  if (error) {
    return <ErrorMessage title="Failed to load explore feed" error={error} />
  }

  return (
    <InfiniteScroll
      dataLength={publications?.length ?? 0}
      scrollThreshold={SCROLL_THRESHOLD}
      hasMore={hasMore}
      next={loadMore}
      loader={<InfiniteLoader />}
    >
      <Card className="divide-y-[1px] dark:divide-gray-700/80">
        {publications?.map((publication, index) => (
          <SinglePublication key={`${publication.id}_${index}`} publication={publication as Publication} />
        ))}
      </Card>
    </InfiniteScroll>
  )
}

export default Feed
