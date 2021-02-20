import { MutationTree } from 'vuex'
import { AuthState } from './types'

export const mutations: MutationTree<AuthState> = {
  authenticate: (state, payload: boolean) => {
    state.isAuthenticated = payload
  },
}

export default mutations
