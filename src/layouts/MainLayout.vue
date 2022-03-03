<template>
  <q-layout view="hHr lpR lFf">
    <Header />
    <SidebarLeft />
    <SidebarRight />

    <q-page-container>
      <router-view />
      <!-- <div
        class="fixed-right cursor-pointer theme-option gradient-secondary"
        @click="
          $store.commit('showcase/UPDATE_DIALOG_STATE', {
            dialog: 'ThemeCustomizer',
            val: true,
          })
        "
      >
        <q-icon size="20px" name="settings" class="q-spinner-mat" />
      </div> -->
      <div
        class="fixed-right cursor-pointer theme-option gradient-secondary"
        @click="
          $store.commit('showcase/UPDATE_DIALOG_STATE', {
            dialog: 'SideBarRightMini',
            val: true,
          })
        "
        v-show="!$store.state.showcase.dialog.SideBarRightMini"
      >
        <q-icon size="20px" name="chevron_left" class="" />
      </div>

      <SidebarRightMini />
    </q-page-container>

    <ThemeCustomizer />
    <AccountDrawer />
    <Footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store'

import Footer from './Footer.vue'
import Header from './Header.vue'
import SidebarLeft from './SidebarLeft.vue'
import SidebarRight from './SidebarRight.vue'
import SidebarRightMini from './SidebarRightMini.vue'
import ThemeCustomizer from 'src/components/common/ThemeCustomizer.vue'
import AccountDrawer from 'src/components/common/AccountDrawer.vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const $store = useStore()
    return {
      direction: computed(() => $store.state.showcase.direction),
    }
  },
  components: {
    Header,
    SidebarLeft,
    SidebarRight,
    SidebarRightMini,
    Footer,
    ThemeCustomizer,
    AccountDrawer,
  },
  watch: {
    direction(value: string) {
      if (value) document.body.setAttribute('dir', value)
    },
  },
})
</script>

<style>
.theme-option {
  height: 40px;
  z-index: 5;
  /* top: 100px;
  bottom: auto; */
  top: auto;
  bottom: 100px;

  margin: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  line-height: 1.4;
  right: -30px;
  padding: 9px 30px 9px 7px;
  left: auto;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-option:hover {
  right: -15px;
  padding: 9px 30px 9px 7px;
}
</style>
