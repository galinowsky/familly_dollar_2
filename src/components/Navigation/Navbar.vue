<template>
 <nav>
    <v-app-bar app max-height="70" tile class="px-5">
      <!-- <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon> -->


      <TaskTitle></TaskTitle>
      <v-spacer></v-spacer>
      <v-btn text class="pa-2" to="/">Scorecard</v-btn>
      <v-btn text class="pa-2" to="/data">DataView</v-btn>
      <v-spacer></v-spacer>

      <v-img
        class="pa-2"
        max-height="48"
        max-width="48"
        alt="Vue logo"
        laxy-src="./assets/logo.png"
        src="../../assets/logo.png"
      ></v-img>
    </v-app-bar>

 </nav>
</template>

<script>
import TaskTitle from "./TaskTitle"
export default {
  name: "Navbar",
  components: {
     TaskTitle
  },
  data() {
    return {
      drawer:true
    }
  }
};
</script>