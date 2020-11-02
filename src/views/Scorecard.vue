<template>
  <v-main>
    <v-layout column justify-center>
      <v-flex>
        <p class="headline" justify-center>
          There will be the scorecard dashboard prepared with all components
        </p>
      </v-flex>

      <v-card class="ma-15 overflow-y-auto" height="500px" width="700px">
        <v-card-title>Sales Chart</v-card-title>
        <BarChart
          v-if="arrSales.length > 0"
          :chartData="arrSales"
          :options="chartOptions"
          label="Sales"
        ></BarChart>
      </v-card>
    </v-layout>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "../components/BarChart";

export default {
  name: "Scorecard",
  components: {
    BarChart,
  },
  data() {
    return {
      arrNames: [],
      arrSales: [],
      newData: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  created() {
//  const data = this.$store.state

  // console.log(data)

//       data.forEach((item) => {
//         this.arrSales.push({
//           "Vendor Name": item["Vendor Name"],
//           sales: item["Sales$ (000's)"],
//         });
//       });


  },
  mounted(){
    const { getData } = this.$store.getters

  getData.forEach((item) => {
        this.arrSales.push({
          "Vendor Name": item["Vendor Name"],
          sales: item["Sales$ (000's)"],
        });
      });

  this.arrNames =  Object.keys(getData[0])
  }
  ,
  computed: mapState({

  }),
};
</script>

<style scoped>
</style>
