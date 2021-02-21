import { Store } from 'vuex'
import { initialiseStores } from '~/helpers/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '~/helpers/store-accessor'
