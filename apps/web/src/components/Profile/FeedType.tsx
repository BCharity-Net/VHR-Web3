import {
  CashIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  ClockIcon,
  FilmIcon,
  PencilAltIcon,
  PhotographIcon
} from '@heroicons/react/outline'
import { Mixpanel } from '@lib/mixpanel'
import type { Profile } from 'lens'
import type { Dispatch, FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getTotalVHRSent } from 'src/alchemy'
import { VHR_TOKEN } from 'data/constants'
import { ProfileFeedType } from 'src/enums'
import { PROFILE } from 'src/tracking'
import { TabButton } from 'ui'
import isVerified from 'utils/isVerified'
import { useBalance } from 'wagmi'

import OrgDonors from './Count/OrgDonors'
import OrgGOOD from './Count/OrgGOOD'
import OrgVerifiedHours from './Count/OrgVerifiedHours'
import MediaFilter from './Filters/MediaFilter'

interface Props {
  address: string
  id: string
  setFeedType: Dispatch<string>
  feedType: string
  profile: Profile
}

const FeedType: FC<Props> = ({ address, id, setFeedType, feedType, profile }) => {
  const { t } = useTranslation('common')
  const [orgVerifiedHours, setOrgVerifiedHours] = useState(0)
  const [orgVolunteers, setOrgVolunteers] = useState(0)
  const [orgDonors, setOrgDonors] = useState(0)
  const [orgGood, setOrgGood] = useState(0)
  const { data: vhrBalance } = useBalance({
    address: profile.ownedBy,
    token: VHR_TOKEN,
    watch: true
  })
  const switchTab = (type: string) => {
    setFeedType(type);
    Mixpanel.track(PROFILE.SWITCH_PROFILE_FEED_TAB, {
      profile_feed_type: type.toLowerCase()
    })
  }

  useEffect(() => {
    getTotalVHRSent(profile.ownedBy).then((value) => {
      setOrgVerifiedHours(value)
    })
  })

  interface FeedLabelProps {
    name: string
  }

  const FeedLabel: FC<FeedLabelProps> = ({ name }) => (
    <button
      type="button"
      className={
        'flex rounded-lg px-4 sm:px-3 py-2 sm:py-1 text-brand hover:bg-brand-100 dark:hover:bg-opacity-20 hover:bg-opacity-100'
      }
      aria-label={name}
    >
      <div className="hidden sm:block">{name}</div>
    </button>
  )

  return (
    <>
      {isVerified(id) && (
        <>
          <OrgVerifiedHours
            profile={profile}
            callback={(hours: number, volunteers: number) => {
              setOrgVolunteers(volunteers)
            }}
          />
          <OrgDonors
            profile={profile}
            callback={(donors: number) => {
              setOrgDonors(donors)
            }}
          />
          <OrgGOOD
            profile={profile}
            callback={(good: number) => {
              setOrgGood(good)
            }}
          />
        </>
      )}
      <div className="flex justify-between items-center">
        <div className="flex overflow-x-auto gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
          <TabButton
            name={t('Feed')}
            icon={<PencilAltIcon className="w-4 h-4" />}
            active={feedType === 'FEED'}
            type={ProfileFeedType.Feed.toLowerCase()}
            onClick={() => switchTab(ProfileFeedType.Feed)}
          />
          <TabButton
            name={t('Replies')}
            icon={<ChatAlt2Icon className="w-4 h-4" />}
            active={feedType === 'REPLIES'}
            type={ProfileFeedType.Replies.toLowerCase()}
            onClick={() => switchTab(ProfileFeedType.Replies)}
          />
          <TabButton
            name="Media"
            icon={<FilmIcon className="w-4 h-4" />}
            active={feedType === 'MEDIA'}
            type={ProfileFeedType.Media.toLowerCase()}
            onClick={() => switchTab(ProfileFeedType.Media)}
          />
          <TabButton
            name="NFTs"
            icon={<PhotographIcon className="w-4 h-4" />}
            active={feedType === 'NFT'}
            type={ProfileFeedType.Nft.toLowerCase()}
            onClick={() => switchTab(ProfileFeedType.Nft)}
          />
        </div>
        <div>{feedType === 'MEDIA' && <MediaFilter />}</div>
      </div>
      <div className="w-[800px] flex flex-wrap gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
        {isVerified(id) ? (
          <>
            <TabButton
              name="OrgFunds"
              icon={<CashIcon className="w-4 h-4" />}
              active={feedType === 'funds-org'}
              onClick={() => {
                setFeedType('funds-org')
              }}
            />
            <TabButton
              name="OrgVHR"
              icon={<ClockIcon className="w-4 h-4" />}
              active={feedType === 'org'}
              count={orgVerifiedHours}
              onClick={() => {
                setFeedType('org')
              }}
            />
            <TabButton
              name="OrgOpp"
              icon={<ClipboardListIcon className="w-4 h-4" />}
              active={feedType === 'org-opp'}
              onClick={() => {
                setFeedType('org-opp')
              }}
            />
            <FeedLabel name={`Org Donors: ${orgDonors?.toString() ?? ''}`} />
            <FeedLabel name={`Org Volunteers: ${orgVolunteers?.toString() ?? ''}`} />
            <FeedLabel name={`Org GOOD: ${orgGood?.toFixed(2)?.toString() ?? ''}`} />
          </>
        ) : (
          <>
            <TabButton
              name="Funds"
              icon={<CashIcon className="w-4 h-4" />}
              active={feedType === 'funds'}
              onClick={() => {
                setFeedType('funds')
              }}
            />
            <TabButton
              name="VHR"
              icon={<ClockIcon className="w-4 h-4" />}
              active={feedType === 'vhr'}
              count={vhrBalance !== undefined ? vhrBalance.value.toNumber() : 0}
              onClick={() => {
                setFeedType('vhr')
              }}
            />
            <TabButton
              name="Opportunities"
              icon={<ClipboardListIcon className="w-4 h-4" />}
              active={feedType === 'opp'}
              onClick={() => {
                setFeedType('opp')
              }}
            />
          </>
        )}
      </div>
    </>
  )
}

export default FeedType
