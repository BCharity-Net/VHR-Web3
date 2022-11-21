import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BlockchainData: any
  BroadcastId: any
  ChainId: any
  CollectModuleData: any
  ContentEncryptionKey: any
  ContractAddress: any
  CreateHandle: any
  Cursor: any
  DateTime: any
  EncryptedValueScalar: any
  Ens: any
  EthereumAddress: any
  FollowModuleData: any
  Handle: any
  HandleClaimIdScalar: any
  IfpsCid: any
  InternalPublicationId: any
  Jwt: any
  LimitScalar: any
  Locale: any
  Markdown: any
  MimeType: any
  NftOwnershipId: any
  Nonce: any
  NotificationId: any
  ProfileId: any
  ProfileInterest: any
  ProxyActionId: any
  PublicationId: any
  PublicationTag: any
  PublicationUrl: any
  ReactionId: any
  ReferenceModuleData: any
  Search: any
  Signature: any
  Sources: any
  TimestampScalar: any
  TokenId: any
  TxHash: any
  TxId: any
  UnixTimestamp: any
  Url: any
  Void: any
}

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>
  /** OR condition */
  or?: InputMaybe<OrConditionInput>
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>
}

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: 'AccessConditionOutput'
  /** AND condition */
  and?: Maybe<AndConditionOutput>
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>
  /** OR condition */
  or?: Maybe<OrConditionOutput>
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>
}

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress']
  freeTextHandle?: InputMaybe<Scalars['Boolean']>
  handle?: InputMaybe<Scalars['CreateHandle']>
  overrideAlreadyClaimed: Scalars['Boolean']
  overrideTradeMark: Scalars['Boolean']
  secret: Scalars['String']
}

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId']
}

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  sort: TagSortCriteria
  /** The App Id */
  source?: InputMaybe<Scalars['Sources']>
}

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>
}

export type AndConditionOutput = {
  __typename?: 'AndConditionOutput'
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>
}

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount'
  allowance: Scalars['String']
  contractAddress: Scalars['ContractAddress']
  currency: Scalars['ContractAddress']
  module: Scalars['String']
}

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>
  followModules?: InputMaybe<Array<FollowModules>>
  referenceModules?: InputMaybe<Array<ReferenceModules>>
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>
}

/** The Profile */
export type Attribute = {
  __typename?: 'Attribute'
  /** The display type */
  displayType?: Maybe<Scalars['String']>
  /** identifier of this attribute, we will update by this id  */
  key: Scalars['String']
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>
  /** Value attribute */
  value: Scalars['String']
}

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult'
  /** The text to sign */
  text: Scalars['String']
}

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult'
  /** The access token */
  accessToken: Scalars['Jwt']
  /** The refresh token */
  refreshToken: Scalars['Jwt']
}

export type BroadcastRequest = {
  id: Scalars['BroadcastId']
  signature: Scalars['Signature']
}

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId']
}

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse'
  result: Scalars['Boolean']
}

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse'
  reasons?: Maybe<DecryptFailReason>
  result: Scalars['Boolean']
}

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse'
  result: Scalars['Boolean']
}

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress']
}

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>
}

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles'
  canClaimFreeTextHandle: Scalars['Boolean']
  reservedHandles: Array<ReservedClaimableHandle>
}

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The collected publication id */
  publicationId: Scalars['PublicationId']
  /** The collected publication id */
  publisherId: Scalars['ProfileId']
}

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: 'CollectConditionOutput'
  /** The collected publication id */
  publicationId: Scalars['PublicationId']
  /** The collected publication id */
  publisherId: Scalars['ProfileId']
}

export type CollectModule =
  | FeeCollectModuleSettings
  | FreeCollectModuleSettings
  | LimitedFeeCollectModuleSettings
  | LimitedTimedFeeCollectModuleSettings
  | RevertCollectModuleSettings
  | TimedFeeCollectModuleSettings
  | UnknownCollectModuleSettings

export type CollectModuleParams = {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>
}

/** The collect module types */
export enum CollectModules {
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>
}

export type CollectedEvent = {
  __typename?: 'CollectedEvent'
  profile: Profile
  timestamp: Scalars['DateTime']
}

/** The social comment */
export type Comment = {
  __typename?: 'Comment'
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>
  canComment: CanCommentResponse
  canDecrypt: CanDecryptResponse
  canMirror: CanMirrorResponse
  /** The collect module */
  collectModule: CollectModule
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>
  /** The date the post was created on */
  createdAt: Scalars['DateTime']
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>
  hasCollectedByMe: Scalars['Boolean']
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']
  /** The internal publication id */
  id: Scalars['InternalPublicationId']
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference
  /** The metadata for the post */
  metadata: MetadataOutput
  mirrors: Array<Scalars['InternalPublicationId']>
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']
  /** The profile ref */
  profile: Profile
  reaction?: Maybe<ReactionTypes>
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>
  /** The publication stats */
  stats: PublicationStats
}

/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>
}

/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>
}

/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>
}

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateBurnEip712TypedDataTypes
  /** The values */
  value: CreateBurnEip712TypedDataValue
}

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes'
  BurnWithSig: Array<Eip712TypedDataField>
}

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  tokenId: Scalars['String']
}

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateBurnEip712TypedData
}

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateCollectEip712TypedData
}

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateCollectEip712TypedDataTypes
  /** The values */
  value: CreateCollectEip712TypedDataValue
}

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes'
  CollectWithSig: Array<Eip712TypedDataField>
}

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue'
  data: Scalars['BlockchainData']
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
  pubId: Scalars['PublicationId']
}

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId']
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']>
}

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateCommentEip712TypedData
}

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateCommentEip712TypedDataTypes
  /** The values */
  value: CreateCommentEip712TypedDataValue
}

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes'
  CommentWithSig: Array<Eip712TypedDataField>
}

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue'
  collectModule: Scalars['ContractAddress']
  collectModuleInitData: Scalars['CollectModuleData']
  contentURI: Scalars['PublicationUrl']
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
  profileIdPointed: Scalars['ProfileId']
  pubIdPointed: Scalars['PublicationId']
  referenceModule: Scalars['ContractAddress']
  referenceModuleData: Scalars['ReferenceModuleData']
  referenceModuleInitData: Scalars['ReferenceModuleData']
}

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateFollowEip712TypedData
}

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateFollowEip712TypedDataTypes
  /** The values */
  value: CreateFollowEip712TypedDataValue
}

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes'
  FollowWithSig: Array<Eip712TypedDataField>
}

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue'
  datas: Array<Scalars['BlockchainData']>
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileIds: Array<Scalars['ProfileId']>
}

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateMirrorEip712TypedData
}

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateMirrorEip712TypedDataTypes
  /** The values */
  value: CreateMirrorEip712TypedDataValue
}

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes'
  MirrorWithSig: Array<Eip712TypedDataField>
}

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
  profileIdPointed: Scalars['ProfileId']
  pubIdPointed: Scalars['PublicationId']
  referenceModule: Scalars['ContractAddress']
  referenceModuleData: Scalars['ReferenceModuleData']
  referenceModuleInitData: Scalars['ReferenceModuleData']
}

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId']
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId']
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>
}

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreatePostEip712TypedData
}

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreatePostEip712TypedDataTypes
  /** The values */
  value: CreatePostEip712TypedDataValue
}

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes'
  PostWithSig: Array<Eip712TypedDataField>
}

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue'
  collectModule: Scalars['ContractAddress']
  collectModuleInitData: Scalars['CollectModuleData']
  contentURI: Scalars['PublicationUrl']
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
  referenceModule: Scalars['ContractAddress']
  referenceModuleInitData: Scalars['ReferenceModuleData']
}

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>
  handle: Scalars['CreateHandle']
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']>
}

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url']
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>
  /** Profile id */
  profileId: Scalars['ProfileId']
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId']
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>
}

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url']
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>
  /** Profile id */
  profileId: Scalars['ProfileId']
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>
}

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url']
  /** Profile id */
  profileId: Scalars['ProfileId']
}

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData
}

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue
}

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes'
  SetDispatcherWithSig: Array<Eip712TypedDataField>
}

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  dispatcher: Scalars['EthereumAddress']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData
}

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue
}

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes'
  SetFollowModuleWithSig: Array<Eip712TypedDataField>
}

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  followModule: Scalars['ContractAddress']
  followModuleInitData: Scalars['FollowModuleData']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
}

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData
}

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue
}

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes'
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>
}

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  followNFTURI: Scalars['Url']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
}

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData
}

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue
}

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes'
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>
}

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  imageURI: Scalars['Url']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData
}

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue
}

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes'
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>
}

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  metadata: Scalars['Url']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
}

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData
}

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue
}

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes'
  ToggleFollowWithSig: Array<Eip712TypedDataField>
}

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  enables: Array<Scalars['Boolean']>
  nonce: Scalars['Nonce']
  profileIds: Array<Scalars['ProfileId']>
}

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>
  profileIds: Array<Scalars['ProfileId']>
}

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: CreateBurnEip712TypedData
}

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress']
}

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean']
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int']
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean']
}

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings'
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean']
  contractAddress: Scalars['ContractAddress']
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int']
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean']
  /** The reference modules enum */
  type: ReferenceModules
}

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher'
  /** The dispatcher address */
  address: Scalars['EthereumAddress']
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean']
}

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress']
  /** The profile id */
  profileId: Scalars['ProfileId']
}

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>
}

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse'
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress']
  /** If the user does follow */
  follows: Scalars['Boolean']
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars['Boolean']
  /** The profile id */
  profileId: Scalars['ProfileId']
}

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain'
  /** The chainId */
  chainId: Scalars['ChainId']
  /** The name of the typed data domain */
  name: Scalars['String']
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress']
  /** The version */
  version: Scalars['String']
}

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField'
  /** The name of the typed data field */
  name: Scalars['String']
  /** The type of the typed data field */
  type: Scalars['String']
}

export type ElectedMirror = {
  __typename?: 'ElectedMirror'
  mirrorId: Scalars['InternalPublicationId']
  profile: Profile
  timestamp: Scalars['DateTime']
}

export type EnabledModule = {
  __typename?: 'EnabledModule'
  contractAddress: Scalars['ContractAddress']
  inputParams: Array<ModuleInfo>
  moduleName: Scalars['String']
  redeemParams: Array<ModuleInfo>
  returnDataParms: Array<ModuleInfo>
}

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules'
  collectModules: Array<EnabledModule>
  followModules: Array<EnabledModule>
  referenceModules: Array<EnabledModule>
}

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: 'EncryptedFieldsOutput'
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars['EncryptedValueScalar']>
  /** The encrypted content field */
  content?: Maybe<Scalars['EncryptedValueScalar']>
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars['EncryptedValueScalar']>
  /** The encrypted image field */
  image?: Maybe<Scalars['EncryptedValueScalar']>
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>
}

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: 'EncryptedMedia'
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars['EncryptedValueScalar']>
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars['EncryptedValueScalar']>
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>
  /** The encrypted value for the URL */
  url: Scalars['Url']
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>
}

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: 'EncryptedMediaSet'
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>
  /** Original media */
  original: EncryptedMedia
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>
}

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: 'EncryptionParamsOutput'
  /** The access conditions */
  accessCondition: AccessConditionOutput
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput
  /** The encryption provider */
  encryptionProvider: EncryptionProvider
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput
}

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = 'LIT_PROTOCOL'
}

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity'
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>
}

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress']
  /** The chain ID of the address */
  chainID: Scalars['ChainId']
}

export type EoaOwnershipOutput = {
  __typename?: 'EoaOwnershipOutput'
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress']
  /** The chain ID of the address */
  chainID: Scalars['ChainId']
}

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20'
  /** The erc20 address */
  address: Scalars['ContractAddress']
  /** Decimal places for the token */
  decimals: Scalars['Int']
  /** Name of the symbol */
  name: Scalars['String']
  /** Symbol for the token */
  symbol: Scalars['String']
}

export type Erc20Amount = {
  __typename?: 'Erc20Amount'
  /** The erc20 token info */
  asset: Erc20
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']
}

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars['String']
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId']
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress']
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float']
}

export type Erc20OwnershipOutput = {
  __typename?: 'Erc20OwnershipOutput'
  /** The amount of tokens required to access the content */
  amount: Scalars['String']
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId']
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress']
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float']
}

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult'
  items: Array<Profile>
  pageInfo: PaginatedResultInfo
}

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  sortCriteria: ProfileSortCriteria
  timestamp?: InputMaybe<Scalars['TimestampScalar']>
}

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>
  sortCriteria: PublicationSortCriteria
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
  timestamp?: InputMaybe<Scalars['TimestampScalar']>
}

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult'
  items: Array<Publication>
  pageInfo: PaginatedResultInfo
}

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
}

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings'
  /** The collect module amount info */
  amount: ModuleFeeAmount
  contractAddress: Scalars['ContractAddress']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
  /** The collect modules enum */
  type: CollectModules
}

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress']
}

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams
}

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings'
  /** The collect module amount info */
  amount: ModuleFeeAmount
  contractAddress: Scalars['ContractAddress']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The follow modules enum */
  type: FollowModules
}

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** The profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
}

export type FeedItem = {
  __typename?: 'FeedItem'
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>
  root: FeedItemRoot
}

export type FeedItemRoot = Comment | Post

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** The profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
}

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>
  profile: Scalars['ProfileId']
}

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId']
}

export type FollowConditionOutput = {
  __typename?: 'FollowConditionOutput'
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId']
}

export type FollowModule =
  | FeeFollowModuleSettings
  | ProfileFollowModuleSettings
  | RevertFollowModuleSettings
  | UnknownFollowModuleSettings

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']>
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']>
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']>
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>
}

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>
}

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The reference modules enum */
  type: ReferenceModules
}

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>
}

export type FollowRequest = {
  follow: Array<Follow>
}

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult'
  revenues: Array<RevenueAggregate>
}

export type Follower = {
  __typename?: 'Follower'
  totalAmountOfTimesFollowed: Scalars['Int']
  wallet: Wallet
}

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds'
  followerNftAddress: Scalars['ContractAddress']
  tokensIds: Array<Scalars['String']>
}

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress']
  profileId: Scalars['ProfileId']
}

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  profileId: Scalars['ProfileId']
}

export type Following = {
  __typename?: 'Following'
  profile: Profile
  totalAmountOfTimesFollowing: Scalars['Int']
}

export type FollowingRequest = {
  address: Scalars['EthereumAddress']
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
}

export type FraudReasonInputParams = {
  reason: PublicationReportingReason
  subreason: PublicationReportingFraudSubreason
}

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars['Boolean']
}

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect modules enum */
  type: CollectModules
}

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId']
}

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId']
}

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars['ContentEncryptionKey']
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>
  /** OR condition */
  or?: InputMaybe<OrConditionInput>
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>
}

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval'
  data: Scalars['BlockchainData']
  from: Scalars['EthereumAddress']
  to: Scalars['ContractAddress']
}

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>
  currency: Scalars['ContractAddress']
  followModule?: InputMaybe<FollowModules>
  referenceModule?: InputMaybe<ReferenceModules>
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String']
}

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>
  txHash?: InputMaybe<Scalars['TxHash']>
  txId?: InputMaybe<Scalars['TxId']>
}

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats'
  totalBurntProfiles: Scalars['Int']
  totalCollects: Scalars['Int']
  totalComments: Scalars['Int']
  totalFollows: Scalars['Int']
  totalMirrors: Scalars['Int']
  totalPosts: Scalars['Int']
  totalProfiles: Scalars['Int']
  totalRevenue: Array<Erc20Amount>
}

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>
}

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']>
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']>
}

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId']
}

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason
  subreason: PublicationReportingIllegalSubreason
}

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  /** must be DD/MM/YYYY */
  fromDate: Scalars['String']
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** The shared secret */
  secret: Scalars['String']
  /** The App Id */
  source: Scalars['Sources']
  /** must be DD/MM/YYYY */
  toDate: Scalars['String']
}

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams
  /** The collect module limit */
  collectLimit: Scalars['String']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
}

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings'
  /** The collect module amount info */
  amount: ModuleFeeAmount
  /** The collect module limit */
  collectLimit: Scalars['String']
  contractAddress: Scalars['ContractAddress']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
  /** The collect modules enum */
  type: CollectModules
}

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams
  /** The collect module limit */
  collectLimit: Scalars['String']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
}

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings'
  /** The collect module amount info */
  amount: ModuleFeeAmount
  /** The collect module limit */
  collectLimit: Scalars['String']
  contractAddress: Scalars['ContractAddress']
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
  /** The collect modules enum */
  type: CollectModules
}

export type Log = {
  __typename?: 'Log'
  address: Scalars['ContractAddress']
  blockHash: Scalars['String']
  blockNumber: Scalars['Int']
  data: Scalars['String']
  logIndex: Scalars['Int']
  removed: Scalars['Boolean']
  topics: Array<Scalars['String']>
  transactionHash: Scalars['TxHash']
  transactionIndex: Scalars['Int']
}

export type MainPostReference = Mirror | Post

/** The Media url */
export type Media = {
  __typename?: 'Media'
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>
  /** The token image nft */
  url: Scalars['Url']
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>
}

/** Media object output */
export type MediaOutput = {
  __typename?: 'MediaOutput'
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>
  item: Scalars['Url']
  source?: Maybe<PublicationMediaSource>
  /** This is the mime type of media */
  type?: Maybe<Scalars['MimeType']>
}

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet'
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<Media>
  /** Original media */
  original: Media
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<Media>
}

export type MentionPublication = Comment | Post

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars['String']
  /** The value */
  value: Scalars['String']
}

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput'
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>
  /** The value */
  value?: Maybe<Scalars['String']>
}

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput'
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars['Url']>
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']>
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']>
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']>
  /** The locale of the publication,  */
  locale?: Maybe<Scalars['Locale']>
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>
  /** The metadata name */
  name?: Maybe<Scalars['String']>
  /** The tags for the publication */
  tags: Array<Scalars['String']>
}

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror'
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>
  canComment: CanCommentResponse
  canDecrypt: CanDecryptResponse
  canMirror: CanMirrorResponse
  /** The collect module */
  collectModule: CollectModule
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>
  /** The date the post was created on */
  createdAt: Scalars['DateTime']
  hasCollectedByMe: Scalars['Boolean']
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']
  /** The internal publication id */
  id: Scalars['InternalPublicationId']
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']
  /** The metadata for the post */
  metadata: MetadataOutput
  /** The mirror publication */
  mirrorOf: MirrorablePublication
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']
  /** The profile ref */
  profile: Profile
  reaction?: Maybe<ReactionTypes>
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>
  /** The publication stats */
  stats: PublicationStats
}

/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>
}

/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>
}

export type MirrorEvent = {
  __typename?: 'MirrorEvent'
  profile: Profile
  timestamp: Scalars['DateTime']
}

export type MirrorablePublication = Comment | Post

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount'
  /** The erc20 token info */
  asset: Erc20
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']
}

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress']
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']
}

export type ModuleInfo = {
  __typename?: 'ModuleInfo'
  name: Scalars['String']
  type: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  ach?: Maybe<Scalars['Void']>
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars['Void']>
  addReaction?: Maybe<Scalars['Void']>
  authenticate: AuthenticationResult
  broadcast: RelayResult
  claim: RelayResult
  createAttachMediaData: PublicMediaResults
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult
  createCollectTypedData: CreateCollectBroadcastItemResult
  createCommentTypedData: CreateCommentBroadcastItemResult
  createCommentViaDispatcher: RelayResult
  createFollowTypedData: CreateFollowBroadcastItemResult
  createMirrorTypedData: CreateMirrorBroadcastItemResult
  createMirrorViaDispatcher: RelayResult
  createPostTypedData: CreatePostBroadcastItemResult
  createPostViaDispatcher: RelayResult
  createProfile: RelayResult
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult
  createSetProfileImageURIViaDispatcher: RelayResult
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult
  createSetProfileMetadataViaDispatcher: RelayResult
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult
  hidePublication?: Maybe<Scalars['Void']>
  proxyAction: Scalars['ProxyActionId']
  refresh: AuthenticationResult
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars['Void']>
  removeReaction?: Maybe<Scalars['Void']>
  reportPublication?: Maybe<Scalars['Void']>
}

export type MutationAchArgs = {
  request: AchRequest
}

export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest
}

export type MutationAddReactionArgs = {
  request: ReactionRequest
}

export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge
}

export type MutationBroadcastArgs = {
  request: BroadcastRequest
}

export type MutationClaimArgs = {
  request: ClaimHandleRequest
}

export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest
}

export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: BurnProfileRequest
}

export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateCollectRequest
}

export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicCommentRequest
}

export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest
}

export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: FollowRequest
}

export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateMirrorRequest
}

export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest
}

export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicPostRequest
}

export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest
}

export type MutationCreateProfileArgs = {
  request: CreateProfileRequest
}

export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateSetDefaultProfileRequest
}

export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: SetDispatcherRequest
}

export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateSetFollowModuleRequest
}

export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateSetFollowNftUriRequest
}

export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: UpdateProfileImageRequest
}

export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest
}

export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicSetProfileMetadataUriRequest
}

export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest
}

export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: CreateToggleFollowRequest
}

export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>
  request: UnfollowRequest
}

export type MutationHidePublicationArgs = {
  request: HidePublicationRequest
}

export type MutationProxyActionArgs = {
  request: ProxyActionRequest
}

export type MutationRefreshArgs = {
  request: RefreshRequest
}

export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest
}

export type MutationRemoveReactionArgs = {
  request: ReactionRequest
}

export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest
}

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** The profile id your viewing */
  viewingProfileId: Scalars['ProfileId']
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars['ProfileId']
}

/** The nft type */
export type Nft = {
  __typename?: 'NFT'
  /** aka "1"  */
  chainId: Scalars['ChainId']
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String']
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String']
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress']
  /** aka us CryptoKitties */
  contractName: Scalars['String']
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String']
  /** aka "ERC721"  */
  ercType: Scalars['String']
  /** aka "Beard Coffee"  */
  name: Scalars['String']
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>
  /** aka RARI */
  symbol: Scalars['String']
  /** aka "13"  */
  tokenId: Scalars['String']
}

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent'
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']>
  /** The meta type content */
  metaType: Scalars['String']
  /** The token uri  nft */
  uri: Scalars['String']
}

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId']
  /** The signature */
  signature: Scalars['Signature']
}

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress']
}

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult'
  items: Array<Nft>
  pageInfo: PaginatedResultInfo
}

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification'
  collectedPublication: Publication
  createdAt: Scalars['DateTime']
  notificationId: Scalars['NotificationId']
  wallet: Wallet
}

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification'
  comment: Comment
  createdAt: Scalars['DateTime']
  notificationId: Scalars['NotificationId']
  /** The profile */
  profile: Profile
}

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification'
  createdAt: Scalars['DateTime']
  isFollowedByMe: Scalars['Boolean']
  notificationId: Scalars['NotificationId']
  wallet: Wallet
}

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification'
  createdAt: Scalars['DateTime']
  mentionPublication: MentionPublication
  notificationId: Scalars['NotificationId']
}

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification'
  createdAt: Scalars['DateTime']
  notificationId: Scalars['NotificationId']
  /** The profile */
  profile: Profile
  publication: MirrorablePublication
}

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification'
  createdAt: Scalars['DateTime']
  notificationId: Scalars['NotificationId']
  /** The profile */
  profile: Profile
  publication: Publication
  reaction: ReactionTypes
}

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage'
  /** The token image nft */
  chainId: Scalars['Int']
  /** The contract address */
  contractAddress: Scalars['ContractAddress']
  /** The token id of the nft */
  tokenId: Scalars['String']
  /** The token image nft */
  uri: Scalars['Url']
  /** If the NFT is verified */
  verified: Scalars['Boolean']
}

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId']
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress']
  /** Token id for NFT */
  tokenId: Scalars['String']
}

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress']
  nfts: Array<NftOwnershipChallenge>
}

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult'
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId']
  text: Scalars['String']
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar']
}

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars['ChainId']
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress']
  /** The unlocker contract type */
  contractType: ContractType
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Scalars['TokenId']>
}

export type NftOwnershipOutput = {
  __typename?: 'NftOwnershipOutput'
  /** The NFT chain id */
  chainID: Scalars['ChainId']
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress']
  /** The unlocker contract type */
  contractType: ContractType
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Scalars['TokenId']>
}

export type Notification =
  | NewCollectNotification
  | NewCommentNotification
  | NewFollowerNotification
  | NewMentionNotification
  | NewMirrorNotification
  | NewReactionNotification

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** The profile id */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>
  /** The profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
}

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity'
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>
  /** The POH status */
  proofOfHumanity: Scalars['Boolean']
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity
}

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>
}

export type OrConditionOutput = {
  __typename?: 'OrConditionOutput'
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>
}

/** The nft type */
export type Owner = {
  __typename?: 'Owner'
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress']
  /** number of tokens owner */
  amount: Scalars['Float']
}

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult'
  items: Array<TagResult>
  pageInfo: PaginatedResultInfo
}

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult'
  items: Array<FeedItem>
  pageInfo: PaginatedResultInfo
}

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult'
  items: Array<Follower>
  pageInfo: PaginatedResultInfo
}

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult'
  items: Array<Following>
  pageInfo: PaginatedResultInfo
}

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult'
  items: Array<Notification>
  pageInfo: PaginatedResultInfo
}

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult'
  items: Array<PublicationForSale>
  pageInfo: PaginatedResultInfo
}

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult'
  items: Array<Profile>
  pageInfo: PaginatedResultInfo
}

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult'
  items: Array<Publication>
  pageInfo: PaginatedResultInfo
}

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo'
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>
  /** The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount?: Maybe<Scalars['Int']>
}

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult'
  items: Array<Publication>
  pageInfo: PaginatedResultInfo
}

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult'
  items: Array<Wallet>
  pageInfo: PaginatedResultInfo
}

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult'
  items: Array<WhoReactedResult>
  pageInfo: PaginatedResultInfo
}

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
}

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult'
  items: Array<Profile>
  pageInfo: PaginatedResultInfo
}

/** The social post */
export type Post = {
  __typename?: 'Post'
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>
  canComment: CanCommentResponse
  canDecrypt: CanDecryptResponse
  canMirror: CanMirrorResponse
  /** The collect module */
  collectModule: CollectModule
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>
  /** The date the post was created on */
  createdAt: Scalars['DateTime']
  hasCollectedByMe: Scalars['Boolean']
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']
  /** The internal publication id */
  id: Scalars['InternalPublicationId']
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']
  /** The metadata for the post */
  metadata: MetadataOutput
  mirrors: Array<Scalars['InternalPublicationId']>
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']
  /** The profile ref */
  profile: Profile
  reaction?: Maybe<ReactionTypes>
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>
  /** The publication stats */
  stats: PublicationStats
}

