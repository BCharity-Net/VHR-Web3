/* eslint-disable react/jsx-key */
import { gql, useQuery } from '@apollo/client'
import type { BCharityPublication } from 'src/types/index.ts /types'
import { PaginatedResultInfo, Profile } from 'lens'
import { CommentFields } from 'lens/documents/CommentFields'
import { MirrorFields } from 'lens/documents/MirrorFields'
import { PostFields } from 'lens/documents/PostFields'
import type { FC } from 'react'
import { useState } from 'react'
import { useAppStore } from 'src/store/app'

import TotalDonors from '../FundraiseTable/TotalDonors'

const PROFILE_FEED_QUERY = gql`
  query ProfileFeed(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${PostFields}
  ${CommentFields}
  ${MirrorFields}
`

interface Props {
  profile: Profile
  callback?: Function
}

export interface Data {
  name: string
  category: string
  funds: number
  goal: string
  date: string
  postID: string
}

const OrgDonors: FC<Props> = ({ profile, callback }) => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [pageInfo, setPageInfo] = useState<PaginatedResultInfo>()
  const [publications, setPublications] = useState<BCharityPublication[]>([])
  const [onEnter, setOnEnter] = useState(false)
  const [tableData, setTableData] = useState<Data[]>([])
  const [pubIdData, setPubIdData] = useState<string[]>([])
  const [vhrTxnData, setVhrTxnData] = useState<string[]>([])
  const [addressData, setAddressData] = useState<string[]>([])

  const handleTableData = async (data: any) => {
    return Promise.all(
      data.map(async (i: any, index: number) => {
        return {
          name: i.metadata.name,
          category: i.metadata.attributes[4]?.value ?? '',
          funds: index,
          goal: i.metadata.attributes[1].value,
          vhr: Math.floor(i.metadata.attributes[1].value / 3),
          date: i.createdAt.split('T')[0],
          postID: i.id
        }
      })
    )
  }

  const tableLimit = 50
  const { fetchMore } = useQuery(PROFILE_FEED_QUERY, {
    variables: {
      request: {
        publicationTypes: 'POST',
        profileId: profile?.id,
        limit: tableLimit
      },
      reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
      profileId: currentProfile?.id ?? null
    },
    skip: !profile?.id,
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (onEnter) {
        tableData.splice(0, tableData.length)
        setTableData(tableData)
        setOnEnter(false)
      }
      const notifs = data?.publications?.items.filter((i: any) => {
        return i.metadata.attributes[0].value === 'fundraise'
      })
      setPageInfo(data?.publications?.pageInfo)
      setPublications(data?.publications?.items)
      handleTableData(notifs).then((result: Data[]) => {
        setTableData([...tableData, ...result])
        if (tableData.length != tableLimit) {
          fetchMore({
            variables: {
              request: {
                publicationTypes: 'POST',
                profileId: profile?.id,
                limit: tableLimit,
                cursor: pageInfo?.next
              },
              reactionRequest: currentProfile ? { profileId: currentProfile?.id } : null,
              profileId: currentProfile?.id ?? null
            }
          }).then((result: any) => {
            const results = data?.publications?.items.filter((i: any) => {
              return i.metadata.attributes[0].value === 'fundraise'
            })
            const pubId: string[] = [],
              vhrTxn: string[] = [],
              addresses: string[] = []
            results.map((i: any) => {
              pubId.push(i.id)
              vhrTxn.push('')
            })
            setPubIdData([...pubIdData, ...pubId])
            setVhrTxnData([...vhrTxnData, ...vhrTxn])
            setAddressData([...addressData, ...addresses])
            setPageInfo(result?.data?.publications?.pageInfo)
            setPublications([...publications, ...results])
          })
        }
      })
      const pubId: string[] = [],
        vhrTxn: string[] = [],
        addresses: string[] = []
      notifs.map((i: any) => {
        pubId.push(i.id)
        vhrTxn.push('')
      })
      setPubIdData([...pubIdData, ...pubId])
      setVhrTxnData([...vhrTxnData, ...vhrTxn])
      setAddressData([...addressData, ...addresses])
      setOnEnter(true)
    }
  })

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <TotalDonors
      pubIdData={pubIdData}
      callback={(donors: number) => {
        if (callback) {
          callback(donors)
        }
      }}
      from={true}
    />
  )
}

export default OrgDonors
