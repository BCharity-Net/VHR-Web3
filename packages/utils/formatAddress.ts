/**
 *
 * @param address - Complete ethereum address
 * @returns formatted ethereum address
 */
const formatAddress = (address: string | null, slice = 4): string => {
  if (!address) {
    return ''
  }

  const regex = /^0x[\dA-Fa-f]{40}$/g
  if (address.match(regex)) {
    return `${address.slice(0, slice)}…${address.slice(address.length - slice, address.length)}`
  }

  return address
}

export default formatAddress
