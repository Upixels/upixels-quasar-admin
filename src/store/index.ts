import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex'
import { Cookies } from 'quasar'
import createPersistedState from 'vuex-persistedstate'

import showcase from './showcase'
import { ShowcaseStateInterface } from './showcase/state'
import { PersistedStateInterface as PersistedLocalStateInterface } from './persisted-local/state'
import { PersistedStateInterface as PersistedCookieStateInterface } from './persisted-cookie/state'

import persistedLocal from './persisted-local'
import persistedCookie from './persisted-cookie'

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
  persistedCookie: PersistedCookieStateInterface
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

export default store(function ({ ssrContext }) {
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies,
    options = { path: '/', expires: 1 },
    cookieStorage = {
      getItem: (key: string) => JSON.stringify(cookies.get(key)),
      setItem: (key: string, value: string) => cookies.set(key, value, options),
      removeItem: (key: string) => cookies.remove(key),
    }

  const Store = createStore<StateInterface>({
    modules: {
      [Modules.SHOWCASE]: showcase,
      [Modules.PERSISTED_LOCAL]: persistedLocal,
      [Modules.PERSISTED_COOKIE]: persistedCookie,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
    plugins: [
      createPersistedState({
        key: 'uPixelsPersistedLocal',
        paths: ['persistedLocal'],
      }),
      createPersistedState({
        key: 'uPixelsPersistedCookie',
        paths: ['persistedCookie'],
        storage: cookieStorage,
      }),
    ],
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}
