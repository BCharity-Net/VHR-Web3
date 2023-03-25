import ToggleWithHelper from '@components/Shared/ToggleWithHelper';
import { UserGroupIcon } from '@heroicons/react/outline';
import type { FC } from 'react';
import { useCollectModuleStore } from 'src/store/collect-module';

const FollowersConfig: FC = () => {
  const followerOnly = useCollectModuleStore((state) => state.followerOnly);
  const setFollowerOnly = useCollectModuleStore((state) => state.setFollowerOnly);

  return (
    <div className="pt-5">
      <ToggleWithHelper
        on={followerOnly}
        setOn={() => setFollowerOnly(!followerOnly)}
        heading={`Who can collect`}
        description={`Only followers can collect`}
        icon={<UserGroupIcon className="h-4 w-4" />}
      />
    </div>
  );
};

export default FollowersConfig;
