<template>
  <div class="contact-page-main">
    <h3>Contacts</h3>
    <contact-filter @filterList="setFilter" />
    <contact-list :contacts="contactsToShow" />
    <router-link to="/contacts/edit/"
      ><div class="contact-add-btn">
        <fa :icon="['fas', 'user-plus']" />
      </div>
    </router-link>
    <router-view />
  </div>
</template>

<script>
import contactService from "../services/contact.service.js";
import eventBus from "../services/eventBus.service.js";
import contactList from "../components/contact-list.vue";
import contactFilter from "../components/contact-filter.vue";

export default {
  name: "contact-page",

  data() {
    return {
      contacts: [],
      filterBy: null,
    };
  },

  computed: {
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const contactsToShow = this.contacts.filter((contact) => {
        return (
          contact.firstName
            .toLowerCase()
            .includes(this.filterBy.searchStr.toLowerCase()) ||
          contact.lastName
            .toLowerCase()
            .includes(this.filterBy.searchStr.toLowerCase())
        );
      });
      return contactsToShow;
    },
  },

  methods: {
    async saveContact(contact) {
      const savedContact = await contactService.save(contact);
      this.contacts.push(savedContact);
    },
    async removeContact(id) {
      await contactService.remove(id);
      var idx = this.contacts.findIndex((contact) => contact._id === id);
      this.contacts.splice(idx, 1);
    },
    popup(msg) {
      alert(msg);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  async created() {
    this.contacts = await contactService.query();
    eventBus.$on("contactSaved", this.saveContact);
  },
  components: {
    contactList,
    contactFilter,
  },
};
</script>
