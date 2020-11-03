<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: HorizontalBar,
  props: {
    label: {
      type: String,
    },
    chartHeaders: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const { getData } = this.$store.getters;
    console.log(getData);

    const names = getData.map((item) => item["Vendor Name"]);
    const chartData = getData.map((item) => item[this.chartHeaders]);
    console.log({ names, chartData });

    this.renderChart(
      {
        type: "HorizontalBar",
        labels: names,
        datasets: [
          {
            label: this.label,
            data: chartData,
            backgroundColor: "rgba(255, 206, 86, 1)",
          },
        ],
      },
      this.options
    );
  },
};
</script>