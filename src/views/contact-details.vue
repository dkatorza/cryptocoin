<template>
  <div class="contact-details position relative" v-if="contact">
    <div class="contact-details-header">
    <div class="avatar-container">
      <div class="avatar"><avatar :avatar="contact" /></div>
    </div>
    <router-link to="/contacts" class="navigate-btn-wrapper">
      <button class="navigate-button">
        <fa :icon="['fas', 'chevron-left']" />
      </button>
    </router-link>
    </div>
    <div class="contact-name-edit-wrapper">
      <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>

      <button class="edit-button">
        <router-link :to="`/contacts/edit/${contact._id}`">
          <fa :icon="['fas', 'pen']" />
        </router-link>
      </button>
    </div>
    <span>{{ contact.phone }} </span>
    <span>{{ contact.email }} </span>

    <div class="contact-details-transfer">
      <input
        class="input-transfer"
        v-model="amount"
        type="text"
        required
        placeholder="Amount to transfer"
      />
      <a class="transfer-btn" href="#" @click="transfer">Transfer</a>
    </div>
    <p v-if="transferStatus">{{ transferStatus }}</p>
    <MoveList />
  </div>
</template>

<script>
import avatar from "../components/avatar.vue";
import contactService from "../services/contact.service";
import userService from "../services/user.service";
import { showUserMsg } from "../services/eventBus.service";
import MoveList from "../components/move-list.vue";
export default {
  components: { avatar, MoveList },

  data() {
    return {
      contact: null,
      amount: "",
      transferStatus: null,
    };
  },
  created() {
    this.loadContact();
  },

  methods: {
    async loadContact() {
      try {
        const { contactId } = this.$route.params;
        this.contact = await contactService.get(contactId);
      } catch (err) {
        showUserMsg("No such Contact", "danger");
        this.contact = null;
      }
    },

    async transfer() {
      if (this.amount <= 0 || isNaN(this.amount))
        return (this.transferStatus = "Amount must be a valid number");
      try {
        await userService.transferBtc(
          this.contact._id,
          parseInt(this.amount),
          this.rate.toLocaleString("en-US")
        );
        this.transferStatus = "Transfer succeeded ";
        this.amount = "";
        this.$store.dispatch({ type: "loadUser" });
      } catch (err) {
        this.transferStatus = err;
      }
    },
  },
  computed: {
    rate() {
      return this.$store.getters.rate;
    },
  },
};
</script>


