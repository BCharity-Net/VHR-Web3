import Signup from '@components/Shared/Login/New'
import SettingsHelper from '@components/Shared/SettingsHelper'
import { Card } from '@components/UI/Card'
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout'
import MetaTags from '@components/utils/MetaTags'
import { Leafwatch } from '@lib/leafwatch'
import { APP_NAME } from 'data/constants'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Custom404 from 'src/pages/404'
import { useAppStore } from 'src/store/app'
import { PAGEVIEW } from 'src/tracking'

const NewProfile: NextPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile)
  const { t } = useTranslation('common')

  useEffect(() => {
    Leafwatch.track('Pageview', { path: PAGEVIEW.CREATE_PROFILE })
  }, [])

  if (!currentProfile) {
    return <Custom404 />
  }

  return (
    <GridLayout>
      <MetaTags title={`Create Profile • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsHelper heading={t('Create profile')} description={t('Create profile description')} />
      </GridItemFour>
      <GridItemEight>
        <Card className="p-5">
          <Signup />
        </Card>
      </GridItemEight>
    </GridLayout>
  )
}

export default NewProfile