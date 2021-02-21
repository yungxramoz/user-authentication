import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/helpers/api-accessor'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
