<template>
  <v-card class="mt-10">
    <p class="headline">There will be excel table with data</p>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="header"
        :items="data"
        :items-per-page="10"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-card>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "DataTable",
  data() {
      return {
          search: '',
      }
  },
  computed: mapState({
    data: ({ data }) => {
      return [...data];
    },
    header: ({ data }) => {
      let headers = Object.keys(data[0]).map((elem) => ({
        text: elem,
        value: elem,
      }));
      return headers;
    },
  }),
};
</script>