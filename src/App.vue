<template>
  <v-app>


    <Navbar></Navbar>

    <v-main class="ma-10">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
 import Navbar from './components/Navbar'

export default {

  name: "App",
  components: {
    Navbar},
};
