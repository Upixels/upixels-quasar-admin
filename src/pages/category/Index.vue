<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Category" />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-lg">
      <q-card>
        <q-table :rows="rows" :columns="columns" row-key="name">
          <template v-slot:top>
            <div class="text-h6 font-weight-bold">Category</div>
            <div class="q-ml-auto">
              <q-btn
                color="primary"
                @click="
                  $store.commit('showcase/UPDATE_DIALOG_STATE', {
                    dialog: 'CategoryForm',
                    val: true,
                  })
                "
                label="Add Category"
                unelevated
                no-caps
              />
            </div>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td> Category Name </q-td>
              <q-td class="text-center">Desc </q-td>
              <q-td class="text-center">
                <q-btn icon="more_vert" square padding="none" dense unelevated>
                  <q-menu>
                    <q-list dense style="min-width: 100px">
                      <q-item
                        clickable
                        v-close-popup
                        class="items-center"
                        @click="small = true"
                      >
                        <q-icon name="edit" class="q-mr-sm"></q-icon>

                        <q-item-section> Edit</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup class="items-center">
                        <q-icon name="delete" class="q-mr-sm"></q-icon>

                        <q-item-section> Delete</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card>
    </div>
    <Form />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Form from './Form.vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Category Name',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Description',
    field: 'calories',
  },
  {
    name: 'Action',
    label: 'Action',
    field: 'fat',
    align: 'center',
  },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
]

export default defineComponent({
  name: 'PageCategory',
  components: { Form },
  setup() {
    return {
      columns,
      rows,
    }
  },
})
</script>
