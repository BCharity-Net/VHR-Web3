import { PencilAltIcon, UsersIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface MenuProps {
  children: ReactNode
  current: boolean
  url: string
}

const Menu: FC<MenuProps> = ({ children, current, url }) => (
  <Link
    href={url}
    className={clsx(
      'flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-brand-100 hover:text-brand dark:hover:bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100',
      { 'bg-brand-100 text-brand font-bold': current }
    )}
  >
    {children}
  </Link>
)

const Sidebar: FC = () => {
  const { t } = useTranslation('common')
  const { query } = useRouter()
  const searchText = Array.isArray(query.q)
    ? encodeURIComponent(query.q.join(' '))
    : encodeURIComponent(query.q || '')

  return (
    <div className="mb-4 space-y-1.5 px-3 sm:px-0">
      <Menu current={query.type === 'pubs'} url={`/search?q=${searchText}&type=pubs`}>
        <PencilAltIcon className="w-4 h-4" />
        <div>{t('Publications')}</div>
      </Menu>
      <Menu current={query.type === 'profiles'} url={`/search?q=${searchText}&type=profiles`}>
        <UsersIcon className="w-4 h-4" />
        <div>{t('Profiles')}</div>
      </Menu>
    </div>
  )
}

export default Sidebar
