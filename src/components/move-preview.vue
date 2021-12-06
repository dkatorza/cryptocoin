<template>
  <div class="move-preview-list" @click="clickToProfile(move.contact._id)">
    <span  v-if="!contactNames">
      <span class="text-clr4">To: </span> {{ move.contact.firstName }} {{ move.contact.lastName }}
    </span>
    <span ><span class="text-clr2">At:</span> {{ new Date(move.transferedAt).toLocaleString() }} </span>
    <span><span class="text-clr4">Amount:</span> {{ move.amount }}₿ | {{ move.inUsd }}$ </span>
  </div>
</template>
<script>
export default {
  props: ["move", "user"],
  methods: {
    clickToProfile(contactId) {
      if (!this.$router.history.current.path.includes("contact")) {
        this.$router.push(`/contact/${contactId}`);
      }
    },
  },
  computed: {
    contactNames() {
      const { contactId } = this.$route.params;
      return contactId;
    },
  },
};
</script>
