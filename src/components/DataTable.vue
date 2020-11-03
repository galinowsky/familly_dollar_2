<template>
  <v-card class="ma-15 pa-15" v-if="data.length > 1">
    <v-layout column justify-center>
      <v-flex align-self-center> </v-flex>

      <v-card-title>
        <p class="headline">Imported Data Full view</p>
      </v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

      <v-data-table
        :headers="header"
        :items="data"
        :items-per-page="10"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-layout>
  </v-card>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "DataTable",
  data() {
    return {
      search: "",
    };
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