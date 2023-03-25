import ToggleWithHelper from '@components/Shared/ToggleWithHelper';
import { ClockIcon } from '@heroicons/react/outline';
import type { FC } from 'react';
import { useCollectModuleStore } from 'src/store/collect-module';

const TimeLimitConfig: FC = () => {
  const hasTimeLimit = useCollectModuleStore((state) => state.hasTimeLimit);
  const setHasTimeLimit = useCollectModuleStore((state) => state.setHasTimeLimit);

  return (
    <div className="pt-5">
      <ToggleWithHelper
        on={hasTimeLimit}
        setOn={() => setHasTimeLimit(!hasTimeLimit)}
        heading={`Time limit`}
        description={`Limit collecting to the first 24h`}
        icon={<ClockIcon className="h-4 w-4" />}
      />
    </div>
  );
};

export default TimeLimitConfig;
