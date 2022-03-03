<template>
  <div
    :class="[
      'custom-right-mini fixed-right',
      $q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3',
    ]"
    transition-show="slide-left"
    transition-hide="slide-right"
    :style="`width: 56px;right:${
      $store.state.showcase.dialog.SideBarRight ? '200px' : '0px'
    };`"
    v-show="$store.state.showcase.dialog.SideBarRightMini"
  >
    <q-scroll-area
      style="height: calc(100% - 80px) !important"
      class="fit cursor-pointer"
      @click="
        $store.commit('showcase/UPDATE_DIALOG_STATE', {
          dialog: 'SideBarRight',
          val: true,
          parentDialog: 'SideBarRightMini',
        })
      "
    >
      <div class="q-py-lg">
        <div class="column items-center">
          <q-icon
            name="inbox"
            color="blue"
            class="mini-icon q-mb-lg"
            size="30px"
          />
          <q-icon
            name="star"
            color="orange"
            class="mini-icon q-mb-lg"
            size="30px"
          />
          <q-icon
            name="send"
            color="purple"
            class="mini-icon q-mb-lg"
            size="30px"
          />
          <q-icon
            name="drafts"
            color="teal"
            class="mini-icon q-mb-lg"
            size="30px"
          />
        </div>
      </div>
    </q-scroll-area>

    <div
      v-if="!$store.state.showcase.dialog.SideBarRight"
      class="text-center cursor-pointer"
      @click="
        $store.commit('showcase/UPDATE_DIALOG_STATE', {
          dialog: 'SideBarRightMini',
          val: false,
        })
      "
    >
      <q-icon
        name="chevron_right"
        color="teal"
        class="mini-icon q-mb-lg"
        size="30px"
      />
    </div>
  </div>

  <!-- <q-drawer
    v-model="dialogState"
    side="right"
    :mini="!dialogState || miniState"
    @click.capture="drawerClick"
    :width="250"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-blue-grey-8' : 'bg-grey-3'"
  >
    <template v-slot:mini>
      <q-scroll-area class="fit mini-slot cursor-pointer">
        <div class="q-py-lg">
          <div class="column items-center">
            <q-icon
              name="inbox"
              color="blue"
              class="mini-icon q-mb-lg"
              size="30px"
            />
            <q-icon
              name="star"
              color="orange"
              class="mini-icon q-mb-lg"
              size="30px"
            />
            <q-icon
              name="send"
              color="purple"
              class="mini-icon q-mb-lg"
              size="30px"
            />
            <q-icon
              name="drafts"
              color="teal"
              class="mini-icon q-mb-lg"
              size="30px"
            />
          </div>
        </div>
      </q-scroll-area>
    </template>

    <q-scroll-area class="fit q-pl-lg">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section> Inbox </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Send </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Drafts </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <div
      class="q-mini-drawer-hide absolute"
      style="top: 15px; left: -17px; right: auto"
    >
      <q-btn
        dense
        round
        unelevated
        class="bg-red-5 text-white"
        icon="close"
        @click="miniState = true"
      />
    </div>
  </q-drawer> -->
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'SidebarRightMini',
  setup() {
    const $store = useStore(),
      miniState = ref(true),
      dialog = 'SidebarRightMini',
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
      dialog,
      dialogState,
      miniState,
      drawerClick() {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          // e.stopPropagation()
        }
      },
    }
  },
})
</script>
