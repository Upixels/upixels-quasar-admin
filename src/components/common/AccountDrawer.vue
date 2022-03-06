<template>
  <q-dialog maximized v-model="dialogState" position="right">
    <q-card
      style="width: 350px"
      :class="$q.dark.isActive ? ' bg-blue-grey-8' : 'bg-blue-grey-1'"
    >
      <!-- <q-drawer
          side="right"
          v-model="drawerRight"
          overlay
          elevated
          :width="250"
          :breakpoint="500"
          :class="$q.dark.isActive ? ' bg-blue-grey-8' : 'bg-blue-grey-1'"
        > -->
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <q-card class="my-card bg-transparent" flat>
            <q-item class="items-start">
              <q-item-section avatar>
                <q-avatar>
                  <img src="~assets/avtar.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section class="items-start">
                <q-item-label class="text-weight-bold">
                  Rahil Menon
                </q-item-label>
                <q-item-label caption> Admin </q-item-label>
                <q-btn
                  unelevated
                  :color="$q.dark.isActive ? ' bg-red-5 ' : 'red'"
                  class="q-mt-sm q-px-md"
                  dense
                  no-caps
                  @click="$router.push('/login')"
                >
                  Logout
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </q-scroll-area>
      <!-- </q-drawer> -->
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'src/store'

const $store = useStore(),
  dialog = 'AccountDrawer',
  dialogState = computed({
    get: () => $store.state.showcase.dialog[dialog],
    set: (val) => {
      $store.commit('showcase/UPDATE_DIALOG_STATE', {
        dialog,
        val,
      })
    },
  })
</script>
