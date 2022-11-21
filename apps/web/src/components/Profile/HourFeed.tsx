/* eslint-disable react/jsx-key */
import type { Profile } from 'lens'
import { ProfileFeedDocument, PublicationTypes } from 'lens'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import VHRTable from './VHRTable'
import { ProfileCell, StatusCell, TotalGoodCell, TotalHoursCell } from './VHRTable/Cells'
import {
  DateSearch,
  FuzzySearch,
  fuzzyTextFilterFn,
  getStatusFn,
  greaterThanEqualToFn,
  lessThanEqualToFn,
  NoFilter,
  SelectColumnFilter
} from './VHRTable/Filters'

interface Props {
  profile: Profile
}

const HourFeed: FC<Props> = ({ profile }) => {
  const [addressData, setAddressData] = useState<string[]>([])

  const columns = useMemo(
    () => [
      {
        Header: 'VHR Submissions',
        columns: [
          {
            Header: 'Organization',
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
            Header: 'GOOD',
            accessor: 'totalGood',
            Cell: TotalGoodCell,
            Filter: NoFilter
          },
          {
            Header: 'Total Hours',
            accessor: 'totalHours',
            Cell: TotalHoursCell,
            Filter: NoFilter
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
    <VHRTable
      profile={profile}
      handleQueryComplete={(data: any) => {
        return data?.publications?.items.filter((i: any) => {
          return i.metadata.attributes[0].value === 'hours'
        })
      }}
      getColumns={(add: string[]) => {
        setAddressData(add)
        return columns
      }}
      query={ProfileFeedDocument}
      request={{
        publicationTypes: [PublicationTypes.Post],
        profileId: profile?.id,
        limit: tableLimit
      }}
      from={false}
    />
  )
}

export default HourFeed
