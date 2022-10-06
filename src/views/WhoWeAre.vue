<template>
<div>
    <div class="flex-container">
        <h1><center>History of the LRGVDC Emergency Communication Division</center></h1>
        <p><b>1967 </b>- the President's Commission on Law Enforcement and Administration of Justice recommended that a "single number should be established" nationwide for reporting emergency situations.</p>
        <p><b> 1987 </b>- HB911 was signed into law on May 28, 1987, which established a statewide 9-1-1 emergency communication system. (now called Texas Health and Safety Code, Chapter 771, Subtitle B. Emergencies) HB911 required the Texas Regional Planning Commissions to develop regional implementation plans.</p>
        <p><b> 1989 </b>- LRGVDC Board of Directors recognizes HB 9-1-1 on May 25, 1989, and began the process of developing a Strategic Plan; consequently, establishing the Emergency Communication Division within the LRGVDC.</p>
        <p><b> 1990 </b>- The first 9-1-1 service agreement is established with CSEC for Hidalgo and Willacy County.</p>
        <p><b> 1994 </b>- The LRGVDC Emergency Communication Division is given the responsibility and authority to be the addressing entity for Hidalgo and Willacy County.</p>
        <p><b> 1996-2005 </b>- LRGVDC Emergency Communication Division strengthen the 9-1-1 infrastructure.</p>
        <p><b> 2006 </b>- Geographic Information Systems (GIS) was implemented to enhance and govern the 9-1-1 systems.</p>
        <p><b> 2016 </b>- Text-to-9-1-1 is completely implemented and deployed in Hidalgo and Willacy Counties.</p>
        <p><b> 2021 </b>- RGV 9-1-1 in the Rio Grande Valley by fully migrating the Hidalgo and Willacy Counties to Regional ESInet (NG 9-1-1). This deployment will ensure 9-1-1 call delivery in our region and with other NG 9-1-1 systems throughout Texas.</p>
    </div>             
    <h1><center>RGV 9-1-1</center></h1>
    
    <Grid />
   
    </div>
</template>
<script>
import Grid from "@/components/WhoWeAre/Grid"
export default {
    components: { Grid }
}
</script>
<style scoped>
   h1 {
        color: #36454f ;
        
    }

    h1 i {
        color: #36454f ;
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
        color: #36454f ;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 17px;
        padding-left: 15px;       
    }

    li p{
        font-weight: bold;
    }

    .imgResponsive {
        width: 590px;
        height: 375px;
    }
    .imgResponsive:hover {
        cursor: pointer;
    }


    @media only screen and (max-width: 1600px) {
     

      .center-image{
          display: flex;
          text-align: center;
          align-content: center;
          justify-content: center;
      }
       .flex-container {
            max-width: 100%;
            margin: 0;
            padding: 30px;   
        }

    }
</style>
