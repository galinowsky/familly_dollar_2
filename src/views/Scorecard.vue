<template>
  <div class="pt-0" height="100%">
    <ScoreCardNavigation
      :dataHeaders="dataHeaders"
      @charts-to-render="handleChartsData"
      @treemaps-to-render="handleTreemapsData"
      @full-data-to-render="handleFullData"
    ></ScoreCardNavigation>
    <v-layout column justify-center class="ma-5">
      <v-flex align-self-center class="mt-10 mx-5 px-5">
        <v-card

          v-if="chartsToRender.length === 0 && treemapsToRender.length === 0 && !fullDataRender "
        >
          <h4 class="headline pa-7" justify-center>
            <v-list-item
              >1. Load data from file in "Data Import" section</v-list-item
            >
            <v-list-item
              >2. Then choose charts to present from "Chart Options" menu in
              upper left corner</v-list-item
            >
            <v-list-item
              >3. Changing view in app bar will  reset  "Chart Options" settings
            </v-list-item>
          </h4>
        </v-card>
      </v-flex>

      <ChartWrapper
        :chartsToRender="chartsToRender"
        :treemapsToRender="treemapsToRender"
        :fullDataRender="fullDataRender"
      >
      </ChartWrapper>
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
      allChartsToRender: {},
      chartsToRender: [],
      treemapsToRender: [],
      fullDataRender: false,
      dataHeaders: [],
    };
  },
  mounted() {
    const { getData } = this.$store.getters;
    this.dataHeaders = Object.keys(getData[0]).filter(
      (elem) => elem != "Vendor Name"
    );
  },
  methods: {
    handleChartsData: function (data) {
      console.log(data)
      // this.chartsToRender = data;
    },
    handleTreemapsData: function (data) {
      this.treemapsToRender = data;
    },
    handleFullData: function (data) {
      this.fullDataRender = data;
    },
  },
};
</script>

<style scoped>
</style>
