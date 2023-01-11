<template>
  <q-footer
    elevated
    :class="[
      {
        'bg-white text-dark': !$q.dark.isActive,
        'bg-dark text-white': $q.dark.isActive,
      },
    ]"
  >
    <p class="text-subtitle2 q-pa-sm q-pl-lg q-my-auto">
      uPixels © {{ cYear }}
    </p>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App-Footer',
  setup() {
    const cYear = new Date().getFullYear()

    return {
      cYear,
    }
  },
})
</script>
