/* eslint-disable react/jsx-key */
import { Profile, ProfileNftFeedDocument } from '@generated/types'
import { FC, useMemo } from 'react'
import { CHAIN_ID, IS_MAINNET } from 'src/constants'
import { chain } from 'wagmi'

import { PostCell, ProfileCell } from './FundraiseTable/Cells'
import { DateSearch, FuzzySearch, fuzzyTextFilterFn, NoFilter } from './FundraiseTable/Filters'
import FundraiseTable from './FundraiseTable/Individual'

interface Props {
  profile: Profile
}

const FundraiseFeed: FC<Props> = ({ profile }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Funds',
        columns: [
          {
            Header: 'Organization',
            accessor: 'orgName',
            Cell: ProfileCell,
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Cause',
            accessor: 'fundName',
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
            Header: 'Donated',
            accessor: 'amount',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Good',
            accessor: 'amountGOOD',
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

  const tableLimit = 50

  return (
    <FundraiseTable
      profile={profile}
      handleQueryComplete={() => {}}
      getColumns={() => {
        return columns
      }}
      query={ProfileNftFeedDocument}
      request={{
        chainIds: [CHAIN_ID, IS_MAINNET ? chain.mainnet.id : chain.kovan.id],
        ownerAddress: profile?.ownedBy,
        limit: tableLimit
      }}
    />
  )
}

export default FundraiseFeed
