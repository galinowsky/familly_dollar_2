<template>
  <v-main>
    <v-card class="mx-15 pa-15">
      <v-form @submit="addToStore" >
        <v-file-input
        class="mr-15 pr-15"
          width="200px"
          show-size
          truncate-length="50"
          placeholder="please load excel file"
        />
        <v-btn class="green white--text ml-7  mb-5" type="submit"> Get Data</v-btn>
        <v-btn
        @click="clearStore"

        class="red white--text ml-7  mb-5">Clear Data</v-btn>
      </v-form>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "ExcelLoader",
  data() {
    return {
      dataExists: false
    }
  },
  methods: {
    addToStore(e) {
      e.preventDefault();
      let excelFile = e.target[1].files[0];
      this.$store.dispatch("addFileToStore", excelFile);
    },
    clearStore(e) {
      console.log(this.$store.dispatch)
      e.preventDefault();
      this.$store.dispatch("deleteStore",null)
    }
  },
};
</script>

<style scoped>
</style>