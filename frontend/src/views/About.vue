<template>
  <section class="about base-padding">
    <div class="about-chef flex row space-between container">
      <img
        src="https://images.pexels.com/photos/3338536/pexels-photo-3338536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div class="about-section-content flex column center">
        <div>
          <h2 class="flex column">
            <span class="info-header-primary">Meet</span>
            <span class="info-header-secondary about-main-title">Our Head Chef</span>
          </h2>
          <p>
            Since my Childhood i had Only One Passion - FOOD!
            My Desire of Food and Flavor developed in our family kitchen and grew through
            My travels all over the world , as i got familiar with other cultures and
            cuisines whichtook a Major part in my Tasteful,Arousing, Rich Flavors Meals.
            It's All About Excellence and Perfection - That's My Motto!
          </p>
        </div>
      </div>
    </div>
    <div class="about-rest">
      <h2 class="flex column">
        <span class="info-header-primary">Learn About</span>
        <span class="info-header-secondary about-main-title">Our Restuarent</span>
      </h2>
      <p class="about-rest-content container">
        Quality is a restaurant, bar and coffee roastery located on a busy corner site
        in Farringdon’s Exmouth Market. With glazed frontage on two sides of the
        building,overlooking the market and a bustling London intersection.
        We are dedicated to providing truly pure and vibrant food.
         It's an intuitive approach of using our whole foods in recipes and on
         the plate. All the ingredients are fresh, nourishing and healthy. 
         We serve authentic starters and main dishes introducing classic 
         cuisines along with must-try Mediterranean favorites, and some excellent wine, 
         of course.
      </p>

      <div class="about-gallery-container container">
        <div v-for="img in imgURLs" :key="img" class="gallery-img">
          <img :src="`${img}`" > 
        </div>

      </div>


    </div>
  </section>
</template>

<script>
export default {
  mounted(){
        document.querySelector("header").classList.remove("staff-header");
        document.querySelector('header').classList.add('header-background');
  },
  data(){
    return{
      imgURLs: [
        'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/590477/pexels-photo-590477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3204577/pexels-photo-3204577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


      ]
    }
  }
};
</script>