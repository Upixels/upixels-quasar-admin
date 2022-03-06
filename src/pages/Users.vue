<template>
  <q-page class="row items-center justify-evenly">
    <h6>User Page</h6>

    <div v-if="false" class="q-pa-lg">
      for Product page
      <div class="row q-col-gutter-lg">
        <div class="col-12">
          <q-file outlined label="Upload Photo">
            <template v-slot:prepend>
              <q-icon name="photo" />
            </template>
          </q-file>
        </div>
        <div class="col-12 q-gutter-md">
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="red"
            bordered
            style="height: 140px; max-width: 150px"
            img-class="	"
            class="rounded-borders"
          >
            <q-btn
              class="absolute-top-right all-pointer-events"
              unelevated
              color="negative"
              dense
              rounded
            >
              <q-icon name="close"></q-icon>
            </q-btn>
          </q-img>
          <q-img
            src="https://placeimg.com/500/300/nature"
            spinner-color="red"
            bordered
            style="height: 140px; max-width: 150px"
            img-class="	"
            class="rounded-borders"
          >
            <q-btn
              class="absolute-top-right all-pointer-events"
              unelevated
              color="negative"
              dense
              rounded
            >
              <q-icon name="close"></q-icon>
            </q-btn>
          </q-img>
        </div>
        <div class="col-12">
          <q-input placeholder="Product Name" outlined />
        </div>
        <div class="col-12">
          <q-editor min-height="5rem" />
        </div>
        <div class="col-md-4">
          <q-input placeholder="Price" outlined />
        </div>
        <div class="col-md-4">
          <q-input placeholder="Compare Price" outlined />
        </div>
        <div class="col-md-4">
          <q-input placeholder="Cost Per Item" outlined />
        </div>
        <div class="col-md-12">
          <q-select
            outlined
            v-model="multiple"
            multiple
            :options="options"
            label="Select Tag"
            class="full-width"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
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

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageUser',
  setup() {
    return {
      columns,
      rows,
      small: ref(false),
      multiple: ref(null),
      options: ['tag', 'tag1', 'tag2', 'tag3', 'tag4'],
    }
  },
})
</script>
