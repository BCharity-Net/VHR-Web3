import TabButton from '@components/UI/TabButton';
import {
  AtSymbolIcon,
  ChatAlt2Icon,
  CollectionIcon,
  HeartIcon,
  LightningBoltIcon
} from '@heroicons/react/outline';
import { Mixpanel } from '@lib/mixpanel';
import type { Dispatch, FC } from 'react';
import { NOTIFICATION } from 'src/tracking';

import { NotificationType } from './List'

interface Props {
  setFeedType: Dispatch<string>;
  feedType: string;
}

const FeedType: FC<Props> = ({ setFeedType, feedType }) => {
  const switchTab = (type: string) => {
    setFeedType(type);
    Mixpanel.track(NOTIFICATION.SWITCH_NOTIFICATION_TAB, {
      notification_type: type.toLowerCase()
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex overflow-x-auto gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
        <TabButton
          name={`All notifications`}
          icon={<LightningBoltIcon className="w-4 h-4" />}
          active={feedType === NotificationType.All}
          type={NotificationType.All.toLowerCase()}
          onClick={() => switchTab(NotificationType.All)}
        />
        <TabButton
          name={`Mentions`}
          icon={<AtSymbolIcon className="w-4 h-4" />}
          active={feedType === NotificationType.Mentions}
          type={NotificationType.Mentions.toLowerCase()}
          onClick={() => switchTab(NotificationType.Mentions)}
        />
        <TabButton
          name={`Comments`}
          icon={<ChatAlt2Icon className="w-4 h-4" />}
          active={feedType === NotificationType.Comments}
          type={NotificationType.Comments.toLowerCase()}
          onClick={() => switchTab(NotificationType.Comments)}
        />
        <TabButton
          name={`Likes`}
          icon={<HeartIcon className="w-4 h-4" />}
          active={feedType === NotificationType.Likes}
          type={NotificationType.Likes.toLowerCase()}
          onClick={() => switchTab(NotificationType.Likes)}
        />
        <TabButton
          name={`Collects`}
          icon={<CollectionIcon className="w-4 h-4" />}
          active={feedType === NotificationType.Collects}
          type={NotificationType.Collects.toLowerCase()}
          onClick={() => switchTab(NotificationType.Collects)}
        />
      </div>
    </div>
  );
};

export default FeedType;
