import { MutationTree } from 'vuex'
import { PersistedStateInterface } from './state'

const mutation: MutationTree<PersistedStateInterface> = {
  // someMutation(/* state: PersistedStateInterface */) {
  //   // your code
  // },
  TOGGLE_MINI_SIDEBAR(state: PersistedStateInterface) {
    state.leftSidebarMini = !state.leftSidebarMini
  },
}

export default mutation
