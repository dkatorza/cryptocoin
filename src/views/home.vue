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
      <control-panel />
    </section>
  </div>
</template>

<script>
import contactPage from "@/views/contact-page";
import greeting from "./greeting.vue";
import ControlPanel from "../components/control-panel.vue";
import ContactDetails from "../views/contact-details.vue";
import LiveStatus from "../components/live-status.vue";

export default {
  components: {
    greeting,
    contactPage,
    ControlPanel,
    ContactDetails,
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
