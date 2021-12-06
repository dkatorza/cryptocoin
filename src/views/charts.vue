<template>
  <div>
    <div class="charts-general position relative">
      <LivePriceChart
        v-if="loaded"
        :chartData="rate"
        :dataTime="rateTime"
      />
    </div>
  </div>
</template>

<script>
import LivePriceChart from "@/components/live-price-chart.vue";
export default {
  data() {
    return {
      loaded: false,
    };
  },
  created() {
    this.getRate();
  },
  methods: {
    async getRate() {
      this.$store.dispatch({ type: "getMarketPrice" });
      this.loaded = true;
    },
  },

  computed: {
    rate() {
      return this.$store.getters.rate;
    },
    rateTime() {
      return this.$store.getters.rateTime;
    },
  },
  components: {
    LivePriceChart,
  },
};
</script>
