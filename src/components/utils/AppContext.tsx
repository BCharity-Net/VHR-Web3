import { ApolloError } from '@apollo/client'
import type { Profile } from '@generated/types'
import type { Dispatch } from 'react'
import { createContext } from 'react'

export interface ContextType {
  userSigNonce: number
  setUserSigNonce: Dispatch<number>
  staffMode?: boolean
  setStaffMode: Dispatch<boolean>
  profiles: Profile[]
  currentUserLoading: boolean
  currentUserError?: ApolloError
}

const AppContext = createContext<ContextType>({
  userSigNonce: 0,
  setUserSigNonce: () => {},
  staffMode: false,
  setStaffMode: () => {},
  profiles: [],
  currentUserLoading: false,
  currentUserError: undefined
})

export default AppContext