/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>
}

/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>
}

/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>
}

/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>
}

/** The Profile */
export type Profile = {
  __typename?: 'Profile'
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']>
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>
  /** The follow module */
  followModule?: Maybe<FollowModule>
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars['ContractAddress']>
  /** The profile handle */
  handle: Scalars['Handle']
  /** The profile id */
  id: Scalars['ProfileId']
  /** The profile interests */
  interests?: Maybe<Array<Scalars['ProfileInterest']>>
  /** Is the profile default */
  isDefault: Scalars['Boolean']
  isFollowedByMe: Scalars['Boolean']
  isFollowing: Scalars['Boolean']
  /** Metadata url */
  metadata?: Maybe<Scalars['Url']>
  /** Name of the profile */
  name?: Maybe<Scalars['String']>
  /** The on chain identity */
  onChainIdentity: OnChainIdentity
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress']
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>
  /** Profile stats */
  stats: ProfileStats
}

/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>
}

/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']>
}

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId']
  redeemingProfileId: Scalars['ProfileId']
}

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId']
}

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The follow module enum */
  type: FollowModules
}

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId']
}

export type ProfileMedia = MediaSet | NftImage

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']>
}

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars['ProfileId']
}

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: 'ProfileOwnershipOutput'
  /** The profile id */
  profileId: Scalars['ProfileId']
}

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** The profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>
}

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult'
  items: Array<PublicationRevenue>
  pageInfo: PaginatedResultInfo
}

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** Profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
}

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>
}

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult'
  items: Array<Profile>
  pageInfo: PaginatedResultInfo
  type: SearchRequestTypes
}

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats'
  commentsTotal: Scalars['Int']
  id: Scalars['ProfileId']
  mirrorsTotal: Scalars['Int']
  postsTotal: Scalars['Int']
  publicationsTotal: Scalars['Int']
  /** Total collects count */
  totalCollects: Scalars['Int']
  /** Total comment count */
  totalComments: Scalars['Int']
  /** Total follower count */
  totalFollowers: Scalars['Int']
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int']
  /** Total mirror count */
  totalMirrors: Scalars['Int']
  /** Total post count */
  totalPosts: Scalars['Int']
  /** Total publication count */
  totalPublications: Scalars['Int']
}

/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>
}

/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']>
}

/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']>
}

/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']>
}

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: 'ProviderSpecificParamsOutput'
  /** The encryption key */
  encryptionKey: Scalars['ContentEncryptionKey']
}

export type ProxyActionError = {
  __typename?: 'ProxyActionError'
  lastKnownTxId?: Maybe<Scalars['TxId']>
  reason: Scalars['String']
}

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued'
  queuedAt: Scalars['DateTime']
}

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>
  follow?: InputMaybe<FollowProxyAction>
}

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult'
  status: ProxyActionStatusTypes
  txHash: Scalars['TxHash']
  txId: Scalars['TxId']
}

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>
  /** Pre calculated cid of the file to push */
  itemCid: Scalars['IfpsCid']
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>
}

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: 'PublicMediaResults'
  /** ipfs uri to add on the metadata */
  media: MediaOutput
  /** Signed url to push the file */
  signedUrl: Scalars['String']
}

export type Publication = Comment | Mirror | Post

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post

/** The publication main focus */
export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = 'LENS'
}

/** Publication metadata content waring filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>
}

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars['Locale']>
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>
  tags?: InputMaybe<PublicationMetadataTagsFilter>
}

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>
  item: Scalars['Url']
  source?: InputMaybe<PublicationMediaSource>
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>
}

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus'
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']>
  status: PublicationMetadataStatusType
}

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to only match all */
  all?: InputMaybe<Array<Scalars['String']>>
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars['String']>>
}

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String']
  /** Name of the item. */
  name: Scalars['String']
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String']
}

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars['Locale']
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String']
  /** Name of the item. */
  name: Scalars['String']
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars['String']>>
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String']
}

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>
}

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue'
  publication: Publication
  revenue: RevenueAggregate
}

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId']
}

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult'
  items: Array<PublicationSearchResultItem>
  pageInfo: PaginatedResultInfo
  type: SearchRequestTypes
}

export type PublicationSearchResultItem = Comment | Post

export type PublicationSignatureContextInput = {
  signature: Scalars['String']
}

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats'
  commentsTotal: Scalars['Int']
  /** The publication id */
  id: Scalars['InternalPublicationId']
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int']
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int']
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int']
  /** The total amount of upvotes */
  totalDownvotes: Scalars['Int']
  /** The total amount of downvotes */
  totalUpvotes: Scalars['Int']
}

/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>
}

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult'
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars['String']>
  valid: Scalars['Boolean']
}

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>
  cursor?: InputMaybe<Scalars['Cursor']>
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
}

export type Query = {
  __typename?: 'Query'
  allPublicationsTags: PaginatedAllPublicationsTagsResult
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>
  challenge: AuthChallengeResult
  claimableHandles: ClaimableHandles
  claimableStatus: ClaimStatus
  defaultProfile?: Maybe<Profile>
  doesFollow: Array<DoesFollowResponse>
  enabledModuleCurrencies: Array<Erc20>
  enabledModules: EnabledModules
  exploreProfiles: ExploreProfileResult
  explorePublications: ExplorePublicationResult
  feed: PaginatedFeedResult
  feedHighlights: PaginatedTimelineResult
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>
  followers: PaginatedFollowersResult
  following: PaginatedFollowingResult
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval
  globalProtocolStats: GlobalProtocolStats
  hasTxHashBeenIndexed: TransactionResult
  internalPublicationFilter: PaginatedPublicationResult
  mutualFollowersProfiles: PaginatedProfileResult
  nftOwnershipChallenge: NftOwnershipChallengeResult
  nfts: NfTsResult
  notifications: PaginatedNotificationResult
  pendingApprovalFollows: PendingApproveFollowsResult
  ping: Scalars['String']
  profile?: Maybe<Profile>
  profileFollowModuleBeenRedeemed: Scalars['Boolean']
  profileFollowRevenue: FollowRevenueResult
  /** Get the list of profile interests */
  profileInterests: Array<Scalars['ProfileInterest']>
  profileOnChainIdentity: Array<OnChainIdentity>
  profilePublicationRevenue: ProfilePublicationRevenueResult
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult
  profiles: PaginatedProfileResult
  proxyActionStatus: ProxyActionStatusResultUnion
  publication?: Maybe<Publication>
  publicationMetadataStatus: PublicationMetadataStatus
  publicationRevenue?: Maybe<PublicationRevenue>
  publications: PaginatedPublicationResult
  recommendedProfiles: Array<Profile>
  rel?: Maybe<Scalars['Void']>
  search: SearchResult
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult
  txIdToTxHash: Scalars['TxHash']
  unknownEnabledModules: EnabledModules
  userSigNonces: UserSigNonces
  validatePublicationMetadata: PublicationValidateMetadataResult
  verify: Scalars['Boolean']
  whoCollectedPublication: PaginatedWhoCollectedResult
  whoReactedPublication: PaginatedWhoReactedResult
}

export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest
}

export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest
}

export type QueryChallengeArgs = {
  request: ChallengeRequest
}

export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest
}

export type QueryDoesFollowArgs = {
  request: DoesFollowRequest
}

export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest
}

export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest
}

export type QueryFeedArgs = {
  request: FeedRequest
}

export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest
}

export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest
}

export type QueryFollowersArgs = {
  request: FollowersRequest
}

export type QueryFollowingArgs = {
  request: FollowingRequest
}

export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest
}

export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>
}

export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest
}

export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest
}

export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest
}

export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest
}

export type QueryNftsArgs = {
  request: NfTsRequest
}

export type QueryNotificationsArgs = {
  request: NotificationRequest
}

export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest
}

export type QueryProfileArgs = {
  request: SingleProfileQueryRequest
}

export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest
}

export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest
}

export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest
}

export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest
}

export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest
}

export type QueryProfilesArgs = {
  request: ProfileQueryRequest
}

export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId']
}

export type QueryPublicationArgs = {
  request: PublicationQueryRequest
}

export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest
}

export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest
}

export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest
}

export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>
}

export type QueryRelArgs = {
  request: RelRequest
}

export type QuerySearchArgs = {
  request: SearchQueryRequest
}

export type QueryTimelineArgs = {
  request: TimelineRequest
}

export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId']
}

export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest
}

export type QueryVerifyArgs = {
  request: VerifyRequest
}

export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest
}

export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest
}

export type ReactionEvent = {
  __typename?: 'ReactionEvent'
  profile: Profile
  reaction: ReactionTypes
  timestamp: Scalars['DateTime']
}

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>
}

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId']
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId']
  /** The reaction */
  reaction: ReactionTypes
}

/** Reaction types */
export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars['Boolean']>
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars['Boolean']>
}

export type ReferenceModule =
  | DegreesOfSeparationReferenceModuleSettings
  | FollowOnlyReferenceModuleSettings
  | UnknownReferenceModuleSettings

export type ReferenceModuleParams = {
  /** The degrees of seperation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>
}

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt']
}

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress']
  secret: Scalars['String']
}

export type RelayError = {
  __typename?: 'RelayError'
  reason: RelayErrorReasons
}

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayResult = RelayError | RelayerResult

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult'
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars['TxHash']
  /** The tx id */
  txId: Scalars['TxId']
}

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId']
}

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>
  publicationId: Scalars['InternalPublicationId']
  reason: ReportingReasonInputParams
}

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>
  illegalReason?: InputMaybe<IllegalReasonInputParams>
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>
  spamReason?: InputMaybe<SpamReasonInputParams>
}

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle'
  expiry: Scalars['DateTime']
  handle: Scalars['Handle']
  id: Scalars['HandleClaimIdScalar']
  source: Scalars['String']
}

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate'
  total: Erc20Amount
}

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The collect modules enum */
  type: CollectModules
}

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The follow module enum */
  type: FollowModules
}

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** The search term */
  query: Scalars['Search']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
  type: SearchRequestTypes
}

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason
  subreason: PublicationReportingSensitiveSubreason
}

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult'
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']
  /** This broadcast item ID */
  id: Scalars['BroadcastId']
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData
}

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData'
  /** The typed data domain */
  domain: Eip712TypedDataDomain
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue
}

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes'
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>
}

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue'
  deadline: Scalars['UnixTimestamp']
  nonce: Scalars['Nonce']
  profileId: Scalars['ProfileId']
  wallet: Scalars['EthereumAddress']
}

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>
  /** The profile id */
  profileId: Scalars['ProfileId']
}

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress']
  /** The signature */
  signature: Scalars['Signature']
}

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']>
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>
}

export type SpamReasonInputParams = {
  reason: PublicationReportingReason
  subreason: PublicationReportingSpamSubreason
}

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity'
  source: SybilDotOrgIdentitySource
  /** The sybil dot org status */
  verified: Scalars['Boolean']
}

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource'
  twitter: SybilDotOrgTwitterIdentity
}

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity'
  handle?: Maybe<Scalars['String']>
}

/** The social comment */
export type TagResult = {
  __typename?: 'TagResult'
  /** The tag */
  tag: Scalars['PublicationTag']
  /** The total amount of publication tagged */
  total: Scalars['Int']
}

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
}

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings'
  /** The collect module amount info */
  amount: ModuleFeeAmount
  contractAddress: Scalars['ContractAddress']
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime']
  /** Follower only */
  followerOnly: Scalars['Boolean']
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']
  /** The collect module referral fee */
  referralFee: Scalars['Float']
  /** The collect modules enum */
  type: CollectModules
}

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  metadata?: InputMaybe<PublicationMetadataFilters>
  /** The profile id */
  profileId: Scalars['ProfileId']
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType>>
}

/** Timeline types */
export enum TimelineType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type TransactionError = {
  __typename?: 'TransactionError'
  reason: TransactionErrorReasons
  txReceipt?: Maybe<TransactionReceipt>
}

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult'
  indexed: Scalars['Boolean']
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>
  txHash: Scalars['TxHash']
  txReceipt?: Maybe<TransactionReceipt>
}

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt'
  blockHash: Scalars['String']
  blockNumber: Scalars['Int']
  byzantium: Scalars['Boolean']
  confirmations: Scalars['Int']
  contractAddress?: Maybe<Scalars['ContractAddress']>
  cumulativeGasUsed: Scalars['String']
  effectiveGasPrice: Scalars['String']
  from: Scalars['EthereumAddress']
  gasUsed: Scalars['String']
  logs: Array<Log>
  logsBloom: Scalars['String']
  root?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['Int']>
  to?: Maybe<Scalars['EthereumAddress']>
  transactionHash: Scalars['TxHash']
  transactionIndex: Scalars['Int']
  type: Scalars['Int']
}

export type TransactionResult = TransactionError | TransactionIndexedResult

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce']
}

export type UnfollowRequest = {
  profile: Scalars['ProfileId']
}

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress']
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']
}

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings'
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars['CollectModuleData']
  contractAddress: Scalars['ContractAddress']
  /** The collect modules enum */
  type: CollectModules
}

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress']
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']
}

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']
}

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars['FollowModuleData']
  /** The follow modules enum */
  type: FollowModules
}

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress']
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']
}

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings'
  contractAddress: Scalars['ContractAddress']
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['ReferenceModuleData']
  /** The reference modules enum */
  type: ReferenceModules
}

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>
  profileId: Scalars['ProfileId']
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>
}

export type UserSigNonces = {
  __typename?: 'UserSigNonces'
  lensHubOnChainSigNonce: Scalars['Nonce']
  peripheryOnChainSigNonce: Scalars['Nonce']
}

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>
  metadatav2?: InputMaybe<PublicationMetadataV2Input>
}

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt']
}

export type Wallet = {
  __typename?: 'Wallet'
  address: Scalars['EthereumAddress']
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>
}

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId']
}

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>
  limit?: InputMaybe<Scalars['LimitScalar']>
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId']
}

/** The Profile */
export type WhoReactedResult = {
  __typename?: 'WhoReactedResult'
  profile: Profile
  /** The reaction */
  reaction: ReactionTypes
  /** The reaction */
  reactionAt: Scalars['DateTime']
  /** The reaction id */
  reactionId: Scalars['ReactionId']
}

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity'
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean']
}

type CollectModuleFields_FeeCollectModuleSettings_Fragment = {
  __typename?: 'FeeCollectModuleSettings'
  type: CollectModules
  referralFee: number
  contractAddress: any
  followerOnly: boolean
  amount: {
    __typename?: 'ModuleFeeAmount'
    value: string
    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
  }
}

type CollectModuleFields_FreeCollectModuleSettings_Fragment = {
  __typename?: 'FreeCollectModuleSettings'
  type: CollectModules
  contractAddress: any
  followerOnly: boolean
}

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = {
  __typename?: 'LimitedFeeCollectModuleSettings'
  type: CollectModules
  collectLimit: string
  referralFee: number
  contractAddress: any
  followerOnly: boolean
  amount: {
    __typename?: 'ModuleFeeAmount'
    value: string
    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
  }
}

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings'
  type: CollectModules
  collectLimit: string
  endTimestamp: any
  referralFee: number
  contractAddress: any
  followerOnly: boolean
  amount: {
    __typename?: 'ModuleFeeAmount'
    value: string
    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
  }
}

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename?: 'RevertCollectModuleSettings' }

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = {
  __typename?: 'TimedFeeCollectModuleSettings'
  type: CollectModules
  endTimestamp: any
  referralFee: number
  contractAddress: any
  followerOnly: boolean
  amount: {
    __typename?: 'ModuleFeeAmount'
    value: string
    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
  }
}

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = {
  __typename?: 'UnknownCollectModuleSettings'
}

export type CollectModuleFieldsFragment =
  | CollectModuleFields_FeeCollectModuleSettings_Fragment
  | CollectModuleFields_FreeCollectModuleSettings_Fragment
  | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_RevertCollectModuleSettings_Fragment
  | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment
  | CollectModuleFields_UnknownCollectModuleSettings_Fragment

export type CommentFieldsFragment = {
  __typename?: 'Comment'
  id: any
  reaction?: ReactionTypes | null
  mirrors: Array<any>
  hasCollectedByMe: boolean
  hidden: boolean
  createdAt: any
  appId?: any | null
  profile: {
    __typename?: 'Profile'
    id: any
    name?: string | null
    handle: any
    bio?: string | null
    ownedBy: any
    isFollowedByMe: boolean
    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any }
      | null
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  }
  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
  collectedBy?: {
    __typename?: 'Wallet'
    address: any
    defaultProfile?: {
      __typename?: 'Profile'
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      isFollowedByMe: boolean
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    } | null
  } | null
  collectModule:
    | {
        __typename?: 'FeeCollectModuleSettings'
        type: CollectModules
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'FreeCollectModuleSettings'
        type: CollectModules
        contractAddress: any
        followerOnly: boolean
      }
    | {
        __typename?: 'LimitedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'LimitedTimedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'RevertCollectModuleSettings' }
    | {
        __typename?: 'TimedFeeCollectModuleSettings'
        type: CollectModules
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'UnknownCollectModuleSettings' }
  stats: {
    __typename?: 'PublicationStats'
    totalUpvotes: number
    totalAmountOfMirrors: number
    totalAmountOfCollects: number
    totalAmountOfComments: number
  }
  metadata: {
    __typename?: 'MetadataOutput'
    name?: string | null
    description?: any | null
    content?: any | null
    image?: any | null
    attributes: Array<{
      __typename?: 'MetadataAttributeOutput'
      traitType?: string | null
      value?: string | null
    }>
    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
    media: Array<{
      __typename?: 'MediaSet'
      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
    }>
  }
  commentOn?:
    | {
        __typename?: 'Comment'
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: { __typename?: 'Profile'; handle: any } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        mainPost:
          | {
              __typename?: 'Mirror'
              id: any
              reaction?: ReactionTypes | null
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              mirrorOf:
                | {
                    __typename?: 'Comment'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    createdAt: any
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
      }
    | {
        __typename?: 'Mirror'
        id: any
        reaction?: ReactionTypes | null
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
        mirrorOf:
          | {
              __typename?: 'Comment'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              createdAt: any
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
      }
    | {
        __typename?: 'Post'
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
      }
    | null
}

export type GroupFieldsFragment = {
  __typename?: 'Post'
  id: any
  createdAt: any
  profile: { __typename?: 'Profile'; id: any }
  metadata: {
    __typename?: 'MetadataOutput'
    name?: string | null
    description?: any | null
    content?: any | null
    attributes: Array<{ __typename?: 'MetadataAttributeOutput'; value?: string | null }>
    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
  }
  stats: { __typename?: 'PublicationStats'; totalAmountOfCollects: number; totalAmountOfComments: number }
}

export type MetadataFieldsFragment = {
  __typename?: 'MetadataOutput'
  name?: string | null
  description?: any | null
  content?: any | null
  image?: any | null
  attributes: Array<{
    __typename?: 'MetadataAttributeOutput'
    traitType?: string | null
    value?: string | null
  }>
  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
  media: Array<{
    __typename?: 'MediaSet'
    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
  }>
}

export type MirrorFieldsFragment = {
  __typename?: 'Mirror'
  id: any
  reaction?: ReactionTypes | null
  hidden: boolean
  createdAt: any
  appId?: any | null
  profile: {
    __typename?: 'Profile'
    id: any
    name?: string | null
    handle: any
    bio?: string | null
    ownedBy: any
    isFollowedByMe: boolean
    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any }
      | null
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  }
  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
  collectModule:
    | {
        __typename?: 'FeeCollectModuleSettings'
        type: CollectModules
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'FreeCollectModuleSettings'
        type: CollectModules
        contractAddress: any
        followerOnly: boolean
      }
    | {
        __typename?: 'LimitedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'LimitedTimedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'RevertCollectModuleSettings' }
    | {
        __typename?: 'TimedFeeCollectModuleSettings'
        type: CollectModules
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'UnknownCollectModuleSettings' }
  stats: {
    __typename?: 'PublicationStats'
    totalUpvotes: number
    totalAmountOfMirrors: number
    totalAmountOfCollects: number
    totalAmountOfComments: number
  }
  metadata: {
    __typename?: 'MetadataOutput'
    name?: string | null
    description?: any | null
    content?: any | null
    image?: any | null
    attributes: Array<{
      __typename?: 'MetadataAttributeOutput'
      traitType?: string | null
      value?: string | null
    }>
    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
    media: Array<{
      __typename?: 'MediaSet'
      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
    }>
  }
  mirrorOf:
    | {
        __typename?: 'Comment'
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        createdAt: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
      }
    | {
        __typename?: 'Post'
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
      }
}

export type PostFieldsFragment = {
  __typename?: 'Post'
  id: any
  reaction?: ReactionTypes | null
  mirrors: Array<any>
  hasCollectedByMe: boolean
  hidden: boolean
  createdAt: any
  appId?: any | null
  profile: {
    __typename?: 'Profile'
    id: any
    name?: string | null
    handle: any
    bio?: string | null
    ownedBy: any
    isFollowedByMe: boolean
    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any }
      | null
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  }
  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
  collectedBy?: {
    __typename?: 'Wallet'
    address: any
    defaultProfile?: {
      __typename?: 'Profile'
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      isFollowedByMe: boolean
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    } | null
  } | null
  collectModule:
    | {
        __typename?: 'FeeCollectModuleSettings'
        type: CollectModules
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'FreeCollectModuleSettings'
        type: CollectModules
        contractAddress: any
        followerOnly: boolean
      }
    | {
        __typename?: 'LimitedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | {
        __typename?: 'LimitedTimedFeeCollectModuleSettings'
        type: CollectModules
        collectLimit: string
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'RevertCollectModuleSettings' }
    | {
        __typename?: 'TimedFeeCollectModuleSettings'
        type: CollectModules
        endTimestamp: any
        referralFee: number
        contractAddress: any
        followerOnly: boolean
        amount: {
          __typename?: 'ModuleFeeAmount'
          value: string
          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
        }
      }
    | { __typename?: 'UnknownCollectModuleSettings' }
  stats: {
    __typename?: 'PublicationStats'
    totalUpvotes: number
    totalAmountOfMirrors: number
    totalAmountOfCollects: number
    totalAmountOfComments: number
  }
  metadata: {
    __typename?: 'MetadataOutput'
    name?: string | null
    description?: any | null
    content?: any | null
    image?: any | null
    attributes: Array<{
      __typename?: 'MetadataAttributeOutput'
      traitType?: string | null
      value?: string | null
    }>
    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
    media: Array<{
      __typename?: 'MediaSet'
      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
    }>
  }
}

export type ProfileFieldsFragment = {
  __typename?: 'Profile'
  id: any
  name?: string | null
  handle: any
  bio?: string | null
  ownedBy: any
  isFollowedByMe: boolean
  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
  picture?:
    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
    | { __typename?: 'NftImage'; uri: any }
    | null
  followModule?:
    | { __typename: 'FeeFollowModuleSettings' }
    | { __typename: 'ProfileFollowModuleSettings' }
    | { __typename: 'RevertFollowModuleSettings' }
    | { __typename: 'UnknownFollowModuleSettings' }
    | null
}

type RelayerResultFields_RelayError_Fragment = { __typename?: 'RelayError'; reason: RelayErrorReasons }

type RelayerResultFields_RelayerResult_Fragment = { __typename?: 'RelayerResult'; txHash: any; txId: any }

export type RelayerResultFieldsFragment =
  | RelayerResultFields_RelayError_Fragment
  | RelayerResultFields_RelayerResult_Fragment

export type StatsFieldsFragment = {
  __typename?: 'PublicationStats'
  totalUpvotes: number
  totalAmountOfMirrors: number
  totalAmountOfCollects: number
  totalAmountOfComments: number
}

export type AddReactionMutationVariables = Exact<{
  request: ReactionRequest
}>

export type AddReactionMutation = { __typename?: 'Mutation'; addReaction?: any | null }

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge
}>

export type AuthenticateMutation = {
  __typename?: 'Mutation'
  authenticate: { __typename?: 'AuthenticationResult'; accessToken: any; refreshToken: any }
}

export type BroadcastMutationVariables = Exact<{
  request: BroadcastRequest
}>

export type BroadcastMutation = {
  __typename?: 'Mutation'
  broadcast:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateBurnProfileTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: BurnProfileRequest
}>

export type CreateBurnProfileTypedDataMutation = {
  __typename?: 'Mutation'
  createBurnProfileTypedData: {
    __typename?: 'CreateBurnProfileBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateBurnEIP712TypedData'
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      types: {
        __typename?: 'CreateBurnEIP712TypedDataTypes'
        BurnWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      value: { __typename?: 'CreateBurnEIP712TypedDataValue'; nonce: any; deadline: any; tokenId: string }
    }
  }
}

export type CreateCollectTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreateCollectRequest
}>

export type CreateCollectTypedDataMutation = {
  __typename?: 'Mutation'
  createCollectTypedData: {
    __typename?: 'CreateCollectBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateCollectEIP712TypedData'
      types: {
        __typename?: 'CreateCollectEIP712TypedDataTypes'
        CollectWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateCollectEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        pubId: any
        data: any
      }
    }
  }
}

export type CreateCommentTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicCommentRequest
}>

export type CreateCommentTypedDataMutation = {
  __typename?: 'Mutation'
  createCommentTypedData: {
    __typename?: 'CreateCommentBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateCommentEIP712TypedData'
      types: {
        __typename?: 'CreateCommentEIP712TypedDataTypes'
        CommentWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateCommentEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        profileIdPointed: any
        pubIdPointed: any
        contentURI: any
        collectModule: any
        collectModuleInitData: any
        referenceModule: any
        referenceModuleData: any
        referenceModuleInitData: any
      }
    }
  }
}

export type CreateCommentViaDispatcherMutationVariables = Exact<{
  request: CreatePublicCommentRequest
}>

export type CreateCommentViaDispatcherMutation = {
  __typename?: 'Mutation'
  createCommentViaDispatcher:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateFollowTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: FollowRequest
}>

export type CreateFollowTypedDataMutation = {
  __typename?: 'Mutation'
  createFollowTypedData: {
    __typename?: 'CreateFollowBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateFollowEIP712TypedData'
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      types: {
        __typename?: 'CreateFollowEIP712TypedDataTypes'
        FollowWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      value: {
        __typename?: 'CreateFollowEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileIds: Array<any>
        datas: Array<any>
      }
    }
  }
}

export type CreateMirrorTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreateMirrorRequest
}>

