import MetaTags from '@components/Common/MetaTags';
import { Button } from '@components/UI/Button';
import { RefreshIcon } from '@heroicons/react/outline';
import { APP_NAME } from 'data/constants';
import type { FC } from 'react';

const Offline: FC = () => {
  return (
    <div className="flex-col page-center">
      <MetaTags title={`Offline • ${APP_NAME}`} />
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Oops, You are offline!
        </h1>
        <div className="mb-4">
          Check your internet connection and try again
        </div>
        <Button
          className="flex mx-auto item-center"
          size="lg"
          icon={<RefreshIcon className="w-4 h-4" />}
          onClick={() => location.reload()}
        >
          Retry
        </Button>
      </div>
    </div>
  );
};

export default Offline;
