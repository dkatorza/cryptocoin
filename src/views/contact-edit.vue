<template>
  <section class="contact-edit-container position relative" v-if="contact">
    <h3 v-if="!isEdit">Add new contact</h3>
    <h3 v-if="isEdit">Edit contact</h3>
    <router-link to="/contacts" class="navigate-btn-wrapper">
      <button class="navigate-button">
        <fa :icon="['fas', 'chevron-left']" />
      </button>
    </router-link>
    <form @submit.prevent="submit" v-if="contact">
      <input
        class="input-general"
        type="text"
        v-model.trim="contact.firstName"
        placeholder="First name"
        required
      />
      <input
        class="input-general"
        type="text"
        v-model.trim="contact.lastName"
        placeholder="Last name"
        required
      />
      <input
        class="input-general"
        type="email"
        v-model="contact.email"
        placeholder="Email"
        required
      />
      <input
        class="input-general"
        type="text"
        v-model="contact.phone"
        placeholder="Phone"
        required
      />
      <div class="contact-edit-ctrl-btns">
        <button type="submit">save</button>
        <button class="btn-warnning" type="button" v-if="isEdit" @click="remove">delete</button>
      </div>
    </form>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
      isEdit: true,
    };
  },
  created() {
    this.loadContact();
  },
  methods: {
    async loadContact() {
      const { contactId } = this.$route.params;
      if (!contactId) {
        this.isEdit = false;
        return (this.contact = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      }
      this.contact = { ...(await contactService.get(contactId)) };
    },
    async submit() {
      await contactService.save(this.contact);
      this.$router.push("/contacts");
    },
    async remove() {
      await contactService.remove(this.contact._id);
      this.$router.push("/contacts");
    },
  },
};
</script>
