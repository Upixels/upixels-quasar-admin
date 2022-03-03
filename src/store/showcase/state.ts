import { LooseObject } from 'src/constants'

export interface DialogInterface {
  [key: string]: boolean
}

export interface ShowcaseStateInterface {
  dialog: DialogInterface
  parentDialogs: Array<string>
  properties: LooseObject
  leftSidebarMini: boolean
  liteModeEnable: boolean
  direction: string
}

function state(): ShowcaseStateInterface {
  return {
    dialog: {},
    parentDialogs: [],
    properties: {},
    leftSidebarMini: false,
    liteModeEnable: false,
    direction: 'ltr',
  }
}

export default state
