<template>
  <div class="flex-container">
    <h1><b>Public Education </b><i> Program</i></h1>
    <div class="grid-container-3">
      <div>
        <b>
          <p>
            We provide presentations to our local cities, school, daycares, Emergency
            Medical Services (EMS), Fire and Police Departments within Hidalgo and Willacy
            County.
          </p>

          <p>
            Promotional item distribution is a major part of educating the public on how
            to correctly use the 9-1-1 system. During our promotional events, our mascots
            (Cell Phone Sally, Kid Friendly Keith, and Josh) have become a BIG part of our
            interaction with the early youth.
          </p>
          <p>
            We promote and educate the public on how to correctly use the 9-1-1 system. By
            using multi-media, we demonstrate the proper way to call 9-1-1 and what is
            considered a 9-1-1 emergency call.
          </p>
          <p>Schedule your event today!</p>
        </b>

        <!-- <div id="titleServe">We Serve</div> -->
        <div id="innerComms2">
          <div class="title2">
            <h4><center>CELL PHONE SALLY</center></h4>
            <img
              id="imgCon2"
              src="@/assets/pages/pubed/cellphonesally_mascot.jpg"
              alt="Cell Phone Sally"
            />
          </div>
          <div class="title2">
            <h4><center>KID FRIENDLY KEITH</center></h4>
            <img
              id="imgCon2"
              src="@/assets/pages/pubed/kfk_mascot.jpg"
              alt="Keith Friendly Kid"
            />
          </div>
          <div class="title2">
            <h4><center>JOSH</center></h4>
            <img id="imgCon2" src="@/assets/pages/pubed/josh_mascot.jpg" alt="Josh" />
          </div>
        </div>

        <div id="btnEvent">
          <button>
            <router-link to="Construction">EVENT REQUEST</router-link>
          </button>
        </div>
      </div>
      <div></div>

      <div>
        <div class="center-image">
          <img
            id="imgCon"
            src="@/assets/pages/pubed/main-photo.jpg"
            alt="Kids with mascot"
          />
        </div>

        <div class="flex-container">
          <b>
            <h1><i>Know WHEN to call 9-1-1</i></h1></b
          >
          <b
            ><p>
              9-1-1 is for emergencies only. You should only be dialing 9-1-1 if someone
              is hurt or in danger, or if you are in immediate need of police, fire, or
              medical assistance.
            </p>

            <p>
              Knowing where you are is the most important information you can provide as a
              9-1-1 caller, so be sure to be aware of your surroundings. Make a real
              effort to be as detailed as possible.
            </p>
          </b>
        </div>
      </div>
    </div>

    <div class="flex-container">
      <h1><i>Know the capabilities of the device you are using.</i></h1>
      <b
        ><p>
          9-1-1 can be contacted from any device that can make phone calls (traditional
          landline, cell, VoIP), but the callback and location information that
          accompanies your call to the 9-1-1 center can vary drastically amongst
          technologies and between geographic regions. LRGVDC 9-1-1 and telecommunications
          professionals are hard at work to make sure 9-1-1 works the same on all devices.
        </p>
      </b>
      <Grid />
    </div>
  </div>
</template>
<script>
import Grid from "@/components/PublicEducation/Grid";
export default {
  components: { Grid },
};
</script>
<style scoped>
h1 {
  color: #2b4988;
  color: rgb(226, 28, 13);
}

h1 i {
  color: #707070;
}
.flex-container {
  max-width: 1200px;
  margin: auto;

  padding: 10px;
}
img {
  margin-right: 30px;
  padding-bottom: 25px;
}
p {
  color: #2b4988;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
  padding-left: 15px;
}
button {
  border-radius: 16px;
  color: white !important;
  background: #2b4988;
  cursor: pointer;
  text-align: center;
  width: 190px;
  margin-top: 20px;
  margin-top: 25px;
  margin-left: 200px;
}
button a {
  color: white;
  text-decoration: none;
}
button:hover {
  background: rgb(12, 37, 90);
  background: rgb(226, 28, 13);
}
.mobile-flex {
  display: flex;
}

.grid-container-3 {
  display: grid;
  grid-template-columns: 45% 8% 47%;
}

#btnEvent {
  margin-top: 5px;
}
#imgCon {
  max-width: 68vh;
  height: 420px;
  height: 500px;
  border: 2px solid #143975 !important;
  padding: 1px;
}
h2:hover {
  color: rgb(226, 28, 13) !important;
  cursor: pointer;
}
hr.type_1 {
  border: 0;
  height: 270px;

  background-repeat: no-repeat;
  background-size: 1150px;
  background-position: center;
  padding-top: 50px;
}
.bannerMsg {
  color: #36454f;
  padding: 15px;
  font-weight: bold;
  font-size: 1.29rem;
  grid-area: content;
}

#innerComms2 {
  margin-top: 25px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
#imgCon2 {
  max-width: 68vh;
  height: 210px;
  border: 0px solid #ccc !important;
  padding-right: 4px;
}

.title2 {
  color: red !important;
  color: #df744a !important;
}
.asset-video {
  width: 590px;
  height: 375px;
}

@media only screen and (max-width: 1600px) {
  #imgCon {
    width: 100%;
    height: auto;
  }

  .center-image {
    text-align: center;
  }

  .grid-container-3 {
    display: initial;
  }
  .flex-container {
    max-width: 100%;
    margin: 0;
    padding: 30px;
  }
  #btnEvent {
    margin-top: 60px;
  }
  #btnEvent {
    text-align: center;
  }
  button {
    margin-top: 0;
    margin-left: 0;
  }
}
@media only screen and (max-width: 1290px) {
  .asset-video {
    text-align: center;
    margin: 0 auto;
  }
  .video-top {
    margin-top: 30px;
  }
  .mobile-flex {
    display: flex;
    flex-direction: column-reverse;
  }
  .no-mobile {
    display: none;
  }

  #innerComms2 {
    flex-wrap: wrap;
  }

  .imgResponsive {
    width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 600px) {
  .asset-video {
    width: 50%;
    height: auto;
  }
   
}
</style>
