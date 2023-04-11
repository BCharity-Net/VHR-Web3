import Markup from '@components/Shared/Markup';
import { EmojiSadIcon } from '@heroicons/react/outline';
import { formatTime } from '@lib/formatTime';
import type { DecodedMessage } from '@xmtp/xmtp-js';
import clsx from 'clsx';
import dayjs from 'dayjs';
import type { Profile } from 'lens';
import formatHandle from 'lib/formatHandle';
import getAvatar from 'lib/getAvatar';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { useInView } from 'react-cool-inview';
import { Card, Image } from 'ui';

const isOnSameDay = (d1?: Date, d2?: Date): boolean => {
  return dayjs(d1).format('YYYYMMDD') === dayjs(d2).format('YYYYMMDD');
};

const formatDate = (d?: Date) => dayjs(d).format('MMMM D, YYYY');

interface MessageTileProps {
  message: DecodedMessage;
  profile?: Profile;
  currentProfile?: Profile | null;
}

const MessageTile: FC<MessageTileProps> = ({ message, profile, currentProfile }) => {
  const address = currentProfile?.ownedBy;

  return (
    <div
      className={clsx(
        address === message.senderAddress ? 'items-end mr-4' : 'items-start',
        'flex flex-col mx-auto mb-4'
      )}
    >
      <div className="flex max-w-[60%]">
        {address !== message.senderAddress && (
          <Image
            onError={({ currentTarget }) => {
              currentTarget.src = getAvatar(profile, false);
            }}
            src={getAvatar(profile)}
            className="h-10 w-10 bg-gray-200 rounded-full border dark:border-gray-700/80 mr-2"
            alt={formatHandle(profile?.handle)}
          />
        )}
        <div
          className={clsx(
            address === message.senderAddress ? 'bg-brand-500' : 'bg-gray-100 dark:bg-gray-700',
            'px-4 py-2 rounded-lg w-full'
          )}
        >
          <span
            className={clsx(
              address === message.senderAddress && 'text-white',
              'block text-md break-words linkify-message'
            )}
          >
            {message.error ? `Error: ${message.error?.message}` : <Markup>{message.content}</Markup> ?? ''}
          </span>
        </div>
      </div>
      <div className={clsx(address !== message.senderAddress ? 'ml-12' : '')}>
        <span className="text-xs place-self-end text-gray-400" title={formatTime(message.sent)}>
          {dayjs(message.sent).fromNow()}
        </span>
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

const DateDividerBorder: FC<Props> = ({ children }) => (
  <>
    <div className="grow h-0.5 bg-gray-300/25" />
    {children}
    <div className="grow h-0.5 bg-gray-300/25" />
  </>
);

const DateDivider: FC<{ date?: Date }> = ({ date }) => (
  <div className="flex align-items-center items-center p-4 pl-2 pt-0">
    <DateDividerBorder>
      <span className="mx-11 flex-none text-gray-300 text-sm font-bold">{formatDate(date)}</span>
    </DateDividerBorder>
  </div>
);

const MissingXmtpAuth: FC = () => (
  <Card as="aside" className="mb-2 mr-4 border-gray-400 !bg-gray-300 !bg-opacity-20 space-y-2.5 p-5">
    <div className="flex items-center space-x-2 font-bold">
      <EmojiSadIcon className="w-5 h-5" />
      <p>This fren hasn't enabled DMs yet</p>
    </div>
    <p className="text-sm leading-[22px]">You can't send them a message until they enable DMs.</p>
  </Card>
);

const ConversationBeginningNotice: FC = () => (
  <div className="flex align-items-center justify-center mt-6 pb-4">
    <span className="text-gray-300 text-sm font-bold">This is the beginning of the conversation</span>
  </div>
);

const LoadingMore: FC = () => (
  <div className="p-1 mt-6 text-center text-gray-300 font-bold text-sm">Loading...</div>
);

interface MessageListProps {
  messages: DecodedMessage[];
  fetchNextMessages: () => void;
  profile?: Profile;
  currentProfile?: Profile | null;
  hasMore: boolean;
  missingXmtpAuth: boolean;
}

const MessagesList: FC<MessageListProps> = ({
  messages,
  fetchNextMessages,
  profile,
  currentProfile,
  hasMore,
  missingXmtpAuth
}) => {
  let lastMessageDate: Date | undefined;
  const { observe } = useInView({
    onChange: async ({ inView }) => {
      if (!inView) {
        return;
      }

      fetchNextMessages();
    }
  });

  return (
    <div className="flex-grow flex h-[75%]">
      <div className="relative w-full h-full pl-4 flex">
        <div className="flex flex-col-reverse h-full overflow-y-auto w-full">
          {missingXmtpAuth && <MissingXmtpAuth />}
          <span className="flex flex-col-reverse overflow-y-auto overflow-x-hidden">
            {messages?.map((msg: DecodedMessage, index) => {
              const dateHasChanged = lastMessageDate ? !isOnSameDay(lastMessageDate, msg.sent) : false;
              const messageDiv = (
                <div key={`${msg.id}_${index}`} ref={index === messages.length - 1 ? observe : null}>
                  <MessageTile currentProfile={currentProfile} profile={profile} message={msg} />
                  {dateHasChanged ? <DateDivider date={lastMessageDate} /> : null}
                </div>
              );
              lastMessageDate = msg.sent;
              return messageDiv;
            })}
            {hasMore ? <LoadingMore /> : <ConversationBeginningNotice />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(MessagesList);
