import { ActionContext, ActionTree } from 'vuex/types'
import { AuthState } from './types'
import { RootState } from '../types'

interface AuthActionContext extends ActionContext<AuthState, RootState> {}

export const actions: ActionTree<AuthState, RootState> = {
  authenticate: ({ commit }: AuthActionContext, payload: boolean) => {
    commit('authenticate', payload)
  },
}

export default actions
