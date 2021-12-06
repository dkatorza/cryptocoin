<template >
  <div class="move-latest-trans">
    <div v-if="news" class="news-list scroller">
      <NewsPreview v-for="n in news" :news=n :key="n.id"  />
    </div>
    <div v-else><Loader/></div>
  </div>  
</template>


<script>
import btcService from '@/services/bitcoin.service'
import NewsPreview from "./news-preview.vue";
import Loader from './loader.vue';
export default {

    data(){
        return{
            news:null
        }
    },
   created() {
     this.loadNews();
  },

  methods: {
    async loadNews() {
      this.news = await btcService.getCryptoNews();
      console.log(this.news);
    },
  },

  components: { NewsPreview, Loader },
};
</script>
