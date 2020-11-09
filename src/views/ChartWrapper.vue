<template>
  <v-container>
    <v-row wrap justify="center" v-for="(item, i) in viewsData" :key="i">
      <v-col
        cols="12"
        xs="10"
        sm="6"
        md="6"
        lg="6"
        xl="4"
        v-for="(data, j) in item.data"
        :key="j"
      >
        <v-card class="overflow-y-auto">
          <v-card-title>{{ data }} Chart</v-card-title>
          <BarChart
            v-if="item['chart type'] === `Bar Chart`"
            :chartHeaders="data"
            :options="chartOptions"
            :label="data"
          ></BarChart>
          <Treemap
            v-else-if="item['chart type'] === `Tree Map`"
            :chartHeaders="data"
            :options="chartOptions"
            :label="data"
          ></Treemap>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        class="d-flex justify-center"
        v-if="fullDataRender"
        justify-center
      >
        <DataTable></DataTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "../components/Charts/BarChart";
import Treemap from "../components/Charts/Treemap";
import DataTable from "../components/DataTable";

export default {
  name: "ChartWrapper",
  components: {
    BarChart,
    Treemap,
    DataTable,
  },
  props: {
    treemaps: {
      type: Array,
    },
    fullDataRender: {
      type: Boolean,
    },
    views: {
      type: Array,
    },
  },
  data() {
    return {
      arrNames: [],
      chartsData: [],
      viewsData: this.views,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  mounted() {
    const { getData, getViews } = this.$store.getters;
    console.log(getViews)
    this.arrNames = Object.keys(getData[0]);
    this.viewsData = getViews;
  },
};
</script>