import Message from '@components/Profile/Message'
import Follow from '@components/Shared/Follow'
import Markup from '@components/Shared/Markup'
import Slug from '@components/Shared/Slug'
import SuperFollow from '@components/Shared/SuperFollow'
import Unfollow from '@components/Shared/Unfollow'
import ProfileStaffTool from '@components/StaffTools/Panels/Profile'
import useStaffMode from '@components/utils/hooks/useStaffMode'
import { CogIcon, HashtagIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import buildConversationId from '@lib/buildConversationId'
import { buildConversationKey } from '@lib/conversationKey'
import { RARIBLE_URL, STATIC_IMAGES_URL } from 'data/constants'
import getEnvConfig from 'data/utils/getEnvConfig'
import type { Profile } from 'lens'
import formatAddress from 'lib/formatAddress'
import formatHandle from 'lib/formatHandle'
import getAvatar from 'lib/getAvatar'
import getProfileAttribute from 'lib/getProfileAttribute'
import isStaff from 'lib/isStaff'
import isVerified from 'lib/isVerified'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import type { Dispatch, FC, ReactElement } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from 'src/store/app'
import { useMessageStore } from 'src/store/message'
import { FollowSource } from 'src/tracking'
import { Button, Image, Modal, Tooltip } from 'ui'

import Badges from './Badges'
import Followerings from './Followerings'
import MutualFollowers from './MutualFollowers'
import MutualFollowersList from './MutualFollowers/List'

interface Props {
  profile: Profile
  following: boolean
  setFollowing: Dispatch<boolean>
}

const Details: FC<Props> = ({ profile, following, setFollowing }) => {
  const { t } = useTranslation('common')
  const currentProfile = useAppStore((state) => state.currentProfile)
  const [showMutualFollowersModal, setShowMutualFollowersModal] = useState(false)
  const { allowed: staffMode } = useStaffMode()
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const addProfileAndSelectTab = useMessageStore((state) => state.addProfileAndSelectTab)

  const onMessageClick = () => {
    if (!currentProfile) {
      return
    }
    const conversationId = buildConversationId(currentProfile.id, profile.id)
    const conversationKey = buildConversationKey(profile.ownedBy, conversationId)
    addProfileAndSelectTab(conversationKey, profile)
    router.push(`/messages/${conversationKey}`)
  }

  const hasOnChainIdentity = profile?.onChainIdentity?.proofOfHumanity || profile?.onChainIdentity?.ens?.name

  const MetaDetails = ({
    children,
    icon,
    dataTestId = ''
  }: {
    children: ReactElement;
    icon: ReactElement;
    dataTestId?: string;
  }) => (
    <div className="flex items-center gap-2" data-testid={dataTestId}>
      {icon}
      <div className="truncate text-md">{children}</div>
    </div>
  )

  const followType = profile?.followModule?.__typename

  return (
    <div className="px-5 mb-4 space-y-5 sm:px-0">
      <div className="relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-52 sm:h-52">
        <Image
          onError={({ currentTarget }) => {
            currentTarget.src = getAvatar(profile, false);
          }}
          src={getAvatar(profile)}
          className="w-32 h-32 bg-gray-200 rounded-xl ring-8 ring-gray-50 sm:w-52 sm:h-52 dark:bg-gray-700 dark:ring-black"
          height={128}
          width={128}
          alt={formatHandle(profile?.handle)}
          data-testid="profile-avatar"
        />
      </div>
      <div className="py-2 space-y-1">
        <div className="flex gap-1.5 items-center text-2xl font-bold">
          <div className="truncate" data-testid="profile-name">
            {profile?.name ?? formatHandle(profile?.handle)}
          </div>
          {isVerified(profile?.id) && (
            <Tooltip content="Verified">
              <BadgeCheckIcon className="w-6 h-6 text-brand" data-testid="profile-verified-badge" />
            </Tooltip>
          )}
        </div>
        <div className="flex items-center space-x-3" data-testid="profile-handle">
          {profile?.name ? (
            <Slug className="text-sm sm:text-base" slug={formatHandle(profile?.handle)} prefix="@" />
          ) : (
            <Slug className="text-sm sm:text-base" slug={formatAddress(profile?.ownedBy)} />
          )}
          {currentProfile && currentProfile?.id !== profile?.id && profile?.isFollowing && (
            <div className="rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-gray-700">
              {t('Follows you')}
            </div>
          )}
        </div>
      </div>
      {profile?.bio && (
        <div className="markup linkify text-md mr-0 break-words sm:mr-10" data-testid="profile-bio">
          <Markup>{profile?.bio}</Markup>
        </div>
      )}
      <div className="space-y-5">
        <Followerings profile={profile} />
        <div>
          {currentProfile?.id === profile?.id ? (
            <Link href="/settings">
              <Button variant="secondary" icon={<CogIcon className="w-5 h-5" />} outline>
                Edit Profile
              </Button>
            </Link>
          ) : followType !== 'RevertFollowModuleSettings' ? (
            following ? (
              <div className="flex space-x-2">
                <Unfollow profile={profile} setFollowing={setFollowing} showText />
                {followType === 'FeeFollowModuleSettings' && (
                  <SuperFollow profile={profile} setFollowing={setFollowing} again />
                )}
                {currentProfile && <Message onClick={onMessageClick} />}
              </div>
            ) : followType === 'FeeFollowModuleSettings' ? (
              <div className="flex space-x-2">
                <SuperFollow profile={profile} setFollowing={setFollowing} showText />
                {currentProfile && <Message onClick={onMessageClick} />}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Follow
                  profile={profile}
                  setFollowing={setFollowing}
                  followSource={FollowSource.PROFILE_PAGE}
                  showText
                />
                {currentProfile && <Message onClick={onMessageClick} />}
              </div>
            )
          ) : null}
        </div>
        {currentProfile?.id !== profile?.id && (
          <>
            <MutualFollowers setShowMutualFollowersModal={setShowMutualFollowersModal} profile={profile} />
            <Modal
              title="Followers you know"
              icon={<UsersIcon className="w-5 h-5 text-brand" />}
              show={showMutualFollowersModal}
              onClose={() => setShowMutualFollowersModal(false)}
            >
              <MutualFollowersList profileId={profile?.id} />
            </Modal>
          </>
        )}
        <div className="w-full divider" />
        <div className="space-y-2">
          <MetaDetails icon={<HashtagIcon className="w-4 h-4"/>} dataTestId="profile-meta-id">
            <Tooltip content={`#${profile?.id}`}>
              <a
                href={`${RARIBLE_URL}/token/polygon/${getEnvConfig().lensHubProxyAddress}:${parseInt(
                  profile?.id
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                {parseInt(profile?.id)}
              </a>
            </Tooltip>
          </MetaDetails>
          {getProfileAttribute(profile?.attributes, 'location') && (
            <MetaDetails icon={<LocationMarkerIcon className="w-4 h-4" />} dataTestId="profile-meta-location">
              {getProfileAttribute(profile?.attributes, 'location') as any}
            </MetaDetails>
          )}
          {profile?.onChainIdentity?.ens?.name && (
            <MetaDetails
              icon={
                <img
                  src={`${STATIC_IMAGES_URL}/brands/ens.svg`}
                  className="w-4 h-4"
                  height={16}
                  width={16}
                  alt="ENS Logo"
                />
              }
              dataTestId="profile-meta-ens"
            >
              {profile?.onChainIdentity?.ens?.name}
            </MetaDetails>
          )}
          {getProfileAttribute(profile?.attributes, 'website') && (
            <MetaDetails
              icon={
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getProfileAttribute(
                    profile?.attributes,
                    'website'
                  )
                    ?.replace('https://', '')
                    .replace('http://', '')}`}
                  className="w-4 h-4 rounded-full"
                  height={16}
                  width={16}
                  alt="Website"
                />
              }
              dataTestId="profile-meta-website"
            >
              <a
                href={`https://${getProfileAttribute(profile?.attributes, 'website')
                  ?.replace('https://', '')
                  .replace('http://', '')}`}
                target="_blank"
                rel="noreferrer noopener me"
              >
                {getProfileAttribute(profile?.attributes, 'website')?.replace('https://', '').replace('http://', '')}
              </a>
            </MetaDetails>
          )}
          {getProfileAttribute(profile?.attributes, 'twitter') && (
            <MetaDetails
              icon={
                resolvedTheme === 'dark' ? (
                  <img
                    src={`${STATIC_IMAGES_URL}/brands/twitter-light.svg`}
                    className="w-4 h-4"
                    height={16}
                    width={16}
                    alt="Twitter Logo"
                  />
                ) : (
                  <img
                    src={`${STATIC_IMAGES_URL}/brands/twitter-dark.svg`}
                    className="w-4 h-4"
                    height={16}
                    width={16}
                    alt="Twitter Logo"
                  />
                )
              }
              dataTestId="profile-meta-twitter"
            >
              <a
                href={`https://twitter.com/${getProfileAttribute(profile?.attributes, 'twitter')}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {getProfileAttribute(profile?.attributes, 'twitter')?.replace('https://twitter.com/', '')}
              </a>
            </MetaDetails>
          )}
        </div>
      </div>
      {hasOnChainIdentity && (
        <>
          <div className="w-full divider" />
          <div className="flex flex-row gap-3">
            {profile?.onChainIdentity?.proofOfHumanity && (
              <img
                className="drop-shadow-xl"
                height={75}
                width={75}
                src={`${STATIC_IMAGES_URL}/badges/poh.png`}
                alt="POH Badge"
              />
            )}
            {profile?.onChainIdentity?.ens?.name && (
              <img
                className="drop-shadow-xl"
                height={75}
                width={75}
                src={`${STATIC_IMAGES_URL}/badges/ens.png`}
                alt="ENS Badge"
              />
            )}
          </div>
        </>
      )}
      <Badges profile={profile} />
      {isStaff(currentProfile?.id) && staffMode && <ProfileStaffTool profile={profile} />}
    </div>
  )
}

export default Details
