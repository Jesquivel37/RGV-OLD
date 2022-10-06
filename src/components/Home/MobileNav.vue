<template>
  <div class="nav-body" :class="{ hide: hide }">
    <div @click="onClose" class="icon">
      <font-awesome-icon icon="window-close" />
    </div>
    <div>
      <ul>
        <li @click="onClose">
          <router-link to="/">HOME</router-link>
        </li>
        
        <li>
          RGV 9-1-1
          <font-awesome-icon class="arrow" icon="chevron-down" />
          <ul>
            <li @click="onClose">
              <router-link to="/Board">BOARD OF MANAGERS</router-link>
            </li>
            <li @click="onClose">
              <router-link to="/Meetings">MEETINGS</router-link>
            </li>
          </ul>
        </li>
        
        <li @click="onClose">
          <router-link to="/PublicEducation">PUBLIC EDUCATION</router-link>
        </li>
        <li @click="ser_close = !ser_close">
          SERVICES
          <font-awesome-icon class="arrow" icon="chevron-down" />
          <ul :class="{ add: ser_close }">
            <li @click="onClose">
              <router-link to="/Letter">ADDRESS LETTER</router-link>
            </li>
            <li @click="onClose">ADDRESS REQUEST</li>
           <!-- <li @click="onClose">PUBLIC EDUCATION REQUEST</li> -->
           <!-- <li @click="onClose">RECORDING REQUEST</li> -->
          </ul>
        </li>
      <!--  <li>TRAININGS</li> -->
        <li @click="about_close = !about_close">
          ABOUT
          <font-awesome-icon class="arrow" icon="chevron-down" />
          <ul :class="{ add: about_close }">
            <li @click="onClose"><router-link to="/WhoWeAre">WHO WE ARE</router-link></li>
            <li @click="onClose">
              <router-link to="/ContactList">E-COMMS TEAM</router-link>
            </li>
          </ul>
        </li>
        <li @click="onClose">
          <router-link to="ReachUs">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script scoped>
import { ref } from "vue";
export default {
  setup() {
    const hide = ref(false);
    const ser_close = ref(false);
    const about_close = ref(false);
    return { hide, ser_close, about_close };
  },
  methods: {
    onClose() {
      this.hide = true;
      setTimeout(() => {
        this.hide = false;
        this.$emit("close");
      }, 600);
    },
  },
};
</script>
<style scoped>
.icon {
  text-align: right;
  margin-right: 60px;
  float: right;
  width: 95%;
  font-size: 2rem;
  cursor: pointer;
}
.nav-body {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: -1400px;
  padding: 95px 0 40px 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #273d6f;
  color: white;
  animation: slide 0.5s forwards;
}

ul.add li {
  display: none;
  max-height: 0px;
  transition: all 0.2s ease-out;
}
.hide {
  right: 0;
  animation: slide-right 0.5s forwards;
}

ul {
  list-style: none;
}
li {
  padding: 14px 2px;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

a {
  color: white;
}
.arrow {
  font-weight: bold;
  margin-right: 20px;
  float: right;
}

@-webkit-keyframes slide {
  100% {
    right: 0;
  }
}

@keyframes slide {
  100% {
    right: 0;
  }
}

@-webkit-keyframes slide-right {
  100% {
    right: -110%;
  }
}

@keyframes slide-right {
  100% {
    right: -110%;
  }
}
</style>
