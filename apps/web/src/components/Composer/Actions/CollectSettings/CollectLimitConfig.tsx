import ToggleWithHelper from '@components/Shared/ToggleWithHelper';
import { StarIcon } from '@heroicons/react/outline';
import type { FC } from 'react';
import { useCollectModuleStore } from 'src/store/collect-module';
import { Input } from 'ui';

const CollectLimitConfig: FC = () => {
  const collectLimit = useCollectModuleStore((state) => state.collectLimit);
  const setCollectLimit = useCollectModuleStore((state) => state.setCollectLimit);

  return (
    <div className="pt-5">
      <ToggleWithHelper
        on={Boolean(collectLimit)}
        setOn={() => setCollectLimit(collectLimit ? null : '1')}
        heading={`Limited edition`}
        description={`Make the collects exclusive`}
        icon={<StarIcon className="h-4 w-4" />}
      />
      {collectLimit ? (
        <div className="pt-4 text-sm">
          <Input
            label={`Collect limit`}
            type="number"
            placeholder="5"
            min="1"
            max="100000"
            value={parseFloat(collectLimit)}
            onChange={(event) => {
              setCollectLimit(event.target.value ? event.target.value : '1');
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CollectLimitConfig;
