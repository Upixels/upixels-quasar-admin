import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { PersistedStateInterface } from './state'

const getters: GetterTree<PersistedStateInterface, StateInterface> = {
  // someAction(/* context */) {
  //   // your code
  // },

  leftSidebarMini(state) {
    return state.leftSidebarMini
  },
}

export default getters