export type CreateMirrorTypedDataMutation = {
  __typename?: 'Mutation'
  createMirrorTypedData: {
    __typename?: 'CreateMirrorBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateMirrorEIP712TypedData'
      types: {
        __typename?: 'CreateMirrorEIP712TypedDataTypes'
        MirrorWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateMirrorEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        profileIdPointed: any
        pubIdPointed: any
        referenceModule: any
        referenceModuleData: any
        referenceModuleInitData: any
      }
    }
  }
}

export type CreateMirrorViaDispatcherMutationVariables = Exact<{
  request: CreateMirrorRequest
}>

export type CreateMirrorViaDispatcherMutation = {
  __typename?: 'Mutation'
  createMirrorViaDispatcher:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreatePostTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicPostRequest
}>

export type CreatePostTypedDataMutation = {
  __typename?: 'Mutation'
  createPostTypedData: {
    __typename?: 'CreatePostBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreatePostEIP712TypedData'
      types: {
        __typename?: 'CreatePostEIP712TypedDataTypes'
        PostWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreatePostEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        contentURI: any
        collectModule: any
        collectModuleInitData: any
        referenceModule: any
        referenceModuleInitData: any
      }
    }
  }
}

export type CreatePostViaDispatcherMutationVariables = Exact<{
  request: CreatePublicPostRequest
}>

export type CreatePostViaDispatcherMutation = {
  __typename?: 'Mutation'
  createPostViaDispatcher:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest
}>

export type CreateProfileMutation = {
  __typename?: 'Mutation'
  createProfile:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateSetDefaultProfileTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreateSetDefaultProfileRequest
}>

export type CreateSetDefaultProfileTypedDataMutation = {
  __typename?: 'Mutation'
  createSetDefaultProfileTypedData: {
    __typename?: 'SetDefaultProfileBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'SetDefaultProfileEIP712TypedData'
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      types: {
        __typename?: 'SetDefaultProfileEIP712TypedDataTypes'
        SetDefaultProfileWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      value: {
        __typename?: 'SetDefaultProfileEIP712TypedDataValue'
        nonce: any
        deadline: any
        wallet: any
        profileId: any
      }
    }
  }
}

export type CreateSetDispatcherTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: SetDispatcherRequest
}>

export type CreateSetDispatcherTypedDataMutation = {
  __typename?: 'Mutation'
  createSetDispatcherTypedData: {
    __typename?: 'CreateSetDispatcherBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateSetDispatcherEIP712TypedData'
      types: {
        __typename?: 'CreateSetDispatcherEIP712TypedDataTypes'
        SetDispatcherWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateSetDispatcherEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        dispatcher: any
      }
    }
  }
}

export type CreateSetFollowModuleTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreateSetFollowModuleRequest
}>

export type CreateSetFollowModuleTypedDataMutation = {
  __typename?: 'Mutation'
  createSetFollowModuleTypedData: {
    __typename?: 'CreateSetFollowModuleBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateSetFollowModuleEIP712TypedData'
      types: {
        __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes'
        SetFollowModuleWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateSetFollowModuleEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        followModule: any
        followModuleInitData: any
      }
    }
  }
}

export type CreateSetProfileImageUriTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: UpdateProfileImageRequest
}>

export type CreateSetProfileImageUriTypedDataMutation = {
  __typename?: 'Mutation'
  createSetProfileImageURITypedData: {
    __typename?: 'CreateSetProfileImageUriBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateSetProfileImageUriEIP712TypedData'
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      types: {
        __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes'
        SetProfileImageURIWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      value: {
        __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue'
        nonce: any
        deadline: any
        imageURI: any
        profileId: any
      }
    }
  }
}

export type CreateSetProfileImageUriViaDispatcherMutationVariables = Exact<{
  request: UpdateProfileImageRequest
}>

export type CreateSetProfileImageUriViaDispatcherMutation = {
  __typename?: 'Mutation'
  createSetProfileImageURIViaDispatcher:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateSetProfileMetadataTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>
  request: CreatePublicSetProfileMetadataUriRequest
}>

export type CreateSetProfileMetadataTypedDataMutation = {
  __typename?: 'Mutation'
  createSetProfileMetadataTypedData: {
    __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateSetProfileMetadataURIEIP712TypedData'
      types: {
        __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes'
        SetProfileMetadataURIWithSig: Array<{
          __typename?: 'EIP712TypedDataField'
          name: string
          type: string
        }>
      }
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      value: {
        __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue'
        nonce: any
        deadline: any
        profileId: any
        metadata: any
      }
    }
  }
}

export type CreateSetProfileMetadataViaDispatcherMutationVariables = Exact<{
  request: CreatePublicSetProfileMetadataUriRequest
}>

export type CreateSetProfileMetadataViaDispatcherMutation = {
  __typename?: 'Mutation'
  createSetProfileMetadataViaDispatcher:
    | { __typename?: 'RelayError'; reason: RelayErrorReasons }
    | { __typename?: 'RelayerResult'; txHash: any; txId: any }
}

export type CreateUnfollowTypedDataMutationVariables = Exact<{
  request: UnfollowRequest
}>

export type CreateUnfollowTypedDataMutation = {
  __typename?: 'Mutation'
  createUnfollowTypedData: {
    __typename?: 'CreateUnfollowBroadcastItemResult'
    id: any
    expiresAt: any
    typedData: {
      __typename?: 'CreateBurnEIP712TypedData'
      domain: {
        __typename?: 'EIP712TypedDataDomain'
        name: string
        chainId: any
        version: string
        verifyingContract: any
      }
      types: {
        __typename?: 'CreateBurnEIP712TypedDataTypes'
        BurnWithSig: Array<{ __typename?: 'EIP712TypedDataField'; name: string; type: string }>
      }
      value: { __typename?: 'CreateBurnEIP712TypedDataValue'; nonce: any; deadline: any; tokenId: string }
    }
  }
}

export type HidePublicationMutationVariables = Exact<{
  request: HidePublicationRequest
}>

export type HidePublicationMutation = { __typename?: 'Mutation'; hidePublication?: any | null }

export type ProxyActionMutationVariables = Exact<{
  request: ProxyActionRequest
}>

export type ProxyActionMutation = { __typename?: 'Mutation'; proxyAction: any }

export type RemoveReactionMutationVariables = Exact<{
  request: ReactionRequest
}>

export type RemoveReactionMutation = { __typename?: 'Mutation'; removeReaction?: any | null }

export type ReportPublicationMutationVariables = Exact<{
  request: ReportPublicationRequest
}>

export type ReportPublicationMutation = { __typename?: 'Mutation'; reportPublication?: any | null }

export type ApprovedModuleAllowanceAmountQueryVariables = Exact<{
  request: ApprovedModuleAllowanceAmountRequest
}>

export type ApprovedModuleAllowanceAmountQuery = {
  __typename?: 'Query'
  approvedModuleAllowanceAmount: Array<{
    __typename?: 'ApprovedAllowanceAmount'
    currency: any
    module: string
    allowance: string
    contractAddress: any
  }>
  enabledModuleCurrencies: Array<{
    __typename?: 'Erc20'
    name: string
    symbol: string
    decimals: number
    address: any
  }>
}

export type BCharityStatsQueryVariables = Exact<{ [key: string]: never }>

export type BCharityStatsQuery = {
  __typename?: 'Query'
  globalProtocolStats: {
    __typename?: 'GlobalProtocolStats'
    totalProfiles: number
    totalPosts: number
    totalBurntProfiles: number
    totalMirrors: number
    totalComments: number
    totalCollects: number
    totalFollows: number
  }
}

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest
}>

export type ChallengeQuery = {
  __typename?: 'Query'
  challenge: { __typename?: 'AuthChallengeResult'; text: string }
}

export type CollectModuleQueryVariables = Exact<{
  request: PublicationQueryRequest
}>

export type CollectModuleQuery = {
  __typename?: 'Query'
  publication?:
    | {
        __typename?: 'Comment'
        collectNftAddress?: any | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
      }
    | {
        __typename?: 'Mirror'
        collectNftAddress?: any | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
      }
    | {
        __typename?: 'Post'
        collectNftAddress?: any | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
      }
    | null
}

export type CollectorsQueryVariables = Exact<{
  request: WhoCollectedPublicationRequest
}>

