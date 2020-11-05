<template>
  <!-- <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>

      <v-list-item-title>home</v-list-item-title>
    </v-list-item>
    <v-list-group :value="true" prepend-icon="mdi-account-circle">
      <template v-slot:activator>
        <v-list-item-title>Users</v-list-item-title>
      </template>
      <v-list-group :value="true" no-action sub-group></v-list-group>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-group>
  </v-list> -->
  <v-list-group :value="true" prepend-icon="mdi-chart-bar"
  no-action
          sub-group
  >
    <template v-slot:activator>
      <v-list-item-title>Charts</v-list-item-title>
    </template>

    <v-list-item v-for="({ itemTitle, itemIcon }, i) in listItems" :key="i" link>
       <v-list-item-icon>
        <v-icon v-text="itemIcon"></v-icon>
      </v-list-item-icon>
      <v-list-item-title v-text="itemTitle"></v-list-item-title>


    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: "DrawerGroup",
  props: {
    subGroup: {
      type: Boolean,
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
    dataHeaders :{
      type: Array,
    }
  },
};
</script>