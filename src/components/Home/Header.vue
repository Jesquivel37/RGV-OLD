<template>
  <div> 
    <div class="contact">
      <span class="white"
        >(956) 682-3481 |
        <a
          href="https://www.google.com/maps/place/LRGVDC+9-1-1+Department/@26.18199,-97.9724952,19.25z/data=!4m13!1m7!3m6!1s0x866577ee39177ae5:0xf2da6860ce74dc91!2s1912+Joe+Stephens+Ave,+Weslaco,+TX+78599!3b1!8m2!3d26.182716!4d-97.9713128!3m4!1s0x866577ee42a246bf:0x1e1382564ba77365!8m2!3d26.1817769!4d-97.9724875"
          target="_blank"
        >
          1912 Joe Stephens Ave, Weslaco, TX 78596</a
        ></span
      >
    </div>
    <div class="wrapper print-nav">
      <div class="logo">
        <a href="/">
        <img alt="logo" src="@/assets/Official_Logo.webp" />
        </a>
        <div class="logo-title">
          <h1>Emergency Communications</h1>
        </div>
      </div>
      <div @click="$emit('mobile')" class="btnnav">
        <button @click="$emit('mobile')">
          <font-awesome-icon class="icon" icon="bars" />
        </button>
      </div>

      <div class="navbar">
        <div class="dropdown">
          <router-link class="nav-text" to="/">HOME</router-link>
          <button class="dropbtn nav-text">RGV 9-1-1</button>
          <div class="dropdown-content">
            <router-link to="/Board">BOARD OF MANAGERS</router-link>
            <router-link to="/Meetings">MEETINGS</router-link>
          </div>
        </div>
        <router-link to="PublicEducation">PUBLIC EDUCATION</router-link>

        <div class="dropdown">
          <button class="dropbtn">SERVICES</button>
          <div class="dropdown-content">
            <router-link to="Letter">ADDRESS LETTER</router-link>
            <router-link to="Address-Request">ADDRESS REQUEST</router-link>
           <!-- <router-link to="Address-Request">RECORDING REQUEST</router-link>-->
          <!--  <router-link to="EventRequest">PUBLIC EDUCATION REQUEST</router-link> -->
          </div>
        </div>
  <!--
        <div class="dropdown">
          <button class="dropbtn">TRAININGS</button>
          <div class="dropdown-content">
            <router-link to="404">Link 1</router-link>
            <router-link to="404">Link 2</router-link>
          </div>
        </div>
-->
        <div class="dropdown">
          <button class="dropbtn">ABOUT</button>
          <div class="dropdown-content">
            <router-link to="WhoWeAre">WHO WE ARE</router-link>
            <router-link to="ContactList">E-COMMS TEAM</router-link>
          </div>
        </div>
        <router-link to="ReachUs">CONTACT</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  background-color: #fff;
  border-bottom: 11px solid #ddd;
  height: 60px;
}
.contact {
  width: 100%;
  height: 40px;
  display: flex;
  padding: 5px;
  flex-direction: row-reverse;
  background-color: #d9b13b;
}
.white {
  color: #263e70;
  padding: 4px;
  margin-right: 20px;
}
.navbar {
  float: right;
  height: 40px;
}


.btnnav {
  display: none;
}
.btnnav button {
  width: 60px;
  height: 60px;
  font-size: 24px;
  padding: 10px;
  border: none;
  background: none;
}

img {
  max-width: 22%;

  margin-top: 8px;
  z-index: 99999;
}

.logo {
  position: absolute;
  left: 34px;
  z-index: 4;
}
.logo-title {
  display: none;
  text-align: center;
}

.navbar a {
  float: left;
  font-size: 25px;
  text-align: center;
  padding: 15px 18px;
  text-decoration: none;
  color: rgba(20, 57, 117, 1) !important;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 25px;
  font-weight: 520;
  border: none;
  outline: none;
  color: rgba(20, 57, 117, 1) !important;
  padding: 15px 18px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  cursor: pointer;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #ddd;
  color: #fff;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ddd;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  cursor: pointer;
}

.dropdown-content a {
  float: none;
  padding: 15px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: white;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
  cursor: pointer;
}

.mobileNav {
  position: absolute;
  z-index: 4;
  width: 0;
  top: 0;
  right: 0;
  background: rgba(15, 82, 186, 0.82);
  height: 100%;
  min-height: 968px;
  transition: 0.7s;
  overflow-x: hidden;
  color: #fff;
}

.mobileNav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}

.mobileNav .closebtn {
  font-size: 48px;
  margin-bottom: 40px;
}

.td-mobile-wrap {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.td-mobile-content {
  padding: 20px 20px 0;
}

.td-mobile-content ul {
  list-style: none;
  margin: 0;
  font-size: 28px;
  padding: 0;
}

.td-mobile-content li {
  float: none;
  margin-left: 0;
  padding: 14px 2px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.subMenu {
  color: white !important;
}

.link:hover {
  cursor: pointer !important;
  color: #f62817;
}

li span {
  float: right;
}

.td-mobile-content li ul {
  padding: 20px 12px;
}

@media only screen and (max-width: 1280px) {
  .logo {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .logo {
    position: relative;
    display: block;
  }
  .logo-title {
    display: block;
    font-size: 1.5em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 20% 80%;
    height: auto;
  }

  .navbar {
    align-items: inherit;
    justify-content: space-around;
    font-weight: 200;
  }
}

@media only screen and (max-width: 1196px) {
  .wrapper {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  .navbar {
    display: none;
  }

  .btnnav {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .btnnav > button:hover {
    cursor: pointer;
    color: rgba(20, 57, 117, 1);
    border: 1px solid rgba(20, 57, 117, 1);
  }
}
@media only screen and (max-width: 480px) {

  .btnnav button {
    margin-bottom: 80px;
  }
  .logo-title {
    margin-left: 70px;
    font-size: 14px;
  }
  .logo {
    left: 5px;
  }
}

@media only screen and (max-width: 380px) {
  .logo-title {
    font-size: 12px;
  }
}
@media only screen and (max-width: 350px) {
  .logo-title {
    font-size: 9px;
  }
}

@media only screen and (min-width: 1300px) {
  .logo {
    clip-path: polygon(0 0, 210px 0, 0 440px, 0 50%);
  }
}
</style>
