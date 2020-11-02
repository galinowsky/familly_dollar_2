<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <!-- <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item> -->
        <v-list-item v-for="item in dataHeaders" :key="item">
            <v-checkbox ></v-checkbox>
            {{item}}

        </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "ScoreCardNavigation",
    props : {
        dataHeaders:{
            type: Array,
        }
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>