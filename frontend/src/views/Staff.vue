<template>
  <section class="staff flex row center space-between">
    <div class="login-box flex column space-between">
      <!-- <h1 class="logo">Q.</h1> -->
      <h2>Login</h2>
      <div class="input-user">
        <i class="icon user fas fa-users"></i>
        <input v-model="userCred.email" type="text" placeholder="Email" />
      </div>
      <div class="input-pass">
        <i class="icon pass fas fa-lock"></i>
        <input v-model="userCred.password" type="password" placeholder="Password" />
      </div>
      <div class="login-btns flex row center space-evenly">
        <button class="login" @click="doLogin">Login</button>
        <button class="logout" @click="doLogout">Logout</button>
      </div>
      <!-- {{this.userCred}} -->
    </div>
    <div class="aside"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    document.querySelector("header").classList.remove("header-background");
    document.querySelector("header").classList.add("staff-header");
  },
  data() {
    return {
      userCred: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async doLogin() {
      await this.$store.dispatch({ type: "doLogin", userCred: this.userCred });
      this.userCred.email = "";
      this.userCred.password = "";
    },
    async doLogout() {
      await this.$store.dispatch({ type: "doLogout" });
    }
  }
};
</script>


