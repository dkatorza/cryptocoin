<template>
  <section class="login position relative">
    <form class="login-form" @submit.prevent="sendCreds(creds)">
      <h3 v-if="!displaySignup">{{ logText }}</h3>
      <h3 v-else>Sign up</h3>
      <input
        class="input-general"
        v-model="creds.email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-if="displaySignup"
        class="input-general"
        v-model.trim="creds.firstName"
        type="text"
        placeholder="First name"
        required
      />
      <input
        v-if="displaySignup"
        class="input-general"
        v-model.trim="creds.lastName"
        type="text"
        placeholder="Last name"
        required
      />
      <input
        class="input-general"
        v-model.trim="creds.password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">{{ logText }}</button>
      <span v-if="!displaySignup">Not a member yet? </span>
      <span v-if="!displaySignup" class="login-form-signup" @click="showSignup"
        >Sign up now</span
      >
      <span v-if="displaySignup">Already a member? </span>
      <span v-if="displaySignup" class="login-form-signup" @click="showSignup"
        >Login now</span
      >
      <span v-if="!displaySignup" class="login-form-guest" @click="logAsGuest"
        >Continue as guest!</span
      >
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      creds: {
        email: "",
        password: "",
        firstName: null,
        lastName: null,
      },
      displaySignup: false,
      logText: "Login",
    };
  },

  async created() {
    this.loadUser();
  },

  methods: {
    loadUser() {
      this.$store.dispatch({ type: "loadUser" });
    },
    async logout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
    },
    sendCreds(creds) {
      if (this.displaySignup) {
        this.Signup(creds);
      } else this.login(creds);
    },
    async login(creds) {
      await this.$store.dispatch({ type: "login", creds });
      this.$router.push("/");
    },
    async Signup(creds) {
      await this.$store.dispatch({ type: "saveUser", creds });
      this.$router.push("/");
    },

    showSignup() {
      this.displaySignup = !this.displaySignup;
      if (!this.displaySignup) return (this.logText = "Login");
      else return (this.logText = "Sign up");
    },

    logAsGuest() {
      this.creds = {
        email: 'dk@gmail.com',
        password: '1234',
      };
      this.login(this.creds);
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

