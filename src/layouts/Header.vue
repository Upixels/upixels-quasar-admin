<template>
  <q-header
    elevated
    :class="{
      'bg-white text-dark': !$q.dark.isActive,
      'bg-dark text-white': $q.dark.isActive,
    }"
  >
    <!-- class="bg-white text-dark" -->
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="
          () => {
            if ($q.platform.is.mobile) $store.commit('showcase/TOGGLE_SIDEBAR')
            else $store.commit('persistedCookie/TOGGLE_MINI_SIDEBAR')
          }
        "
      />

      <img
        width="150"
        height="41"
        :src="$q.dark.isActive ? 'logo-w.png' : 'logo.png'"
      />

      <!-- <q-toolbar-title> Logo </q-toolbar-title> -->
      <q-space />
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn
          round
          dense
          flat
          icon="settings"
          class="q-spinner-mat text-secondary"
          @click="
            $store.commit('showcase/UPDATE_DIALOG_STATE', {
              dialog: 'ThemeCustomizer',
              val: true,
            })
          "
        />

        <q-btn
          round
          dense
          flat
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          @click="$q.fullscreen.toggle()"
          v-if="$q.screen.gt.sm"
        />

        <q-btn round dense flat icon="notifications">
          <q-badge color="red" text-color="white" floating> 5 </q-badge>
        </q-btn>

        <q-btn round flat>
          <q-avatar size="26px">
            <q-img src="~assets/avtar.png" />
          </q-avatar>
          <q-menu class="shadow-15">
            <q-card class="my-card bg-transparent q-py-md" flat>
              <q-item class="items-center">
                <q-item-section avatar>
                  <q-avatar rounded size="50px">
                    <img src="~assets/avtar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-bold">
                    Rahil Menon
                  </q-item-label>
                  <q-item-label caption> Admin </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
            <q-separator
              :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
            />
            <q-list style="min-width: 300px">
              <q-item clickable v-close-popup>
                <q-item-section>My Profile</q-item-section>
              </q-item>

              <q-separator
                :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
              />
              <q-item clickable>
                <q-item-section
                  class="items-center"
                  style="flex-direction: row; justify-content: start"
                >
                  <span> Language </span>
                  <q-badge flat class="q-ml-md q-pa-sm bg-grey-2 text-black">
                    <!-- <q-icon name="warning" color="white" class="q-mr-xs" /> -->
                    English
                    <q-img
                      src="~assets/united-states.svg"
                      class="q-ml-sm rounded-borders"
                      style="width: 15px; height: 15px"
                    />
                  </q-badge>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list style="min-width: 150px">
                    <q-item clickable v-close-popup>
                      <q-item-section
                        class="items-center"
                        style="flex-direction: row; justify-content: start"
                      >
                        <q-img
                          src="~assets/united-states.svg"
                          class="q-mr-sm rounded-borders"
                          style="width: 15px; height: 15px"
                        />
                        English
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <q-separator
                    :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
                  />
                  <q-list style="min-width: 150px">
                    <q-item clickable v-close-popup>
                      <q-item-section
                        class="items-center"
                        style="flex-direction: row; justify-content: start"
                      >
                        <q-img
                          src="~assets/france.svg"
                          class="q-mr-sm rounded-borders"
                          style="width: 15px; height: 15px"
                        />
                        France
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-separator
                :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
              />
              <q-item clickable v-close-popup>
                <q-item-section @click="$router.push('/login')">
                  Logout
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <!-- <q-btn
          round
          flat
          @click="
            $store.commit('showcase/UPDATE_DIALOG_STATE', {
              dialog: 'AccountDrawer',
              val: true,
            })
          "
        >
          <q-avatar size="26px">
            <q-img src="~assets/avtar.png" />
          </q-avatar>
        </q-btn> -->
        <!-- <q-btn flat round dense icon="menu" /> -->
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      drawerRight: ref(false),
    }
  },
})
</script>
