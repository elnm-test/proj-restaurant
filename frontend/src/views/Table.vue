<template>
  <section class="table-container container base-padding">
    <div class="reservation-hero flex column center">
      <h2 class="header-wrapper flex column">
        <span class="header-primary">Book</span>
        <span class="header-secondary">Your Table!</span>
      </h2>
    </div>

    <div class="reservation-info">
      <div class="details flex row center space-between">
        <div class="flex column">
          <h3>Quality</h3>
          <h4>Tel-Aviv Yafo - HaArba'a St 19</h4>
        </div>
        <div class="btn btn-phone">
          <span>Phone</span>
          <i class="phone fas fa-phone-alt"></i>
        </div>
      </div>
      <div class="contact">
        <p>
          Our Amazing Restaurent is open for private dining 7 days a week
          from 6PM TO 11PM.
          For Special Events Which Exceed the OPENING HOURS, contact us by phone or on our social media
          We will be Happy to help you!
          Our Guest Services team can also be reached via email at info@qualityRestaurant.com.
          <span
            class="notify"
          >* Main Dining Room reservations can be made up to three months in advance.</span>
        </p>
        <div class="social-box flex row">
          <i class="fab fa-instagram insta"></i>
          <i class="fab fa-facebook-square face"></i>
          <i class="fab fa-twitter-square twitter"></i>
        </div>
      </div>
    </div>

    <div class="selection-header flex row center">
      <div class="selection-navbar">
        <span :class="activeSelection">.1 Details</span>
        <span :class="activeDetails">.2 Book</span>
      </div>
    </div>
    <!-- {{this.selection}}
    {{this.userInfo}}-->
    <keep-alive>
      <component
        class="table-base"
        :is="this.component"
        @userInfo="setUserInfo"
        @selection="setSelection"
      ></component>
    </keep-alive>
    <div class="buttons-container flex row center">
      <button
        class="button"
        v-if="isSelection"
        @click="checkDateAvailabilty"
        :disabled="isDisabled"
      >Find Table</button>
      <div class="booking-btns">
        <button
          class="button"
          v-if="!isSelection"
          @click="component ='user-selection' ; isSelection = true"
        >Back</button>
        <el-button v-if="!isSelection" class="button" type="text" @click="bookTable()">Book Table</el-button>

      </div>
    </div>
  </section>
</template>

<script>
import userInfo from "../components/User-info";
import userSelection from "../components/User-selection";
import eventBus from "../services/busService";
export default {
  mounted(){
    document.querySelector("header").classList.remove("staff-header");
    document.querySelector('header').classList.add('header-background');
  },
  data() {
    return {
      component: "user-selection",
      selection: {},
      userInfo: {},
      isSelection: true,
      filterdTables: []
    };
  },
  methods: {
    async setSelection(selection) {
      this.selection = Object.assign({}, selection);
    },
    async setUserInfo(userInfo) {
      this.userInfo = Object.assign({}, userInfo);
    },

    async markRequiredFields(elClass){
      var elInputs = document.querySelectorAll(`.${elClass} input`);
      for(let i = 0 ; i < elInputs.length ; i++){
        console.log(elInputs[i].value)
        if(!elInputs[i].value){
          elInputs[i].parentNode.classList.add('fieldRequired')
        }
      }
    },

    async checkDateAvailabilty() {
      var location =
        this.selection.location === "Any Location"
          ? ""
          : this.selection.location;

      var tables = await this.$store.getters.tables;
      var regex = new RegExp(`${location}`, "i");

      var filterdTables = tables.filter(table => {
        if (this.selection.size) {
          return (
            table.isAvaliable &&
            //Limit the range of the size
            table.capacity >= this.selection.size &&
            table.capacity - 2 <= this.selection.size &&
            regex.test(table.location)
          );
        }

        return table.isAvaliable && regex.test(table.location);
      });
      if (filterdTables.length) {
        this.filterdTables = filterdTables;
        this.component = "user-info";
        this.isSelection = false;
      } else console.log("No Tables Available!");
    },
    async bookTable() {
      if (this.userInfo.name && this.userInfo.email && this.userInfo.phone) {
        let isDateExist = this.$store.getters.isDateExist;
        let newDate = await this.createDate();

        var date = isDateExist
          ? this.updateDate(newDate)
          : this.addDate(newDate);
        if (date) {
          this.isSelection = true;
          this.component = "user-selection";

          console.log("booked!");
          this.open();
        }
      } else {
        this.markRequiredFields("elUserInfo");
        console.log("Missing Required fields");
      }
    },

    async updateDate(newDate) {
      return this.$store.dispatch({ type: "updateDate", newDate });
    },

    async addDate(newDate) {
      return this.$store.dispatch({ type: "addDate", newDate });
    },

    async resetCurrCmpData() {
      for (let userInfo in this.userInfo) {
        this.userInfo[userInfo] = "";
      }
      for (let selection in this.selection) {
        this.selection[selection] = "";
      }
    },
    async createDate() {
      var dateTime = this.dateTime;
      var tables = await JSON.parse(JSON.stringify(this.$store.getters.tables));
      var reserveTable = this.filterdTables[0];

      var updatedTables = tables.map(table => {
        if (table.name === reserveTable.name) {
          table.isAvaliable = false;
          table.reservation = {
            name: this.userInfo.name,
            email: this.userInfo.email,
            phone: this.userInfo.phone
          };
        }
        return table;
      });

      let date = {
        dateTime,
        tables: updatedTables
      };

      return date;
    },
    open() {
      this.$alert(
        `
        ${this.userInfo.name.toUpperCase()} Your Reservation Has Been Made - 
        ${this.selection.date} At ${this.selection.time}
         `,
        {
          type: "success",
          title: "Reservation Details",
          center: true
        }
      ).then(() => {
        //Reset Data !!
        eventBus.$emit("resetDetails");
        this.resetCurrCmpData();
        this.$message({
          type: "success",
          message: "We Are Waiting For You"
        });
      });
    }
  },
  computed: {
    isDisabled() {
      return !(this.selection.date && this.selection.time);
    },
    activeSelection() {
      return { active: this.isSelection };
    },
    activeDetails() {
      return { active: !this.isSelection };
    },
    dateTime() {
      let time = +this.selection.time.slice(0, -2);
      time = time < 12 ? time + 12 + ":00" : time + ":00";
      var dateTime = `${this.selection.date}` + ` ` + `${time}`;
      return dateTime;
    }
  },
  components: {
    userSelection,
    userInfo
  }
};
</script>