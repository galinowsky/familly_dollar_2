<template>
  <v-container>
    <v-row wrap>
      <v-col
     cols="12"
        xs="10"
        sm="8"
        md="6"
        lg="4"

      v-for="item in chartsToRender"
      :key="item"

      >
        <v-card class="overflow-y-auto" height="500px">
          <v-card-title>{{ item }} Chart</v-card-title>
          <BarChart
            v-if="arrSales.length > 0"
            :chartHeaders="item"
            :options="chartOptions"
            :label="item"
          ></BarChart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "../components/BarChart";

export default {
  name: "ChartWrapper",
  components: {
    BarChart,
  },
  props: {
    chartsToRender: {
      type: Array,
    },
  },
  data() {
    return {
      arrNames: [],
      arrSales: ["lala"],
      chartsData: [
        // { sales, risk },
        // {ebita, ecita}
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  mounted() {
    const { getData } = this.$store.getters;
    // console.log(getData)

    //  this.chartsData = this.chartsToRender.map(elem => ({ name: elem}) )
    //    console.log(this.chartsToRender)
    //   console.log(this.chartsData)
    this.arrNames = Object.keys(getData[0]);
  },
};
</script>