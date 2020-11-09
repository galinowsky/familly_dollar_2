<template>
  <v-main class="mx-10 pa-5"  >
    <v-layout column justify-center>
      <v-flex align-self-center >
        <p class="headline center">
          Please import Excel file in .xlsx format using form below
        </p>
      </v-flex>
      <v-flex justify-center>
        <ExcelLoader />
      </v-flex>
      <v-flex justify-center>
        <DataTable />
      </v-flex>
    </v-layout>
  </v-main>
</template>

<script>
import ExcelLoader from "../components/ExcelLoader";
import DataTable from "../components/DataTable";
export default {
  name: "DataView",
  components: {
    ExcelLoader,
    DataTable,
  },
};
</script>

