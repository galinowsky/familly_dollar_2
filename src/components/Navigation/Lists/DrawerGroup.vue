<template>
  <v-list-group :value="false" prepend-icon="mdi-chart-bar" no-action>
    <template v-slot:activator>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </template>
    <!-- ______________________ -->
    <ListElement
      v-for="({ itemTitle, itemIcon }, i) in listItems"
      :key="i"
      link
    :title="itemTitle"
    :icon="itemIcon"
    :dataHeaders="dataHeaders"
    >

    </ListElement>
  </v-list-group>
</template>

<script>
import ListElement from './ListElement'

export default {
  name: "DrawerGroup",
  components: {
    ListElement
  },
  props: {
    dataHeaders: {
      type: Array,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    listItems: {
      type: Array,
    },
    methods: {
      type: Object
    }
  },
};
</script>