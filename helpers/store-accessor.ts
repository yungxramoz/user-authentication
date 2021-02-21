import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AuthenticationModule from '~/store/authentication'

let AuthenticationStore: AuthenticationModule
function initialiseStores(store: Store<any>): void {
  AuthenticationStore = getModule(AuthenticationModule, store)
}

export { initialiseStores, AuthenticationStore }
