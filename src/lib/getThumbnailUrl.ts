import type { BCharityPublication } from '@generated/bcharitytypes'

import getIPFSLink from './getIPFSLink'

/**
 *
 * @param publication - The publication to get the thumbnail url from
 * @returns the thumbnail url from a publication
 */
const getThumbnailUrl = (publication: BCharityPublication | undefined): string => {
  if (!publication) {
    return ''
  }
  const url = publication.metadata?.cover?.original.url || publication.metadata?.image

  return getIPFSLink(url)
}

export default getThumbnailUrl
