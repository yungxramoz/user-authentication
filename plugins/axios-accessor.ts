import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/helpers/api'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
