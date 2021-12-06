<template >
  <div class="move-latest-trans">
    <span class="latest-trans-header">Latest transections:</span>
    <div v-if="userMoves.length" class="move-list scroller">
      <MovePreview
        v-for="move in userMoves"
        :key="move.id"
        :move="move"
        :user="loggedInUser"
      />
    </div>
    <div v-else>Not yet...</div>
  </div>
</template>


<script>
import MovePreview from "./move-preview.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadUser" });
  },

  computed: {
    userMoves() {
      const { contactId } = this.$route.params;
      const contactMoves = this.$store.getters.loggedInUser.moves.filter(
        (move) => move.contact._id === contactId
      );
      if (!contactId) return this.$store.getters.loggedInUser.moves;
      return contactMoves;
    },

    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },

  components: { MovePreview },
};
</script>
