<template>
  <v-main class="pt-0">
    <v-layout column justify-center>
      <ScoreCardNavigation :dataHeaders="dataHeaders"></ScoreCardNavigation >


      <v-flex>
        <p class="headline" justify-center>
          There will be the scorecard dashboard prepared with all components
        </p>
      </v-flex>
    <ChartWrapper >

    </ChartWrapper>

    </v-layout>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import ChartWrapper from './ChartWrapper'
import ScoreCardNavigation from '../components/Navigation/ScoreCardNavigation'
export default {
  name: "Scorecard",
  components: {
    ChartWrapper,
    ScoreCardNavigation
  },
  data() {
    return {
      drawer:false,
      dataHeaders: [],
      arrSales: [],
      newData: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  created() {

  },
  mounted(){
    const { getData } = this.$store.getters

  getData.forEach((item) => {
        this.arrSales.push({
          "Vendor Name": item["Vendor Name"],
          sales: item["Sales$ (000's)"],
        });
      });

  this.dataHeaders =  Object.keys(getData[0])
  }
  ,
  computed: mapState({

  }),
};
</script>

<style scoped>
</style>
