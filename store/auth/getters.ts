import { GetterTree } from 'vuex'
import { AuthState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (state): boolean => state.isAuthenticated,
}

export default getters
