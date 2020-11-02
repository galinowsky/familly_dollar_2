<script>
import { HorizontalBar  } from "vue-chartjs";

export default {
name: "BarChart",
  extends: HorizontalBar,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    let JSONed = JSON.parse(JSON.stringify(this.chartData)).filter(item=>  item["Vendor Name"] != "Total " && item["Vendor Name"] != "Top 50")
  console.log(JSONed)
    const names = JSONed.map(item => item["Vendor Name"]);
    const sales = JSONed.map(item => item.sales);
    // console.log({names,sales})
    this.renderChart(
      {
        type: 'horizontalBar',
        labels: names,
        datasets: [
          {
            label: this.label,
            data: sales,
            backgroundColor: 'rgba(255, 206, 86, 1)',

          }

        ],
      },
      this.options
    );
  },
};
</script>