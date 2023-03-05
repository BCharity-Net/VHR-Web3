import { ShieldCheckIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';

interface Props {
  className?: string;
};

const Mod: FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={clsx(
        'flex items-center space-x-1.5 text-sm w-full text-gray-700 dark:text-gray-200',
        className
      )}
    >
      <ShieldCheckIcon className="w-4 h-4" />
      <div>
        Moderation
      </div>
    </div>
  );
};

export default Mod;
