<template>
  <q-drawer
    side="right"
    v-model="dialogState"
    bordered
    :breakpoint="500"
    :width="200"
    :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
  >
    <div class="row"> Hello From Right Drawer </div>

    <q-btn
      dense
      round
      unelevated
      class="bg-red-5 row text-white"
      icon="close"
      @click="
        $store.commit('showcase/UPDATE_DIALOG_STATE', {
          dialog: 'SideBarRight',
          val: false,
        })
      "
    />
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'SideBarRight',
  setup() {
    const $store = useStore(),
      dialog = 'SideBarRight',
      dialogState = computed({
        get: () => $store.state.showcase.dialog[dialog],
        set: (val) => {
          $store.commit('showcase/UPDATE_DIALOG_STATE', {
            dialog,
            val,
          })
        },
      })
    return {
      dialogState,
    }
  },
})
</script>
