import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { PersistedStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const persistedModule: Module<PersistedStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}

export default persistedModule
