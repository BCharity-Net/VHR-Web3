import {
  Comment,
  FeeCollectModuleSettings,
  FeeFollowModuleSettings,
  FreeCollectModuleSettings,
  LimitedFeeCollectModuleSettings,
  LimitedTimedFeeCollectModuleSettings,
  Mirror,
  Post,
  ProfileFollowModuleSettings,
  RevertCollectModuleSettings,
  RevertFollowModuleSettings,
  TimedFeeCollectModuleSettings
} from 'lens'

export type BCharityPublication = Post & Mirror & Comment
export type Group = Post
export type BCharityCollectModule = FreeCollectModuleSettings &
  FeeCollectModuleSettings &
  LimitedFeeCollectModuleSettings &
  LimitedTimedFeeCollectModuleSettings &
  RevertCollectModuleSettings &
  TimedFeeCollectModuleSettings
export type BCharityFollowModule = FeeFollowModuleSettings &
  ProfileFollowModuleSettings &
  RevertFollowModuleSettings
export interface BCharityAttachment {
  item: string
  type: string
  altTag: string
}
export interface NewBCharityAttachment extends Omit<BCharityAttachment, 'item'> {
  id: string;
  item?: string;
  previewItem?: string;
}
export interface UserSuggestion {
  uid: string
  id: string
  display: string
  name: string
  picture: string
}
export interface OG {
  title: string
  description: string
  site: string
  url: string
  favicon: string
  thumbnail: string
  isSquare: boolean
  html: string
}

export interface ProfileInterest {
  category: { label: string; id: string };
  subCategories: Array<{ label: string; id: string }>;
}
