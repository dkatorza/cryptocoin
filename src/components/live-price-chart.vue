<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["chartData", "dataTime"],

  data() {
    return {
      chartValue: [],
      chartTime: [],
      controlledValues: null,
    };
  },

  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "hsla(308, 100%, 56%, 0.63)");
    this.gradient.addColorStop(0.5, "hsla(219, 93%, 50%, 0.7)");
    this.gradient.addColorStop(1, "hsla(321, 77%, 50%,0.63)");
  },
  methods: {
    setChartValue(newVal) {
      this.chartValue.push(newVal);
      if (this.chartValue.length >= 20) {
        this.chartValue.splice(0, 5);
      }
      return this.chartValue;
    },
    setChartTime(newVal) {
      this.chartTime.push(newVal);
      if (this.chartTime.length >= 20) {
        this.chartTime.splice(0, 5);
      }
      return this.chartTime;
    },

    handleData() {
      this.controlledValues = setInterval(() => {
        this.chartRender();
      }, 3000);
    },
    chartRender() {
      this.renderChart(
        {
          labels: this.getChartTime,
          datasets: [
            {
              label: "$",
              data: this.getChartValue,
              backgroundColor: this.gradient,
              borderColor: "#1162ff",
              pointBackgroundColor: "#db32a2",
              pointBorderColor: "#db32a2",
              spanGaps: true,
              pointRadius: 2,
            },
          ],
        },
        {
          legend: { display: false },
          responsive: true,
          animation: false,

          title: {
            display: true,
            text: "BTC / USD",
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  color: "#4b477a",
                },
                ticks: {
                  fontColor: "#eaeaea",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  color: "#4b477a",
                },
                ticks: {
                  fontColor: "#eaeaea",
                },
              },
            ],
          },
        }
      );
    },
  },
  created() {
    this.handleData();
  },
  beforeDestroy() {
    clearInterval(this.controlledValues);
  },

  computed: {

    getChartValue() {
    return this.setChartValue(this.chartData)
    },

    getChartTime() {
    return this.setChartTime(this.dataTime)
    }
  },

};
</script>
