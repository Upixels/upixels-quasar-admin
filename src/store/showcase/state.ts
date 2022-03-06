import { LooseObject } from 'src/constants'

export interface DialogInterface {
  [key: string]: boolean
}

export interface ShowcaseStateInterface {
  dialog: DialogInterface
  parentDialogs: Array<string>
  properties: LooseObject
  sidebarLeft: boolean
  leftSidebarMini: boolean
  liteModeEnable: boolean
  direction: string
}

function state(): ShowcaseStateInterface {
  return {
    dialog: {},
    parentDialogs: [],
    properties: {},
    sidebarLeft: false,
    leftSidebarMini: false,
    liteModeEnable: false,
    direction: 'ltr',
  }
}

export default state
