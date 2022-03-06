<template>
  <q-dialog v-model="dialogState" maximized position="right">
    <q-card class="dialog-md">
      <q-card-section>
        <div class="text-weight-bold">Add Category</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="">
        <q-input outlined placeholder="Name" lazy-rules class="q-mb-md" />
        <q-input
          outlined
          type="textarea"
          placeholder="Description"
          rows="5"
          class="q-mb-md"
        />
        <q-select
          outlined
          v-model="multiple"
          multiple
          :options="options"
          label="Select Tag"
          class="q-mb-md full-width"
        />
        <q-btn
          unelevated
          label="Submit"
          class="float-right"
          no-caps
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'CategoryForm',
  setup() {
    const $store = useStore(),
      dialog = 'CategoryForm',
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
    }
  },
})
</script>
