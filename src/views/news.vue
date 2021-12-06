<template>
  <div class="news-page-main">
    <h3>Latest news</h3>
    <NewsList />
  </div>
</template>

<script>
import NewsList from "../components/news-list.vue";
export default {
  components: { NewsList },
};
</script>
