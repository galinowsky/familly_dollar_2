<template>
  <div class="pt-0" height="100%">
    <v-layout column justify-center>
      <ScoreCardNavigation
        :dataHeaders="dataHeaders"
        @data-to-render="handleData"
      ></ScoreCardNavigation>

      <v-flex>
        <p class="headline" justify-center>
          There will be the scorecard dashboard prepared with all components
        </p>
      </v-flex>
      <ChartWrapper :chartsToRender="chartsToRender"> </ChartWrapper>
    </v-layout>
  </div>
</template>

<script>
import ChartWrapper from "./ChartWrapper";
import ScoreCardNavigation from "../components/Navigation/ScoreCardNavigation";
export default {
  name: "Scorecard",
  components: {
    ChartWrapper,
    ScoreCardNavigation,
  },
  data() {
    return {
      drawer: false,
      chartsToRender: [],
      dataHeaders: [],
    };
  },
  mounted() {
    const { getData } = this.$store.getters;
    this.dataHeaders = Object.keys(getData[0]).filter(elem=> elem!= "Vendor Name");



    
  },
  methods: {
    handleData: function (data) {
      return (this.chartsToRender = data);
    },
  },
};
</script>

<style scoped>
</style>
