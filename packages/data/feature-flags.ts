import { aaveMembers } from './aave-members'
import { IS_PRODUCTION } from './constants'
import { bcharityMembers } from './bcharity-members'
import { mainnetStaffs, testnetStaffs } from './staffs'

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
    key: 'trending-widget',
    name: 'Trending widget',
    enabledFor: [...bcharityMembers]
  },
  {
    key: 'access-settings',
    name: 'Access settings',
    enabledFor: [...bcharityMembers]
  },
  {
    key: 'nft-gallery',
    name: 'NFT Gallery',
    enabledFor: !IS_PRODUCTION ? [...mainnetStaffs, ...testnetStaffs] : []
  },
  {
    key: 'nft-detail',
    name: 'NFT Detail Page',
    enabledFor: !IS_PRODUCTION ? [...mainnetStaffs, ...testnetStaffs] : []
  },
  {
    key: 'preferences-settings',
    name: 'Preferences settings',
    enabledFor: [...bcharityMembers, ...aaveMembers]
  }
]
