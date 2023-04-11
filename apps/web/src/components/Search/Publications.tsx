import SinglePublication from '@components/Publication/SinglePublication'
import PublicationsShimmer from '@components/Shared/Shimmer/PublicationsShimmer'
import { CollectionIcon } from '@heroicons/react/outline'
import type { Publication, PublicationSearchResult, SearchQueryRequest } from 'lens'
import { CustomFiltersTypes, SearchRequestTypes, useSearchPublicationsQuery } from 'lens'
import type { FC } from 'react'
import { useState } from 'react'
import { useInView } from 'react-cool-inview'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { Card, EmptyState, ErrorMessage } from 'ui'

interface Props {
  query: string | string[]
}

const Publications: FC<Props> = ({ query }) => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [hasMore, setHasMore] = useState(true)

  // Variables
  const request: SearchQueryRequest = {
    query,
    type: SearchRequestTypes.Publication,
    customFilters: [CustomFiltersTypes.Gardeners],
    limit: 10
  }
  const reactionRequest = currentProfile ? { profileId: currentProfile?.id } : null
  const profileId = currentProfile?.id ?? null

  const { data, loading, error, fetchMore } = useSearchPublicationsQuery({
    variables: { request, reactionRequest, profileId }
  })

  const search = data?.search as PublicationSearchResult;
  const publications = search?.items as Publication[];
  const pageInfo = search?.pageInfo

  const { observe } = useInView({
    onChange: async ({ inView }) => {
      if (!inView || !hasMore) {
        return
      }

      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next }, reactionRequest, profileId }
      }).then(({ data }) => {
        const search = data?.search as PublicationSearchResult
        setHasMore(search?.items?.length > 0)
      })
    }
  })

  if (loading) {
    return <PublicationsShimmer />
  }

  if (publications?.length === 0) {
    return (
      <EmptyState
        message={
          <div>
            No publications for <b>&ldquo;{query}&rdquo;</b>
          </div>
        }
        icon={<CollectionIcon className="w-8 h-8 text-brand" />}
      />
    )
  }

  if (error) {
    return <ErrorMessage title="Failed to load publications" error={error} />
  }

  return (
    <>
      <Card className="divide-y-[1px] dark:divide-gray-700">
        {publications?.map((publication, index) => (
          <SinglePublication key={`${publication?.id}_${index}`} publication={publication} />
        ))}
      </Card>
      {hasMore && <span ref={observe} />}
    </>
  )
}

export default Publications
