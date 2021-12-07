<template>
  <div  class="main-container">
    <section class="cmp-wrapper">
      <template v-if="loggedInUser">
        <div>
          <LiveStatus />
        </div>
        <span @click="logout" class="logout position relative"
          ><fa :icon="['fas', 'sign-out-alt']"
        /></span>
      </template>
      <router-view />
      <ControlPanel />
    </section>
  </div>
</template>

<script>
import ControlPanel from "../components/control-panel.vue";
import LiveStatus from "../components/live-status.vue";

export default {
  components: {
    ControlPanel,
    LiveStatus,
  },
  data() {
    return {};
  },
  async created() {
    await this.$store.dispatch({ type: "loadUser" });
  },
  methods: {
    async logout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/login");
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>
