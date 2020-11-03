<template>
  <nav>
    <v-app-bar app max-height="70" tile class="px-5">
      <TaskTitle></TaskTitle>
      <v-spacer></v-spacer>
      <v-btn text class="pa-2" to="/"
        ><span>Score</span> <span class="font-weight-light">card</span></v-btn>
      <v-btn text class="pa-2" to="/data"
        ><span>Data </span>
        <span class="font-weight-light"> Import</span></v-btn>
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
import TaskTitle from "./TaskTitle";
export default {
  name: "Navbar",
  components: {
    TaskTitle,
  },
  data() {
    return {
      drawer: true,
    };
  },
};
</script>