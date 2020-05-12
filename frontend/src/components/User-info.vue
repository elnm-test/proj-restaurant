<template>
  <section class="user-info-container flex column center">
    <el-input
      class="elUserInfo"
      @input="sendUserInfo() ; requiredReMark()"
      placeholder="Full Name"
      v-model="userInfo.name"
      clearable
    ></el-input>
    <el-input
      class="elUserInfo"
      @input="sendUserInfo() ; requiredReMark()"
      type="email"
      placeholder="Email"
      v-model="userInfo.email"
      clearable
    ></el-input>
    <el-input
      class="elUserInfo"
      @input="sendUserInfo(); requiredReMark()"
      type="phone"
      placeholder="Phone"
      v-model="userInfo.phone"
      clearable
    ></el-input>
  </section>
</template>

<script>
import eventBus from "../services/busService";

export default {
  data() {
    return {
      userInfo: {
        name: "",
        email: "",
        phone: ""
      }
    };
  },
  created() {
    eventBus.$on("resetDetails", this.resetUserInfo);
  },
  methods: {
    sendUserInfo() {
      this.$emit("userInfo", this.userInfo);
    },
    resetUserInfo() {
      for (let userInfo in this.userInfo) {
        this.userInfo[userInfo] = "";
      }
    },
    requiredReMark() {
      var elInputs = document.querySelectorAll(`.elUserInfo input`);
      for (let i = 0; i < elInputs.length; i++) {
        if (elInputs[i].value) {
          elInputs[i].parentNode.classList.remove("fieldRequired");
        }
      }
    }
  }
};
</script>