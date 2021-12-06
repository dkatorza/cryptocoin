<template>
  <ul class="contact-list clean-list scroller ">
      <li class="contact-item" v-for="(contact, idx) in contacts" :key="idx">
    <router-link :to="`/contact/${contact._id}`">
        <contact-preview :contact="contact" />
    </router-link>
      </li>
  </ul>
</template>

<script>

import contactPreview from "./contact-preview.vue";

export default {
  name: "contact-list",
  props: ["contacts"],

  components: {
    contactPreview,
  },
};
</script>


