import { aaveMembers } from './aave-members'
import { IS_PRODUCTION } from './constants'
import { bcharityMembers } from './bcharity-members'
import { mainnetStaffs, testnetStaffs } from './staffs'

export enum FeatureFlag {
  TrendingWidget = 'trending-widget',
  NftGallery = 'nft-gallery',
  NftDetail = 'nft-detail',
  GatedLocales = 'gated-locales',
  PublicationAnalytics = 'publication-analytics',
  SnapshotVoting = 'snapshot-voting'
}

export const featureFlags = [
  {
    key: 'messages',
    name: 'Messages',
    enabledFor: [
      ...bcharityMembers,
      '0x06', // wagmi.lens
      '0x2d', // sasicodes.lens
      '0xe248', // nick-molnar.lens
      '0x010e04', // elisealix22.lens
      '0x5cce', // saulmc.lens
      '0x014309', // iambhavya.lens
      '0x8539', // petermdenton.lens
      '0x013f9d', // shanemac.lens
      '0x015336', // jazzz.lens
      '0x010e75', // shash256.lens
      '0x010f89', // alohajha.lens
      '0x21ad' // galligan.lens
    ]
  },
  {
    key: FeatureFlag.TrendingWidget,
    name: 'Trending widget',
    enabledFor: [...bcharityMembers]
  },
  {
    key: 'access-settings',
    name: 'Access settings',
    enabledFor: [...bcharityMembers]
  },
  {
    key: FeatureFlag.NftGallery,
    name: 'NFT Gallery',
    enabledFor: !IS_PRODUCTION ? [...mainnetStaffs, ...testnetStaffs] : []
  },
  {
    key: FeatureFlag.NftDetail,
    name: 'NFT Detail Page',
    enabledFor: !IS_PRODUCTION ? [...mainnetStaffs, ...testnetStaffs] : []
  },
  {
    key: FeatureFlag.GatedLocales,
    name: 'Gated locales',
    enabledFor: ['0x01adb7', '0x216f', '0x6b66', '0x6b15', '0x01adb3', ...bcharityMembers, ...aaveMembers]
  },
  {
    key: FeatureFlag.PublicationAnalytics,
    name: 'Publication Analytics',
    enabledFor: [...mainnetStaffs]
  },
  {
    key: FeatureFlag.SnapshotVoting,
    name: 'Snapshot Voting',
    enabledFor: [...mainnetStaffs]
  }
]
