import MetaTags from '@components/Common/MetaTags';
import { APP_NAME } from 'data/constants';
import type { NextPage } from 'next';
import Custom404 from 'src/pages/404';
import { useAppStore } from 'src/store/app';
import { Card, GridItemEight, GridLayout } from 'ui';

import PreviewList from './PreviewList';

const NoConversationSelected = () => {
  return (
    <div className="text-center flex flex-col h-full">
      <div className="m-auto">
        <span className="text-5xl text-center">👋</span>
        <h3 className="mb-2 mt-3 text-lg">Select a conversation</h3>
        <p className="max-w-xs text-md text-gray-500">
          Choose an existing conversation or create a new one to start messaging
        </p>
      </div>
    </div>
  );
};

const Messages: NextPage = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);

  if (!currentProfile) {
    return <Custom404 />;
  }

  return (
    <GridLayout classNameChild="md:gap-8">
      <MetaTags title={`Messages • ${APP_NAME}`} />
      <PreviewList />
      <GridItemEight className="sm:h-[76vh] md:h-[80vh] xl:h-[84vh] mb-0 md:col-span-8 lg:block md:hidden sm:hidden xs:hidden sm:mx-2 xs:mx-2">
        <Card className="h-full">
          <NoConversationSelected />
        </Card>
      </GridItemEight>
    </GridLayout>
  );
};

export default Messages;
