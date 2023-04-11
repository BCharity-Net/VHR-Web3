import { CollectModules, FollowModules, ReferenceModules } from 'lens';

/**
 *
 * @param name Module to format
 * @returns module config
 */
export const getModule = (
  name: string
): {
  name: string;
  field: string;
} => {
  switch (name) {
    // Collect Modules
    case CollectModules.MultirecipientFeeCollectModule:
      return { name: `Multirecipient Paid Collect`, field: 'collectModule' }
    case CollectModules.UnknownCollectModule:
      return { name: `Unknown Collect`, field: 'collectModule' };
    case CollectModules.FeeCollectModule:
      return { name: `Paid Collect`, field: 'collectModule' };
    case CollectModules.LimitedFeeCollectModule:
      return { name: `Rare Paid Collect`, field: 'collectModule' };
    case CollectModules.TimedFeeCollectModule:
      return { name: `24 Hour Collect`, field: 'collectModule' };
    case CollectModules.LimitedTimedFeeCollectModule:
      return { name: `Rare 24 Hour Collect`, field: 'collectModule' };
    case CollectModules.FreeCollectModule:
      return { name: `Free Collect`, field: 'collectModule' };
    case CollectModules.RevertCollectModule:
      return { name: `No Collect`, field: 'collectModule' };

    // Follow modules
    case FollowModules.FeeFollowModule:
      return { name: `Fee Follow`, field: 'followModule' };

    // Reference modules
    case ReferenceModules.FollowerOnlyReferenceModule:
      return { name: `Follower Only Reference`, field: 'referenceModule' };
    default:
      return { name: name, field: 'collectModule' };
  }
};
