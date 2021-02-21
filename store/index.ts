import { Store } from 'vuex'
import { getModule } from 'nuxt-property-decorator'
import AuthStoreModule from './authentication'

export function getAuthModule(store: Store<any>): AuthStoreModule {
  return getModule(AuthStoreModule, store)
}
