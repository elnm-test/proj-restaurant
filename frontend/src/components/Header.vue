<template>
  <header class="flex row center space-between">
    <div @click="toggleMenu" class="body-screen"></div>
    <router-link class="logo" to="/">Q.</router-link>
    <div class="flex row center">
      <nav class="flex row center nav-resp">
        <div class="flex row center justify-start">
          <i class="nav-icon fas fa-home"></i>
          <router-link class="route" to="/" exact>Home</router-link>
        </div>
        <div class="flex row center justify-start">
          <i class="nav-icon fas fa-book-open"></i>
          <router-link class="route" to="/menu" excat>Menu</router-link>
        </div>
        <div class="flex row center justify-start">
          <i class="nav-icon far fa-calendar-check"></i>
          <router-link class="route" to="/table" excat>Reservation</router-link>
        </div>
        <div class="flex row center justify-start">
          <i class="nav-icon fas fa-info-circle"></i>
          <router-link class="route" to="/about" exact>About</router-link>
        </div>
        <div class="flex row center justify-start">
          <i class="nav-icon fas fa-users"></i>
          <router-link class="route" to="/staff" exact>Staff Zone</router-link>
        </div>
      </nav>
      <div class="menu-side flex row center space-between">
        <img
          v-if="isUserLoggedIn"
          style="width:50px ; height:50px"
          class="user-profile"
          :src="this.imgUrl"
        />
        <span @click="toggleMenu" class="menu-btn">
          <i class="fas fa-bars"></i>
        </span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: "",
      isActiveMenu: false
    };
  },
  mounted() {},
  computed: {
    isUserLoggedIn() {
      let user = this.$store.getters.loggedInUser;
      if (user) {
        this.setImgUrl(user);
        return true;
      } else return false;
    }
  },
  methods: {
    setImgUrl(user) {
      this.imgUrl = user.imgUrl;
    },
    toggleMenu(){
     document.querySelector('nav').classList.toggle('menu-open');
     document.querySelector('.body-screen').classList.toggle('screen-open');
    }
  }
};
</script>
