<template>
    <div class="container">
        <div class="pics-manage">
            <h2 class="titleCenter">Emergency Communications Contact List</h2>
                <div class="grid-staff">
                <PhotoCard
                office="(956) 682-3481 Ext. 140" name="Manuel 'Manny' Cruz" email="mcruz@lrgvdc911.org " cardHeight="500" cardWidth="350"
                :photo="require('@/assets/staff/MCRUZ.jpg')" title="Executive Director" />
        
                </div>
        </div>

    <h2 class="titleCenter">Geographic Information System (GIS)</h2>

        <div class="grid-staff">
            
            <PhotoCard office="(956) 682-3481 Ext. 144" name="Jose A. Garcia" email="jgarcia@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/JGARCIA.jpg')" title="Program Supervisor II" />

        </div>

        <div class="grid-staff">

            <PhotoCard office="(956) 682-3481 Ext. 136" name="Selenne I Vallejo" email="svallejo@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/SVALLEJO.jpg')" title="Program Specialist I" />


            <PhotoCard office="(956) 682-3481 Ext. 135" name="Monica Estrada" email="mestrada@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/MESTRADA.jpg')" title="Customer Service II" />
        
        </div>     

        <div class="grid-staff">
            
            <PhotoCard office="(956) 682-3481 Ext. 187" name="Jose L. Hernandez" email="jhernandez@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/LHERNANDEZ.jpg')" title="Program Specialist I" />

           
            <PhotoCard
             office="(956) 682-3481 Ext. 139" name="Rosemary Contreras" email="rcontreras@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/RCONTRERAS.jpg')" title="Customer Service IV" />

        </div>

    <h2 class="titleCenter">Systems and PSAP Operations</h2>

        <div class="grid-staff">
            <PhotoCard office="(956) 682-3481 Ext. 124" name="Dennis Moreno" email="dmoreno@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/DMORENO.jpg')" title="Program Supervisor I" />

             <PhotoCard office="(956) 682-3481 Ext. 137" name="Eduardo Gil" email="egil@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/unknown.png')" title="Network Specialist III" />
        </div>

        <div class="grid-staff">
             <PhotoCard office="(956) 682-3481 Ext. 138" name="Juan Esquivel" email="jesquivel@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/unknown.png')" title="System Support Specialist " />
           
             <PhotoCard office="(956) 682-3481 Ext. 154" name="Ron Hall" email="rhall@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/RHALL.jpg')" title="System Support Specialist " />

             <PhotoCard office="(956) 682-3481 Ext. 167" name="Darrick Fuentes" email="dfuentes@lrgvdc911.org"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/staff/unknown.png')" title="System Support Specialist " />

             
        </div>

    <h2 class="titleCenter">Operations</h2>

        <div class="grid-staff">
            
         <PhotoCard office="(956) 682-3481 Ext. 174" name="Maribel Alonzo" email="malonzo@lrgvdc911.org"  cardHeight="500" 
            cardWidth="350" :photo="require('@/assets/staff/MALONZO.jpg')" title="Program Specialist I" />

        </div>    
 
    </div>
</template>
<script>
import PhotoCard from '@/components/Contacts/PhotoCard'
export default {
    components: { PhotoCard },
}
</script>
<style scoped>
h2{
        color: #273D6F;;
        font-size: 50px;
        font-weight: bold;
        margin: 3px 0 10px;
    }

    .titleCenter{
        text-align: center;
        margin-top: 2%;
    }


       .pics-manage{
        height: auto !important;
        padding-top: 5%;
        padding-bottom: 0%;
    }
    .grid-staff{
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
        align-items:center;
        flex-wrap: wrap;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 3%;
        
    }


     @media screen and (max-width: 1024px) {

       .grid-staff{
            display: grid;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            
       }
    }

    @media screen and (max-width: 600px) {

       .titleCenter {
           font-size: 36px;
       }
    }
</style>