<template>
  <div class="control-panel-wrappper">
    <span>
      <router-link to="/greeting">
        <fa :icon="['fas', 'home']" />
      </router-link>
    </span>
    <span>
      <router-link to="/contacts">
        <fa :icon="['fas', 'user']" />
      </router-link>
    </span>
    <span>
      <router-link to="/charts">
        <fa :icon="['fas', 'chart-line']" />
      </router-link>
    </span>
    <span>
      <router-link to="/news">
        <fa :icon="['fas', 'newspaper']" />
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRoute() {
      this.$store.dispatch("getCurrentRoute", {
        route: this.$router.history.current.path,
      });
    },
  },
  computed: {},
};
</script>