export type CollectorsQuery = {
  __typename?: 'Query'
  whoCollectedPublication: {
    __typename?: 'PaginatedWhoCollectedResult'
    items: Array<{
      __typename?: 'Wallet'
      address: any
      defaultProfile?: {
        __typename?: 'Profile'
        isFollowedByMe: boolean
        id: any
        name?: string | null
        handle: any
        bio?: string | null
        ownedBy: any
        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
        picture?:
          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
          | { __typename?: 'NftImage'; uri: any }
          | null
        followModule?:
          | { __typename: 'FeeFollowModuleSettings' }
          | { __typename: 'ProfileFollowModuleSettings' }
          | { __typename: 'RevertFollowModuleSettings' }
          | { __typename: 'UnknownFollowModuleSettings' }
          | null
      } | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type CommentFeedQueryVariables = Exact<{
  request: PublicationsQueryRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type CommentFeedQuery = {
  __typename?: 'Query'
  publications: {
    __typename?: 'PaginatedPublicationResult'
    items: Array<
      | {
          __typename?: 'Comment'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          commentOn?:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                mainPost:
                  | {
                      __typename?: 'Mirror'
                      id: any
                      reaction?: ReactionTypes | null
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                      mirrorOf:
                        | {
                            __typename?: 'Comment'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            createdAt: any
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                          }
                        | {
                            __typename?: 'Post'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            hasCollectedByMe: boolean
                            hidden: boolean
                            createdAt: any
                            appId?: any | null
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            collectedBy?: {
                              __typename?: 'Wallet'
                              address: any
                              defaultProfile?: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              } | null
                            } | null
                            collectModule:
                              | {
                                  __typename?: 'FeeCollectModuleSettings'
                                  type: CollectModules
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'FreeCollectModuleSettings'
                                  type: CollectModules
                                  contractAddress: any
                                  followerOnly: boolean
                                }
                              | {
                                  __typename?: 'LimitedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'RevertCollectModuleSettings' }
                              | {
                                  __typename?: 'TimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'UnknownCollectModuleSettings' }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                            metadata: {
                              __typename?: 'MetadataOutput'
                              name?: string | null
                              description?: any | null
                              content?: any | null
                              image?: any | null
                              attributes: Array<{
                                __typename?: 'MetadataAttributeOutput'
                                traitType?: string | null
                                value?: string | null
                              }>
                              cover?: {
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any }
                              } | null
                              media: Array<{
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                              }>
                            }
                          }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Mirror'
                id: any
                reaction?: ReactionTypes | null
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                mirrorOf:
                  | {
                      __typename?: 'Comment'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      createdAt: any
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
            | null
        }
      | { __typename?: 'Mirror' }
      | { __typename?: 'Post' }
    >
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null; next?: any | null }
  }
}

export type EnabledCurrencyModulesQueryVariables = Exact<{ [key: string]: never }>

export type EnabledCurrencyModulesQuery = {
  __typename?: 'Query'
  enabledModuleCurrencies: Array<{
    __typename?: 'Erc20'
    name: string
    symbol: string
    decimals: number
    address: any
  }>
}

export type EnabledCurrencyModulesWithProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest
}>

export type EnabledCurrencyModulesWithProfileQuery = {
  __typename?: 'Query'
  enabledModuleCurrencies: Array<{
    __typename?: 'Erc20'
    name: string
    symbol: string
    decimals: number
    address: any
  }>
  profile?: {
    __typename?: 'Profile'
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  } | null
}

export type EnabledModulesQueryVariables = Exact<{ [key: string]: never }>

export type EnabledModulesQuery = {
  __typename?: 'Query'
  enabledModules: {
    __typename?: 'EnabledModules'
    collectModules: Array<{ __typename?: 'EnabledModule'; moduleName: string; contractAddress: any }>
  }
  enabledModuleCurrencies: Array<{
    __typename?: 'Erc20'
    name: string
    symbol: string
    decimals: number
    address: any
  }>
}

export type ExploreFeedQueryVariables = Exact<{
  request: ExplorePublicationRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type ExploreFeedQuery = {
  __typename?: 'Query'
  explorePublications: {
    __typename?: 'ExplorePublicationResult'
    items: Array<
      | {
          __typename?: 'Comment'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          commentOn?:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                mainPost:
                  | {
                      __typename?: 'Mirror'
                      id: any
                      reaction?: ReactionTypes | null
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                      mirrorOf:
                        | {
                            __typename?: 'Comment'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            createdAt: any
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                          }
                        | {
                            __typename?: 'Post'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            hasCollectedByMe: boolean
                            hidden: boolean
                            createdAt: any
                            appId?: any | null
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            collectedBy?: {
                              __typename?: 'Wallet'
                              address: any
                              defaultProfile?: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              } | null
                            } | null
                            collectModule:
                              | {
                                  __typename?: 'FeeCollectModuleSettings'
                                  type: CollectModules
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'FreeCollectModuleSettings'
                                  type: CollectModules
                                  contractAddress: any
                                  followerOnly: boolean
                                }
                              | {
                                  __typename?: 'LimitedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'RevertCollectModuleSettings' }
                              | {
                                  __typename?: 'TimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'UnknownCollectModuleSettings' }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                            metadata: {
                              __typename?: 'MetadataOutput'
                              name?: string | null
                              description?: any | null
                              content?: any | null
                              image?: any | null
                              attributes: Array<{
                                __typename?: 'MetadataAttributeOutput'
                                traitType?: string | null
                                value?: string | null
                              }>
                              cover?: {
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any }
                              } | null
                              media: Array<{
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                              }>
                            }
                          }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Mirror'
                id: any
                reaction?: ReactionTypes | null
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                mirrorOf:
                  | {
                      __typename?: 'Comment'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      createdAt: any
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
            | null
        }
      | {
          __typename?: 'Mirror'
          id: any
          reaction?: ReactionTypes | null
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          mirrorOf:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
        }
      | {
          __typename?: 'Post'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
        }
    >
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null; next?: any | null }
  }
}

export type FeedHighlightsQueryVariables = Exact<{
  request: FeedHighlightsRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type FeedHighlightsQuery = {
  __typename?: 'Query'
  feedHighlights: {
    __typename?: 'PaginatedTimelineResult'
    items: Array<
      | {
          __typename?: 'Comment'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          commentOn?:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                mainPost:
                  | {
                      __typename?: 'Mirror'
                      id: any
                      reaction?: ReactionTypes | null
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                      mirrorOf:
                        | {
                            __typename?: 'Comment'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            createdAt: any
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                          }
                        | {
                            __typename?: 'Post'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            hasCollectedByMe: boolean
                            hidden: boolean
                            createdAt: any
                            appId?: any | null
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            collectedBy?: {
                              __typename?: 'Wallet'
                              address: any
                              defaultProfile?: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              } | null
                            } | null
                            collectModule:
                              | {
                                  __typename?: 'FeeCollectModuleSettings'
                                  type: CollectModules
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'FreeCollectModuleSettings'
                                  type: CollectModules
                                  contractAddress: any
                                  followerOnly: boolean
                                }
                              | {
                                  __typename?: 'LimitedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'RevertCollectModuleSettings' }
                              | {
                                  __typename?: 'TimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'UnknownCollectModuleSettings' }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                            metadata: {
                              __typename?: 'MetadataOutput'
                              name?: string | null
                              description?: any | null
                              content?: any | null
                              image?: any | null
                              attributes: Array<{
                                __typename?: 'MetadataAttributeOutput'
                                traitType?: string | null
                                value?: string | null
                              }>
                              cover?: {
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any }
                              } | null
                              media: Array<{
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                              }>
                            }
                          }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Mirror'
                id: any
                reaction?: ReactionTypes | null
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                mirrorOf:
                  | {
                      __typename?: 'Comment'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      createdAt: any
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
            | null
        }
      | {
          __typename?: 'Mirror'
          id: any
          reaction?: ReactionTypes | null
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          mirrorOf:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
        }
      | {
          __typename?: 'Post'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
        }
    >
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null; next?: any | null }
  }
}

export type FollowersQueryVariables = Exact<{
  request: FollowersRequest
}>

export type FollowersQuery = {
  __typename?: 'Query'
  followers: {
    __typename?: 'PaginatedFollowersResult'
    items: Array<{
      __typename?: 'Follower'
      totalAmountOfTimesFollowed: number
      wallet: {
        __typename?: 'Wallet'
        address: any
        defaultProfile?: {
          __typename?: 'Profile'
          isFollowedByMe: boolean
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        } | null
      }
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type FollowingQueryVariables = Exact<{
  request: FollowingRequest
}>

export type FollowingQuery = {
  __typename?: 'Query'
  following: {
    __typename?: 'PaginatedFollowingResult'
    items: Array<{
      __typename?: 'Following'
      totalAmountOfTimesFollowing: number
      profile: {
        __typename?: 'Profile'
        isFollowedByMe: boolean
        id: any
        name?: string | null
        handle: any
        bio?: string | null
        ownedBy: any
        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
        picture?:
          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
          | { __typename?: 'NftImage'; uri: any }
          | null
        followModule?:
          | { __typename: 'FeeFollowModuleSettings' }
          | { __typename: 'ProfileFollowModuleSettings' }
          | { __typename: 'RevertFollowModuleSettings' }
          | { __typename: 'UnknownFollowModuleSettings' }
          | null
      }
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type GenerateModuleCurrencyApprovalDataQueryVariables = Exact<{
  request: GenerateModuleCurrencyApprovalDataRequest
}>

export type GenerateModuleCurrencyApprovalDataQuery = {
  __typename?: 'Query'
  generateModuleCurrencyApprovalData: {
    __typename?: 'GenerateModuleCurrencyApproval'
    to: any
    from: any
    data: any
  }
}

export type GroupQueryVariables = Exact<{
  topCommented: ExplorePublicationRequest
  topCollected: ExplorePublicationRequest
  latest: ExplorePublicationRequest
}>

export type GroupQuery = {
  __typename?: 'Query'
  topCommented: {
    __typename?: 'ExplorePublicationResult'
    items: Array<
      | { __typename?: 'Comment' }
      | { __typename?: 'Mirror' }
      | {
          __typename?: 'Post'
          id: any
          createdAt: any
          profile: { __typename?: 'Profile'; id: any }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            attributes: Array<{ __typename?: 'MetadataAttributeOutput'; value?: string | null }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          }
          stats: {
            __typename?: 'PublicationStats'
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
        }
    >
  }
  topCollected: {
    __typename?: 'ExplorePublicationResult'
    items: Array<
      | { __typename?: 'Comment' }
      | { __typename?: 'Mirror' }
      | {
          __typename?: 'Post'
          id: any
          createdAt: any
          profile: { __typename?: 'Profile'; id: any }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            attributes: Array<{ __typename?: 'MetadataAttributeOutput'; value?: string | null }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          }
          stats: {
            __typename?: 'PublicationStats'
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
        }
    >
  }
  latest: {
    __typename?: 'ExplorePublicationResult'
    items: Array<
      | { __typename?: 'Comment' }
      | { __typename?: 'Mirror' }
      | {
          __typename?: 'Post'
          id: any
          createdAt: any
          profile: { __typename?: 'Profile'; id: any }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            attributes: Array<{ __typename?: 'MetadataAttributeOutput'; value?: string | null }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          }
          stats: {
            __typename?: 'PublicationStats'
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
        }
    >
  }
}

export type HasTxHashBeenIndexedQueryVariables = Exact<{
  request: HasTxHashBeenIndexedRequest
}>

export type HasTxHashBeenIndexedQuery = {
  __typename?: 'Query'
  hasTxHashBeenIndexed:
    | { __typename?: 'TransactionError'; reason: TransactionErrorReasons }
    | {
        __typename?: 'TransactionIndexedResult'
        txHash: any
        indexed: boolean
        metadataStatus?: {
          __typename?: 'PublicationMetadataStatus'
          status: PublicationMetadataStatusType
        } | null
      }
}

export type LikesQueryVariables = Exact<{
  request: WhoReactedPublicationRequest
}>

export type LikesQuery = {
  __typename?: 'Query'
  whoReactedPublication: {
    __typename?: 'PaginatedWhoReactedResult'
    items: Array<{
      __typename?: 'WhoReactedResult'
      reactionId: any
      profile: {
        __typename?: 'Profile'
        isFollowedByMe: boolean
        id: any
        name?: string | null
        handle: any
        bio?: string | null
        ownedBy: any
        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
        picture?:
          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
          | { __typename?: 'NftImage'; uri: any }
          | null
        followModule?:
          | { __typename: 'FeeFollowModuleSettings' }
          | { __typename: 'ProfileFollowModuleSettings' }
          | { __typename: 'RevertFollowModuleSettings' }
          | { __typename: 'UnknownFollowModuleSettings' }
          | null
      }
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type MirrorsQueryVariables = Exact<{
  request: ProfileQueryRequest
}>

export type MirrorsQuery = {
  __typename?: 'Query'
  profiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      isFollowedByMe: boolean
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type MutualFollowersQueryVariables = Exact<{
  request: MutualFollowersProfilesQueryRequest
}>

export type MutualFollowersQuery = {
  __typename?: 'Query'
  mutualFollowersProfiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      handle: any
      name?: string | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null }
  }
}

export type MutualFollowersListQueryVariables = Exact<{
  request: MutualFollowersProfilesQueryRequest
}>

export type MutualFollowersListQuery = {
  __typename?: 'Query'
  mutualFollowersProfiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      isFollowedByMe: boolean
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type NftChallengeQueryVariables = Exact<{
  request: NftOwnershipChallengeRequest
}>

export type NftChallengeQuery = {
  __typename?: 'Query'
  nftOwnershipChallenge: { __typename?: 'NftOwnershipChallengeResult'; id: any; text: string }
}

export type NftFeedQueryVariables = Exact<{
  request: NfTsRequest
}>

export type NftFeedQuery = {
  __typename?: 'Query'
  nfts: {
    __typename?: 'NFTsResult'
    items: Array<{
      __typename?: 'NFT'
      name: string
      collectionName: string
      contractAddress: any
      tokenId: string
      chainId: any
      originalContent: { __typename?: 'NFTContent'; uri: string; animatedUrl?: string | null }
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type NotificationCountQueryVariables = Exact<{
  request: NotificationRequest
}>

export type NotificationCountQuery = {
  __typename?: 'Query'
  notifications: {
    __typename?: 'PaginatedNotificationResult'
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null }
  }
}

export type NotificationsQueryVariables = Exact<{
  request: NotificationRequest
}>

export type NotificationsQuery = {
  __typename?: 'Query'
  notifications: {
    __typename?: 'PaginatedNotificationResult'
    items: Array<
      | {
          __typename?: 'NewCollectNotification'
          notificationId: any
          createdAt: any
          wallet: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          }
          collectedPublication:
            | {
                __typename?: 'Comment'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
              }
            | { __typename?: 'Mirror' }
            | {
                __typename?: 'Post'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
              }
        }
      | {
          __typename?: 'NewCommentNotification'
          notificationId: any
          createdAt: any
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          comment: {
            __typename?: 'Comment'
            id: any
            metadata: { __typename?: 'MetadataOutput'; content?: any | null }
            commentOn?:
              | { __typename?: 'Comment'; id: any }
              | { __typename?: 'Mirror'; id: any }
              | { __typename?: 'Post'; id: any }
              | null
          }
        }
      | {
          __typename?: 'NewFollowerNotification'
          notificationId: any
          createdAt: any
          wallet: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          }
        }
      | {
          __typename?: 'NewMentionNotification'
          notificationId: any
          createdAt: any
          mentionPublication:
            | {
                __typename?: 'Comment'
                id: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
            | {
                __typename?: 'Post'
                id: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
        }
      | {
          __typename?: 'NewMirrorNotification'
          notificationId: any
          createdAt: any
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          publication:
            | {
                __typename?: 'Comment'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
            | {
                __typename?: 'Post'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
        }
      | {
          __typename?: 'NewReactionNotification'
          notificationId: any
          createdAt: any
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          publication:
            | {
                __typename?: 'Comment'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
            | {
                __typename?: 'Mirror'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
            | {
                __typename?: 'Post'
                id: any
                metadata: { __typename?: 'MetadataOutput'; content?: any | null }
              }
        }
    >
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null; next?: any | null }
  }
}

export type ProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest
  who?: InputMaybe<Scalars['ProfileId']>
}>

export type ProfileQuery = {
  __typename?: 'Query'
  profile?: {
    __typename?: 'Profile'
    id: any
    handle: any
    ownedBy: any
    name?: string | null
    bio?: string | null
    metadata?: any | null
    followNftAddress?: any | null
    isFollowedByMe: boolean
    isFollowing: boolean
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    dispatcher?: { __typename?: 'Dispatcher'; canUseRelay: boolean } | null
    onChainIdentity: {
      __typename?: 'OnChainIdentity'
      proofOfHumanity: boolean
      sybilDotOrg: {
        __typename?: 'SybilDotOrgIdentity'
        verified: boolean
        source: {
          __typename?: 'SybilDotOrgIdentitySource'
          twitter: { __typename?: 'SybilDotOrgTwitterIdentity'; handle?: string | null }
        }
      }
      ens?: { __typename?: 'EnsOnChainIdentity'; name?: any | null } | null
      worldcoin: { __typename?: 'WorldcoinIdentity'; isHuman: boolean }
    }
    stats: {
      __typename?: 'ProfileStats'
      totalFollowers: number
      totalFollowing: number
      totalPosts: number
      totalComments: number
      totalMirrors: number
    }
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any }
      | null
    coverPicture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage' }
      | null
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  } | null
}

export type ProfileAddressQueryVariables = Exact<{
  request: SingleProfileQueryRequest
}>

export type ProfileAddressQuery = {
  __typename?: 'Query'
  profile?: { __typename?: 'Profile'; id: any; ownedBy: any } | null
}

export type ProfileFeedQueryVariables = Exact<{
  request: PublicationsQueryRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type ProfileFeedQuery = {
  __typename?: 'Query'
  publications: {
    __typename?: 'PaginatedPublicationResult'
    items: Array<
      | {
          __typename?: 'Comment'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          commentOn?:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                mainPost:
                  | {
                      __typename?: 'Mirror'
                      id: any
                      reaction?: ReactionTypes | null
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                      mirrorOf:
                        | {
                            __typename?: 'Comment'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            createdAt: any
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                          }
                        | {
                            __typename?: 'Post'
                            id: any
                            reaction?: ReactionTypes | null
                            mirrors: Array<any>
                            hasCollectedByMe: boolean
                            hidden: boolean
                            createdAt: any
                            appId?: any | null
                            profile: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            }
                            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                            collectedBy?: {
                              __typename?: 'Wallet'
                              address: any
                              defaultProfile?: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              } | null
                            } | null
                            collectModule:
                              | {
                                  __typename?: 'FeeCollectModuleSettings'
                                  type: CollectModules
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'FreeCollectModuleSettings'
                                  type: CollectModules
                                  contractAddress: any
                                  followerOnly: boolean
                                }
                              | {
                                  __typename?: 'LimitedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | {
                                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  collectLimit: string
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'RevertCollectModuleSettings' }
                              | {
                                  __typename?: 'TimedFeeCollectModuleSettings'
                                  type: CollectModules
                                  endTimestamp: any
                                  referralFee: number
                                  contractAddress: any
                                  followerOnly: boolean
                                  amount: {
                                    __typename?: 'ModuleFeeAmount'
                                    value: string
                                    asset: {
                                      __typename?: 'Erc20'
                                      symbol: string
                                      decimals: number
                                      address: any
                                    }
                                  }
                                }
                              | { __typename?: 'UnknownCollectModuleSettings' }
                            stats: {
                              __typename?: 'PublicationStats'
                              totalUpvotes: number
                              totalAmountOfMirrors: number
                              totalAmountOfCollects: number
                              totalAmountOfComments: number
                            }
                            metadata: {
                              __typename?: 'MetadataOutput'
                              name?: string | null
                              description?: any | null
                              content?: any | null
                              image?: any | null
                              attributes: Array<{
                                __typename?: 'MetadataAttributeOutput'
                                traitType?: string | null
                                value?: string | null
                              }>
                              cover?: {
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any }
                              } | null
                              media: Array<{
                                __typename?: 'MediaSet'
                                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                              }>
                            }
                          }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Mirror'
                id: any
                reaction?: ReactionTypes | null
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
                mirrorOf:
                  | {
                      __typename?: 'Comment'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      createdAt: any
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                    }
                  | {
                      __typename?: 'Post'
                      id: any
                      reaction?: ReactionTypes | null
                      mirrors: Array<any>
                      hasCollectedByMe: boolean
                      hidden: boolean
                      createdAt: any
                      appId?: any | null
                      profile: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      }
                      canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                      canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                      collectedBy?: {
                        __typename?: 'Wallet'
                        address: any
                        defaultProfile?: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        } | null
                      } | null
                      collectModule:
                        | {
                            __typename?: 'FeeCollectModuleSettings'
                            type: CollectModules
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'FreeCollectModuleSettings'
                            type: CollectModules
                            contractAddress: any
                            followerOnly: boolean
                          }
                        | {
                            __typename?: 'LimitedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | {
                            __typename?: 'LimitedTimedFeeCollectModuleSettings'
                            type: CollectModules
                            collectLimit: string
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'RevertCollectModuleSettings' }
                        | {
                            __typename?: 'TimedFeeCollectModuleSettings'
                            type: CollectModules
                            endTimestamp: any
                            referralFee: number
                            contractAddress: any
                            followerOnly: boolean
                            amount: {
                              __typename?: 'ModuleFeeAmount'
                              value: string
                              asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                            }
                          }
                        | { __typename?: 'UnknownCollectModuleSettings' }
                      stats: {
                        __typename?: 'PublicationStats'
                        totalUpvotes: number
                        totalAmountOfMirrors: number
                        totalAmountOfCollects: number
                        totalAmountOfComments: number
                      }
                      metadata: {
                        __typename?: 'MetadataOutput'
                        name?: string | null
                        description?: any | null
                        content?: any | null
                        image?: any | null
                        attributes: Array<{
                          __typename?: 'MetadataAttributeOutput'
                          traitType?: string | null
                          value?: string | null
                        }>
                        cover?: {
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any }
                        } | null
                        media: Array<{
                          __typename?: 'MediaSet'
                          original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                        }>
                      }
                    }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
            | null
        }
      | {
          __typename?: 'Mirror'
          id: any
          reaction?: ReactionTypes | null
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
          mirrorOf:
            | {
                __typename?: 'Comment'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                createdAt: any
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
              }
            | {
                __typename?: 'Post'
                id: any
                reaction?: ReactionTypes | null
                mirrors: Array<any>
                hasCollectedByMe: boolean
                hidden: boolean
                createdAt: any
                appId?: any | null
                profile: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                }
                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                collectedBy?: {
                  __typename?: 'Wallet'
                  address: any
                  defaultProfile?: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  } | null
                } | null
                collectModule:
                  | {
                      __typename?: 'FeeCollectModuleSettings'
                      type: CollectModules
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'FreeCollectModuleSettings'
                      type: CollectModules
                      contractAddress: any
                      followerOnly: boolean
                    }
                  | {
                      __typename?: 'LimitedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | {
                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                      type: CollectModules
                      collectLimit: string
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'RevertCollectModuleSettings' }
                  | {
                      __typename?: 'TimedFeeCollectModuleSettings'
                      type: CollectModules
                      endTimestamp: any
                      referralFee: number
                      contractAddress: any
                      followerOnly: boolean
                      amount: {
                        __typename?: 'ModuleFeeAmount'
                        value: string
                        asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                      }
                    }
                  | { __typename?: 'UnknownCollectModuleSettings' }
                stats: {
                  __typename?: 'PublicationStats'
                  totalUpvotes: number
                  totalAmountOfMirrors: number
                  totalAmountOfCollects: number
                  totalAmountOfComments: number
                }
                metadata: {
                  __typename?: 'MetadataOutput'
                  name?: string | null
                  description?: any | null
                  content?: any | null
                  image?: any | null
                  attributes: Array<{
                    __typename?: 'MetadataAttributeOutput'
                    traitType?: string | null
                    value?: string | null
                  }>
                  cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                  media: Array<{
                    __typename?: 'MediaSet'
                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                  }>
                }
              }
        }
      | {
          __typename?: 'Post'
          id: any
          reaction?: ReactionTypes | null
          mirrors: Array<any>
          hasCollectedByMe: boolean
          hidden: boolean
          createdAt: any
          appId?: any | null
          profile: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          }
          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
          collectedBy?: {
            __typename?: 'Wallet'
            address: any
            defaultProfile?: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            } | null
          } | null
          collectModule:
            | {
                __typename?: 'FeeCollectModuleSettings'
                type: CollectModules
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'FreeCollectModuleSettings'
                type: CollectModules
                contractAddress: any
                followerOnly: boolean
              }
            | {
                __typename?: 'LimitedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | {
                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                type: CollectModules
                collectLimit: string
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'RevertCollectModuleSettings' }
            | {
                __typename?: 'TimedFeeCollectModuleSettings'
                type: CollectModules
                endTimestamp: any
                referralFee: number
                contractAddress: any
                followerOnly: boolean
                amount: {
                  __typename?: 'ModuleFeeAmount'
                  value: string
                  asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                }
              }
            | { __typename?: 'UnknownCollectModuleSettings' }
          stats: {
            __typename?: 'PublicationStats'
            totalUpvotes: number
            totalAmountOfMirrors: number
            totalAmountOfCollects: number
            totalAmountOfComments: number
          }
          metadata: {
            __typename?: 'MetadataOutput'
            name?: string | null
            description?: any | null
            content?: any | null
            image?: any | null
            attributes: Array<{
              __typename?: 'MetadataAttributeOutput'
              traitType?: string | null
              value?: string | null
            }>
            cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
            media: Array<{
              __typename?: 'MediaSet'
              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
            }>
          }
        }
    >
    pageInfo: { __typename?: 'PaginatedResultInfo'; totalCount?: number | null; next?: any | null }
  }
}

export type ProfileNftFeedQueryVariables = Exact<{
  request: NfTsRequest
}>

export type ProfileNftFeedQuery = {
  __typename?: 'Query'
  nfts: {
    __typename?: 'NFTsResult'
    items: Array<{ __typename?: 'NFT'; contentURI: string }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type ProfileSettingsQueryVariables = Exact<{
  request: SingleProfileQueryRequest
}>

export type ProfileSettingsQuery = {
  __typename?: 'Query'
  profile?: {
    __typename?: 'Profile'
    id: any
    name?: string | null
    bio?: string | null
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    coverPicture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage' }
      | null
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any; tokenId: string; contractAddress: any }
      | null
  } | null
}

export type ProfilesQueryVariables = Exact<{
  request: ProfileQueryRequest
}>

export type ProfilesQuery = {
  __typename?: 'Query'
  profiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      isDefault: boolean
      isFollowedByMe: boolean
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type PublicationQueryVariables = Exact<{
  request: PublicationQueryRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type PublicationQuery = {
  __typename?: 'Query'
  publication?:
    | {
        __typename?: 'Comment'
        onChainContentURI: string
        collectNftAddress?: any | null
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          isFollowedByMe: boolean
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        referenceModule?:
          | { __typename: 'DegreesOfSeparationReferenceModuleSettings' }
          | { __typename: 'FollowOnlyReferenceModuleSettings' }
          | { __typename: 'UnknownReferenceModuleSettings' }
          | null
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
        commentOn?:
          | {
              __typename?: 'Comment'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: { __typename?: 'Profile'; handle: any } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              mainPost:
                | {
                    __typename?: 'Mirror'
                    id: any
                    reaction?: ReactionTypes | null
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                    mirrorOf:
                      | {
                          __typename?: 'Comment'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          createdAt: any
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                        }
                      | {
                          __typename?: 'Post'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          hasCollectedByMe: boolean
                          hidden: boolean
                          createdAt: any
                          appId?: any | null
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          collectedBy?: {
                            __typename?: 'Wallet'
                            address: any
                            defaultProfile?: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            } | null
                          } | null
                          collectModule:
                            | {
                                __typename?: 'FeeCollectModuleSettings'
                                type: CollectModules
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'FreeCollectModuleSettings'
                                type: CollectModules
                                contractAddress: any
                                followerOnly: boolean
                              }
                            | {
                                __typename?: 'LimitedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'RevertCollectModuleSettings' }
                            | {
                                __typename?: 'TimedFeeCollectModuleSettings'
                                type: CollectModules
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'UnknownCollectModuleSettings' }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                          metadata: {
                            __typename?: 'MetadataOutput'
                            name?: string | null
                            description?: any | null
                            content?: any | null
                            image?: any | null
                            attributes: Array<{
                              __typename?: 'MetadataAttributeOutput'
                              traitType?: string | null
                              value?: string | null
                            }>
                            cover?: {
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any }
                            } | null
                            media: Array<{
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                            }>
                          }
                        }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
            }
          | {
              __typename?: 'Mirror'
              id: any
              reaction?: ReactionTypes | null
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              mirrorOf:
                | {
                    __typename?: 'Comment'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    createdAt: any
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
          | null
      }
    | {
        __typename?: 'Mirror'
        onChainContentURI: string
        collectNftAddress?: any | null
        id: any
        reaction?: ReactionTypes | null
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          isFollowedByMe: boolean
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        referenceModule?:
          | { __typename: 'DegreesOfSeparationReferenceModuleSettings' }
          | { __typename: 'FollowOnlyReferenceModuleSettings' }
          | { __typename: 'UnknownReferenceModuleSettings' }
          | null
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
        mirrorOf:
          | {
              __typename?: 'Comment'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              createdAt: any
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
      }
    | {
        __typename?: 'Post'
        onChainContentURI: string
        collectNftAddress?: any | null
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          isFollowedByMe: boolean
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        referenceModule?:
          | { __typename: 'DegreesOfSeparationReferenceModuleSettings' }
          | { __typename: 'FollowOnlyReferenceModuleSettings' }
          | { __typename: 'UnknownReferenceModuleSettings' }
          | null
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
      }
    | null
}

export type PublicationRevenueQueryVariables = Exact<{
  request: PublicationRevenueQueryRequest
}>

export type PublicationRevenueQuery = {
  __typename?: 'Query'
  publicationRevenue?: {
    __typename?: 'PublicationRevenue'
    revenue: { __typename?: 'RevenueAggregate'; total: { __typename?: 'Erc20Amount'; value: string } }
  } | null
}

export type RecommendedProfilesQueryVariables = Exact<{
  options?: InputMaybe<RecommendedProfileOptions>
}>

export type RecommendedProfilesQuery = {
  __typename?: 'Query'
  recommendedProfiles: Array<{
    __typename?: 'Profile'
    isFollowedByMe: boolean
    id: any
    name?: string | null
    handle: any
    bio?: string | null
    ownedBy: any
    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
    picture?:
      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
      | { __typename?: 'NftImage'; uri: any }
      | null
    followModule?:
      | { __typename: 'FeeFollowModuleSettings' }
      | { __typename: 'ProfileFollowModuleSettings' }
      | { __typename: 'RevertFollowModuleSettings' }
      | { __typename: 'UnknownFollowModuleSettings' }
      | null
  }>
}

export type RelevantPeopleQueryVariables = Exact<{
  request: ProfileQueryRequest
}>

export type RelevantPeopleQuery = {
  __typename?: 'Query'
  profiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      isFollowedByMe: boolean
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    }>
  }
}

export type SearchProfilesQueryVariables = Exact<{
  request: SearchQueryRequest
}>

export type SearchProfilesQuery = {
  __typename?: 'Query'
  search:
    | {
        __typename?: 'ProfileSearchResult'
        items: Array<{
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }>
        pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
      }
    | { __typename?: 'PublicationSearchResult' }
}

export type SearchPublicationsQueryVariables = Exact<{
  request: SearchQueryRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type SearchPublicationsQuery = {
  __typename?: 'Query'
  search:
    | { __typename?: 'ProfileSearchResult' }
    | {
        __typename?: 'PublicationSearchResult'
        items: Array<
          | {
              __typename?: 'Comment'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              commentOn?:
                | {
                    __typename?: 'Comment'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    mainPost:
                      | {
                          __typename?: 'Mirror'
                          id: any
                          reaction?: ReactionTypes | null
                          hidden: boolean
                          createdAt: any
                          appId?: any | null
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          collectModule:
                            | {
                                __typename?: 'FeeCollectModuleSettings'
                                type: CollectModules
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'FreeCollectModuleSettings'
                                type: CollectModules
                                contractAddress: any
                                followerOnly: boolean
                              }
                            | {
                                __typename?: 'LimitedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'RevertCollectModuleSettings' }
                            | {
                                __typename?: 'TimedFeeCollectModuleSettings'
                                type: CollectModules
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'UnknownCollectModuleSettings' }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                          metadata: {
                            __typename?: 'MetadataOutput'
                            name?: string | null
                            description?: any | null
                            content?: any | null
                            image?: any | null
                            attributes: Array<{
                              __typename?: 'MetadataAttributeOutput'
                              traitType?: string | null
                              value?: string | null
                            }>
                            cover?: {
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any }
                            } | null
                            media: Array<{
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                            }>
                          }
                          mirrorOf:
                            | {
                                __typename?: 'Comment'
                                id: any
                                reaction?: ReactionTypes | null
                                mirrors: Array<any>
                                createdAt: any
                                profile: {
                                  __typename?: 'Profile'
                                  id: any
                                  name?: string | null
                                  handle: any
                                  bio?: string | null
                                  ownedBy: any
                                  isFollowedByMe: boolean
                                  stats: {
                                    __typename?: 'ProfileStats'
                                    totalFollowers: number
                                    totalFollowing: number
                                  }
                                  attributes?: Array<{
                                    __typename?: 'Attribute'
                                    key: string
                                    value: string
                                  }> | null
                                  picture?:
                                    | {
                                        __typename?: 'MediaSet'
                                        original: { __typename?: 'Media'; url: any }
                                      }
                                    | { __typename?: 'NftImage'; uri: any }
                                    | null
                                  followModule?:
                                    | { __typename: 'FeeFollowModuleSettings' }
                                    | { __typename: 'ProfileFollowModuleSettings' }
                                    | { __typename: 'RevertFollowModuleSettings' }
                                    | { __typename: 'UnknownFollowModuleSettings' }
                                    | null
                                }
                                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                                stats: {
                                  __typename?: 'PublicationStats'
                                  totalUpvotes: number
                                  totalAmountOfMirrors: number
                                  totalAmountOfCollects: number
                                  totalAmountOfComments: number
                                }
                              }
                            | {
                                __typename?: 'Post'
                                id: any
                                reaction?: ReactionTypes | null
                                mirrors: Array<any>
                                hasCollectedByMe: boolean
                                hidden: boolean
                                createdAt: any
                                appId?: any | null
                                profile: {
                                  __typename?: 'Profile'
                                  id: any
                                  name?: string | null
                                  handle: any
                                  bio?: string | null
                                  ownedBy: any
                                  isFollowedByMe: boolean
                                  stats: {
                                    __typename?: 'ProfileStats'
                                    totalFollowers: number
                                    totalFollowing: number
                                  }
                                  attributes?: Array<{
                                    __typename?: 'Attribute'
                                    key: string
                                    value: string
                                  }> | null
                                  picture?:
                                    | {
                                        __typename?: 'MediaSet'
                                        original: { __typename?: 'Media'; url: any }
                                      }
                                    | { __typename?: 'NftImage'; uri: any }
                                    | null
                                  followModule?:
                                    | { __typename: 'FeeFollowModuleSettings' }
                                    | { __typename: 'ProfileFollowModuleSettings' }
                                    | { __typename: 'RevertFollowModuleSettings' }
                                    | { __typename: 'UnknownFollowModuleSettings' }
                                    | null
                                }
                                canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                                canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                                collectedBy?: {
                                  __typename?: 'Wallet'
                                  address: any
                                  defaultProfile?: {
                                    __typename?: 'Profile'
                                    id: any
                                    name?: string | null
                                    handle: any
                                    bio?: string | null
                                    ownedBy: any
                                    isFollowedByMe: boolean
                                    stats: {
                                      __typename?: 'ProfileStats'
                                      totalFollowers: number
                                      totalFollowing: number
                                    }
                                    attributes?: Array<{
                                      __typename?: 'Attribute'
                                      key: string
                                      value: string
                                    }> | null
                                    picture?:
                                      | {
                                          __typename?: 'MediaSet'
                                          original: { __typename?: 'Media'; url: any }
                                        }
                                      | { __typename?: 'NftImage'; uri: any }
                                      | null
                                    followModule?:
                                      | { __typename: 'FeeFollowModuleSettings' }
                                      | { __typename: 'ProfileFollowModuleSettings' }
                                      | { __typename: 'RevertFollowModuleSettings' }
                                      | { __typename: 'UnknownFollowModuleSettings' }
                                      | null
                                  } | null
                                } | null
                                collectModule:
                                  | {
                                      __typename?: 'FeeCollectModuleSettings'
                                      type: CollectModules
                                      referralFee: number
                                      contractAddress: any
                                      followerOnly: boolean
                                      amount: {
                                        __typename?: 'ModuleFeeAmount'
                                        value: string
                                        asset: {
                                          __typename?: 'Erc20'
                                          symbol: string
                                          decimals: number
                                          address: any
                                        }
                                      }
                                    }
                                  | {
                                      __typename?: 'FreeCollectModuleSettings'
                                      type: CollectModules
                                      contractAddress: any
                                      followerOnly: boolean
                                    }
                                  | {
                                      __typename?: 'LimitedFeeCollectModuleSettings'
                                      type: CollectModules
                                      collectLimit: string
                                      referralFee: number
                                      contractAddress: any
                                      followerOnly: boolean
                                      amount: {
                                        __typename?: 'ModuleFeeAmount'
                                        value: string
                                        asset: {
                                          __typename?: 'Erc20'
                                          symbol: string
                                          decimals: number
                                          address: any
                                        }
                                      }
                                    }
                                  | {
                                      __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                      type: CollectModules
                                      collectLimit: string
                                      endTimestamp: any
                                      referralFee: number
                                      contractAddress: any
                                      followerOnly: boolean
                                      amount: {
                                        __typename?: 'ModuleFeeAmount'
                                        value: string
                                        asset: {
                                          __typename?: 'Erc20'
                                          symbol: string
                                          decimals: number
                                          address: any
                                        }
                                      }
                                    }
                                  | { __typename?: 'RevertCollectModuleSettings' }
                                  | {
                                      __typename?: 'TimedFeeCollectModuleSettings'
                                      type: CollectModules
                                      endTimestamp: any
                                      referralFee: number
                                      contractAddress: any
                                      followerOnly: boolean
                                      amount: {
                                        __typename?: 'ModuleFeeAmount'
                                        value: string
                                        asset: {
                                          __typename?: 'Erc20'
                                          symbol: string
                                          decimals: number
                                          address: any
                                        }
                                      }
                                    }
                                  | { __typename?: 'UnknownCollectModuleSettings' }
                                stats: {
                                  __typename?: 'PublicationStats'
                                  totalUpvotes: number
                                  totalAmountOfMirrors: number
                                  totalAmountOfCollects: number
                                  totalAmountOfComments: number
                                }
                                metadata: {
                                  __typename?: 'MetadataOutput'
                                  name?: string | null
                                  description?: any | null
                                  content?: any | null
                                  image?: any | null
                                  attributes: Array<{
                                    __typename?: 'MetadataAttributeOutput'
                                    traitType?: string | null
                                    value?: string | null
                                  }>
                                  cover?: {
                                    __typename?: 'MediaSet'
                                    original: { __typename?: 'Media'; url: any }
                                  } | null
                                  media: Array<{
                                    __typename?: 'MediaSet'
                                    original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                                  }>
                                }
                              }
                        }
                      | {
                          __typename?: 'Post'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          hasCollectedByMe: boolean
                          hidden: boolean
                          createdAt: any
                          appId?: any | null
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          collectedBy?: {
                            __typename?: 'Wallet'
                            address: any
                            defaultProfile?: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            } | null
                          } | null
                          collectModule:
                            | {
                                __typename?: 'FeeCollectModuleSettings'
                                type: CollectModules
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'FreeCollectModuleSettings'
                                type: CollectModules
                                contractAddress: any
                                followerOnly: boolean
                              }
                            | {
                                __typename?: 'LimitedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'RevertCollectModuleSettings' }
                            | {
                                __typename?: 'TimedFeeCollectModuleSettings'
                                type: CollectModules
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'UnknownCollectModuleSettings' }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                          metadata: {
                            __typename?: 'MetadataOutput'
                            name?: string | null
                            description?: any | null
                            content?: any | null
                            image?: any | null
                            attributes: Array<{
                              __typename?: 'MetadataAttributeOutput'
                              traitType?: string | null
                              value?: string | null
                            }>
                            cover?: {
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any }
                            } | null
                            media: Array<{
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                            }>
                          }
                        }
                  }
                | {
                    __typename?: 'Mirror'
                    id: any
                    reaction?: ReactionTypes | null
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                    mirrorOf:
                      | {
                          __typename?: 'Comment'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          createdAt: any
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                        }
                      | {
                          __typename?: 'Post'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          hasCollectedByMe: boolean
                          hidden: boolean
                          createdAt: any
                          appId?: any | null
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          collectedBy?: {
                            __typename?: 'Wallet'
                            address: any
                            defaultProfile?: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            } | null
                          } | null
                          collectModule:
                            | {
                                __typename?: 'FeeCollectModuleSettings'
                                type: CollectModules
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'FreeCollectModuleSettings'
                                type: CollectModules
                                contractAddress: any
                                followerOnly: boolean
                              }
                            | {
                                __typename?: 'LimitedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'RevertCollectModuleSettings' }
                            | {
                                __typename?: 'TimedFeeCollectModuleSettings'
                                type: CollectModules
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'UnknownCollectModuleSettings' }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                          metadata: {
                            __typename?: 'MetadataOutput'
                            name?: string | null
                            description?: any | null
                            content?: any | null
                            image?: any | null
                            attributes: Array<{
                              __typename?: 'MetadataAttributeOutput'
                              traitType?: string | null
                              value?: string | null
                            }>
                            cover?: {
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any }
                            } | null
                            media: Array<{
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                            }>
                          }
                        }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
                | null
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
        >
        pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
      }
}

export type SuperFollowQueryVariables = Exact<{
  request: SingleProfileQueryRequest
}>

export type SuperFollowQuery = {
  __typename?: 'Query'
  profile?: {
    __typename?: 'Profile'
    id: any
    followModule?:
      | {
          __typename?: 'FeeFollowModuleSettings'
          recipient: any
          amount: {
            __typename?: 'ModuleFeeAmount'
            value: string
            asset: { __typename?: 'Erc20'; name: string; symbol: string; decimals: number; address: any }
          }
        }
      | { __typename?: 'ProfileFollowModuleSettings' }
      | { __typename?: 'RevertFollowModuleSettings' }
      | { __typename?: 'UnknownFollowModuleSettings' }
      | null
  } | null
}

export type TimelineQueryVariables = Exact<{
  request: FeedRequest
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>
  profileId?: InputMaybe<Scalars['ProfileId']>
}>

export type TimelineQuery = {
  __typename?: 'Query'
  feed: {
    __typename?: 'PaginatedFeedResult'
    items: Array<{
      __typename?: 'FeedItem'
      root:
        | {
            __typename?: 'Comment'
            id: any
            reaction?: ReactionTypes | null
            mirrors: Array<any>
            hasCollectedByMe: boolean
            hidden: boolean
            createdAt: any
            appId?: any | null
            profile: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            }
            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
            collectedBy?: {
              __typename?: 'Wallet'
              address: any
              defaultProfile?: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              } | null
            } | null
            collectModule:
              | {
                  __typename?: 'FeeCollectModuleSettings'
                  type: CollectModules
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | {
                  __typename?: 'FreeCollectModuleSettings'
                  type: CollectModules
                  contractAddress: any
                  followerOnly: boolean
                }
              | {
                  __typename?: 'LimitedFeeCollectModuleSettings'
                  type: CollectModules
                  collectLimit: string
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | {
                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                  type: CollectModules
                  collectLimit: string
                  endTimestamp: any
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | { __typename?: 'RevertCollectModuleSettings' }
              | {
                  __typename?: 'TimedFeeCollectModuleSettings'
                  type: CollectModules
                  endTimestamp: any
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | { __typename?: 'UnknownCollectModuleSettings' }
            stats: {
              __typename?: 'PublicationStats'
              totalUpvotes: number
              totalAmountOfMirrors: number
              totalAmountOfCollects: number
              totalAmountOfComments: number
            }
            metadata: {
              __typename?: 'MetadataOutput'
              name?: string | null
              description?: any | null
              content?: any | null
              image?: any | null
              attributes: Array<{
                __typename?: 'MetadataAttributeOutput'
                traitType?: string | null
                value?: string | null
              }>
              cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
              media: Array<{
                __typename?: 'MediaSet'
                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
              }>
            }
            commentOn?:
              | {
                  __typename?: 'Comment'
                  id: any
                  reaction?: ReactionTypes | null
                  mirrors: Array<any>
                  hasCollectedByMe: boolean
                  hidden: boolean
                  createdAt: any
                  profile: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  }
                  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                  collectedBy?: {
                    __typename?: 'Wallet'
                    address: any
                    defaultProfile?: { __typename?: 'Profile'; handle: any } | null
                  } | null
                  collectModule:
                    | {
                        __typename?: 'FeeCollectModuleSettings'
                        type: CollectModules
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'FreeCollectModuleSettings'
                        type: CollectModules
                        contractAddress: any
                        followerOnly: boolean
                      }
                    | {
                        __typename?: 'LimitedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'LimitedTimedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'RevertCollectModuleSettings' }
                    | {
                        __typename?: 'TimedFeeCollectModuleSettings'
                        type: CollectModules
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'UnknownCollectModuleSettings' }
                  metadata: {
                    __typename?: 'MetadataOutput'
                    name?: string | null
                    description?: any | null
                    content?: any | null
                    image?: any | null
                    attributes: Array<{
                      __typename?: 'MetadataAttributeOutput'
                      traitType?: string | null
                      value?: string | null
                    }>
                    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                    media: Array<{
                      __typename?: 'MediaSet'
                      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                    }>
                  }
                  stats: {
                    __typename?: 'PublicationStats'
                    totalUpvotes: number
                    totalAmountOfMirrors: number
                    totalAmountOfCollects: number
                    totalAmountOfComments: number
                  }
                  mainPost:
                    | {
                        __typename?: 'Mirror'
                        id: any
                        reaction?: ReactionTypes | null
                        hidden: boolean
                        createdAt: any
                        appId?: any | null
                        profile: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        }
                        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                        collectModule:
                          | {
                              __typename?: 'FeeCollectModuleSettings'
                              type: CollectModules
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'FreeCollectModuleSettings'
                              type: CollectModules
                              contractAddress: any
                              followerOnly: boolean
                            }
                          | {
                              __typename?: 'LimitedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'LimitedTimedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'RevertCollectModuleSettings' }
                          | {
                              __typename?: 'TimedFeeCollectModuleSettings'
                              type: CollectModules
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'UnknownCollectModuleSettings' }
                        stats: {
                          __typename?: 'PublicationStats'
                          totalUpvotes: number
                          totalAmountOfMirrors: number
                          totalAmountOfCollects: number
                          totalAmountOfComments: number
                        }
                        metadata: {
                          __typename?: 'MetadataOutput'
                          name?: string | null
                          description?: any | null
                          content?: any | null
                          image?: any | null
                          attributes: Array<{
                            __typename?: 'MetadataAttributeOutput'
                            traitType?: string | null
                            value?: string | null
                          }>
                          cover?: {
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any }
                          } | null
                          media: Array<{
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                          }>
                        }
                        mirrorOf:
                          | {
                              __typename?: 'Comment'
                              id: any
                              reaction?: ReactionTypes | null
                              mirrors: Array<any>
                              createdAt: any
                              profile: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              }
                              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                              stats: {
                                __typename?: 'PublicationStats'
                                totalUpvotes: number
                                totalAmountOfMirrors: number
                                totalAmountOfCollects: number
                                totalAmountOfComments: number
                              }
                            }
                          | {
                              __typename?: 'Post'
                              id: any
                              reaction?: ReactionTypes | null
                              mirrors: Array<any>
                              hasCollectedByMe: boolean
                              hidden: boolean
                              createdAt: any
                              appId?: any | null
                              profile: {
                                __typename?: 'Profile'
                                id: any
                                name?: string | null
                                handle: any
                                bio?: string | null
                                ownedBy: any
                                isFollowedByMe: boolean
                                stats: {
                                  __typename?: 'ProfileStats'
                                  totalFollowers: number
                                  totalFollowing: number
                                }
                                attributes?: Array<{
                                  __typename?: 'Attribute'
                                  key: string
                                  value: string
                                }> | null
                                picture?:
                                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                  | { __typename?: 'NftImage'; uri: any }
                                  | null
                                followModule?:
                                  | { __typename: 'FeeFollowModuleSettings' }
                                  | { __typename: 'ProfileFollowModuleSettings' }
                                  | { __typename: 'RevertFollowModuleSettings' }
                                  | { __typename: 'UnknownFollowModuleSettings' }
                                  | null
                              }
                              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                              collectedBy?: {
                                __typename?: 'Wallet'
                                address: any
                                defaultProfile?: {
                                  __typename?: 'Profile'
                                  id: any
                                  name?: string | null
                                  handle: any
                                  bio?: string | null
                                  ownedBy: any
                                  isFollowedByMe: boolean
                                  stats: {
                                    __typename?: 'ProfileStats'
                                    totalFollowers: number
                                    totalFollowing: number
                                  }
                                  attributes?: Array<{
                                    __typename?: 'Attribute'
                                    key: string
                                    value: string
                                  }> | null
                                  picture?:
                                    | {
                                        __typename?: 'MediaSet'
                                        original: { __typename?: 'Media'; url: any }
                                      }
                                    | { __typename?: 'NftImage'; uri: any }
                                    | null
                                  followModule?:
                                    | { __typename: 'FeeFollowModuleSettings' }
                                    | { __typename: 'ProfileFollowModuleSettings' }
                                    | { __typename: 'RevertFollowModuleSettings' }
                                    | { __typename: 'UnknownFollowModuleSettings' }
                                    | null
                                } | null
                              } | null
                              collectModule:
                                | {
                                    __typename?: 'FeeCollectModuleSettings'
                                    type: CollectModules
                                    referralFee: number
                                    contractAddress: any
                                    followerOnly: boolean
                                    amount: {
                                      __typename?: 'ModuleFeeAmount'
                                      value: string
                                      asset: {
                                        __typename?: 'Erc20'
                                        symbol: string
                                        decimals: number
                                        address: any
                                      }
                                    }
                                  }
                                | {
                                    __typename?: 'FreeCollectModuleSettings'
                                    type: CollectModules
                                    contractAddress: any
                                    followerOnly: boolean
                                  }
                                | {
                                    __typename?: 'LimitedFeeCollectModuleSettings'
                                    type: CollectModules
                                    collectLimit: string
                                    referralFee: number
                                    contractAddress: any
                                    followerOnly: boolean
                                    amount: {
                                      __typename?: 'ModuleFeeAmount'
                                      value: string
                                      asset: {
                                        __typename?: 'Erc20'
                                        symbol: string
                                        decimals: number
                                        address: any
                                      }
                                    }
                                  }
                                | {
                                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                    type: CollectModules
                                    collectLimit: string
                                    endTimestamp: any
                                    referralFee: number
                                    contractAddress: any
                                    followerOnly: boolean
                                    amount: {
                                      __typename?: 'ModuleFeeAmount'
                                      value: string
                                      asset: {
                                        __typename?: 'Erc20'
                                        symbol: string
                                        decimals: number
                                        address: any
                                      }
                                    }
                                  }
                                | { __typename?: 'RevertCollectModuleSettings' }
                                | {
                                    __typename?: 'TimedFeeCollectModuleSettings'
                                    type: CollectModules
                                    endTimestamp: any
                                    referralFee: number
                                    contractAddress: any
                                    followerOnly: boolean
                                    amount: {
                                      __typename?: 'ModuleFeeAmount'
                                      value: string
                                      asset: {
                                        __typename?: 'Erc20'
                                        symbol: string
                                        decimals: number
                                        address: any
                                      }
                                    }
                                  }
                                | { __typename?: 'UnknownCollectModuleSettings' }
                              stats: {
                                __typename?: 'PublicationStats'
                                totalUpvotes: number
                                totalAmountOfMirrors: number
                                totalAmountOfCollects: number
                                totalAmountOfComments: number
                              }
                              metadata: {
                                __typename?: 'MetadataOutput'
                                name?: string | null
                                description?: any | null
                                content?: any | null
                                image?: any | null
                                attributes: Array<{
                                  __typename?: 'MetadataAttributeOutput'
                                  traitType?: string | null
                                  value?: string | null
                                }>
                                cover?: {
                                  __typename?: 'MediaSet'
                                  original: { __typename?: 'Media'; url: any }
                                } | null
                                media: Array<{
                                  __typename?: 'MediaSet'
                                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                                }>
                              }
                            }
                      }
                    | {
                        __typename?: 'Post'
                        id: any
                        reaction?: ReactionTypes | null
                        mirrors: Array<any>
                        hasCollectedByMe: boolean
                        hidden: boolean
                        createdAt: any
                        appId?: any | null
                        profile: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        }
                        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                        collectedBy?: {
                          __typename?: 'Wallet'
                          address: any
                          defaultProfile?: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          } | null
                        } | null
                        collectModule:
                          | {
                              __typename?: 'FeeCollectModuleSettings'
                              type: CollectModules
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'FreeCollectModuleSettings'
                              type: CollectModules
                              contractAddress: any
                              followerOnly: boolean
                            }
                          | {
                              __typename?: 'LimitedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'LimitedTimedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'RevertCollectModuleSettings' }
                          | {
                              __typename?: 'TimedFeeCollectModuleSettings'
                              type: CollectModules
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'UnknownCollectModuleSettings' }
                        stats: {
                          __typename?: 'PublicationStats'
                          totalUpvotes: number
                          totalAmountOfMirrors: number
                          totalAmountOfCollects: number
                          totalAmountOfComments: number
                        }
                        metadata: {
                          __typename?: 'MetadataOutput'
                          name?: string | null
                          description?: any | null
                          content?: any | null
                          image?: any | null
                          attributes: Array<{
                            __typename?: 'MetadataAttributeOutput'
                            traitType?: string | null
                            value?: string | null
                          }>
                          cover?: {
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any }
                          } | null
                          media: Array<{
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                          }>
                        }
                      }
                }
              | {
                  __typename?: 'Mirror'
                  id: any
                  reaction?: ReactionTypes | null
                  hidden: boolean
                  createdAt: any
                  appId?: any | null
                  profile: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  }
                  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                  collectModule:
                    | {
                        __typename?: 'FeeCollectModuleSettings'
                        type: CollectModules
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'FreeCollectModuleSettings'
                        type: CollectModules
                        contractAddress: any
                        followerOnly: boolean
                      }
                    | {
                        __typename?: 'LimitedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'LimitedTimedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'RevertCollectModuleSettings' }
                    | {
                        __typename?: 'TimedFeeCollectModuleSettings'
                        type: CollectModules
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'UnknownCollectModuleSettings' }
                  stats: {
                    __typename?: 'PublicationStats'
                    totalUpvotes: number
                    totalAmountOfMirrors: number
                    totalAmountOfCollects: number
                    totalAmountOfComments: number
                  }
                  metadata: {
                    __typename?: 'MetadataOutput'
                    name?: string | null
                    description?: any | null
                    content?: any | null
                    image?: any | null
                    attributes: Array<{
                      __typename?: 'MetadataAttributeOutput'
                      traitType?: string | null
                      value?: string | null
                    }>
                    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                    media: Array<{
                      __typename?: 'MediaSet'
                      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                    }>
                  }
                  mirrorOf:
                    | {
                        __typename?: 'Comment'
                        id: any
                        reaction?: ReactionTypes | null
                        mirrors: Array<any>
                        createdAt: any
                        profile: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        }
                        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                        stats: {
                          __typename?: 'PublicationStats'
                          totalUpvotes: number
                          totalAmountOfMirrors: number
                          totalAmountOfCollects: number
                          totalAmountOfComments: number
                        }
                      }
                    | {
                        __typename?: 'Post'
                        id: any
                        reaction?: ReactionTypes | null
                        mirrors: Array<any>
                        hasCollectedByMe: boolean
                        hidden: boolean
                        createdAt: any
                        appId?: any | null
                        profile: {
                          __typename?: 'Profile'
                          id: any
                          name?: string | null
                          handle: any
                          bio?: string | null
                          ownedBy: any
                          isFollowedByMe: boolean
                          stats: {
                            __typename?: 'ProfileStats'
                            totalFollowers: number
                            totalFollowing: number
                          }
                          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                          picture?:
                            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                            | { __typename?: 'NftImage'; uri: any }
                            | null
                          followModule?:
                            | { __typename: 'FeeFollowModuleSettings' }
                            | { __typename: 'ProfileFollowModuleSettings' }
                            | { __typename: 'RevertFollowModuleSettings' }
                            | { __typename: 'UnknownFollowModuleSettings' }
                            | null
                        }
                        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                        collectedBy?: {
                          __typename?: 'Wallet'
                          address: any
                          defaultProfile?: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          } | null
                        } | null
                        collectModule:
                          | {
                              __typename?: 'FeeCollectModuleSettings'
                              type: CollectModules
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'FreeCollectModuleSettings'
                              type: CollectModules
                              contractAddress: any
                              followerOnly: boolean
                            }
                          | {
                              __typename?: 'LimitedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | {
                              __typename?: 'LimitedTimedFeeCollectModuleSettings'
                              type: CollectModules
                              collectLimit: string
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'RevertCollectModuleSettings' }
                          | {
                              __typename?: 'TimedFeeCollectModuleSettings'
                              type: CollectModules
                              endTimestamp: any
                              referralFee: number
                              contractAddress: any
                              followerOnly: boolean
                              amount: {
                                __typename?: 'ModuleFeeAmount'
                                value: string
                                asset: {
                                  __typename?: 'Erc20'
                                  symbol: string
                                  decimals: number
                                  address: any
                                }
                              }
                            }
                          | { __typename?: 'UnknownCollectModuleSettings' }
                        stats: {
                          __typename?: 'PublicationStats'
                          totalUpvotes: number
                          totalAmountOfMirrors: number
                          totalAmountOfCollects: number
                          totalAmountOfComments: number
                        }
                        metadata: {
                          __typename?: 'MetadataOutput'
                          name?: string | null
                          description?: any | null
                          content?: any | null
                          image?: any | null
                          attributes: Array<{
                            __typename?: 'MetadataAttributeOutput'
                            traitType?: string | null
                            value?: string | null
                          }>
                          cover?: {
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any }
                          } | null
                          media: Array<{
                            __typename?: 'MediaSet'
                            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                          }>
                        }
                      }
                }
              | {
                  __typename?: 'Post'
                  id: any
                  reaction?: ReactionTypes | null
                  mirrors: Array<any>
                  hasCollectedByMe: boolean
                  hidden: boolean
                  createdAt: any
                  appId?: any | null
                  profile: {
                    __typename?: 'Profile'
                    id: any
                    name?: string | null
                    handle: any
                    bio?: string | null
                    ownedBy: any
                    isFollowedByMe: boolean
                    stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                    attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                    picture?:
                      | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                      | { __typename?: 'NftImage'; uri: any }
                      | null
                    followModule?:
                      | { __typename: 'FeeFollowModuleSettings' }
                      | { __typename: 'ProfileFollowModuleSettings' }
                      | { __typename: 'RevertFollowModuleSettings' }
                      | { __typename: 'UnknownFollowModuleSettings' }
                      | null
                  }
                  canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                  canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                  collectedBy?: {
                    __typename?: 'Wallet'
                    address: any
                    defaultProfile?: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    } | null
                  } | null
                  collectModule:
                    | {
                        __typename?: 'FeeCollectModuleSettings'
                        type: CollectModules
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'FreeCollectModuleSettings'
                        type: CollectModules
                        contractAddress: any
                        followerOnly: boolean
                      }
                    | {
                        __typename?: 'LimitedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | {
                        __typename?: 'LimitedTimedFeeCollectModuleSettings'
                        type: CollectModules
                        collectLimit: string
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'RevertCollectModuleSettings' }
                    | {
                        __typename?: 'TimedFeeCollectModuleSettings'
                        type: CollectModules
                        endTimestamp: any
                        referralFee: number
                        contractAddress: any
                        followerOnly: boolean
                        amount: {
                          __typename?: 'ModuleFeeAmount'
                          value: string
                          asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                        }
                      }
                    | { __typename?: 'UnknownCollectModuleSettings' }
                  stats: {
                    __typename?: 'PublicationStats'
                    totalUpvotes: number
                    totalAmountOfMirrors: number
                    totalAmountOfCollects: number
                    totalAmountOfComments: number
                  }
                  metadata: {
                    __typename?: 'MetadataOutput'
                    name?: string | null
                    description?: any | null
                    content?: any | null
                    image?: any | null
                    attributes: Array<{
                      __typename?: 'MetadataAttributeOutput'
                      traitType?: string | null
                      value?: string | null
                    }>
                    cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                    media: Array<{
                      __typename?: 'MediaSet'
                      original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                    }>
                  }
                }
              | null
          }
        | {
            __typename?: 'Post'
            id: any
            reaction?: ReactionTypes | null
            mirrors: Array<any>
            hasCollectedByMe: boolean
            hidden: boolean
            createdAt: any
            appId?: any | null
            profile: {
              __typename?: 'Profile'
              id: any
              name?: string | null
              handle: any
              bio?: string | null
              ownedBy: any
              isFollowedByMe: boolean
              stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
              attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
              picture?:
                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                | { __typename?: 'NftImage'; uri: any }
                | null
              followModule?:
                | { __typename: 'FeeFollowModuleSettings' }
                | { __typename: 'ProfileFollowModuleSettings' }
                | { __typename: 'RevertFollowModuleSettings' }
                | { __typename: 'UnknownFollowModuleSettings' }
                | null
            }
            canComment: { __typename?: 'CanCommentResponse'; result: boolean }
            canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
            collectedBy?: {
              __typename?: 'Wallet'
              address: any
              defaultProfile?: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              } | null
            } | null
            collectModule:
              | {
                  __typename?: 'FeeCollectModuleSettings'
                  type: CollectModules
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | {
                  __typename?: 'FreeCollectModuleSettings'
                  type: CollectModules
                  contractAddress: any
                  followerOnly: boolean
                }
              | {
                  __typename?: 'LimitedFeeCollectModuleSettings'
                  type: CollectModules
                  collectLimit: string
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | {
                  __typename?: 'LimitedTimedFeeCollectModuleSettings'
                  type: CollectModules
                  collectLimit: string
                  endTimestamp: any
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | { __typename?: 'RevertCollectModuleSettings' }
              | {
                  __typename?: 'TimedFeeCollectModuleSettings'
                  type: CollectModules
                  endTimestamp: any
                  referralFee: number
                  contractAddress: any
                  followerOnly: boolean
                  amount: {
                    __typename?: 'ModuleFeeAmount'
                    value: string
                    asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                  }
                }
              | { __typename?: 'UnknownCollectModuleSettings' }
            stats: {
              __typename?: 'PublicationStats'
              totalUpvotes: number
              totalAmountOfMirrors: number
              totalAmountOfCollects: number
              totalAmountOfComments: number
            }
            metadata: {
              __typename?: 'MetadataOutput'
              name?: string | null
              description?: any | null
              content?: any | null
              image?: any | null
              attributes: Array<{
                __typename?: 'MetadataAttributeOutput'
                traitType?: string | null
                value?: string | null
              }>
              cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
              media: Array<{
                __typename?: 'MediaSet'
                original: { __typename?: 'Media'; url: any; mimeType?: any | null }
              }>
            }
          }
      electedMirror?: {
        __typename?: 'ElectedMirror'
        mirrorId: any
        timestamp: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
      } | null
      mirrors: Array<{
        __typename?: 'MirrorEvent'
        timestamp: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
      }>
      collects: Array<{
        __typename?: 'CollectedEvent'
        timestamp: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
      }>
      reactions: Array<{
        __typename?: 'ReactionEvent'
        reaction: ReactionTypes
        timestamp: any
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
      }>
      comments?: Array<{
        __typename?: 'Comment'
        id: any
        reaction?: ReactionTypes | null
        mirrors: Array<any>
        hasCollectedByMe: boolean
        hidden: boolean
        createdAt: any
        appId?: any | null
        profile: {
          __typename?: 'Profile'
          id: any
          name?: string | null
          handle: any
          bio?: string | null
          ownedBy: any
          isFollowedByMe: boolean
          stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
          attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
          picture?:
            | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
            | { __typename?: 'NftImage'; uri: any }
            | null
          followModule?:
            | { __typename: 'FeeFollowModuleSettings' }
            | { __typename: 'ProfileFollowModuleSettings' }
            | { __typename: 'RevertFollowModuleSettings' }
            | { __typename: 'UnknownFollowModuleSettings' }
            | null
        }
        canComment: { __typename?: 'CanCommentResponse'; result: boolean }
        canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
        collectedBy?: {
          __typename?: 'Wallet'
          address: any
          defaultProfile?: {
            __typename?: 'Profile'
            id: any
            name?: string | null
            handle: any
            bio?: string | null
            ownedBy: any
            isFollowedByMe: boolean
            stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
            attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
            picture?:
              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
              | { __typename?: 'NftImage'; uri: any }
              | null
            followModule?:
              | { __typename: 'FeeFollowModuleSettings' }
              | { __typename: 'ProfileFollowModuleSettings' }
              | { __typename: 'RevertFollowModuleSettings' }
              | { __typename: 'UnknownFollowModuleSettings' }
              | null
          } | null
        } | null
        collectModule:
          | {
              __typename?: 'FeeCollectModuleSettings'
              type: CollectModules
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'FreeCollectModuleSettings'
              type: CollectModules
              contractAddress: any
              followerOnly: boolean
            }
          | {
              __typename?: 'LimitedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | {
              __typename?: 'LimitedTimedFeeCollectModuleSettings'
              type: CollectModules
              collectLimit: string
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'RevertCollectModuleSettings' }
          | {
              __typename?: 'TimedFeeCollectModuleSettings'
              type: CollectModules
              endTimestamp: any
              referralFee: number
              contractAddress: any
              followerOnly: boolean
              amount: {
                __typename?: 'ModuleFeeAmount'
                value: string
                asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
              }
            }
          | { __typename?: 'UnknownCollectModuleSettings' }
        stats: {
          __typename?: 'PublicationStats'
          totalUpvotes: number
          totalAmountOfMirrors: number
          totalAmountOfCollects: number
          totalAmountOfComments: number
        }
        metadata: {
          __typename?: 'MetadataOutput'
          name?: string | null
          description?: any | null
          content?: any | null
          image?: any | null
          attributes: Array<{
            __typename?: 'MetadataAttributeOutput'
            traitType?: string | null
            value?: string | null
          }>
          cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
          media: Array<{
            __typename?: 'MediaSet'
            original: { __typename?: 'Media'; url: any; mimeType?: any | null }
          }>
        }
        commentOn?:
          | {
              __typename?: 'Comment'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: { __typename?: 'Profile'; handle: any } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              mainPost:
                | {
                    __typename?: 'Mirror'
                    id: any
                    reaction?: ReactionTypes | null
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                    mirrorOf:
                      | {
                          __typename?: 'Comment'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          createdAt: any
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                        }
                      | {
                          __typename?: 'Post'
                          id: any
                          reaction?: ReactionTypes | null
                          mirrors: Array<any>
                          hasCollectedByMe: boolean
                          hidden: boolean
                          createdAt: any
                          appId?: any | null
                          profile: {
                            __typename?: 'Profile'
                            id: any
                            name?: string | null
                            handle: any
                            bio?: string | null
                            ownedBy: any
                            isFollowedByMe: boolean
                            stats: {
                              __typename?: 'ProfileStats'
                              totalFollowers: number
                              totalFollowing: number
                            }
                            attributes?: Array<{
                              __typename?: 'Attribute'
                              key: string
                              value: string
                            }> | null
                            picture?:
                              | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                              | { __typename?: 'NftImage'; uri: any }
                              | null
                            followModule?:
                              | { __typename: 'FeeFollowModuleSettings' }
                              | { __typename: 'ProfileFollowModuleSettings' }
                              | { __typename: 'RevertFollowModuleSettings' }
                              | { __typename: 'UnknownFollowModuleSettings' }
                              | null
                          }
                          canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                          canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                          collectedBy?: {
                            __typename?: 'Wallet'
                            address: any
                            defaultProfile?: {
                              __typename?: 'Profile'
                              id: any
                              name?: string | null
                              handle: any
                              bio?: string | null
                              ownedBy: any
                              isFollowedByMe: boolean
                              stats: {
                                __typename?: 'ProfileStats'
                                totalFollowers: number
                                totalFollowing: number
                              }
                              attributes?: Array<{
                                __typename?: 'Attribute'
                                key: string
                                value: string
                              }> | null
                              picture?:
                                | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                                | { __typename?: 'NftImage'; uri: any }
                                | null
                              followModule?:
                                | { __typename: 'FeeFollowModuleSettings' }
                                | { __typename: 'ProfileFollowModuleSettings' }
                                | { __typename: 'RevertFollowModuleSettings' }
                                | { __typename: 'UnknownFollowModuleSettings' }
                                | null
                            } | null
                          } | null
                          collectModule:
                            | {
                                __typename?: 'FeeCollectModuleSettings'
                                type: CollectModules
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'FreeCollectModuleSettings'
                                type: CollectModules
                                contractAddress: any
                                followerOnly: boolean
                              }
                            | {
                                __typename?: 'LimitedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | {
                                __typename?: 'LimitedTimedFeeCollectModuleSettings'
                                type: CollectModules
                                collectLimit: string
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'RevertCollectModuleSettings' }
                            | {
                                __typename?: 'TimedFeeCollectModuleSettings'
                                type: CollectModules
                                endTimestamp: any
                                referralFee: number
                                contractAddress: any
                                followerOnly: boolean
                                amount: {
                                  __typename?: 'ModuleFeeAmount'
                                  value: string
                                  asset: {
                                    __typename?: 'Erc20'
                                    symbol: string
                                    decimals: number
                                    address: any
                                  }
                                }
                              }
                            | { __typename?: 'UnknownCollectModuleSettings' }
                          stats: {
                            __typename?: 'PublicationStats'
                            totalUpvotes: number
                            totalAmountOfMirrors: number
                            totalAmountOfCollects: number
                            totalAmountOfComments: number
                          }
                          metadata: {
                            __typename?: 'MetadataOutput'
                            name?: string | null
                            description?: any | null
                            content?: any | null
                            image?: any | null
                            attributes: Array<{
                              __typename?: 'MetadataAttributeOutput'
                              traitType?: string | null
                              value?: string | null
                            }>
                            cover?: {
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any }
                            } | null
                            media: Array<{
                              __typename?: 'MediaSet'
                              original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                            }>
                          }
                        }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
            }
          | {
              __typename?: 'Mirror'
              id: any
              reaction?: ReactionTypes | null
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
              mirrorOf:
                | {
                    __typename?: 'Comment'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    createdAt: any
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                  }
                | {
                    __typename?: 'Post'
                    id: any
                    reaction?: ReactionTypes | null
                    mirrors: Array<any>
                    hasCollectedByMe: boolean
                    hidden: boolean
                    createdAt: any
                    appId?: any | null
                    profile: {
                      __typename?: 'Profile'
                      id: any
                      name?: string | null
                      handle: any
                      bio?: string | null
                      ownedBy: any
                      isFollowedByMe: boolean
                      stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                      picture?:
                        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                        | { __typename?: 'NftImage'; uri: any }
                        | null
                      followModule?:
                        | { __typename: 'FeeFollowModuleSettings' }
                        | { __typename: 'ProfileFollowModuleSettings' }
                        | { __typename: 'RevertFollowModuleSettings' }
                        | { __typename: 'UnknownFollowModuleSettings' }
                        | null
                    }
                    canComment: { __typename?: 'CanCommentResponse'; result: boolean }
                    canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
                    collectedBy?: {
                      __typename?: 'Wallet'
                      address: any
                      defaultProfile?: {
                        __typename?: 'Profile'
                        id: any
                        name?: string | null
                        handle: any
                        bio?: string | null
                        ownedBy: any
                        isFollowedByMe: boolean
                        stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                        attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                        picture?:
                          | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                          | { __typename?: 'NftImage'; uri: any }
                          | null
                        followModule?:
                          | { __typename: 'FeeFollowModuleSettings' }
                          | { __typename: 'ProfileFollowModuleSettings' }
                          | { __typename: 'RevertFollowModuleSettings' }
                          | { __typename: 'UnknownFollowModuleSettings' }
                          | null
                      } | null
                    } | null
                    collectModule:
                      | {
                          __typename?: 'FeeCollectModuleSettings'
                          type: CollectModules
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'FreeCollectModuleSettings'
                          type: CollectModules
                          contractAddress: any
                          followerOnly: boolean
                        }
                      | {
                          __typename?: 'LimitedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | {
                          __typename?: 'LimitedTimedFeeCollectModuleSettings'
                          type: CollectModules
                          collectLimit: string
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'RevertCollectModuleSettings' }
                      | {
                          __typename?: 'TimedFeeCollectModuleSettings'
                          type: CollectModules
                          endTimestamp: any
                          referralFee: number
                          contractAddress: any
                          followerOnly: boolean
                          amount: {
                            __typename?: 'ModuleFeeAmount'
                            value: string
                            asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                          }
                        }
                      | { __typename?: 'UnknownCollectModuleSettings' }
                    stats: {
                      __typename?: 'PublicationStats'
                      totalUpvotes: number
                      totalAmountOfMirrors: number
                      totalAmountOfCollects: number
                      totalAmountOfComments: number
                    }
                    metadata: {
                      __typename?: 'MetadataOutput'
                      name?: string | null
                      description?: any | null
                      content?: any | null
                      image?: any | null
                      attributes: Array<{
                        __typename?: 'MetadataAttributeOutput'
                        traitType?: string | null
                        value?: string | null
                      }>
                      cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                      media: Array<{
                        __typename?: 'MediaSet'
                        original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                      }>
                    }
                  }
            }
          | {
              __typename?: 'Post'
              id: any
              reaction?: ReactionTypes | null
              mirrors: Array<any>
              hasCollectedByMe: boolean
              hidden: boolean
              createdAt: any
              appId?: any | null
              profile: {
                __typename?: 'Profile'
                id: any
                name?: string | null
                handle: any
                bio?: string | null
                ownedBy: any
                isFollowedByMe: boolean
                stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                picture?:
                  | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                  | { __typename?: 'NftImage'; uri: any }
                  | null
                followModule?:
                  | { __typename: 'FeeFollowModuleSettings' }
                  | { __typename: 'ProfileFollowModuleSettings' }
                  | { __typename: 'RevertFollowModuleSettings' }
                  | { __typename: 'UnknownFollowModuleSettings' }
                  | null
              }
              canComment: { __typename?: 'CanCommentResponse'; result: boolean }
              canMirror: { __typename?: 'CanMirrorResponse'; result: boolean }
              collectedBy?: {
                __typename?: 'Wallet'
                address: any
                defaultProfile?: {
                  __typename?: 'Profile'
                  id: any
                  name?: string | null
                  handle: any
                  bio?: string | null
                  ownedBy: any
                  isFollowedByMe: boolean
                  stats: { __typename?: 'ProfileStats'; totalFollowers: number; totalFollowing: number }
                  attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
                  picture?:
                    | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
                    | { __typename?: 'NftImage'; uri: any }
                    | null
                  followModule?:
                    | { __typename: 'FeeFollowModuleSettings' }
                    | { __typename: 'ProfileFollowModuleSettings' }
                    | { __typename: 'RevertFollowModuleSettings' }
                    | { __typename: 'UnknownFollowModuleSettings' }
                    | null
                } | null
              } | null
              collectModule:
                | {
                    __typename?: 'FeeCollectModuleSettings'
                    type: CollectModules
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'FreeCollectModuleSettings'
                    type: CollectModules
                    contractAddress: any
                    followerOnly: boolean
                  }
                | {
                    __typename?: 'LimitedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | {
                    __typename?: 'LimitedTimedFeeCollectModuleSettings'
                    type: CollectModules
                    collectLimit: string
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'RevertCollectModuleSettings' }
                | {
                    __typename?: 'TimedFeeCollectModuleSettings'
                    type: CollectModules
                    endTimestamp: any
                    referralFee: number
                    contractAddress: any
                    followerOnly: boolean
                    amount: {
                      __typename?: 'ModuleFeeAmount'
                      value: string
                      asset: { __typename?: 'Erc20'; symbol: string; decimals: number; address: any }
                    }
                  }
                | { __typename?: 'UnknownCollectModuleSettings' }
              stats: {
                __typename?: 'PublicationStats'
                totalUpvotes: number
                totalAmountOfMirrors: number
                totalAmountOfCollects: number
                totalAmountOfComments: number
              }
              metadata: {
                __typename?: 'MetadataOutput'
                name?: string | null
                description?: any | null
                content?: any | null
                image?: any | null
                attributes: Array<{
                  __typename?: 'MetadataAttributeOutput'
                  traitType?: string | null
                  value?: string | null
                }>
                cover?: { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } } | null
                media: Array<{
                  __typename?: 'MediaSet'
                  original: { __typename?: 'Media'; url: any; mimeType?: any | null }
                }>
              }
            }
          | null
      }> | null
    }>
    pageInfo: { __typename?: 'PaginatedResultInfo'; next?: any | null; totalCount?: number | null }
  }
}

export type TrendingQueryVariables = Exact<{
  request: AllPublicationsTagsRequest
}>

export type TrendingQuery = {
  __typename?: 'Query'
  allPublicationsTags: {
    __typename?: 'PaginatedAllPublicationsTagsResult'
    items: Array<{ __typename?: 'TagResult'; tag: any; total: number }>
  }
}

export type UserProfilesQueryVariables = Exact<{
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']> | Scalars['EthereumAddress']>
}>

export type UserProfilesQuery = {
  __typename?: 'Query'
  profiles: {
    __typename?: 'PaginatedProfileResult'
    items: Array<{
      __typename?: 'Profile'
      isDefault: boolean
      id: any
      name?: string | null
      handle: any
      bio?: string | null
      ownedBy: any
      isFollowedByMe: boolean
      stats: { __typename?: 'ProfileStats'; totalFollowing: number; totalFollowers: number }
      dispatcher?: { __typename?: 'Dispatcher'; canUseRelay: boolean } | null
      attributes?: Array<{ __typename?: 'Attribute'; key: string; value: string }> | null
      picture?:
        | { __typename?: 'MediaSet'; original: { __typename?: 'Media'; url: any } }
        | { __typename?: 'NftImage'; uri: any }
        | null
      followModule?:
        | { __typename: 'FeeFollowModuleSettings' }
        | { __typename: 'ProfileFollowModuleSettings' }
        | { __typename: 'RevertFollowModuleSettings' }
        | { __typename: 'UnknownFollowModuleSettings' }
        | null
    }>
  }
  userSigNonces: { __typename?: 'UserSigNonces'; lensHubOnChainSigNonce: any }
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    CollectModule: [
      'FeeCollectModuleSettings',
      'FreeCollectModuleSettings',
      'LimitedFeeCollectModuleSettings',
      'LimitedTimedFeeCollectModuleSettings',
      'RevertCollectModuleSettings',
      'TimedFeeCollectModuleSettings',
      'UnknownCollectModuleSettings'
    ],
    FeedItemRoot: ['Comment', 'Post'],
    FollowModule: [
      'FeeFollowModuleSettings',
      'ProfileFollowModuleSettings',
      'RevertFollowModuleSettings',
      'UnknownFollowModuleSettings'
    ],
    MainPostReference: ['Mirror', 'Post'],
    MentionPublication: ['Comment', 'Post'],
    MirrorablePublication: ['Comment', 'Post'],
    Notification: [
      'NewCollectNotification',
      'NewCommentNotification',
      'NewFollowerNotification',
      'NewMentionNotification',
      'NewMirrorNotification',
      'NewReactionNotification'
    ],
    ProfileMedia: ['MediaSet', 'NftImage'],
    ProxyActionStatusResultUnion: ['ProxyActionError', 'ProxyActionQueued', 'ProxyActionStatusResult'],
    Publication: ['Comment', 'Mirror', 'Post'],
    PublicationForSale: ['Comment', 'Post'],
    PublicationSearchResultItem: ['Comment', 'Post'],
    ReferenceModule: [
      'DegreesOfSeparationReferenceModuleSettings',
      'FollowOnlyReferenceModuleSettings',
      'UnknownReferenceModuleSettings'
    ],
    RelayResult: ['RelayError', 'RelayerResult'],
    SearchResult: ['ProfileSearchResult', 'PublicationSearchResult'],
    TransactionResult: ['TransactionError', 'TransactionIndexedResult']
  }
}
export default result

export const ProfileFieldsFragmentDoc = gql`
  fragment ProfileFields on Profile {
    id
    name
    handle
    bio
    ownedBy
    isFollowedByMe
    stats {
      totalFollowers
      totalFollowing
    }
    attributes {
      key
      value
    }
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
      ... on NftImage {
        uri
      }
    }
    followModule {
      __typename
    }
  }
`
export const CollectModuleFieldsFragmentDoc = gql`
  fragment CollectModuleFields on CollectModule {
    ... on FreeCollectModuleSettings {
      type
      contractAddress
      followerOnly
    }
    ... on FeeCollectModuleSettings {
      type
      referralFee
      contractAddress
      followerOnly
      amount {
        asset {
          symbol
          decimals
          address
        }
        value
      }
    }
    ... on LimitedFeeCollectModuleSettings {
      type
      collectLimit
      referralFee
      contractAddress
      followerOnly
      amount {
        asset {
          symbol
          decimals
          address
        }
        value
      }
    }
    ... on LimitedTimedFeeCollectModuleSettings {
      type
      collectLimit
      endTimestamp
      referralFee
      contractAddress
      followerOnly
      amount {
        asset {
          symbol
          decimals
          address
        }
        value
      }
    }
    ... on TimedFeeCollectModuleSettings {
      type
      endTimestamp
      referralFee
      contractAddress
      followerOnly
      amount {
        asset {
          symbol
          decimals
          address
        }
        value
      }
    }
  }
`
export const StatsFieldsFragmentDoc = gql`
  fragment StatsFields on PublicationStats {
    totalUpvotes
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }
`
export const MetadataFieldsFragmentDoc = gql`
  fragment MetadataFields on MetadataOutput {
    name
    description
    content
    image
    attributes {
      traitType
      value
    }
    cover {
      original {
        url
      }
    }
    media {
      original {
        url
        mimeType
      }
    }
  }
`
export const PostFieldsFragmentDoc = gql`
  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    reaction(request: $reactionRequest)
    mirrors(by: $profileId)
    canComment(profileId: $profileId) {
      result
    }
    canMirror(profileId: $profileId) {
      result
    }
    hasCollectedByMe
    collectedBy {
      address
      defaultProfile {
        ...ProfileFields
      }
    }
    collectModule {
      ...CollectModuleFields
    }
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    createdAt
    appId
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectModuleFieldsFragmentDoc}
  ${StatsFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
`
export const MirrorFieldsFragmentDoc = gql`
  fragment MirrorFields on Mirror {
    id
    profile {
      ...ProfileFields
    }
    reaction(request: $reactionRequest)
    canComment(profileId: $profileId) {
      result
    }
    canMirror(profileId: $profileId) {
      result
    }
    collectModule {
      ...CollectModuleFields
    }
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    mirrorOf {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        id
        profile {
          ...ProfileFields
        }
        reaction(request: $reactionRequest)
        mirrors(by: $profileId)
        canComment(profileId: $profileId) {
          result
        }
        canMirror(profileId: $profileId) {
          result
        }
        stats {
          ...StatsFields
        }
        createdAt
      }
    }
    createdAt
    appId
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectModuleFieldsFragmentDoc}
  ${StatsFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
  ${PostFieldsFragmentDoc}
`
export const CommentFieldsFragmentDoc = gql`
  fragment CommentFields on Comment {
    id
    profile {
      ...ProfileFields
    }
    reaction(request: $reactionRequest)
    mirrors(by: $profileId)
    canComment(profileId: $profileId) {
      result
    }
    canMirror(profileId: $profileId) {
      result
    }
    hasCollectedByMe
    collectedBy {
      address
      defaultProfile {
        ...ProfileFields
      }
    }
    collectModule {
      ...CollectModuleFields
    }
    stats {
      ...StatsFields
    }
    metadata {
      ...MetadataFields
    }
    hidden
    createdAt
    appId
    commentOn {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        id
        profile {
          ...ProfileFields
        }
        reaction(request: $reactionRequest)
        mirrors(by: $profileId)
        canComment(profileId: $profileId) {
          result
        }
        canMirror(profileId: $profileId) {
          result
        }
        hasCollectedByMe
        collectedBy {
          address
          defaultProfile {
            handle
          }
        }
        collectModule {
          ...CollectModuleFields
        }
        metadata {
          ...MetadataFields
        }
        stats {
          ...StatsFields
        }
        mainPost {
          ... on Post {
            ...PostFields
          }
          ... on Mirror {
            ...MirrorFields
          }
        }
        hidden
        createdAt
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectModuleFieldsFragmentDoc}
  ${StatsFieldsFragmentDoc}
  ${MetadataFieldsFragmentDoc}
  ${PostFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`
export const GroupFieldsFragmentDoc = gql`
  fragment GroupFields on Post {
    id
    profile {
      id
    }
    metadata {
      name
      description
      content
      attributes {
        value
      }
      cover {
        original {
          url
        }
      }
    }
    stats {
      totalAmountOfCollects
      totalAmountOfComments
    }
    createdAt
  }
`
export const RelayerResultFieldsFragmentDoc = gql`
  fragment RelayerResultFields on RelayResult {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
`
export const AddReactionDocument = gql`
  mutation AddReaction($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`
export type AddReactionMutationFn = Apollo.MutationFunction<AddReactionMutation, AddReactionMutationVariables>

/**
 * __useAddReactionMutation__
 *
 * To run a mutation, you first call `useAddReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReactionMutation, { data, loading, error }] = useAddReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAddReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<AddReactionMutation, AddReactionMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddReactionMutation, AddReactionMutationVariables>(AddReactionDocument, options)
}
export type AddReactionMutationHookResult = ReturnType<typeof useAddReactionMutation>
export type AddReactionMutationResult = Apollo.MutationResult<AddReactionMutation>
export type AddReactionMutationOptions = Apollo.BaseMutationOptions<
  AddReactionMutation,
  AddReactionMutationVariables
>
export const AuthenticateDocument = gql`
  mutation Authenticate($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(
    AuthenticateDocument,
    options
  )
}
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>
export type AuthenticateMutationResult = Apollo.MutationResult<AuthenticateMutation>
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>
export const BroadcastDocument = gql`
  mutation Broadcast($request: BroadcastRequest!) {
    broadcast(request: $request) {
      ... on RelayerResult {
        txHash
        txId
      }
      ... on RelayError {
        reason
      }
    }
  }
`
export type BroadcastMutationFn = Apollo.MutationFunction<BroadcastMutation, BroadcastMutationVariables>

/**
 * __useBroadcastMutation__
 *
 * To run a mutation, you first call `useBroadcastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastMutation, { data, loading, error }] = useBroadcastMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBroadcastMutation(
  baseOptions?: Apollo.MutationHookOptions<BroadcastMutation, BroadcastMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<BroadcastMutation, BroadcastMutationVariables>(BroadcastDocument, options)
}
export type BroadcastMutationHookResult = ReturnType<typeof useBroadcastMutation>
export type BroadcastMutationResult = Apollo.MutationResult<BroadcastMutation>
export type BroadcastMutationOptions = Apollo.BaseMutationOptions<
  BroadcastMutation,
  BroadcastMutationVariables
>
export const CreateBurnProfileTypedDataDocument = gql`
  mutation CreateBurnProfileTypedData($options: TypedDataOptions, $request: BurnProfileRequest!) {
    createBurnProfileTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
`
export type CreateBurnProfileTypedDataMutationFn = Apollo.MutationFunction<
  CreateBurnProfileTypedDataMutation,
  CreateBurnProfileTypedDataMutationVariables
>

/**
 * __useCreateBurnProfileTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateBurnProfileTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBurnProfileTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBurnProfileTypedDataMutation, { data, loading, error }] = useCreateBurnProfileTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateBurnProfileTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBurnProfileTypedDataMutation,
    CreateBurnProfileTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateBurnProfileTypedDataMutation, CreateBurnProfileTypedDataMutationVariables>(
    CreateBurnProfileTypedDataDocument,
    options
  )
}
export type CreateBurnProfileTypedDataMutationHookResult = ReturnType<
  typeof useCreateBurnProfileTypedDataMutation
>
export type CreateBurnProfileTypedDataMutationResult =
  Apollo.MutationResult<CreateBurnProfileTypedDataMutation>
export type CreateBurnProfileTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateBurnProfileTypedDataMutation,
  CreateBurnProfileTypedDataMutationVariables
>
export const CreateCollectTypedDataDocument = gql`
  mutation CreateCollectTypedData($options: TypedDataOptions, $request: CreateCollectRequest!) {
    createCollectTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          pubId
          data
        }
      }
    }
  }
`
export type CreateCollectTypedDataMutationFn = Apollo.MutationFunction<
  CreateCollectTypedDataMutation,
  CreateCollectTypedDataMutationVariables
>

/**
 * __useCreateCollectTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCollectTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectTypedDataMutation, { data, loading, error }] = useCreateCollectTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCollectTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCollectTypedDataMutation,
    CreateCollectTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>(
    CreateCollectTypedDataDocument,
    options
  )
}
export type CreateCollectTypedDataMutationHookResult = ReturnType<typeof useCreateCollectTypedDataMutation>
export type CreateCollectTypedDataMutationResult = Apollo.MutationResult<CreateCollectTypedDataMutation>
export type CreateCollectTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateCollectTypedDataMutation,
  CreateCollectTypedDataMutationVariables
>
export const CreateCommentTypedDataDocument = gql`
  mutation CreateCommentTypedData($options: TypedDataOptions, $request: CreatePublicCommentRequest!) {
    createCommentTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          CommentWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          profileIdPointed
          pubIdPointed
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleData
          referenceModuleInitData
        }
      }
    }
  }
`
export type CreateCommentTypedDataMutationFn = Apollo.MutationFunction<
  CreateCommentTypedDataMutation,
  CreateCommentTypedDataMutationVariables
>

/**
 * __useCreateCommentTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCommentTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentTypedDataMutation, { data, loading, error }] = useCreateCommentTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentTypedDataMutation,
    CreateCommentTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>(
    CreateCommentTypedDataDocument,
    options
  )
}
export type CreateCommentTypedDataMutationHookResult = ReturnType<typeof useCreateCommentTypedDataMutation>
export type CreateCommentTypedDataMutationResult = Apollo.MutationResult<CreateCommentTypedDataMutation>
export type CreateCommentTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentTypedDataMutation,
  CreateCommentTypedDataMutationVariables
>
export const CreateCommentViaDispatcherDocument = gql`
  mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
    createCommentViaDispatcher(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreateCommentViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateCommentViaDispatcherMutation,
  CreateCommentViaDispatcherMutationVariables
>

/**
 * __useCreateCommentViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateCommentViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentViaDispatcherMutation, { data, loading, error }] = useCreateCommentViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentViaDispatcherMutation,
    CreateCommentViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>(
    CreateCommentViaDispatcherDocument,
    options
  )
}
export type CreateCommentViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateCommentViaDispatcherMutation
>
export type CreateCommentViaDispatcherMutationResult =
  Apollo.MutationResult<CreateCommentViaDispatcherMutation>
export type CreateCommentViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentViaDispatcherMutation,
  CreateCommentViaDispatcherMutationVariables
>
export const CreateFollowTypedDataDocument = gql`
  mutation CreateFollowTypedData($options: TypedDataOptions, $request: FollowRequest!) {
    createFollowTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }
`
export type CreateFollowTypedDataMutationFn = Apollo.MutationFunction<
  CreateFollowTypedDataMutation,
  CreateFollowTypedDataMutationVariables
>

/**
 * __useCreateFollowTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateFollowTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowTypedDataMutation, { data, loading, error }] = useCreateFollowTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateFollowTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFollowTypedDataMutation,
    CreateFollowTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>(
    CreateFollowTypedDataDocument,
    options
  )
}
export type CreateFollowTypedDataMutationHookResult = ReturnType<typeof useCreateFollowTypedDataMutation>
export type CreateFollowTypedDataMutationResult = Apollo.MutationResult<CreateFollowTypedDataMutation>
export type CreateFollowTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateFollowTypedDataMutation,
  CreateFollowTypedDataMutationVariables
>
export const CreateMirrorTypedDataDocument = gql`
  mutation CreateMirrorTypedData($options: TypedDataOptions, $request: CreateMirrorRequest!) {
    createMirrorTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          MirrorWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          profileIdPointed
          pubIdPointed
          referenceModule
          referenceModuleData
          referenceModuleInitData
        }
      }
    }
  }
`
export type CreateMirrorTypedDataMutationFn = Apollo.MutationFunction<
  CreateMirrorTypedDataMutation,
  CreateMirrorTypedDataMutationVariables
>

/**
 * __useCreateMirrorTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateMirrorTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorTypedDataMutation, { data, loading, error }] = useCreateMirrorTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMirrorTypedDataMutation,
    CreateMirrorTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateMirrorTypedDataMutation, CreateMirrorTypedDataMutationVariables>(
    CreateMirrorTypedDataDocument,
    options
  )
}
export type CreateMirrorTypedDataMutationHookResult = ReturnType<typeof useCreateMirrorTypedDataMutation>
export type CreateMirrorTypedDataMutationResult = Apollo.MutationResult<CreateMirrorTypedDataMutation>
export type CreateMirrorTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateMirrorTypedDataMutation,
  CreateMirrorTypedDataMutationVariables
>
export const CreateMirrorViaDispatcherDocument = gql`
  mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
    createMirrorViaDispatcher(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreateMirrorViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateMirrorViaDispatcherMutation,
  CreateMirrorViaDispatcherMutationVariables
>

/**
 * __useCreateMirrorViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateMirrorViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorViaDispatcherMutation, { data, loading, error }] = useCreateMirrorViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMirrorViaDispatcherMutation,
    CreateMirrorViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateMirrorViaDispatcherMutation, CreateMirrorViaDispatcherMutationVariables>(
    CreateMirrorViaDispatcherDocument,
    options
  )
}
export type CreateMirrorViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateMirrorViaDispatcherMutation
>
export type CreateMirrorViaDispatcherMutationResult = Apollo.MutationResult<CreateMirrorViaDispatcherMutation>
export type CreateMirrorViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreateMirrorViaDispatcherMutation,
  CreateMirrorViaDispatcherMutationVariables
>
export const CreatePostTypedDataDocument = gql`
  mutation CreatePostTypedData($options: TypedDataOptions, $request: CreatePublicPostRequest!) {
    createPostTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
`
export type CreatePostTypedDataMutationFn = Apollo.MutationFunction<
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables
>

/**
 * __useCreatePostTypedDataMutation__
 *
 * To run a mutation, you first call `useCreatePostTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostTypedDataMutation, { data, loading, error }] = useCreatePostTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePostTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>(
    CreatePostTypedDataDocument,
    options
  )
}
export type CreatePostTypedDataMutationHookResult = ReturnType<typeof useCreatePostTypedDataMutation>
export type CreatePostTypedDataMutationResult = Apollo.MutationResult<CreatePostTypedDataMutation>
export type CreatePostTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreatePostTypedDataMutation,
  CreatePostTypedDataMutationVariables
>
export const CreatePostViaDispatcherDocument = gql`
  mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
    createPostViaDispatcher(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreatePostViaDispatcherMutationFn = Apollo.MutationFunction<
  CreatePostViaDispatcherMutation,
  CreatePostViaDispatcherMutationVariables
>

/**
 * __useCreatePostViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreatePostViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostViaDispatcherMutation, { data, loading, error }] = useCreatePostViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePostViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostViaDispatcherMutation,
    CreatePostViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePostViaDispatcherMutation, CreatePostViaDispatcherMutationVariables>(
    CreatePostViaDispatcherDocument,
    options
  )
}
export type CreatePostViaDispatcherMutationHookResult = ReturnType<typeof useCreatePostViaDispatcherMutation>
export type CreatePostViaDispatcherMutationResult = Apollo.MutationResult<CreatePostViaDispatcherMutation>
export type CreatePostViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreatePostViaDispatcherMutation,
  CreatePostViaDispatcherMutationVariables
>
export const CreateProfileDocument = gql`
  mutation CreateProfile($request: CreateProfileRequest!) {
    createProfile(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreateProfileMutationFn = Apollo.MutationFunction<
  CreateProfileMutation,
  CreateProfileMutationVariables
>

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(
    CreateProfileDocument,
    options
  )
}
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<
  CreateProfileMutation,
  CreateProfileMutationVariables
>
export const CreateSetDefaultProfileTypedDataDocument = gql`
  mutation CreateSetDefaultProfileTypedData(
    $options: TypedDataOptions
    $request: CreateSetDefaultProfileRequest!
  ) {
    createSetDefaultProfileTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          SetDefaultProfileWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          wallet
          profileId
        }
      }
    }
  }
`
export type CreateSetDefaultProfileTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetDefaultProfileTypedDataMutation,
  CreateSetDefaultProfileTypedDataMutationVariables
>

/**
 * __useCreateSetDefaultProfileTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetDefaultProfileTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetDefaultProfileTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetDefaultProfileTypedDataMutation, { data, loading, error }] = useCreateSetDefaultProfileTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetDefaultProfileTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetDefaultProfileTypedDataMutation,
    CreateSetDefaultProfileTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetDefaultProfileTypedDataMutation,
    CreateSetDefaultProfileTypedDataMutationVariables
  >(CreateSetDefaultProfileTypedDataDocument, options)
}
export type CreateSetDefaultProfileTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetDefaultProfileTypedDataMutation
>
export type CreateSetDefaultProfileTypedDataMutationResult =
  Apollo.MutationResult<CreateSetDefaultProfileTypedDataMutation>
export type CreateSetDefaultProfileTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateSetDefaultProfileTypedDataMutation,
  CreateSetDefaultProfileTypedDataMutationVariables
>
export const CreateSetDispatcherTypedDataDocument = gql`
  mutation CreateSetDispatcherTypedData($options: TypedDataOptions, $request: SetDispatcherRequest!) {
    createSetDispatcherTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetDispatcherWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          dispatcher
        }
      }
    }
  }
`
export type CreateSetDispatcherTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetDispatcherTypedDataMutation,
  CreateSetDispatcherTypedDataMutationVariables
>

/**
 * __useCreateSetDispatcherTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetDispatcherTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetDispatcherTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetDispatcherTypedDataMutation, { data, loading, error }] = useCreateSetDispatcherTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetDispatcherTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetDispatcherTypedDataMutation,
    CreateSetDispatcherTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetDispatcherTypedDataMutation,
    CreateSetDispatcherTypedDataMutationVariables
  >(CreateSetDispatcherTypedDataDocument, options)
}
export type CreateSetDispatcherTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetDispatcherTypedDataMutation
>
export type CreateSetDispatcherTypedDataMutationResult =
  Apollo.MutationResult<CreateSetDispatcherTypedDataMutation>
export type CreateSetDispatcherTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateSetDispatcherTypedDataMutation,
  CreateSetDispatcherTypedDataMutationVariables
>
export const CreateSetFollowModuleTypedDataDocument = gql`
  mutation CreateSetFollowModuleTypedData(
    $options: TypedDataOptions
    $request: CreateSetFollowModuleRequest!
  ) {
    createSetFollowModuleTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetFollowModuleWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          followModule
          followModuleInitData
        }
      }
    }
  }
`
export type CreateSetFollowModuleTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetFollowModuleTypedDataMutation,
  CreateSetFollowModuleTypedDataMutationVariables
>

/**
 * __useCreateSetFollowModuleTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetFollowModuleTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetFollowModuleTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetFollowModuleTypedDataMutation, { data, loading, error }] = useCreateSetFollowModuleTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetFollowModuleTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetFollowModuleTypedDataMutation,
    CreateSetFollowModuleTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetFollowModuleTypedDataMutation,
    CreateSetFollowModuleTypedDataMutationVariables
  >(CreateSetFollowModuleTypedDataDocument, options)
}
export type CreateSetFollowModuleTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetFollowModuleTypedDataMutation
>
export type CreateSetFollowModuleTypedDataMutationResult =
  Apollo.MutationResult<CreateSetFollowModuleTypedDataMutation>
export type CreateSetFollowModuleTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateSetFollowModuleTypedDataMutation,
  CreateSetFollowModuleTypedDataMutationVariables
>
export const CreateSetProfileImageUriTypedDataDocument = gql`
  mutation CreateSetProfileImageURITypedData(
    $options: TypedDataOptions
    $request: UpdateProfileImageRequest!
  ) {
    createSetProfileImageURITypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          SetProfileImageURIWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          imageURI
          profileId
        }
      }
    }
  }
`
export type CreateSetProfileImageUriTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetProfileImageUriTypedDataMutation,
  CreateSetProfileImageUriTypedDataMutationVariables
>

/**
 * __useCreateSetProfileImageUriTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriTypedDataMutation, { data, loading, error }] = useCreateSetProfileImageUriTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileImageUriTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetProfileImageUriTypedDataMutation,
    CreateSetProfileImageUriTypedDataMutationVariables
  >(CreateSetProfileImageUriTypedDataDocument, options)
}
export type CreateSetProfileImageUriTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetProfileImageUriTypedDataMutation
>
export type CreateSetProfileImageUriTypedDataMutationResult =
  Apollo.MutationResult<CreateSetProfileImageUriTypedDataMutation>
export type CreateSetProfileImageUriTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateSetProfileImageUriTypedDataMutation,
  CreateSetProfileImageUriTypedDataMutationVariables
>
export const CreateSetProfileImageUriViaDispatcherDocument = gql`
  mutation CreateSetProfileImageURIViaDispatcher($request: UpdateProfileImageRequest!) {
    createSetProfileImageURIViaDispatcher(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreateSetProfileImageUriViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateSetProfileImageUriViaDispatcherMutation,
  CreateSetProfileImageUriViaDispatcherMutationVariables
>

/**
 * __useCreateSetProfileImageUriViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileImageUriViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileImageUriViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileImageUriViaDispatcherMutation, { data, loading, error }] = useCreateSetProfileImageUriViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileImageUriViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetProfileImageUriViaDispatcherMutation,
    CreateSetProfileImageUriViaDispatcherMutationVariables
  >(CreateSetProfileImageUriViaDispatcherDocument, options)
}
export type CreateSetProfileImageUriViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateSetProfileImageUriViaDispatcherMutation
>
export type CreateSetProfileImageUriViaDispatcherMutationResult =
  Apollo.MutationResult<CreateSetProfileImageUriViaDispatcherMutation>
export type CreateSetProfileImageUriViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreateSetProfileImageUriViaDispatcherMutation,
  CreateSetProfileImageUriViaDispatcherMutationVariables
>
export const CreateSetProfileMetadataTypedDataDocument = gql`
  mutation CreateSetProfileMetadataTypedData(
    $options: TypedDataOptions
    $request: CreatePublicSetProfileMetadataURIRequest!
  ) {
    createSetProfileMetadataTypedData(options: $options, request: $request) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          metadata
        }
      }
    }
  }
`
export type CreateSetProfileMetadataTypedDataMutationFn = Apollo.MutationFunction<
  CreateSetProfileMetadataTypedDataMutation,
  CreateSetProfileMetadataTypedDataMutationVariables
>

/**
 * __useCreateSetProfileMetadataTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataTypedDataMutation, { data, loading, error }] = useCreateSetProfileMetadataTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileMetadataTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetProfileMetadataTypedDataMutation,
    CreateSetProfileMetadataTypedDataMutationVariables
  >(CreateSetProfileMetadataTypedDataDocument, options)
}
export type CreateSetProfileMetadataTypedDataMutationHookResult = ReturnType<
  typeof useCreateSetProfileMetadataTypedDataMutation
>
export type CreateSetProfileMetadataTypedDataMutationResult =
  Apollo.MutationResult<CreateSetProfileMetadataTypedDataMutation>
export type CreateSetProfileMetadataTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateSetProfileMetadataTypedDataMutation,
  CreateSetProfileMetadataTypedDataMutationVariables
>
export const CreateSetProfileMetadataViaDispatcherDocument = gql`
  mutation CreateSetProfileMetadataViaDispatcher($request: CreatePublicSetProfileMetadataURIRequest!) {
    createSetProfileMetadataViaDispatcher(request: $request) {
      ...RelayerResultFields
    }
  }
  ${RelayerResultFieldsFragmentDoc}
`
export type CreateSetProfileMetadataViaDispatcherMutationFn = Apollo.MutationFunction<
  CreateSetProfileMetadataViaDispatcherMutation,
  CreateSetProfileMetadataViaDispatcherMutationVariables
>

/**
 * __useCreateSetProfileMetadataViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateSetProfileMetadataViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetProfileMetadataViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetProfileMetadataViaDispatcherMutation, { data, loading, error }] = useCreateSetProfileMetadataViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSetProfileMetadataViaDispatcherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSetProfileMetadataViaDispatcherMutation,
    CreateSetProfileMetadataViaDispatcherMutationVariables
  >(CreateSetProfileMetadataViaDispatcherDocument, options)
}
export type CreateSetProfileMetadataViaDispatcherMutationHookResult = ReturnType<
  typeof useCreateSetProfileMetadataViaDispatcherMutation
>
export type CreateSetProfileMetadataViaDispatcherMutationResult =
  Apollo.MutationResult<CreateSetProfileMetadataViaDispatcherMutation>
export type CreateSetProfileMetadataViaDispatcherMutationOptions = Apollo.BaseMutationOptions<
  CreateSetProfileMetadataViaDispatcherMutation,
  CreateSetProfileMetadataViaDispatcherMutationVariables
>
export const CreateUnfollowTypedDataDocument = gql`
  mutation CreateUnfollowTypedData($request: UnfollowRequest!) {
    createUnfollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
  }
`
export type CreateUnfollowTypedDataMutationFn = Apollo.MutationFunction<
  CreateUnfollowTypedDataMutation,
  CreateUnfollowTypedDataMutationVariables
>

/**
 * __useCreateUnfollowTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateUnfollowTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnfollowTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnfollowTypedDataMutation, { data, loading, error }] = useCreateUnfollowTypedDataMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUnfollowTypedDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUnfollowTypedDataMutation,
    CreateUnfollowTypedDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUnfollowTypedDataMutation, CreateUnfollowTypedDataMutationVariables>(
    CreateUnfollowTypedDataDocument,
    options
  )
}
export type CreateUnfollowTypedDataMutationHookResult = ReturnType<typeof useCreateUnfollowTypedDataMutation>
export type CreateUnfollowTypedDataMutationResult = Apollo.MutationResult<CreateUnfollowTypedDataMutation>
export type CreateUnfollowTypedDataMutationOptions = Apollo.BaseMutationOptions<
  CreateUnfollowTypedDataMutation,
  CreateUnfollowTypedDataMutationVariables
>
export const HidePublicationDocument = gql`
  mutation HidePublication($request: HidePublicationRequest!) {
    hidePublication(request: $request)
  }
`
export type HidePublicationMutationFn = Apollo.MutationFunction<
  HidePublicationMutation,
  HidePublicationMutationVariables
>

/**
 * __useHidePublicationMutation__
 *
 * To run a mutation, you first call `useHidePublicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHidePublicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hidePublicationMutation, { data, loading, error }] = useHidePublicationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHidePublicationMutation(
  baseOptions?: Apollo.MutationHookOptions<HidePublicationMutation, HidePublicationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<HidePublicationMutation, HidePublicationMutationVariables>(
    HidePublicationDocument,
    options
  )
}
export type HidePublicationMutationHookResult = ReturnType<typeof useHidePublicationMutation>
export type HidePublicationMutationResult = Apollo.MutationResult<HidePublicationMutation>
export type HidePublicationMutationOptions = Apollo.BaseMutationOptions<
  HidePublicationMutation,
  HidePublicationMutationVariables
>
export const ProxyActionDocument = gql`
  mutation ProxyAction($request: ProxyActionRequest!) {
    proxyAction(request: $request)
  }
`
export type ProxyActionMutationFn = Apollo.MutationFunction<ProxyActionMutation, ProxyActionMutationVariables>

/**
 * __useProxyActionMutation__
 *
 * To run a mutation, you first call `useProxyActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProxyActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [proxyActionMutation, { data, loading, error }] = useProxyActionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProxyActionMutation(
  baseOptions?: Apollo.MutationHookOptions<ProxyActionMutation, ProxyActionMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ProxyActionMutation, ProxyActionMutationVariables>(ProxyActionDocument, options)
}
export type ProxyActionMutationHookResult = ReturnType<typeof useProxyActionMutation>
export type ProxyActionMutationResult = Apollo.MutationResult<ProxyActionMutation>
export type ProxyActionMutationOptions = Apollo.BaseMutationOptions<
  ProxyActionMutation,
  ProxyActionMutationVariables
>
export const RemoveReactionDocument = gql`
  mutation RemoveReaction($request: ReactionRequest!) {
    removeReaction(request: $request)
  }
`
export type RemoveReactionMutationFn = Apollo.MutationFunction<
  RemoveReactionMutation,
  RemoveReactionMutationVariables
>

/**
 * __useRemoveReactionMutation__
 *
 * To run a mutation, you first call `useRemoveReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReactionMutation, { data, loading, error }] = useRemoveReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRemoveReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveReactionMutation, RemoveReactionMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveReactionMutation, RemoveReactionMutationVariables>(
    RemoveReactionDocument,
    options
  )
}
export type RemoveReactionMutationHookResult = ReturnType<typeof useRemoveReactionMutation>
export type RemoveReactionMutationResult = Apollo.MutationResult<RemoveReactionMutation>
export type RemoveReactionMutationOptions = Apollo.BaseMutationOptions<
  RemoveReactionMutation,
  RemoveReactionMutationVariables
>
export const ReportPublicationDocument = gql`
  mutation ReportPublication($request: ReportPublicationRequest!) {
    reportPublication(request: $request)
  }
`
export type ReportPublicationMutationFn = Apollo.MutationFunction<
  ReportPublicationMutation,
  ReportPublicationMutationVariables
>

/**
 * __useReportPublicationMutation__
 *
 * To run a mutation, you first call `useReportPublicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportPublicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportPublicationMutation, { data, loading, error }] = useReportPublicationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useReportPublicationMutation(
  baseOptions?: Apollo.MutationHookOptions<ReportPublicationMutation, ReportPublicationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ReportPublicationMutation, ReportPublicationMutationVariables>(
    ReportPublicationDocument,
    options
  )
}
export type ReportPublicationMutationHookResult = ReturnType<typeof useReportPublicationMutation>
export type ReportPublicationMutationResult = Apollo.MutationResult<ReportPublicationMutation>
export type ReportPublicationMutationOptions = Apollo.BaseMutationOptions<
  ReportPublicationMutation,
  ReportPublicationMutationVariables
>
export const ApprovedModuleAllowanceAmountDocument = gql`
  query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
    approvedModuleAllowanceAmount(request: $request) {
      currency
      module
      allowance
      contractAddress
    }
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`

/**
 * __useApprovedModuleAllowanceAmountQuery__
 *
 * To run a query within a React component, call `useApprovedModuleAllowanceAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApprovedModuleAllowanceAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApprovedModuleAllowanceAmountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useApprovedModuleAllowanceAmountQuery(
  baseOptions: Apollo.QueryHookOptions<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>(
    ApprovedModuleAllowanceAmountDocument,
    options
  )
}
export function useApprovedModuleAllowanceAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApprovedModuleAllowanceAmountQuery,
    ApprovedModuleAllowanceAmountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>(
    ApprovedModuleAllowanceAmountDocument,
    options
  )
}
export type ApprovedModuleAllowanceAmountQueryHookResult = ReturnType<
  typeof useApprovedModuleAllowanceAmountQuery
>
export type ApprovedModuleAllowanceAmountLazyQueryHookResult = ReturnType<
  typeof useApprovedModuleAllowanceAmountLazyQuery
>
export type ApprovedModuleAllowanceAmountQueryResult = Apollo.QueryResult<
  ApprovedModuleAllowanceAmountQuery,
  ApprovedModuleAllowanceAmountQueryVariables
>
export const BCharityStatsDocument = gql`
  query BCharityStats {
    globalProtocolStats(request: { sources: "BCharity" }) {
      totalProfiles
      totalPosts
      totalBurntProfiles
      totalMirrors
      totalComments
      totalCollects
      totalFollows
    }
  }
`

/**
 * __useBCharityStatsQuery__
 *
 * To run a query within a React component, call `useBCharityStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBCharityStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBCharityStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBCharityStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<BCharityStatsQuery, BCharityStatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BCharityStatsQuery, BCharityStatsQueryVariables>(BCharityStatsDocument, options)
}
export function useBCharityStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BCharityStatsQuery, BCharityStatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BCharityStatsQuery, BCharityStatsQueryVariables>(BCharityStatsDocument, options)
}
export type BCharityStatsQueryHookResult = ReturnType<typeof useBCharityStatsQuery>
export type BCharityStatsLazyQueryHookResult = ReturnType<typeof useBCharityStatsLazyQuery>
export type BCharityStatsQueryResult = Apollo.QueryResult<BCharityStatsQuery, BCharityStatsQueryVariables>
export const ChallengeDocument = gql`
  query Challenge($request: ChallengeRequest!) {
    challenge(request: $request) {
      text
    }
  }
`

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(
  baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options)
}
export function useChallengeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options)
}
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>
export type ChallengeLazyQueryHookResult = ReturnType<typeof useChallengeLazyQuery>
export type ChallengeQueryResult = Apollo.QueryResult<ChallengeQuery, ChallengeQueryVariables>
export const CollectModuleDocument = gql`
  query CollectModule($request: PublicationQueryRequest!) {
    publication(request: $request) {
      ... on Post {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
      ... on Comment {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
      ... on Mirror {
        collectNftAddress
        collectModule {
          ...CollectModuleFields
        }
      }
    }
  }
  ${CollectModuleFieldsFragmentDoc}
`

/**
 * __useCollectModuleQuery__
 *
 * To run a query within a React component, call `useCollectModuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectModuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectModuleQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCollectModuleQuery(
  baseOptions: Apollo.QueryHookOptions<CollectModuleQuery, CollectModuleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectModuleQuery, CollectModuleQueryVariables>(CollectModuleDocument, options)
}
export function useCollectModuleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CollectModuleQuery, CollectModuleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CollectModuleQuery, CollectModuleQueryVariables>(CollectModuleDocument, options)
}
export type CollectModuleQueryHookResult = ReturnType<typeof useCollectModuleQuery>
export type CollectModuleLazyQueryHookResult = ReturnType<typeof useCollectModuleLazyQuery>
export type CollectModuleQueryResult = Apollo.QueryResult<CollectModuleQuery, CollectModuleQueryVariables>
export const CollectorsDocument = gql`
  query Collectors($request: WhoCollectedPublicationRequest!) {
    whoCollectedPublication(request: $request) {
      items {
        address
        defaultProfile {
          ...ProfileFields
          isFollowedByMe
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useCollectorsQuery__
 *
 * To run a query within a React component, call `useCollectorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectorsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCollectorsQuery(
  baseOptions: Apollo.QueryHookOptions<CollectorsQuery, CollectorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectorsQuery, CollectorsQueryVariables>(CollectorsDocument, options)
}
export function useCollectorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CollectorsQuery, CollectorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CollectorsQuery, CollectorsQueryVariables>(CollectorsDocument, options)
}
export type CollectorsQueryHookResult = ReturnType<typeof useCollectorsQuery>
export type CollectorsLazyQueryHookResult = ReturnType<typeof useCollectorsLazyQuery>
export type CollectorsQueryResult = Apollo.QueryResult<CollectorsQuery, CollectorsQueryVariables>
export const CommentFeedDocument = gql`
  query CommentFeed(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Comment {
          ...CommentFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${CommentFieldsFragmentDoc}
`

/**
 * __useCommentFeedQuery__
 *
 * To run a query within a React component, call `useCommentFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useCommentFeedQuery(
  baseOptions: Apollo.QueryHookOptions<CommentFeedQuery, CommentFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CommentFeedQuery, CommentFeedQueryVariables>(CommentFeedDocument, options)
}
export function useCommentFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CommentFeedQuery, CommentFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CommentFeedQuery, CommentFeedQueryVariables>(CommentFeedDocument, options)
}
export type CommentFeedQueryHookResult = ReturnType<typeof useCommentFeedQuery>
export type CommentFeedLazyQueryHookResult = ReturnType<typeof useCommentFeedLazyQuery>
export type CommentFeedQueryResult = Apollo.QueryResult<CommentFeedQuery, CommentFeedQueryVariables>
export const EnabledCurrencyModulesDocument = gql`
  query EnabledCurrencyModules {
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`

/**
 * __useEnabledCurrencyModulesQuery__
 *
 * To run a query within a React component, call `useEnabledCurrencyModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledCurrencyModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledCurrencyModulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEnabledCurrencyModulesQuery(
  baseOptions?: Apollo.QueryHookOptions<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>(
    EnabledCurrencyModulesDocument,
    options
  )
}
export function useEnabledCurrencyModulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>(
    EnabledCurrencyModulesDocument,
    options
  )
}
export type EnabledCurrencyModulesQueryHookResult = ReturnType<typeof useEnabledCurrencyModulesQuery>
export type EnabledCurrencyModulesLazyQueryHookResult = ReturnType<typeof useEnabledCurrencyModulesLazyQuery>
export type EnabledCurrencyModulesQueryResult = Apollo.QueryResult<
  EnabledCurrencyModulesQuery,
  EnabledCurrencyModulesQueryVariables
>
export const EnabledCurrencyModulesWithProfileDocument = gql`
  query EnabledCurrencyModulesWithProfile($request: SingleProfileQueryRequest!) {
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
    profile(request: $request) {
      followModule {
        __typename
      }
    }
  }
`

/**
 * __useEnabledCurrencyModulesWithProfileQuery__
 *
 * To run a query within a React component, call `useEnabledCurrencyModulesWithProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledCurrencyModulesWithProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledCurrencyModulesWithProfileQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useEnabledCurrencyModulesWithProfileQuery(
  baseOptions: Apollo.QueryHookOptions<
    EnabledCurrencyModulesWithProfileQuery,
    EnabledCurrencyModulesWithProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    EnabledCurrencyModulesWithProfileQuery,
    EnabledCurrencyModulesWithProfileQueryVariables
  >(EnabledCurrencyModulesWithProfileDocument, options)
}
export function useEnabledCurrencyModulesWithProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EnabledCurrencyModulesWithProfileQuery,
    EnabledCurrencyModulesWithProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    EnabledCurrencyModulesWithProfileQuery,
    EnabledCurrencyModulesWithProfileQueryVariables
  >(EnabledCurrencyModulesWithProfileDocument, options)
}
export type EnabledCurrencyModulesWithProfileQueryHookResult = ReturnType<
  typeof useEnabledCurrencyModulesWithProfileQuery
>
export type EnabledCurrencyModulesWithProfileLazyQueryHookResult = ReturnType<
  typeof useEnabledCurrencyModulesWithProfileLazyQuery
>
export type EnabledCurrencyModulesWithProfileQueryResult = Apollo.QueryResult<
  EnabledCurrencyModulesWithProfileQuery,
  EnabledCurrencyModulesWithProfileQueryVariables
>
export const EnabledModulesDocument = gql`
  query EnabledModules {
    enabledModules {
      collectModules {
        moduleName
        contractAddress
      }
    }
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`

/**
 * __useEnabledModulesQuery__
 *
 * To run a query within a React component, call `useEnabledModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEnabledModulesQuery(
  baseOptions?: Apollo.QueryHookOptions<EnabledModulesQuery, EnabledModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EnabledModulesQuery, EnabledModulesQueryVariables>(EnabledModulesDocument, options)
}
export function useEnabledModulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EnabledModulesQuery, EnabledModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EnabledModulesQuery, EnabledModulesQueryVariables>(
    EnabledModulesDocument,
    options
  )
}
export type EnabledModulesQueryHookResult = ReturnType<typeof useEnabledModulesQuery>
export type EnabledModulesLazyQueryHookResult = ReturnType<typeof useEnabledModulesLazyQuery>
export type EnabledModulesQueryResult = Apollo.QueryResult<EnabledModulesQuery, EnabledModulesQueryVariables>
export const ExploreFeedDocument = gql`
  query ExploreFeed(
    $request: ExplorePublicationRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    explorePublications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`

/**
 * __useExploreFeedQuery__
 *
 * To run a query within a React component, call `useExploreFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useExploreFeedQuery(
  baseOptions: Apollo.QueryHookOptions<ExploreFeedQuery, ExploreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExploreFeedQuery, ExploreFeedQueryVariables>(ExploreFeedDocument, options)
}
export function useExploreFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExploreFeedQuery, ExploreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExploreFeedQuery, ExploreFeedQueryVariables>(ExploreFeedDocument, options)
}
export type ExploreFeedQueryHookResult = ReturnType<typeof useExploreFeedQuery>
export type ExploreFeedLazyQueryHookResult = ReturnType<typeof useExploreFeedLazyQuery>
export type ExploreFeedQueryResult = Apollo.QueryResult<ExploreFeedQuery, ExploreFeedQueryVariables>
export const FeedHighlightsDocument = gql`
  query FeedHighlights(
    $request: FeedHighlightsRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    feedHighlights(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`

/**
 * __useFeedHighlightsQuery__
 *
 * To run a query within a React component, call `useFeedHighlightsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedHighlightsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedHighlightsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useFeedHighlightsQuery(
  baseOptions: Apollo.QueryHookOptions<FeedHighlightsQuery, FeedHighlightsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeedHighlightsQuery, FeedHighlightsQueryVariables>(FeedHighlightsDocument, options)
}
export function useFeedHighlightsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedHighlightsQuery, FeedHighlightsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeedHighlightsQuery, FeedHighlightsQueryVariables>(
    FeedHighlightsDocument,
    options
  )
}
export type FeedHighlightsQueryHookResult = ReturnType<typeof useFeedHighlightsQuery>
export type FeedHighlightsLazyQueryHookResult = ReturnType<typeof useFeedHighlightsLazyQuery>
export type FeedHighlightsQueryResult = Apollo.QueryResult<FeedHighlightsQuery, FeedHighlightsQueryVariables>
export const FollowersDocument = gql`
  query Followers($request: FollowersRequest!) {
    followers(request: $request) {
      items {
        wallet {
          address
          defaultProfile {
            ...ProfileFields
            isFollowedByMe
          }
        }
        totalAmountOfTimesFollowed
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useFollowersQuery__
 *
 * To run a query within a React component, call `useFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFollowersQuery(
  baseOptions: Apollo.QueryHookOptions<FollowersQuery, FollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options)
}
export function useFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FollowersQuery, FollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options)
}
export type FollowersQueryHookResult = ReturnType<typeof useFollowersQuery>
export type FollowersLazyQueryHookResult = ReturnType<typeof useFollowersLazyQuery>
export type FollowersQueryResult = Apollo.QueryResult<FollowersQuery, FollowersQueryVariables>
export const FollowingDocument = gql`
  query Following($request: FollowingRequest!) {
    following(request: $request) {
      items {
        profile {
          ...ProfileFields
          isFollowedByMe
        }
        totalAmountOfTimesFollowing
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useFollowingQuery__
 *
 * To run a query within a React component, call `useFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFollowingQuery(
  baseOptions: Apollo.QueryHookOptions<FollowingQuery, FollowingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options)
}
export function useFollowingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FollowingQuery, FollowingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options)
}
export type FollowingQueryHookResult = ReturnType<typeof useFollowingQuery>
export type FollowingLazyQueryHookResult = ReturnType<typeof useFollowingLazyQuery>
export type FollowingQueryResult = Apollo.QueryResult<FollowingQuery, FollowingQueryVariables>
export const GenerateModuleCurrencyApprovalDataDocument = gql`
  query GenerateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
    generateModuleCurrencyApprovalData(request: $request) {
      to
      from
      data
    }
  }
`

/**
 * __useGenerateModuleCurrencyApprovalDataQuery__
 *
 * To run a query within a React component, call `useGenerateModuleCurrencyApprovalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateModuleCurrencyApprovalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateModuleCurrencyApprovalDataQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGenerateModuleCurrencyApprovalDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >(GenerateModuleCurrencyApprovalDataDocument, options)
}
export function useGenerateModuleCurrencyApprovalDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GenerateModuleCurrencyApprovalDataQuery,
    GenerateModuleCurrencyApprovalDataQueryVariables
  >(GenerateModuleCurrencyApprovalDataDocument, options)
}
export type GenerateModuleCurrencyApprovalDataQueryHookResult = ReturnType<
  typeof useGenerateModuleCurrencyApprovalDataQuery
>
export type GenerateModuleCurrencyApprovalDataLazyQueryHookResult = ReturnType<
  typeof useGenerateModuleCurrencyApprovalDataLazyQuery
>
export type GenerateModuleCurrencyApprovalDataQueryResult = Apollo.QueryResult<
  GenerateModuleCurrencyApprovalDataQuery,
  GenerateModuleCurrencyApprovalDataQueryVariables
>
export const GroupDocument = gql`
  query Group(
    $topCommented: ExplorePublicationRequest!
    $topCollected: ExplorePublicationRequest!
    $latest: ExplorePublicationRequest!
  ) {
    topCommented: explorePublications(request: $topCommented) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
    topCollected: explorePublications(request: $topCollected) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
    latest: explorePublications(request: $latest) {
      items {
        ... on Post {
          ...GroupFields
        }
      }
    }
  }
  ${GroupFieldsFragmentDoc}
`

/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      topCommented: // value for 'topCommented'
 *      topCollected: // value for 'topCollected'
 *      latest: // value for 'latest'
 *   },
 * });
 */
export function useGroupQuery(baseOptions: Apollo.QueryHookOptions<GroupQuery, GroupQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options)
}
export function useGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GroupQuery, GroupQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options)
}
export type GroupQueryHookResult = ReturnType<typeof useGroupQuery>
export type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>
export type GroupQueryResult = Apollo.QueryResult<GroupQuery, GroupQueryVariables>
export const HasTxHashBeenIndexedDocument = gql`
  query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
    hasTxHashBeenIndexed(request: $request) {
      ... on TransactionIndexedResult {
        metadataStatus {
          status
        }
        txHash
        indexed
      }
      ... on TransactionError {
        reason
      }
    }
  }
`

/**
 * __useHasTxHashBeenIndexedQuery__
 *
 * To run a query within a React component, call `useHasTxHashBeenIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasTxHashBeenIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasTxHashBeenIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasTxHashBeenIndexedQuery(
  baseOptions: Apollo.QueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(
    HasTxHashBeenIndexedDocument,
    options
  )
}
export function useHasTxHashBeenIndexedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(
    HasTxHashBeenIndexedDocument,
    options
  )
}
export type HasTxHashBeenIndexedQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedQuery>
export type HasTxHashBeenIndexedLazyQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedLazyQuery>
export type HasTxHashBeenIndexedQueryResult = Apollo.QueryResult<
  HasTxHashBeenIndexedQuery,
  HasTxHashBeenIndexedQueryVariables
>
export const LikesDocument = gql`
  query Likes($request: WhoReactedPublicationRequest!) {
    whoReactedPublication(request: $request) {
      items {
        reactionId
        profile {
          ...ProfileFields
          isFollowedByMe
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useLikesQuery__
 *
 * To run a query within a React component, call `useLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLikesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLikesQuery(baseOptions: Apollo.QueryHookOptions<LikesQuery, LikesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LikesQuery, LikesQueryVariables>(LikesDocument, options)
}
export function useLikesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LikesQuery, LikesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LikesQuery, LikesQueryVariables>(LikesDocument, options)
}
export type LikesQueryHookResult = ReturnType<typeof useLikesQuery>
export type LikesLazyQueryHookResult = ReturnType<typeof useLikesLazyQuery>
export type LikesQueryResult = Apollo.QueryResult<LikesQuery, LikesQueryVariables>
export const MirrorsDocument = gql`
  query Mirrors($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        ...ProfileFields
        isFollowedByMe
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useMirrorsQuery__
 *
 * To run a query within a React component, call `useMirrorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMirrorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMirrorsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMirrorsQuery(baseOptions: Apollo.QueryHookOptions<MirrorsQuery, MirrorsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MirrorsQuery, MirrorsQueryVariables>(MirrorsDocument, options)
}
export function useMirrorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MirrorsQuery, MirrorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MirrorsQuery, MirrorsQueryVariables>(MirrorsDocument, options)
}
export type MirrorsQueryHookResult = ReturnType<typeof useMirrorsQuery>
export type MirrorsLazyQueryHookResult = ReturnType<typeof useMirrorsLazyQuery>
export type MirrorsQueryResult = Apollo.QueryResult<MirrorsQuery, MirrorsQueryVariables>
export const MutualFollowersDocument = gql`
  query MutualFollowers($request: MutualFollowersProfilesQueryRequest!) {
    mutualFollowersProfiles(request: $request) {
      items {
        handle
        name
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
          ... on NftImage {
            uri
          }
        }
      }
      pageInfo {
        totalCount
      }
    }
  }
`

/**
 * __useMutualFollowersQuery__
 *
 * To run a query within a React component, call `useMutualFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMutualFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMutualFollowersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMutualFollowersQuery(
  baseOptions: Apollo.QueryHookOptions<MutualFollowersQuery, MutualFollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MutualFollowersQuery, MutualFollowersQueryVariables>(
    MutualFollowersDocument,
    options
  )
}
export function useMutualFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MutualFollowersQuery, MutualFollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MutualFollowersQuery, MutualFollowersQueryVariables>(
    MutualFollowersDocument,
    options
  )
}
export type MutualFollowersQueryHookResult = ReturnType<typeof useMutualFollowersQuery>
export type MutualFollowersLazyQueryHookResult = ReturnType<typeof useMutualFollowersLazyQuery>
export type MutualFollowersQueryResult = Apollo.QueryResult<
  MutualFollowersQuery,
  MutualFollowersQueryVariables
>
export const MutualFollowersListDocument = gql`
  query MutualFollowersList($request: MutualFollowersProfilesQueryRequest!) {
    mutualFollowersProfiles(request: $request) {
      items {
        ...ProfileFields
        isFollowedByMe
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useMutualFollowersListQuery__
 *
 * To run a query within a React component, call `useMutualFollowersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMutualFollowersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMutualFollowersListQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMutualFollowersListQuery(
  baseOptions: Apollo.QueryHookOptions<MutualFollowersListQuery, MutualFollowersListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MutualFollowersListQuery, MutualFollowersListQueryVariables>(
    MutualFollowersListDocument,
    options
  )
}
export function useMutualFollowersListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MutualFollowersListQuery, MutualFollowersListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MutualFollowersListQuery, MutualFollowersListQueryVariables>(
    MutualFollowersListDocument,
    options
  )
}
export type MutualFollowersListQueryHookResult = ReturnType<typeof useMutualFollowersListQuery>
export type MutualFollowersListLazyQueryHookResult = ReturnType<typeof useMutualFollowersListLazyQuery>
export type MutualFollowersListQueryResult = Apollo.QueryResult<
  MutualFollowersListQuery,
  MutualFollowersListQueryVariables
>
export const NftChallengeDocument = gql`
  query NFTChallenge($request: NftOwnershipChallengeRequest!) {
    nftOwnershipChallenge(request: $request) {
      id
      text
    }
  }
`

/**
 * __useNftChallengeQuery__
 *
 * To run a query within a React component, call `useNftChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftChallengeQuery(
  baseOptions: Apollo.QueryHookOptions<NftChallengeQuery, NftChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NftChallengeQuery, NftChallengeQueryVariables>(NftChallengeDocument, options)
}
export function useNftChallengeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NftChallengeQuery, NftChallengeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NftChallengeQuery, NftChallengeQueryVariables>(NftChallengeDocument, options)
}
export type NftChallengeQueryHookResult = ReturnType<typeof useNftChallengeQuery>
export type NftChallengeLazyQueryHookResult = ReturnType<typeof useNftChallengeLazyQuery>
export type NftChallengeQueryResult = Apollo.QueryResult<NftChallengeQuery, NftChallengeQueryVariables>
export const NftFeedDocument = gql`
  query NFTFeed($request: NFTsRequest!) {
    nfts(request: $request) {
      items {
        name
        collectionName
        contractAddress
        tokenId
        chainId
        originalContent {
          uri
          animatedUrl
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
`

/**
 * __useNftFeedQuery__
 *
 * To run a query within a React component, call `useNftFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftFeedQuery(baseOptions: Apollo.QueryHookOptions<NftFeedQuery, NftFeedQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NftFeedQuery, NftFeedQueryVariables>(NftFeedDocument, options)
}
export function useNftFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NftFeedQuery, NftFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NftFeedQuery, NftFeedQueryVariables>(NftFeedDocument, options)
}
export type NftFeedQueryHookResult = ReturnType<typeof useNftFeedQuery>
export type NftFeedLazyQueryHookResult = ReturnType<typeof useNftFeedLazyQuery>
export type NftFeedQueryResult = Apollo.QueryResult<NftFeedQuery, NftFeedQueryVariables>
export const NotificationCountDocument = gql`
  query NotificationCount($request: NotificationRequest!) {
    notifications(request: $request) {
      pageInfo {
        totalCount
      }
    }
  }
`

/**
 * __useNotificationCountQuery__
 *
 * To run a query within a React component, call `useNotificationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationCountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNotificationCountQuery(
  baseOptions: Apollo.QueryHookOptions<NotificationCountQuery, NotificationCountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NotificationCountQuery, NotificationCountQueryVariables>(
    NotificationCountDocument,
    options
  )
}
export function useNotificationCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NotificationCountQuery, NotificationCountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NotificationCountQuery, NotificationCountQueryVariables>(
    NotificationCountDocument,
    options
  )
}
export type NotificationCountQueryHookResult = ReturnType<typeof useNotificationCountQuery>
export type NotificationCountLazyQueryHookResult = ReturnType<typeof useNotificationCountLazyQuery>
export type NotificationCountQueryResult = Apollo.QueryResult<
  NotificationCountQuery,
  NotificationCountQueryVariables
>
export const NotificationsDocument = gql`
  query Notifications($request: NotificationRequest!) {
    notifications(request: $request) {
      items {
        ... on NewFollowerNotification {
          notificationId
          wallet {
            address
            defaultProfile {
              ...ProfileFields
            }
          }
          createdAt
        }
        ... on NewMentionNotification {
          notificationId
          mentionPublication {
            ... on Post {
              id
              profile {
                ...ProfileFields
              }
              metadata {
                content
              }
            }
            ... on Comment {
              id
              profile {
                ...ProfileFields
              }
              metadata {
                content
              }
            }
          }
          createdAt
        }
        ... on NewReactionNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          publication {
            ... on Post {
              id
              metadata {
                content
              }
            }
            ... on Comment {
              id
              metadata {
                content
              }
            }
            ... on Mirror {
              id
              metadata {
                content
              }
            }
          }
          createdAt
        }
        ... on NewCommentNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          comment {
            id
            metadata {
              content
            }
            commentOn {
              ... on Post {
                id
              }
              ... on Comment {
                id
              }
              ... on Mirror {
                id
              }
            }
          }
          createdAt
        }
        ... on NewMirrorNotification {
          notificationId
          profile {
            ...ProfileFields
          }
          publication {
            ... on Post {
              id
              metadata {
                content
              }
            }
            ... on Comment {
              id
              metadata {
                content
              }
            }
          }
          createdAt
        }
        ... on NewCollectNotification {
          notificationId
          wallet {
            address
            defaultProfile {
              ...ProfileFields
            }
          }
          collectedPublication {
            ... on Post {
              id
              metadata {
                content
              }
              collectModule {
                ...CollectModuleFields
              }
            }
            ... on Comment {
              id
              metadata {
                content
              }
              collectModule {
                ...CollectModuleFields
              }
            }
          }
          createdAt
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
  ${CollectModuleFieldsFragmentDoc}
`

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<NotificationsQuery, NotificationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options)
}
export function useNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NotificationsQuery, NotificationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options)
}
export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>
export type NotificationsQueryResult = Apollo.QueryResult<NotificationsQuery, NotificationsQueryVariables>
export const ProfileDocument = gql`
  query Profile($request: SingleProfileQueryRequest!, $who: ProfileId) {
    profile(request: $request) {
      id
      handle
      ownedBy
      name
      bio
      metadata
      followNftAddress
      isFollowedByMe
      isFollowing(who: $who)
      attributes {
        key
        value
      }
      dispatcher {
        canUseRelay
      }
      onChainIdentity {
        proofOfHumanity
        sybilDotOrg {
          verified
          source {
            twitter {
              handle
            }
          }
        }
        ens {
          name
        }
        worldcoin {
          isHuman
        }
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
      }
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
        }
      }
      coverPicture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      followModule {
        __typename
      }
    }
  }
`

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      request: // value for 'request'
 *      who: // value for 'who'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options)
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options)
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>
export const ProfileAddressDocument = gql`
  query ProfileAddress($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
      id
      ownedBy
    }
  }
`

/**
 * __useProfileAddressQuery__
 *
 * To run a query within a React component, call `useProfileAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileAddressQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileAddressQuery(
  baseOptions: Apollo.QueryHookOptions<ProfileAddressQuery, ProfileAddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfileAddressQuery, ProfileAddressQueryVariables>(ProfileAddressDocument, options)
}
export function useProfileAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileAddressQuery, ProfileAddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfileAddressQuery, ProfileAddressQueryVariables>(
    ProfileAddressDocument,
    options
  )
}
export type ProfileAddressQueryHookResult = ReturnType<typeof useProfileAddressQuery>
export type ProfileAddressLazyQueryHookResult = ReturnType<typeof useProfileAddressLazyQuery>
export type ProfileAddressQueryResult = Apollo.QueryResult<ProfileAddressQuery, ProfileAddressQueryVariables>
export const ProfileFeedDocument = gql`
  query ProfileFeed(
    $request: PublicationsQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`

/**
 * __useProfileFeedQuery__
 *
 * To run a query within a React component, call `useProfileFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useProfileFeedQuery(
  baseOptions: Apollo.QueryHookOptions<ProfileFeedQuery, ProfileFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfileFeedQuery, ProfileFeedQueryVariables>(ProfileFeedDocument, options)
}
export function useProfileFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileFeedQuery, ProfileFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfileFeedQuery, ProfileFeedQueryVariables>(ProfileFeedDocument, options)
}
export type ProfileFeedQueryHookResult = ReturnType<typeof useProfileFeedQuery>
export type ProfileFeedLazyQueryHookResult = ReturnType<typeof useProfileFeedLazyQuery>
export type ProfileFeedQueryResult = Apollo.QueryResult<ProfileFeedQuery, ProfileFeedQueryVariables>
export const ProfileNftFeedDocument = gql`
  query ProfileNFTFeed($request: NFTsRequest!) {
    nfts(request: $request) {
      items {
        contentURI
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
`

/**
 * __useProfileNftFeedQuery__
 *
 * To run a query within a React component, call `useProfileNftFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileNftFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileNftFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileNftFeedQuery(
  baseOptions: Apollo.QueryHookOptions<ProfileNftFeedQuery, ProfileNftFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfileNftFeedQuery, ProfileNftFeedQueryVariables>(ProfileNftFeedDocument, options)
}
export function useProfileNftFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileNftFeedQuery, ProfileNftFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfileNftFeedQuery, ProfileNftFeedQueryVariables>(
    ProfileNftFeedDocument,
    options
  )
}
export type ProfileNftFeedQueryHookResult = ReturnType<typeof useProfileNftFeedQuery>
export type ProfileNftFeedLazyQueryHookResult = ReturnType<typeof useProfileNftFeedLazyQuery>
export type ProfileNftFeedQueryResult = Apollo.QueryResult<ProfileNftFeedQuery, ProfileNftFeedQueryVariables>
export const ProfileSettingsDocument = gql`
  query ProfileSettings($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
      id
      name
      bio
      attributes {
        key
        value
      }
      coverPicture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
        ... on NftImage {
          uri
          tokenId
          contractAddress
        }
      }
    }
  }
`

/**
 * __useProfileSettingsQuery__
 *
 * To run a query within a React component, call `useProfileSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileSettingsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileSettingsQuery(
  baseOptions: Apollo.QueryHookOptions<ProfileSettingsQuery, ProfileSettingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfileSettingsQuery, ProfileSettingsQueryVariables>(
    ProfileSettingsDocument,
    options
  )
}
export function useProfileSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileSettingsQuery, ProfileSettingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfileSettingsQuery, ProfileSettingsQueryVariables>(
    ProfileSettingsDocument,
    options
  )
}
export type ProfileSettingsQueryHookResult = ReturnType<typeof useProfileSettingsQuery>
export type ProfileSettingsLazyQueryHookResult = ReturnType<typeof useProfileSettingsLazyQuery>
export type ProfileSettingsQueryResult = Apollo.QueryResult<
  ProfileSettingsQuery,
  ProfileSettingsQueryVariables
>
export const ProfilesDocument = gql`
  query Profiles($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        ...ProfileFields
        isDefault
        isFollowedByMe
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useProfilesQuery__
 *
 * To run a query within a React component, call `useProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, options)
}
export function useProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, options)
}
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>
export type ProfilesLazyQueryHookResult = ReturnType<typeof useProfilesLazyQuery>
export type ProfilesQueryResult = Apollo.QueryResult<ProfilesQuery, ProfilesQueryVariables>
export const PublicationDocument = gql`
  query Publication(
    $request: PublicationQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    publication(request: $request) {
      ... on Post {
        ...PostFields
        onChainContentURI
        collectNftAddress
        profile {
          isFollowedByMe
        }
        referenceModule {
          __typename
        }
      }
      ... on Comment {
        ...CommentFields
        onChainContentURI
        collectNftAddress
        profile {
          isFollowedByMe
        }
        referenceModule {
          __typename
        }
      }
      ... on Mirror {
        ...MirrorFields
        onChainContentURI
        collectNftAddress
        profile {
          isFollowedByMe
        }
        referenceModule {
          __typename
        }
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${MirrorFieldsFragmentDoc}
`

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function usePublicationQuery(
  baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options)
}
export function usePublicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options)
}
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>
export const PublicationRevenueDocument = gql`
  query PublicationRevenue($request: PublicationRevenueQueryRequest!) {
    publicationRevenue(request: $request) {
      revenue {
        total {
          value
        }
      }
    }
  }
`

/**
 * __usePublicationRevenueQuery__
 *
 * To run a query within a React component, call `usePublicationRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationRevenueQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationRevenueQuery(
  baseOptions: Apollo.QueryHookOptions<PublicationRevenueQuery, PublicationRevenueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PublicationRevenueQuery, PublicationRevenueQueryVariables>(
    PublicationRevenueDocument,
    options
  )
}
export function usePublicationRevenueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicationRevenueQuery, PublicationRevenueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PublicationRevenueQuery, PublicationRevenueQueryVariables>(
    PublicationRevenueDocument,
    options
  )
}
export type PublicationRevenueQueryHookResult = ReturnType<typeof usePublicationRevenueQuery>
export type PublicationRevenueLazyQueryHookResult = ReturnType<typeof usePublicationRevenueLazyQuery>
export type PublicationRevenueQueryResult = Apollo.QueryResult<
  PublicationRevenueQuery,
  PublicationRevenueQueryVariables
>
export const RecommendedProfilesDocument = gql`
  query RecommendedProfiles($options: RecommendedProfileOptions) {
    recommendedProfiles(options: $options) {
      ...ProfileFields
      isFollowedByMe
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useRecommendedProfilesQuery__
 *
 * To run a query within a React component, call `useRecommendedProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendedProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendedProfilesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRecommendedProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(
    RecommendedProfilesDocument,
    options
  )
}
export function useRecommendedProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(
    RecommendedProfilesDocument,
    options
  )
}
export type RecommendedProfilesQueryHookResult = ReturnType<typeof useRecommendedProfilesQuery>
export type RecommendedProfilesLazyQueryHookResult = ReturnType<typeof useRecommendedProfilesLazyQuery>
export type RecommendedProfilesQueryResult = Apollo.QueryResult<
  RecommendedProfilesQuery,
  RecommendedProfilesQueryVariables
>
export const RelevantPeopleDocument = gql`
  query RelevantPeople($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        ...ProfileFields
        isFollowedByMe
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useRelevantPeopleQuery__
 *
 * To run a query within a React component, call `useRelevantPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelevantPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelevantPeopleQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRelevantPeopleQuery(
  baseOptions: Apollo.QueryHookOptions<RelevantPeopleQuery, RelevantPeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RelevantPeopleQuery, RelevantPeopleQueryVariables>(RelevantPeopleDocument, options)
}
export function useRelevantPeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RelevantPeopleQuery, RelevantPeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RelevantPeopleQuery, RelevantPeopleQueryVariables>(
    RelevantPeopleDocument,
    options
  )
}
export type RelevantPeopleQueryHookResult = ReturnType<typeof useRelevantPeopleQuery>
export type RelevantPeopleLazyQueryHookResult = ReturnType<typeof useRelevantPeopleLazyQuery>
export type RelevantPeopleQueryResult = Apollo.QueryResult<RelevantPeopleQuery, RelevantPeopleQueryVariables>
export const SearchProfilesDocument = gql`
  query SearchProfiles($request: SearchQueryRequest!) {
    search(request: $request) {
      ... on ProfileSearchResult {
        items {
          ...ProfileFields
        }
        pageInfo {
          next
          totalCount
        }
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useSearchProfilesQuery__
 *
 * To run a query within a React component, call `useSearchProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProfilesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<SearchProfilesQuery, SearchProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(SearchProfilesDocument, options)
}
export function useSearchProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchProfilesQuery, SearchProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(
    SearchProfilesDocument,
    options
  )
}
export type SearchProfilesQueryHookResult = ReturnType<typeof useSearchProfilesQuery>
export type SearchProfilesLazyQueryHookResult = ReturnType<typeof useSearchProfilesLazyQuery>
export type SearchProfilesQueryResult = Apollo.QueryResult<SearchProfilesQuery, SearchProfilesQueryVariables>
export const SearchPublicationsDocument = gql`
  query SearchPublications(
    $request: SearchQueryRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    search(request: $request) {
      ... on PublicationSearchResult {
        items {
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentFields
          }
        }
        pageInfo {
          next
          totalCount
        }
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
`

/**
 * __useSearchPublicationsQuery__
 *
 * To run a query within a React component, call `useSearchPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useSearchPublicationsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchPublicationsQuery, SearchPublicationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchPublicationsQuery, SearchPublicationsQueryVariables>(
    SearchPublicationsDocument,
    options
  )
}
export function useSearchPublicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchPublicationsQuery, SearchPublicationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchPublicationsQuery, SearchPublicationsQueryVariables>(
    SearchPublicationsDocument,
    options
  )
}
export type SearchPublicationsQueryHookResult = ReturnType<typeof useSearchPublicationsQuery>
export type SearchPublicationsLazyQueryHookResult = ReturnType<typeof useSearchPublicationsLazyQuery>
export type SearchPublicationsQueryResult = Apollo.QueryResult<
  SearchPublicationsQuery,
  SearchPublicationsQueryVariables
>
export const SuperFollowDocument = gql`
  query SuperFollow($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
      id
      followModule {
        ... on FeeFollowModuleSettings {
          amount {
            asset {
              name
              symbol
              decimals
              address
            }
            value
          }
          recipient
        }
      }
    }
  }
`

/**
 * __useSuperFollowQuery__
 *
 * To run a query within a React component, call `useSuperFollowQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuperFollowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuperFollowQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSuperFollowQuery(
  baseOptions: Apollo.QueryHookOptions<SuperFollowQuery, SuperFollowQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SuperFollowQuery, SuperFollowQueryVariables>(SuperFollowDocument, options)
}
export function useSuperFollowLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SuperFollowQuery, SuperFollowQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SuperFollowQuery, SuperFollowQueryVariables>(SuperFollowDocument, options)
}
export type SuperFollowQueryHookResult = ReturnType<typeof useSuperFollowQuery>
export type SuperFollowLazyQueryHookResult = ReturnType<typeof useSuperFollowLazyQuery>
export type SuperFollowQueryResult = Apollo.QueryResult<SuperFollowQuery, SuperFollowQueryVariables>
export const TimelineDocument = gql`
  query Timeline(
    $request: FeedRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    feed(request: $request) {
      items {
        root {
          ... on Post {
            ...PostFields
          }
          ... on Comment {
            ...CommentFields
          }
        }
        electedMirror {
          mirrorId
          profile {
            ...ProfileFields
          }
          timestamp
        }
        mirrors {
          profile {
            ...ProfileFields
          }
          timestamp
        }
        collects {
          profile {
            ...ProfileFields
          }
          timestamp
        }
        reactions {
          profile {
            ...ProfileFields
          }
          reaction
          timestamp
        }
        comments {
          ...CommentFields
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${PostFieldsFragmentDoc}
  ${CommentFieldsFragmentDoc}
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useTimelineQuery__
 *
 * To run a query within a React component, call `useTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimelineQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useTimelineQuery(
  baseOptions: Apollo.QueryHookOptions<TimelineQuery, TimelineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options)
}
export function useTimelineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TimelineQuery, TimelineQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options)
}
export type TimelineQueryHookResult = ReturnType<typeof useTimelineQuery>
export type TimelineLazyQueryHookResult = ReturnType<typeof useTimelineLazyQuery>
export type TimelineQueryResult = Apollo.QueryResult<TimelineQuery, TimelineQueryVariables>
export const TrendingDocument = gql`
  query Trending($request: AllPublicationsTagsRequest!) {
    allPublicationsTags(request: $request) {
      items {
        tag
        total
      }
    }
  }
`

/**
 * __useTrendingQuery__
 *
 * To run a query within a React component, call `useTrendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useTrendingQuery(
  baseOptions: Apollo.QueryHookOptions<TrendingQuery, TrendingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TrendingQuery, TrendingQueryVariables>(TrendingDocument, options)
}
export function useTrendingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TrendingQuery, TrendingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TrendingQuery, TrendingQueryVariables>(TrendingDocument, options)
}
export type TrendingQueryHookResult = ReturnType<typeof useTrendingQuery>
export type TrendingLazyQueryHookResult = ReturnType<typeof useTrendingLazyQuery>
export type TrendingQueryResult = Apollo.QueryResult<TrendingQuery, TrendingQueryVariables>
export const UserProfilesDocument = gql`
  query UserProfiles($ownedBy: [EthereumAddress!]) {
    profiles(request: { ownedBy: $ownedBy }) {
      items {
        ...ProfileFields
        stats {
          totalFollowing
        }
        isDefault
        dispatcher {
          canUseRelay
        }
      }
    }
    userSigNonces {
      lensHubOnChainSigNonce
    }
  }
  ${ProfileFieldsFragmentDoc}
`

/**
 * __useUserProfilesQuery__
 *
 * To run a query within a React component, call `useUserProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfilesQuery({
 *   variables: {
 *      ownedBy: // value for 'ownedBy'
 *   },
 * });
 */
export function useUserProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<UserProfilesQuery, UserProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserProfilesQuery, UserProfilesQueryVariables>(UserProfilesDocument, options)
}
export function useUserProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserProfilesQuery, UserProfilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserProfilesQuery, UserProfilesQueryVariables>(UserProfilesDocument, options)
}
export type UserProfilesQueryHookResult = ReturnType<typeof useUserProfilesQuery>
export type UserProfilesLazyQueryHookResult = ReturnType<typeof useUserProfilesLazyQuery>
export type UserProfilesQueryResult = Apollo.QueryResult<UserProfilesQuery, UserProfilesQueryVariables>