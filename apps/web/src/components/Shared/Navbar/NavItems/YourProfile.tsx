import { UserIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';

interface Props {
  className?: string;
};

const YourProfile: FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={clsx(
        'flex text-sm w-full text-gray-700 dark:text-gray-200 space-x-1.5 items-center',
        className
      )}
    >
      <UserIcon className="w-4 h-4" />
      <div>
        Your Profile
      </div>
    </div>
  );
};

export default YourProfile;
