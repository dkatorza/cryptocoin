<template>
  <div v-if="loggedInUser">
    <section class="greeting-wrapper position relative">
      <div class="greeting-avatar-container">
        <div class="greeting-avatar"><Avatar :avatar="loggedInUser" /></div>
      </div>
      <div class="greeting-name">
        <span>Hello <UserName :user="loggedInUser" /></span>
      </div>
      <section class="greeting-funds-section">
        <div class="greeting-funds">BTC: <UserBtcBalance /></div>
        <div  class="greeting-btc">
          Balance in USD: <span>${{ value }}</span>
        </div>
        <div class="greeting-btc">
          Current BTC / USD: <span> <BtcRate /></span>
        </div>
        <div class="greeting-btc">
          Rate Time<span>{{ rateTime }}</span>
        </div>
      </section>

      <div class="greeting-latest-trans">
        <MoveList />
      </div>
    </section>
  </div>
</template>

<script>
import BtcRate from "../components/btc-rate.vue";
import Avatar from "../components/avatar.vue";
import UserName from "../components/user-name.vue";
import UserBtcBalance from "../components/user-btc-balance.vue";
import MoveList from "../components/move-list.vue";

export default {
  components: { BtcRate, Avatar, UserName, UserBtcBalance, MoveList },

  methods: {},



  computed: {
    rate() {
      return this.$store.getters.rate;
    },
    value() {
      return (this.loggedInUser.coins * this.rate).toLocaleString("en-US");
    },
    rateTime() {
      return this.$store.getters.rateTime;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>
