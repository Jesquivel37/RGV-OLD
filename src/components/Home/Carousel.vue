<template>
        <div ref="swipe"  class="swiper-container">
    <div class="swiper-wrapper">


     <div class="swiper-slide">
        <router-link to="Construction">
        <img loading="lazy" class="clickable" alt="PUB"
       
        src="@/assets/carousel/event_banner.png" />
        </router-link> 
      </div>

      <div class="swiper-slide">
        <router-link to="Construction">
         <img loading="lazy" class="clickable" alt="LV" 
         
         src="@/assets/carousel/location_validation.png" />
         </router-link>
      </div>

       <div class="swiper-slide">
                <img loading="lazy" alt="Training" 
                src="@/assets/carousel/training_banner.png" />
      </div>

      <div class="swiper-slide">
            <img loading="lazy" alt="Training"
            src="@/assets/carousel/911tips_banner.png" />
      </div>

      <div class="swiper-slide">
        <img loading="lazy" alt="Karis"
        src="@/assets/carousel/karislaw_banner.png" />
      </div>

      <div class="swiper-slide">
          <img loading="lazy" alt="PUB"
          src="@/assets/carousel/pubed_banner.png" />
      </div>
     
    </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>
<script>
import Swiper from "swiper"

// import 'swiper/swiper-bundle.css';
import { ref } from 'vue'
export default {
    setup() {
        const swipe = ref(null)
        return { swipe }
    },
    mounted() {
        const swiper = new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 4,
            loop: true,
            autoplay: {
                delay: 4500,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            })
        
    }
}
</script>

<style scoped>
    .swiper-container {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      border: 0px 5px solid #ddd;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
    
    }

    .clickable {
        cursor: pointer;
    }

    img {
    max-width: 98%;
    max-height: 100%;
    border: 1px solid #ccc!important;
    padding: 4px;
}


@media only screen and (max-width: 480px) {
 
  img{
    width: 100%;
    height: 100%;
  }

}
</style>