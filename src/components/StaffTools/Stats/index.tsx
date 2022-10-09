import { useQuery } from '@apollo/client'
import { Card } from '@components/UI/Card'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import useStaffMode from '@components/utils/hooks/useStaffMode'
import MetaTags from '@components/utils/MetaTags'
import { BCharityStatsDocument, Erc20Amount } from '@generated/types'
import {
  CashIcon,
  ChatAlt2Icon,
  CollectionIcon,
  FireIcon,
  SwitchHorizontalIcon,
  UserAddIcon,
  UsersIcon
} from '@heroicons/react/outline'
import { PencilAltIcon } from '@heroicons/react/solid'
import getTokenImage from '@lib/getTokenImage'
import humanize from '@lib/humanize'
import { Mixpanel } from '@lib/mixpanel'
import { NextPage } from 'next'
import { FC, ReactNode, useEffect } from 'react'
import { APP_NAME, ERROR_MESSAGE } from 'src/constants'
import Custom404 from 'src/pages/404'
import { PAGEVIEW } from 'src/tracking'

import Sidebar from '../Sidebar'

interface StatBoxProps {
  icon: ReactNode
  value: number
  title: string
}

const StatBox: FC<StatBoxProps> = ({ icon, value, title }) => (
  <Card className="px-7 py-4 w-full" forceRounded>
    <div className="flex items-center space-x-2">
      {icon}
      <b className="text-lg">{humanize(value)}</b>
    </div>
    <div className="text-gray-500">{title}</div>
  </Card>
)

const Stats: NextPage = () => {
  const { allowed } = useStaffMode()

  useEffect(() => {
    Mixpanel.track('Pageview', { path: PAGEVIEW.STAFFTOOLS.STATS })
  }, [])

  const { data, loading, error } = useQuery(BCharityStatsDocument, {
    pollInterval: 1000
  })

  if (!allowed) {
    return <Custom404 />
  }

  const stats: any = data?.globalProtocolStats
  const fundraiseStats: any = data?.fundraiseStats

  return (
    <GridLayout>
      <MetaTags title={`Stafftools • ${APP_NAME}`} />
      <GridItemFour>
        <Sidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <Card className="p-5">
          {error ? (
            <b className="text-red-500">{ERROR_MESSAGE}</b>
          ) : loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <section className="space-y-3">
                <h1 className="text-xl font-bold mb-4">Stats</h1>
                <div className="block sm:flex space-y-3 sm:space-y-0 sm:space-x-3 justify-between">
                  <StatBox
                    icon={<UsersIcon className="w-4 h-4" />}
                    value={stats?.totalProfiles}
                    title="total profiles"
                  />
                  <StatBox
                    icon={<FireIcon className="w-4 h-4" />}
                    value={stats?.totalBurntProfiles}
                    title="profiles burnt"
                  />
                  <StatBox
                    icon={<PencilAltIcon className="w-4 h-4" />}
                    value={stats?.totalPosts}
                    title="total posts"
                  />
                </div>
                <div className="block sm:flex space-y-3 sm:space-y-0 sm:space-x-3 justify-between">
                  <StatBox
                    icon={<SwitchHorizontalIcon className="w-4 h-4" />}
                    value={stats?.totalMirrors}
                    title="total mirrors"
                  />
                  <StatBox
                    icon={<ChatAlt2Icon className="w-4 h-4" />}
                    value={stats?.totalComments}
                    title="total comments"
                  />
                  <StatBox
                    icon={<CashIcon className="w-4 h-4" />}
                    value={fundraiseStats?.totalPosts}
                    title="total fundraises"
                  />
                </div>
                <div className="block sm:flex space-y-3 sm:space-y-0 sm:space-x-3 justify-between">
                  <StatBox
                    icon={<CollectionIcon className="w-4 h-4" />}
                    value={stats?.totalCollects}
                    title="total collects"
                  />
                  <StatBox
                    icon={<UserAddIcon className="w-4 h-4" />}
                    value={stats?.totalFollows}
                    title="total follows"
                  />
                </div>
              </section>
              <section className="mt-5">
                <h1 className="text-xl font-bold mb-4">Revenue stats</h1>
                <div className="space-y-2">
                  {stats?.totalRevenue.map((revenue: Erc20Amount) => (
                    <div key={revenue?.asset?.address} className="flex items-center space-x-1">
                      <img
                        className="w-5 h-5"
                        src={getTokenImage(revenue?.asset?.symbol)}
                        alt="revenue?.asset?.symbol"
                      />
                      <span>
                        <b>{parseFloat(revenue?.value).toFixed(2)}</b> {revenue?.asset?.symbol}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
          <div />
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default Stats
