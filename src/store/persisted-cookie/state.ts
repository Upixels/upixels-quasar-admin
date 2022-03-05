export interface PersistedStateInterface {
  leftSidebarMini: boolean
}

function state(): PersistedStateInterface {
  return {
    leftSidebarMini: false,
  }
}

export default state
