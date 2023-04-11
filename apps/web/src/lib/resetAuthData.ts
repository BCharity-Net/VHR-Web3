import { Localstorage } from 'data/storage'

/**
 * Resets the auth data
 */
const resetAuthData = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem(Localstorage.BCharityStore)
  localStorage.removeItem(Localstorage.TransactionStore)
  localStorage.removeItem(Localstorage.TimelineStore)
  localStorage.removeItem(Localstorage.MessageStore)
}

export default resetAuthData
