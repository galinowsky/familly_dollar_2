<template>
  <div class="pt-0"  height="100%">
    <v-layout column justify-center>
      <ScoreCardNavigation :dataHeaders="dataHeaders" @data-to-render="handleData" ></ScoreCardNavigation >


      <v-flex>
        <p class="headline" justify-center>
          There will be the scorecard dashboard prepared with all components
        </p>
      </v-flex>
    <ChartWrapper  >

    </ChartWrapper>

    </v-layout>
  </div>
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
      chartsToRender:[],
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
  },
  methods: {
    handleData: function(data)  {

    return   this.chartsToRender = data
    }
  }
  ,
  computed: mapState({

  }),
};
</script>

<style scoped>
</style>
