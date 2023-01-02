/* eslint-disable react/jsx-key */
import type { Profile } from 'lens'
import { ProfileFeedDocument, PublicationTypes } from 'lens'
import type { FC } from 'react'
import { useMemo } from 'react'

import FundraiseTable from './FundraiseTable'
import { FundsCell, PostCell } from './FundraiseTable/Cells'
import { DateSearch, FuzzySearch, fuzzyTextFilterFn, NoFilter } from './FundraiseTable/Filters'

interface Props {
  profile: Profile
}

const FundraiseOrgFeed: FC<Props> = ({ profile }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Fundraisers',
        columns: [
          {
            Header: 'Cause',
            accessor: 'name',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Category',
            accessor: 'category',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Funds raised',
            accessor: 'funds',
            Cell: FundsCell,
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Funding Goal',
            accessor: 'goal',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'VHR Goal',
            accessor: 'vhr',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Date',
            accessor: 'date',
            Filter: DateSearch
          },
          {
            Header: 'Link to Post',
            accessor: 'postID',
            Cell: PostCell,
            Filter: NoFilter
          }
        ]
      }
    ],
    []
  )

  const tableLimit = 10

  return (
    <FundraiseTable
      profile={profile}
      handleQueryComplete={(data: any) => {
        return data?.publications?.items.filter((i: any) => {
          return i.metadata.attributes[0].value === 'fundraise'
        })
      }}
      getColumns={() => {
        return columns
      }}
      query={ProfileFeedDocument}
      request={{
        publicationTypes: [PublicationTypes.Post],
        profileId: profile?.id,
        limit: tableLimit
      }}
    />
  )
}

export default FundraiseOrgFeed
