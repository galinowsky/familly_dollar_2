<script>
import { generateChart } from "vue-chartjs";
import "chartjs-chart-treemap";

const TreeMap = generateChart("tree-map", "treemap");

export default {
  name: "Treemap",
  extends: TreeMap,
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
    const chartData = getData.map((item) => ({
      value: item[this.chartHeaders],
      title: item["Vendor Name"],
    }));

    this.renderChart(
      {
        type: "treemap",
        labels: this.label,
        datasets: [
          {
            label: this.label,
            tree: chartData,
            key: "value",
            groups: ["title"],
            fontColor: "#000",
            fontFamily: "serif",
            fontSize: 12,
            fontStyle: "normal",
          },
        ],
      },
      this.options
    );
  },
};
</script>