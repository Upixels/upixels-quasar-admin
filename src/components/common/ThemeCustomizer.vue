<template>
  <q-dialog maximized v-model="dialogState" position="right">
    <q-card style="width: 350px">
      <q-card-section class="row items-center no-wrap"> Theme </q-card-section>
      <q-card-section class="row items-center no-wrap q-pt-none">
        <q-btn-toggle
          no-caps
          v-model="themeType"
          toggle-color="secondary"
          :options="[
            { label: 'Lite', value: 'lite' },
            { label: 'Semi Dark', value: 'semidark' },
            { label: 'Dark', value: 'dark' },
          ]"
        />
      </q-card-section>
      <q-separator />
      <!-- <q-card-section class="row items-center no-wrap">
            Nav Style
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm q-pt-none">
            <q-img
              src="~assets/fixed.png"
              spinner-color="white"
              class="cursor-pointer"
              style="height: 64px; max-width: 87px"
            />
            <q-img
              src="~assets/minisidebar.png"
              spinner-color="white"
              class="cursor-pointer"
              style="height: 64px; max-width: 87px"
            />
            <q-img
              src="~assets/drawernav.png"
              spinner-color="white"
              class="cursor-pointer"
              style="height: 64px; max-width: 87px"
            />
          </q-card-section> -->
      <q-separator />
      <q-card-section class="row items-center no-wrap"> Layout </q-card-section>
      <q-card-section class="row items-center q-gutter-sm q-pt-none">
        <q-img
          src="~assets/fullwidth.png"
          spinner-color="white"
          class="cursor-pointer"
          style="height: 59px; max-width: 87px"
        />
        <q-img
          src="~assets/framed.png"
          spinner-color="white"
          class="cursor-pointer"
          style="height: 59px; max-width: 87px"
        />
        <q-img
          src="~assets/boxed.png"
          spinner-color="white"
          class="cursor-pointer"
          style="height: 59px; max-width: 87px"
        />
      </q-card-section>
      <q-separator />
      <q-card-section class="row items-center no-wrap">
        Other Settings
      </q-card-section>
      <q-card-section class="row items-center q-gutter-sm q-pt-none">
        <q-toggle
          v-model="rtl"
          true-value="rtl"
          false-value="ltr"
          color="green"
          label="Layout Orientation (RTL):"
          left-label
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'ThemeCustomizer',
  setup() {
    const $store = useStore(),
      $q = useQuasar(),
      dialog = 'ThemeCustomizer',
      dialogState = computed({
        get: () => $store.state.showcase.dialog[dialog],
        set: (val) => {
          $store.commit('showcase/UPDATE_DIALOG_STATE', {
            dialog,
            val,
          })
        },
      }),
      themeType = computed({
        get: () => {
          if ($q.dark.isActive) return 'dark'
          else if ($store.state.showcase.liteModeEnable) return 'lite'

          return 'semidark'
        },
        set: (val) => {
          if (val == 'dark') $q.dark.set(true)
          else $q.dark.set(false)

          $store.commit('showcase/ENABLE_LITE_MODE', val == 'lite')
        },
      }),
      rtl = computed({
        get: () => $store.state.showcase.direction,
        set: (val) => {
          $store.commit('showcase/SET_DIRECTION', val)
        },
      })

    return {
      dialog,
      dialogState,
      themeType,
      rtl,
    }
  },
})
</script>
