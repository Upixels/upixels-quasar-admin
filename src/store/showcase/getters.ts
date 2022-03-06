import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ShowcaseStateInterface } from './state'
import { LooseObject } from 'src/constants'

const getters: GetterTree<ShowcaseStateInterface, StateInterface> = {
  getDialogState(state) {
    return (dialog: string): boolean => state.dialog[dialog]
  },
  getDialogProperties(state) {
    return (dialog: string): LooseObject =>
      state.properties[dialog] as LooseObject
  },
  parentDialogs(state) {
    return state.parentDialogs
  },
  leftSidebarMini(state) {
    return state.leftSidebarMini
  },
  sidebarLeft(state) {
    return state.sidebarLeft
  },
  liteModeEnable(state) {
    return state.liteModeEnable
  },
  direction(state) {
    return state.direction
  },
}

export default getters
