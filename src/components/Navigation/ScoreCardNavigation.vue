<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Chart Options</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      v-if="dataHeaders.length > 0"
    >
      <v-list nav dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Choose chart types</v-list-item-title>
        </v-list-item>
         <v-list-group sub-group active-class="deep-purple--text text--accent-4">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Data Tables</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item  >
            <v-checkbox

            v-model="isFullDataChecked"
             @change="onFullDataChange"
            ></v-checkbox>
            Show Data Table
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group active-class="deep-purple--text text--accent-4">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Render Single chart</v-list-item-title>
            </v-list-item-content>
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
        <v-list-group sub-group active-class="deep-purple--text text--accent-4">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Render Treemap</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in dataHeaders" :key="item">
            <v-checkbox
              :value="item"
              v-model="checkedTreeHeaders"
              @change="onTreemapChange"
            ></v-checkbox>
            {{ item }}
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "ScoreCardNavigation",
  props: {
    dataHeaders: {
      type: Array,
    },
  },
  data() {
    return {
      drawer: false,
      checkedChartHeaders: [],
      checkedTreeHeaders: [],
      isFullDataChecked: false,
    };
  },
  methods: {
    onChartsChange: function (data) {
      this.$emit("charts-to-render", data);
    },
    onTreemapChange: function (data) {
      this.$emit("treemaps-to-render", data);
    },
    onFullDataChange: function(data) {
      console.log(data)
      this.$emit("full-data-to-render", data);
    },
  },
};
</script>