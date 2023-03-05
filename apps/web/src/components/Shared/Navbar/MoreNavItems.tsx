import { Menu } from '@headlessui/react'
import { CashIcon, ClockIcon, UserIcon, UsersIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IS_MAINNET } from 'data/constants'
import { useAppStore } from 'src/store/app'

import MenuTransition from '../MenuTransition'
import { NextLink } from './MenuItems'
import Contact from './NavItems/Contact'
import ReportBug from './NavItems/ReportBug'

const MoreNavItems: FC = () => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { t } = useTranslation('common')

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <Menu.Button
            className={clsx(
              'w-full text-left px-2 md:px-3 py-1 rounded-md font-bold cursor-pointer text-sm tracking-wide',
              {
                'text-black dark:text-white bg-gray-200 dark:bg-gray-800': open,
                'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800':
                  !open
              }
            )}
          >
            {t('More')}
          </Menu.Button>
          <MenuTransition>
            <Menu.Items
              static
              className="absolute py-1 mt-2 w-52 bg-white rounded-xl border shadow-sm dark:bg-gray-900 focus:outline-none dark:border-gray-700/80"
            >
              {currentProfile ? (
                <>
                  <Menu.Item
                    as={NextLink}
                    href="/new/group"
                    className={({ active }: { active: boolean }) =>
                      clsx({ 'dropdown-active': active }, 'menu-item')
                    }
                  >
                    <div className="flex items-center space-x-1.5">
                      <UsersIcon className="w-4 h-4" />
                      <div>{t('Create group')}</div>
                    </div>
                  </Menu.Item>
                  <Menu.Item
                    as={NextLink}
                    href="/new/fundraise"
                    className={({ active }: { active: boolean }) =>
                      clsx({ 'dropdown-active': active }, 'menu-item')
                    }
                  >
                    <div className="flex items-center space-x-1.5">
                      <CashIcon className="w-4 h-4" />
                      <div>{t('Create fundraise')}</div>
                    </div>
                  </Menu.Item>
                  <Menu.Item
                    as={NextLink}
                    href="/new/hours"
                    className={({ active }: { active: boolean }) =>
                      clsx({ 'dropdown-active': active }, 'menu-item')
                    }
                  >
                    <div className="flex items-center space-x-1.5">
                      <ClockIcon className="w-4 h-4" />
                      <div>{t('Verify Hours')}</div>
                    </div>
                  </Menu.Item>

                  <Menu.Item
                    as={NextLink}
                    href="/new/opportunity"
                    className={({ active }: { active: boolean }) =>
                      clsx({ 'dropdown-active': active }, 'menu-item')
                    }
                  >
                    <div className="flex items-center space-x-1.5">
                      <ClockIcon className="w-4 h-4" />
                      <div>{t('Create Volunteer Opportunity')}</div>
                    </div>
                  </Menu.Item>

                  {!IS_MAINNET && (
                    <Menu.Item
                      as={NextLink}
                      href="/new/profile"
                      className={({ active }: { active: boolean }) =>
                        clsx({ 'dropdown-active': active }, 'menu-item')
                      }
                    >
                      <div className="flex items-center space-x-1.5">
                        <UserIcon className="w-4 h-4" />
                        <div>{t('Create profile')}</div>
                      </div>
                    </Menu.Item>
                  )}
                  <div className="divider" />
                </>
              ) : null}
              <Menu.Item
                as="div"
                className={({ active }: { active: boolean }) =>
                  clsx({ 'dropdown-active': active }, 'm-2 rounded-lg')
                }
              >
                <Contact />
              </Menu.Item>
              <Menu.Item
                as="div"
                className={({ active }: { active: boolean }) =>
                  clsx({ 'dropdown-active': active }, 'm-2 rounded-lg')
                }
              >
                <ReportBug />
              </Menu.Item>
            </Menu.Items>
          </MenuTransition>
        </>
      )}
    </Menu>
  )
}

export default MoreNavItems
