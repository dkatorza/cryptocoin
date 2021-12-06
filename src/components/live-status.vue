<template>
  <div v-if="displayLiveStatus">
    <span v-if="socketStatus" class="live"><img  src="../assets/img/livestatus.svg" /></span>
    <span v-else class="offline">offline</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayLiveStatus: false,
    };
  },

  created() {
    this.currentCmp()
  },

  methods: {
    currentCmp() {
      if (
        this.$router.history.current.path.includes("greeting") ||
        this.$router.history.current.path.includes("charts")
      ) {
        
        return (this.displayLiveStatus = true);
      } else return (this.displayLiveStatus = false);
    }
  },

  computed: {
    socketStatus() {
      return this.$store.getters.res;
    }
  },
  watch: {
    "$route.params"() {
      this.currentCmp()
    }
  }
};
</script>
