import {
  VuexModule,
  Module,
  VuexAction,
  VuexMutation,
} from 'nuxt-property-decorator'

interface AuthState {
  isAuthenticated: boolean
  token: string
}

@Module({
  name: 'auth',
  namespaced: true,
  stateFactory: true,
})
class AuthStoreModule extends VuexModule {
  public auth: AuthState = {
    isAuthenticated: false,
    token: '',
  }

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated
  }

  @VuexAction
  public login(username: string, password: string) {
    this.loginSuccess(!this.isAuthenticated)
  }

  @VuexMutation
  public loginSuccess(isAuth: boolean) {
    this.auth.isAuthenticated = isAuth
  }
}

export default AuthStoreModule
