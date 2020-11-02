<template>
  <v-main>
    <v-card>
      <v-form @submit="addToStore">
        <v-file-input
          show-size
          truncate-length="50"
          placeholder="please load excel file"
        />
        <v-btn class="green white--text" type="submit"> Get Data</v-btn>
      </v-form>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "ExcelLoader",

  methods: {
    addToStore(e) {
      // console.log(e.target[1].files);
      e.preventDefault();
      let excelFile = e.target[1].files[0];
      this.$store.dispatch("addFileToStore", excelFile);
    },
  },
};
</script>

<style scoped>
</style>