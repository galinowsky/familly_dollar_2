<template>
  <v-main>
    <v-layout column justify-center>
      <v-flex>
        <p class="headline center">
          There will be the data imported from Excel file
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

