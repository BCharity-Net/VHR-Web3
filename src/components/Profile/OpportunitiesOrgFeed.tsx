/* eslint-disable react/jsx-key */
import { Profile, ProfileFeedDocument, PublicationTypes } from '@generated/types'
import { FC, useMemo } from 'react'

import OpportunitiesTable from './OpportunitiesTable'
import { PostCell } from './OpportunitiesTable/Cells'
import {
  DateSearch,
  FuzzySearch,
  fuzzyTextFilterFn,
  greaterThanEqualToFn,
  lessThanEqualToFn,
  NoFilter
} from './OpportunitiesTable/Filters'

interface Props {
  profile: Profile
}

const OpportunitiesOrgFeed: FC<Props> = ({ profile }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Volunteer Opportunities',
        columns: [
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
            Header: 'Number of Volunteers',
            accessor: 'volunteers',
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
            Header: 'Total Hours',
            accessor: 'totalHours',
            Filter: FuzzySearch,
            filter: fuzzyTextFilterFn
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
    <OpportunitiesTable
      profile={profile}
      handleQueryComplete={(data: any) => {
        return data?.publications?.items.filter((i: any) => {
          return i.metadata.attributes[0].value === 'opportunities'
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

export default OpportunitiesOrgFeed
