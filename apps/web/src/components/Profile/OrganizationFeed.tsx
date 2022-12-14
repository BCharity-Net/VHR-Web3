/* eslint-disable react/jsx-key */
import type { Profile } from 'lens'
import { NotificationsDocument } from 'lens'
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

const OrganizationFeed: FC<Props> = ({ profile }) => {
  const [addressData, setAddressData] = useState<string[]>([])

  const columns = useMemo(
    () => [
      {
        Header: 'VHR Verification',
        columns: [
          {
            Header: 'From',
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
        return data?.notifications?.items
          .filter((i: any) => {
            return (
              i.__typename === 'NewMentionNotification' &&
              i.mentionPublication.metadata.attributes[0].value === 'hours' &&
              !i.mentionPublication.hidden
            )
          })
          .map((i: any) => {
            return i.mentionPublication
          })
      }}
      getColumns={(add: string[]) => {
        setAddressData(add)
        return columns
      }}
      query={NotificationsDocument}
      request={{
        profileId: profile?.id,
        limit: tableLimit
      }}
      from={true}
    />
  )
}

export default OrganizationFeed
