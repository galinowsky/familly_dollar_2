<template>
  <v-container>
    <v-row wrap justify="center"
     v-for="(item, i) in views"
        :key="i"

    >
      <v-col
        cols="12"
        xs="10"
        sm="6"
        md="6"
        lg="6"
        xl="4"
        v-for="(data, j) in item"
        :key="j"
      >
        <v-card class="overflow-y-auto">
          <v-card-title>{{ data }} Chart</v-card-title>
          <BarChart

            :chartHeaders="data"
            :options="chartOptions"
            :label="data"
          ></BarChart>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row wrap justify="center">
      <v-col
        cols="12"
        xs="12"
        sm="9"
        md="6"
        lg="6"
        xl="4"
        v-for="item in charts"
        :key="item"
      >
        <v-card>
          <v-card-title>{{ item }} Treemap </v-card-title>
          <Treemap
            v-if="charts.length > 0"
            :chartHeaders="item"
            :options="chartOptions"
            :label="item"
          ></Treemap>
        </v-card>
      </v-col>
    </v-row> -->
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
// import Treemap from "../components/Charts/Treemap";
import DataTable from "../components/DataTable";

export default {
  name: "ChartWrapper",
  components: {
    BarChart,
    // Treemap,
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
      type: Object,
    }
  },
  data() {
    return {
      arrNames: [],
      chartsData: [
      ],
      charts: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  mounted() {
    const { getData, getViews } = this.$store.getters;
    this.arrNames = Object.keys(getData[0]);
    this.charts = getViews
  },
};
</script>