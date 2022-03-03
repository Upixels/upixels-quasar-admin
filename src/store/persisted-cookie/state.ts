export interface PersistedStateInterface {
  prop: boolean
}

function state(): PersistedStateInterface {
  return {
    prop: false,
  }
}

export default state
