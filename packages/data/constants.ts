import packageJson from '../../package.json'
import getEnvConfig from './utils/getEnvConfig'

// Environments
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

// Lens Network
export const LENS_NETWORK = process.env.NEXT_PUBLIC_LENS_NETWORK ?? 'mainnet'
export const MAINNET_API_URL = 'https://api.lens.dev'
export const TESTNET_API_URL = 'https://api-mumbai.lens.dev'
export const SANDBOX_API_URL = 'https://api-sandbox-mumbai.lens.dev'
export const STAGING_API_URL = 'https://staging-api-social-mumbai.lens.crtlkey.com'
export const STAGING_SANDBOX_API_URL = 'https://staging-api-social-mumbai.sandbox.crtlkey.com'

export const SERVERLESS_MAINNET_API_URL = 'https://api.bcharity.net'
export const SERVERLESS_TESTNET_API_URL = 'https://api-testnet.bcharity.net'
export const SERVERLESS_STAGING_API_URL = 'https://api-staging.bcharity.net'
export const SERVERLESS_STAGING_SANDBOX_API_URL = 'https://api-staging-sandbox.bcharity.net'
export const SERVERLESS_SANDBOX_API_URL = 'https://api-sandbox.bcharity.net'
export const SERVERLESS_DEVELOPMENT_API_URL = 'http://localhost:4784'

export const SERVERLESS_URL = getEnvConfig().serverlessEndpoint
export const API_URL = getEnvConfig().apiEndpoint
export const LENSHUB_PROXY = getEnvConfig().lensHubProxyAddress
export const LENS_PERIPHERY = getEnvConfig().lensPeripheryAddress
export const DEFAULT_COLLECT_TOKEN = getEnvConfig().defaultCollectToken
export const LIT_PROTOCOL_ENVIRONMENT = getEnvConfig().litProtocolEnvironment

export const IS_MAINNET = API_URL === MAINNET_API_URL

// XMTP
export const XMTP_ENV = IS_MAINNET ? 'production' : 'dev'
export const XMTP_PREFIX = 'lens.dev/dm'

// Application

export const APP_NAME = 'BCharity'
export const DESCRIPTION =
  'Next generation group-driven composable, decentralized, and permissionless public good Web3 built on blockchain.'
export const APP_VERSION = packageJson.version;

// Git
export const GIT_COMMIT_SHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)

// Misc
export const RELAY_ON = true
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const LENSPROTOCOL_HANDLE = 'lensprotocol'
export const HANDLE_SUFFIX = IS_MAINNET ? '.lens' : '.test'

// Mixpanel
export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? ''
export const MIXPANEL_ENABLED = MIXPANEL_TOKEN && IS_PRODUCTION

export const CATEGORIES = [
  'Education',
  'Environment',
  'Animals',
  'Social',
  'Healthcare',
  'Sports and Leisure',
  'Disaster Relief',
  'Reduce Poverty',
  'Reduce Hunger',
  'Health',
  'Clean Water',
  'Gender Equality',
  'Affordable and Clean Energy',
  'Work Experience',
  'Technology',
  'Infrastructure',
  'Peace and Justice'
]

// Messages
export const ERROR_MESSAGE = 'Something went wrong!'
export const SIGN_WALLET = 'Please sign in your wallet.'
export const WRONG_NETWORK = IS_MAINNET
  ? 'Please change network to Polygon mainnet.'
  : 'Please change network to Polygon Mumbai testnet.'
export const SIGN_ERROR = 'Failed to sign data'

// URLs
export const STATIC_ASSETS_URL = 'https://assets.bcharity.net'
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`
export const POLYGONSCAN_URL = IS_MAINNET ? 'https://polygonscan.com' : 'https://mumbai.polygonscan.com'
export const VHR_TOP_HOLDERS_URL =
  'https://mumbai.polygonscan.com/token/tokenholderchart/0x28ee241ab245699968f2980d3d1b1d23120ab8be'
export const RARIBLE_URL = IS_MAINNET ? 'https://rarible.com' : 'https://testnet.rarible.com'
export const IMAGEKIT_URL = `https://ik.imagekit.io/${IS_PRODUCTION ? 'bcharityimg' : 'bcharitydev'}`
export const IPFS_GATEWAY = 'https://gateway.ipfscdn.io/ipfs/'
export const EVER_API = 'https://endpoint.4everland.co'
export const SIMPLEANALYTICS_API = 'https://simpleanalytics.com/bcharity.net.json'
export const DEFAULT_OG = `${STATIC_IMAGES_URL}/og/logo.jpeg`
export const IFRAMELY_URL = 'https://iframely.bcharity.net/iframely'

