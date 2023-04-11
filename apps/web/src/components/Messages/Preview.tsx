import { BadgeCheckIcon } from '@heroicons/react/solid';
import { formatTime, getTimeFromNow } from '@lib/formatTime';
import type { DecodedMessage } from '@xmtp/xmtp-js';
import clsx from 'clsx';
import type { Profile } from 'lens';
import formatHandle from 'lib/formatHandle';
import getAvatar from 'lib/getAvatar';
import isVerified from 'lib/isVerified';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useAppStore } from 'src/store/app';
import { Image } from 'ui';

interface Props {
  profile: Profile;
  message: DecodedMessage;
  conversationKey: string;
  isSelected: boolean;
}

const Preview: FC<Props> = ({ profile, message, conversationKey, isSelected }) => {
  const router = useRouter();
  const currentProfile = useAppStore((state) => state.currentProfile);
  const address = currentProfile?.ownedBy;

  const onConversationSelected = (profileId: string) => {
    router.push(profileId ? `/messages/${conversationKey}` : '/messages');
  };

  return (
    <div
      className={clsx(
        'py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800',
        isSelected && 'bg-gray-50 dark:bg-gray-700'
      )}
      onClick={() => onConversationSelected(profile.id)}
    >
      <div className="flex justify-between space-x-3 px-5">
        <Image
          onError={({ currentTarget }) => {
            currentTarget.src = getAvatar(profile, false);
          }}
          src={getAvatar(profile)}
          loading="lazy"
          className="w-10 h-10 bg-gray-200 rounded-full border dark:border-gray-700/80"
          height={40}
          width={40}
          alt={formatHandle(profile?.handle)}
        />
        <div className="w-full">
          <div className="flex w-full justify-between space-x-1">
            <div className="flex gap-1 items-center max-w-sm">
              <div className="text-md line-clamp-1">{profile?.name ?? formatHandle(profile.handle)}</div>
              {isVerified(profile?.id) && <BadgeCheckIcon className="min-w-fit w-4 h-4 text-brand" />}
            </div>
            {message.sent && (
              <span className="min-w-fit pt-0.5 text-xs text-gray-500" title={formatTime(message.sent)}>
                {getTimeFromNow(message.sent)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500 line-clamp-1 break-all">
            {address === message.senderAddress && 'You: '} {message.content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
