<template>
  <div>
    <AppHeader />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";
import Footer from './components/footer.vue';

export default {
  name: "root-cmp",
  components: {
    AppHeader,
    Footer,
  },
};
</script>