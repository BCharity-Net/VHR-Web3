import { EmojiHappyIcon } from '@heroicons/react/outline';
import getProfileAttribute from '@lib/getProfileAttribute';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import { useAppStore } from 'src/store/app';
import { useGlobalModalStateStore } from 'src/store/modals';

interface Props {
  className?: string;
};

const Status: FC<Props> = ({ className = '' }) => {
  const currentProfile = useAppStore((state) => state.currentProfile);
  const setShowStatusModal = useGlobalModalStateStore((state) => state.setShowStatusModal);

  const statusEmoji = getProfileAttribute(currentProfile?.attributes, 'statusEmoji');
  const statusMessage = getProfileAttribute(currentProfile?.attributes, 'statusMessage');
  const hasStatus = statusEmoji && statusMessage;

  return (
    <button
      type="button"
      className={clsx(
        'flex text-sm px-4 items-center space-x-2 py-1.5 w-full text-gray-700 dark:text-gray-200',
        className
      )}
      onClick={() => setShowStatusModal(true)}
    >
      {hasStatus ? (
        <>
          <span>{statusEmoji}</span>
          <span className="truncate">{statusMessage}</span>
        </>
      ) : (
        <>
          <EmojiHappyIcon className="w-4 h-4" />
          <span>
            Set status
          </span>
        </>
      )}
    </button>
  );
};

export default Status;
