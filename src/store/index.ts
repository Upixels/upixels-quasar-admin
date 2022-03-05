import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import showcase from './showcase'
import { ShowcaseStateInterface } from './showcase/state'
import { PersistedStateInterface as PersistedLocalStateInterface } from './persisted-local/state'
import persistedLocal from './persisted-local'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown
  showcase: ShowcaseStateInterface
  persistedLocal: PersistedLocalStateInterface
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key')

export enum Modules {
  SHOWCASE = 'showcase',
  PERSISTED_LOCAL = 'persistedLocal',
  PERSISTED_COOKIE = 'persistedCookie',
}

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      [Modules.SHOWCASE]: showcase,
      [Modules.PERSISTED_LOCAL]: persistedLocal,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
    plugins: [
      // createPersistedState({
      //   key: 'uPixelsPersistedLocal',
      //   paths: ['persistedLocal'],
      // }),
    ],
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}
