<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Chart Options</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-title>Choose Data to render</v-list-item-title>
        <v-spacer></v-spacer>
        <v-list-group
        sub-group
        active-class="deep-purple--text text--accent-4">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Render Single chart</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="item in dataHeaders" :key="item" >
            <v-checkbox
              :value="item"
              v-model="checkedHeaders"
              v-on:change="onChange"
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
      checkedHeaders: [],
    };
  },
  methods: {
      onChange: function(data) {
        this.$emit("data-to-render", data)
      }
  }
};
</script>