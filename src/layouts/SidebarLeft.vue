<template>
  <q-drawer
    v-model="dialogState"
    show-if-above
    :bordered="$q.dark.isActive"
    :mini="leftSidebarMini && miniState"
    @mouseover="leftSidebarMini ? (miniState = false) : null"
    @mouseout="leftSidebarMini ? (miniState = true) : null"
    :breakpoint="500"
    :class="{
      'bg-primary text-white': themeType === 'semidark',
      'bg-dark-sidebar text-white': themeType === 'dark',
      'bg-grey-3 text-dark': themeType === 'lite',
    }"
  >
    <!-- <q-item-label header> Essential Links </q-item-label> -->
    <!-- <q-scroll-area style="height: 100%"> -->
    <q-list padding>
      <q-expansion-item
        icon="dashboard"
        label="Dashboard"
        to="/"
        :active-class="
          $q.dark.isActive
            ? 'bg-blue-grey-8 text-white'
            : 'bg-indigo-6 text-white'
        "
        expand-icon="none"
        exact
      />

      <q-expansion-item
        icon="person"
        label="Users"
        expand-icon="none"
        to="/users"
        exact
        :active-class="
          $q.dark.isActive
            ? 'bg-blue-grey-8 text-white'
            : 'bg-indigo-6 text-white'
        "
      />

      <q-expansion-item icon="mail" label="Contact">
        <q-expansion-item
          expand-icon="none"
          :header-inset-level="0.5"
          icon="receipt"
          label="Contact Us"
        />
      </q-expansion-item>

      <q-expansion-item icon="dashboard" label="About Us">
        <q-expansion-item
          expand-icon="none"
          :header-inset-level="0.5"
          icon="receipt"
          label="About Us"
        />
      </q-expansion-item>

      <!-- </q-scroll-area> -->
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { mapGetters } from 'vuex'

import { useQuasar } from 'quasar'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'SidebarLeft',
  computed: {
    ...mapGetters('showcase', ['leftSidebarMini']),
  },
  setup() {
    const $store = useStore(),
      $q = useQuasar()
    return {
      dialogState: ref(false),
      miniState: ref(true),
      themeType: computed(() => {
        if ($q.dark.isActive) return 'dark'
        else if ($store.state.showcase.liteModeEnable) return 'lite'

        return 'semidark'
      }),
    }
  },
})
</script>
