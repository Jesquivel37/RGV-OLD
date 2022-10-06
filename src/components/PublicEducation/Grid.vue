<template>
      <div class="grid-container-2">
                   <div class="asset-video box1">
                            <img v-if="kari"  @click="kari = false;" loading="lazy" 
                            class="imgResponsive " 
                            src="@/assets/pages/pubed/Karis_law_cover_photo.png" 
                            alt="Kari Photo" />

                            <VideoPlayer v-else @click="kari = true;" :src="require('@/assets/videos/karis_law.mp4')" />
                    </div>

                    <div class="box2">
                        <h1><i><center>Kari's Law</center></i></h1>
                       
                            <p> On May 15, 2015, Governor Abbott signed <a href="https://www.capitol.state.tx.us/tlodocs/84R/billtext/html/SB00788F.htm">Senate Bill 788 </a>(Texas Kari's Law). The law represents the culmination of 
                            efforts in the aftermath of the murder of Kari Hunt in a motel room in Marshall, Texas. Ms. Hunt’s 9-year-old daughter 
                            tried to call 9-1-1 for help four times from the motel room phone.</p>

                            <p> The call never went through because she did not know 
                            to dial “9” for an outbound line before dialing “9-1-1.” On March 1, 2016, Commission on State Emergency Communications 
                            <a href="https://texreg.sos.state.tx.us/public/readtac$ext.TacPage?sl=R&app=9&p_dir=&p_rloc=&p_tloc=&p_ploc=&pg=1&p_tac=&ti=1&pt=12&ch=251&rl=16">Rule 251.16 </a>adopted to implement Texas Kari’s Law went into effect. 
                            Passed on February 16, 2018, Kari's Law requires multiple telephone line systems to have direct access to 9-1-1 without 
                            having to press an additional digit such as a "9" or a "1" to make an outgoing call. 
                        </p>
                    </div>

                         <div class="bannerMsg box3"><h2><i><center>9-1-1 Addressing</center></i></h2>
                                <p>The LRGVDC 9-1-1 Addressing Department work in partnership with the United States Postal Service (USPS), telephone companies 
                                    and other agencies within the region to ensure the 9-1-1 physical address is established. <br><br>
                                    Our responsibility consists of administration, maintenance, and assurance of all geographic information pertinent to Hidalgo and 
                                    Willacy County, and we're accountable for ensuring orderly assignment and maintenance of all addresses and address data.</p>

                         </div>
                         
                    <div class="box4">
                            <img v-if="lv" @click="lv = false"
                                        loading="lazy" class="imgResponsive box4"
                                        src="@/assets/pages/pubed/911TIPS_COVER.png" alt="Lv banner" />
                            <VideoPlayer v-else @click="lv = true;" :src="require('@/assets/videos/lv_psa.mp4')" />
                    </div>
                        
                <div class="asset-video video-top box5">
                        <img v-if="txt" loading="lazy" 
                        @click="txt = false"
                        class="imgResponsive" 
                        src="@/assets/pages/pubed/text_to_911_cover_photo.png" 
                        alt="text to 911 cover photo" />
                        <VideoPlayer v-else @click="txt = true;" :src="require('@/assets/videos/txt_to_911.mp4')" />                  
                </div>

            <div class="bannerMsg box6">
                <h2><i><center>Text-to-911 is availble in the <br>Lower Rio Grande Valley</center></i></h2>
                <p>In 2014, the four largest wireless service providers (AT&T, Sprint, T-Mobile and Verizon), in conjunction with the Association of Public Safety 
                Communication Officials (APCO) and the National Emergency Number Association (NENA), agreed to provide all 911 call centers with the ability to receive texts.</p>
            </div>  
        </div>  
</template>
<script>
import VideoPlayer from '@/components/PublicEducation/VideoPlayer'
import { ref } from 'vue'
export default {
    components: { VideoPlayer },
    setup() {
        const kari = ref(true);
        const txt  = ref(true)
        const lv   = ref(true)
        return { kari, txt, lv }
    }
}
</script>
<style scoped>
p{
    font-weight: bold;
}
.box1 {
    grid-area: box1;
    text-align: center;
}
.box2{
    grid-area: box2;
}
.box3 {
    grid-area: box3;
    
}
.box4 {
    grid-area: box4;
    text-align: center;
}
.box5 {
    grid-area: box5;
    text-align: center;
}
.box6{
    grid-area:  box6;
}
 .grid-container-2{
    display: grid;
    gap: 10px;
    grid-template-areas: 
    "box1"
    "box2"
    "box4"
    "box3"
     "box5"
    "box6";
   
 }
  .imgResponsive {
        width: 590px;
        height: auto;
    }
    .imgResponsive:hover {
        cursor: pointer;
    }
 @media screen and (min-width: 1200px){
    .grid-container-2{
        gap: 30px;
        grid-template-columns: 50% 50%;
        grid-template-areas: "box1 box2"
            "box3 box4"
            "box5 box6";
    }


}

@media only screen and (max-width: 630px) {
  .imgResponsive {
        width: 100%;
        height: auto;
    }
}
</style>