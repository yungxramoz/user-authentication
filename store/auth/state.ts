import { AuthState } from './types'

export const initState = (): AuthState => ({
  isAuthenticated: false,
  token: '',
})

export default initState
