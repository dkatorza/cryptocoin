<template>
  <div class="news-preview-list">
    <span
      ><a :href="news.articleUrl" target="_blank">{{
        news.articleTitle
      }}</a></span
    >
    <div class="news-preview-img"><img :src="news.articleImage" /></div>
  </div>
</template>
<script>
export default {
  props: ["news"],
  methods: {},
  computed: {},
};
</script>
