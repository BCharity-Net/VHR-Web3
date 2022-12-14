import { gql, useQuery } from '@apollo/client'
import MetaTags from '@components/Common/MetaTags'
import PublicationsShimmer from '@components/Shared/Shimmer/PublicationsShimmer'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import { GroupFields } from 'lens/documents/GroupFields'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Custom404 from 'src/pages/404'
import Custom500 from 'src/pages/500'

import Details from './Details'
import GroupPageShimmer from './Shimmer'

const Feed = dynamic(() => import('@components/Comment/Feed'), {
  loading: () => <PublicationsShimmer />
})

const GROUP_QUERY = gql`
  query Group($request: PublicationQueryRequest!) {
    publication(request: $request) {
      ... on Post {
        ...GroupFields
      }
    }
  }
  ${GroupFields}
`

const ViewGroup: NextPage = () => {
  const {
    query: { id }
  } = useRouter()
  const { data, loading, error } = useQuery(GROUP_QUERY, {
    variables: { request: { publicationId: id } },
    skip: !id
  })

  if (error) {
    return <Custom500 />
  }

  if (loading || !data) {
    return <GroupPageShimmer />
  }

  if (!data.publication || data.publication?.metadata?.attributes[0]?.value !== 'group') {
    return <Custom404 />
  }

  return (
    <GridLayout>
      <MetaTags title={`${data?.publication?.metadata?.name} • BCharity`} />
      <GridItemFour>
        <Details group={data.publication} />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <Feed publication={data.publication} type="group post" />
      </GridItemEight>
    </GridLayout>
  )
}

export default ViewGroup
