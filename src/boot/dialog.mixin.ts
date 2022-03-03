import { boot } from 'quasar/wrappers'
import { mapGetters, useStore } from 'vuex'
// import { reactive, computed } from 'vue'

export default boot(({ app }) => {
  app.mixin({
    computed: {
      ...mapGetters('showcase', ['getDialogProperties', 'getDialogState']),
    },
    setup() {
      const store = useStore()

      function updateDialogState({
        dialog = '',
        val = false,
        parentDialog = '',
        properties = null,
        refresh = false,
      }) {
        if (dialog) {
          store.commit('showcase/UPDATE_DIALOG_STATE', {
            dialog,
            val: !!val,
            parentDialog,
          })

          if (properties)
            store.commit('showcase/SET_DIALOG_PROPERTIES', {
              dialog,
              properties,
              refresh,
            })
        }
      }

      function deleteDialogProperties(dialog: string) {
        if (dialog) store.commit('showcase/DELETE_DIALOG_PROPERTIES', dialog)
      }
      return {
        updateDialogState,
        deleteDialogProperties,
      }
    },
  })
})