// Workers
export const MEDIA_PROXY_URL = IS_PRODUCTION ? 'https://media.bcharity.net' : 'http://localhost:8081'
export const STS_TOKEN_URL = IS_PRODUCTION ? 'https://sts.bcharity.net' : 'http://localhost:8082'
export const METADATA_WORKER_URL = IS_PRODUCTION ? 'https://metadata.bcharity.net' : 'http://localhost:8083'
export const FRESHDESK_WORKER_URL = IS_PRODUCTION ? 'https://freshdesk.bcharity.net' : 'http://localhost:8084'

// Web3
export const ALCHEMY_KEY = 'HHfOFn8jsYguteTVvL0cz4g9aydrbjTV'
export const WALLETCONNECT_PROJECT_ID = 'cd542acc70c2b548030f9901a52e70c8'
export const ALCHEMY_RPC = IS_MAINNET
  ? `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`
  : `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`

export const INFURA_PROJECT_ID = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
export const INFURA_PROJECT_SECRET = process.env.NEXT_PUBLIC_INFURA_PROJECT_SECRET

export const ARWEAVE_KEY = process.env.NEXT_PUBLIC_ARWEAVE_KEY  

// Errors
export const ERRORS = {
  notMined:
    'A previous transaction may not been mined yet or you have passed in a invalid nonce. You must wait for that to be mined before doing another action, please try again in a few moments. Nonce out of sync.'
}

//VHR and GOOD Conversion
export const VHR_TOKEN = '0x28EE241ab245699968F2980D3D1b1d23120ab8BE'
export const GOOD_TOKEN = '0xd21932b453f0dC0918384442D7AaD5B033C4217B'
export const GIVE_DAI_LP = '0x4373C35bB4E55Dea2dA2Ba695605a768f011b4B9'
export const DAI_TOKEN = '0xf0728Bfe68B96Eb241603994de44aBC2412548bE'
export const VHR_TO_DAI_PRICE = 0.009
export const GOOD_TO_DAI_DONATE_RATE = 0.003

export const WMATIC_GOOD_LP = '0xbe796a61F8d6E4CA823485D9D47BDBBD5eCbf909'
export const WMATIC_TOKEN = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
export const DAI_CHECK_FOR_CONVERSION = '0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F'

// Regex
export const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[\da-z]+([.\-][\da-z]+)*\.[a-z]{2,63}(:\d{1,5})?(\/.*)?$/
export const ADDRESS_REGEX = /^(0x)?[\da-f]{40}$/i
export const HANDLE_REGEX = /^[\da-z]+$/
export const ALL_HANDLES_REGEX = /([\s+])@(\S+)/g
export const HANDLE_SANITIZE_REGEX = /[^\d .A-Za-z]/g

// Utils
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
export const ALLOWED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/wav',
  'audio/mp4',
  'audio/aac',
  'audio/ogg',
  'audio/webm',
  'audio/flac'
]
export const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/ogg', 'video/webm', 'video/quicktime']
export const ALLOWED_MEDIA_TYPES = [...ALLOWED_VIDEO_TYPES, ...ALLOWED_IMAGE_TYPES, ...ALLOWED_AUDIO_TYPES]

// Bundlr
export const BUNDLR_CURRENCY = 'matic'
export const BUNDLR_NODE_URL = IS_MAINNET ? 'https://node2.bundlr.network' : 'https://devnet.bundlr.network'

// UI
export const MESSAGE_PAGE_LIMIT = 15
export const MIN_WIDTH_DESKTOP = 1024

// Named transforms
export const AVATAR = 'avatar'
export const COVER = 'cover'
export const ATTACHMENT = 'attachment'

// Localstorage keys
export const LS_KEYS = {
  BCHARITY_STORE: 'bcharity.store',
  PREFERENCES_STORE: 'preferences.store',
  TRANSACTION_STORE: 'transaction.store',
  TIMELINE_STORE: 'timeline.store',
  MESSAGE_STORE: 'message.store'
}

// S3 bucket
export const S3_BUCKET = {
  BCHARITY_MEDIA: 'bcharity-media'
}
