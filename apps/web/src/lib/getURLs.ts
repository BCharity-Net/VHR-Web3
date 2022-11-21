/**
 *
 * @param text - Text to get URLs from
 * @returns urls
 */
const getURLs = (text: any) => {
  const urlRegex = /(((https?:\/\/)|(www\.))\S+)/g
  return text.match(urlRegex) ?? []
}

export default getURLs
