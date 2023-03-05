import { SupportIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClick?: () => void;
  className?: string;
};

const Contact: FC<Props> = ({ onClick, className = '' }) => {
  const { t } = useTranslation('common')

  return (
    <Link
      href="/contact"
      className={clsx(
        'flex items-center px-4 py-1.5 space-x-1.5 text-sm w-full text-gray-700 dark:text-gray-200',
        className
      )}
      onClick={onClick}
    >
      <SupportIcon className="w-4 h-4" />
      <div>{t('Contact Button')}</div>
    </Link>
  );
};

export default Contact;
