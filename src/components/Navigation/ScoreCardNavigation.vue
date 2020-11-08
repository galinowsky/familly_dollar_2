<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Manage Application</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      v-if="dataHeaders.length > 0"
    >
      <v-list nav dense class="pr-7">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Manage Application</v-list-item-title>
        </v-list-item>

        <DrawerGroup
          :title="testTitle"
          :listItems="testGroupData"
          :dataHeaders="dataHeaders"
          v-on="$listeners"
        ></DrawerGroup>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import DrawerGroup from "./Lists/DrawerGroup";
export default {
  name: "ScoreCardNavigation",
  components: {
    DrawerGroup,
  },
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
      testTitle: "Charts types",
      testGroupData: [
        {
          itemTitle: "Bar Chart",
          itemIcon: "mdi-chart-bar",
        },
        {
          itemTitle: "Tree Map",
          itemIcon: "mdi-chart-tree",
        },
      ],
    };
  },

};
</script>