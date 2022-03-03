import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { PersistedStateInterface } from './state'

const actions: ActionTree<PersistedStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
}

export default actions
