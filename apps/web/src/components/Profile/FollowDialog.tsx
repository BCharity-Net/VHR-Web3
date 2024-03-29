import Follow from '@components/Shared/Follow';
import Slug from '@components/Shared/Slug';
import SuperFollow from '@components/Shared/SuperFollow';
import type { Profile } from 'lens';
import formatHandle from 'lib/formatHandle';
import getAvatar from 'lib/getAvatar';
import type { Dispatch, FC } from 'react';
import { Button, Image } from 'ui';

interface Props {
  profile: Profile;
  setShowFollowModal: Dispatch<boolean>;
  setFollowing: Dispatch<boolean | null>;
}

const FollowModal: FC<Props> = ({ profile, setFollowing, setShowFollowModal }) => {
  const followType = profile?.followModule?.__typename;

  return (
    <div className="p-5">
      <div className="flex justify-between text-lg font-bold">
        <span className="flex">
          <Image
            onError={({ currentTarget }) => {
              currentTarget.src = getAvatar(profile, false);
            }}
            src={getAvatar(profile)}
            className="mr-2 h-10 w-10 rounded-full border bg-gray-200 dark:border-gray-700"
            alt={formatHandle(profile?.handle)}
          />
          <Slug className="flex items-center" slug={formatHandle(profile?.handle)} prefix="@" />{' '}
        </span>
        <span className="flex">
          {followType === 'FeeFollowModuleSettings' ? (
            <div className="flex space-x-2">
              <SuperFollow profile={profile} setFollowing={setFollowing} showText />
            </div>
          ) : (
            <div className="flex space-x-2">
              <Follow profile={profile} setFollowing={setFollowing} showText outline={false} />
            </div>
          )}
          <Button
            className="ml-3 !px-3 !py-1.5 text-sm"
            outline
            onClick={() => {
              setShowFollowModal(false);
            }}
            aria-label={`Not now`}
          >
            Not now
          </Button>
        </span>
      </div>
    </div>
  );
};

export default FollowModal;
