import MetaTags from '@components/Common/MetaTags';
import { GridItemEight, GridItemFour, GridLayout } from '@components/UI/GridLayout';
import { Mixpanel } from '@lib/mixpanel';
import { APP_NAME } from 'data/constants';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Custom404 from 'src/pages/404';
import { useAppStore } from 'src/store/app';
import { PAGEVIEW } from 'src/tracking';

import SettingsSidebar from '../Sidebar';
import LikesPreferences from './LikesPreferences';

const PreferencesSettings: NextPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);

  useEffect(() => {
    Mixpanel.track(PAGEVIEW, { page: 'settings', subpage: 'preferences' });
  }, []);

  if (!currentProfile) {
    return <Custom404 />;
  }

  return (
    <GridLayout>
      <MetaTags title={`Preferences • ${APP_NAME}`} />
      <GridItemFour>
        <SettingsSidebar />
      </GridItemFour>
      <GridItemEight className="space-y-5">
        <LikesPreferences />
      </GridItemEight>
    </GridLayout>
  );
};

export default PreferencesSettings;
