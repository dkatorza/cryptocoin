<template>
  <div>
    <section class="contact-preview">
      <span>{{ contact.firstName }} {{ contact.lastName }} </span>
      <small>{{ contact.phone }} </small>
    </section>
  </div>
</template>
<script>
export default {
  name: "contact-preview",
  props: ["contact"],
  methods: {
  },
};
</script>
