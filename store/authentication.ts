import {
  VuexModule,
  Module,
  VuexAction,
  VuexMutation,
} from 'nuxt-property-decorator'

import { AxiosResponse } from 'axios'
import { $axios } from '~/helpers/api'
import UserModel from '~/models/data/UserModel'
import AuthenticateModel from '~/models/data/AuthenticateModel'

interface AuthState {
  isAuthenticated: boolean
  user?: UserModel
}

@Module({
  name: 'authentication',
  namespaced: true,
  stateFactory: true,
})
class AuthStoreModule extends VuexModule {
  public authState: AuthState = {
    isAuthenticated: false,
  }

  get isAuthenticated(): boolean {
    return this.authState.isAuthenticated
  }

  @VuexAction
  public login(authData: AuthenticateModel) {
    // this.loginSuccess()
    $axios
      .post('/User/authenticate', authData)
      .then((response: AxiosResponse<UserModel>) => {
        this.LOGIN_SUCCESS(response.data)
      })
  }

  @VuexMutation
  public LOGIN_SUCCESS(data: UserModel) {
    this.authState.user = data
    this.authState.isAuthenticated = true
  }
}

export default AuthStoreModule
