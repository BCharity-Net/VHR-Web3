/* eslint-disable react/jsx-key */
import type { Profile } from '@generated/types'
import { ProfileFeedDocument, PublicationTypes } from '@generated/types'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import { ProfileCell, StatusCell } from './OpportunitiesTable/Cells'
import {
  DateSearch,
  FuzzySearch,
  fuzzyTextFilterFn,
  getStatusFn,
  greaterThanEqualToFn,
  lessThanEqualToFn,
  SelectColumnFilter
} from './OpportunitiesTable/Filters'
import OpportunitiesTable from './OpportunitiesTable/Individual'

interface Props {
  profile: Profile
}

const OpportunitiesFeed: FC<Props> = ({ profile }) => {
  const [addressData, setAddressData] = useState<string[]>([])

  const columns = useMemo(
    () => [
      {
        Header: 'Volunteer Opportunities',
        columns: [
          {
            Header: 'Organization Name',
            accessor: 'orgName',
            Cell: ProfileCell,
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Program',
            accessor: 'program',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'Position',
            accessor: 'position',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
          },
          {
            Header: 'City/Region',
            accessor: 'city',
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
            Header: 'Start Date',
            accessor: 'startDate',
            Filter: DateSearch,
            filter: greaterThanEqualToFn
          },
          {
            Header: 'End Date',
            accessor: 'endDate',
            Filter: DateSearch,
            filter: lessThanEqualToFn
          },
          {
            Header: 'Status',
            accessor: 'verified',
            Cell: (props: { value: { index: number; value: string; postID: string } }) =>
              StatusCell(props, addressData),
            Filter: SelectColumnFilter,
            filter: getStatusFn
          }
        ]
      }
    ],
    [addressData]
  )

  const tableLimit = 10

  return (
    <OpportunitiesTable
      profile={profile}
      handleQueryComplete={(data: any) => {
        return data?.publications?.items.filter((i: any) => {
          return (
            i.metadata.attributes[0].value === 'comment' &&
            i.commentOn.metadata.attributes[0].value === 'opportunities'
          )
        })
      }}
      getColumns={(add: string[]) => {
        setAddressData(add)
        return columns
      }}
      query={ProfileFeedDocument}
      request={{
        publicationTypes: [PublicationTypes.Comment],
        profileId: profile?.id,
        limit: tableLimit
      }}
    />
  )
}

export default OpportunitiesFeed
