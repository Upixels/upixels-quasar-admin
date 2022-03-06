// import { LooseObject } from 'src/constants'
import { MutationTree } from 'vuex'
import { ShowcaseStateInterface } from './state'

interface UpdateDialogParam {
  dialog: string
  val: boolean
  parentDialog: string
}

// interface SetDialogParam {
//   dialog: string
//   properties: LooseObject
//   refresh: boolean
// }

const mutation: MutationTree<ShowcaseStateInterface> = {
  UPDATE_DIALOG_STATE(
    state: ShowcaseStateInterface,
    dialogData: UpdateDialogParam
  ) {
    if (dialogData.val) {
      if (
        dialogData.parentDialog &&
        !state.parentDialogs.includes(dialogData.parentDialog)
      )
        state.parentDialogs.push(dialogData.parentDialog)

      if (!dialogData.parentDialog && !dialogData.val) state.parentDialogs.pop()

      for (const key in state.dialog) {
        if (key != dialogData.dialog && !state.parentDialogs.includes(key))
          state.dialog = { ...state.dialog, [key]: false }
      }
    }
    state.dialog = { ...state.dialog, [dialogData.dialog]: dialogData.val }
  },
  SET_DIALOG_PROPERTIES() // state: ShowcaseStateInterface
  // dialogData: SetDialogParam
  {
    // if (!state.properties[dialogData.dialog])
    //   state.properties = Object.assign({}, state.properties, {
    //     [dialogData.dialog]: {},
    //   })
    // if (dialogData.refresh)
    //   state.properties[dialogData.dialog] = Object.assign(
    //     {},
    //     dialogData.properties
    //   )
    // else
    //   state.properties[dialogData.dialog] = {
    //     ...state.properties[dialogData.dialog],
    //     ...dialogData.properties,
    //   }
  },
  DELETE_DIALOG_PROPERTIES(state: ShowcaseStateInterface, dialog: string) {
    delete state.properties[dialog]
  },
  TOGGLE_MINI_SIDEBAR(state: ShowcaseStateInterface) {
    state.leftSidebarMini = !state.leftSidebarMini
  },
  ENABLE_LITE_MODE(state: ShowcaseStateInterface, val: boolean) {
    state.liteModeEnable = val
  },
  SET_DIRECTION(state: ShowcaseStateInterface, direction: string) {
    state.direction = direction
  },
  TOGGLE_SIDEBAR(state: ShowcaseStateInterface) {
    state.sidebarLeft = !state.sidebarLeft
  },
}

export default mutation
