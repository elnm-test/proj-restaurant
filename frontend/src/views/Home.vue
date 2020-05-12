<template>
  <section class="homepage">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-screen flex column center justify-start">
          <h1>
            The
            <span class="rest-name">Quality</span> You Deserved
            <!-- <span>.</span> -->
            <div class="chef-name">By Chef Alfonso</div>
          </h1>
        <p>
          Intimate, Grandiose Rooftop Resturant
          Breathtaking View,
          Good people, Fresh Ingredients .
        </p>
        <div class="hero-btns flex row center space-evenly">
          <button @click="setPage('/table')" class="hero-table-btn hero-btn">Reservation</button>
          <button @click="setPage('/menu')" class="hero-menu-btn hero-btn">Menu</button>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Home-About -->
    <div class="home-card container flex row center space-between">
      <div class="home-card-content flex column center">
        <h2 class="flex column">
          <span class="info-header-primary">Discover</span>
          <span class="info-header-secondary">Our Story</span>
        </h2>
        <p>
          Quality is a restaurant, bar and coffee roastery located on a busy corner site
          in Farringdon’s Exmouth Market. With glazed frontage on two sides of the
          building,overlooking the market and a bustling London intersection.
        </p>
        <button @click="setPage('/about')" class="btn btn-details">Learn About Us</button>
      </div>
      <div class="home-card-imgs">
        <div class="img-about-main"></div>
        <div class="img-about-second"></div>
      </div>
    </div>
    <!-- End of Home-About -->

    <!-- Event -->
    <div class="home-card container flex row center space-between">
      <div class="home-card-imgs event-image-box">
        <div class="img-event"></div>
      </div>
      <div class="home-card-content flex column center event-content-box">
        <h2 class="flex column">
          <span class="info-header-primary">Get Taste Of</span>
          <span class="info-header-secondary">Our Events</span>
        </h2>
        <p>
          Come And Celebrate With Us , The Best Rooftop in the town ,
          A wide range of events may be held at
          <span
            class="rest-name"
          >Quality</span>.
          The restaurant offres serveral areas and suitable seating for business
          and private events.
          The ENTIRE complex CAN be cloesd Just For you.
          Please leave your details and all inquiries will be addressed by our proffesional
          event manager.
        </p>
        <button @click="setPage('/table')" class="btn btn-details">Book Your Event</button>
      </div>
    </div>
    <!-- End of Events -->

    <!-- Parallax -->
    <div class="parallax flex column center">
      <h2>It's All About Our Tasteful Rich Flavors</h2>
      <button @click="setPage('/menu')" class="hero-menu-btn">See Our Menu</button>
    </div>
    <!-- End of parallax -->
    <!-- Gallery -->
    <ul class="gallery clean-list flex row center space-evenly wrap container">
      <li class="ratio-square" v-for="(imgUrl) in imgsUrl" :key="imgUrl">
        <img :src="`${imgUrl}`" />
      </li>
    </ul>
    <!-- End of Gallery -->

    <div class="home-card container flex row center space-between">
      <div class="home-card-content flex column center">
        <h2 class="flex column">
          <span class="info-header-primary">Check Out</span>
          <span class="info-header-secondary">Our Social Media</span>
        </h2>
        <p>
          Come And Join us on your Social Media We are Waiting For YOU.
          Check out for our new exciting Recipes, find more stimulating
          images and videos . Be part of Quality Family !
        </p>
        <div class="social-box flex row center space-between">
          <i class="fab fa-instagram insta"></i>
          <i class="fab fa-facebook-square face"></i>
          <i class="fab fa-twitter-square twitter"></i>
        </div>
      </div>
      <div class="home-card-imgs">
        <div class="img-event"></div>
      </div>
    </div>

    <div class="parallax-jobs flex column center">
      <h2>We Are Hiring , Be Part Of Our Amazing Staff</h2>
      <button class="hero-menu-btn">More Details</button>
    </div>
  </section>
</template>

<script>
import router from '../router';
export default {

  mounted() {
    document.querySelector("header").classList.remove("staff-header");
    document.querySelector("header").classList.remove("header-background");
  },
  data() {
    return {
      imgsUrl: [
        "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      ]
    };
  },
  methods:{
    setPage(page){
      router.push(page);
    }
  }
};
</script>