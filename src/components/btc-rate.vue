<template>
  <div >
    <span v-if="rate" >${{rate}}</span>
    <div v-else><Loader/></div>
  </div>
  
</template>

<script>
import Loader from './loader.vue';
export default {
  components: { Loader },

  
  data() {
    return {
     
    };
  },
  created() {
    this.getRate();
  }, 


  methods: {
     getRate() {
      this.$store.dispatch({ type: "getMarketPrice" });
    },
    
  },

  computed:{
    rate() {
      return this.$store.getters.rate;
    }, 
  }
};
</script>


