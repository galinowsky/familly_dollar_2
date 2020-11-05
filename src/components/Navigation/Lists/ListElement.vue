<template>
  <v-list-group :value="false" no-action sub-group>
    <template v-slot:activator>
      <v-list-item>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </template>

    <v-list-item v-for="item in dataHeaders" :key="item">
      <v-checkbox
        :value="item"
        v-model="checkedChartHeaders"
        @change="onChartsChange"
      ></v-checkbox>
      {{ item }}
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: "ListElement",
  props: {
    dataHeaders: {
      Type: Array,
    },
    icon: {
      Type: String,
    },
    title: {
      Type: String,
    },
  },
  data(){
      return {
          checkedChartHeaders: [],
      }
  },
  methods: {
    onChartsChange: function (data) {
      this.$emit("charts-to-render", ...data);
    },
    onTreemapChange: function (data) {
      this.$emit("treemaps-to-render", data);
    },
    onFullDataChange: function (data) {
      console.log(data);
      this.$emit("full-data-to-render", data);
    },
  },
};
</script>