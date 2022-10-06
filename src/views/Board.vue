<template>
    <div class="board-con">
       <div class="title">
           <h1>BOARD OF MANAGERS</h1>
       </div>
       <div class="board board-managers">
          
            <CardBoard
             title="President"  agency="Hidalgo County Sheriff" name="Sheriff J. E. 'Eddie' Guerra"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/guerra.png')" address="711 El Cibolo RD" address2="Edinburg, TX 78541" phone="PH: 956-383-8114" />


            <CardBoard
             title="Vice President"  agency="City of Raymondville" name="Mayor Gilbert Gonzales"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/GGONZALES.jpg')" address="142 S. 7th St" address2="Raymondville, TX 78580" phone="PH: 956-689-2443 ext. 1408" />

             <CardBoard
             title="Secretary"  agency="City of Weslaco" name="Mayor David Suarez"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/DSAUREZ.jpg')" address="255 S. Kansas Ave" address2="Weslaco, TX 78596" phone="PH: 956-968-3181" />

             <CardBoard
             title="Treasurer"  agency="City of McAllen" name="Mayor Pro-Tem Joaquin 'J.J.' Zamora"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/JZAMORA.jpg')" address="1300 Houston Ave" address2="McAllen, TX 78501" phone="PH: 956-681-1006" />


       </div>
       <div class="other">
           <div class="title">
               <h1>BOARD MEMBERS</h1>
           </div>
           <div class="board">

                <CardBoard
               agency="City of Alton" name="Mayor Pro Tem Arturo Galvan Jr"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/AGALVAN.png')" address="416 S Alton BLVD. Suite B" address2="Alton, TX 78573" phone="PH: 956-432-0760" />

              <CardBoard
               agency="City of Edinburg" name="Mayor Ramiro Garza Jr."  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/RGARZA.png')" address="P.O. Box 1079" address2="Edinburg, TX 78540" phone="PH: 956-383-7111" />

              <CardBoard
               agency="City of Elsa" name="Mayor Alonzo 'AL' Perez Jr"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/APEREZ.webp')" address="PO Box 427" address2="Elsa, TX 78543" phone="PH: 956-262-2127" />

              <CardBoard
               agency="City of Granjeno" name="Mayor Yvette Cabrera"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/unknown-wm.png')" address="6603 S FM 494" address2="Mission, TX 78572" phone="PH: 956-519-0032" />
               
               
           </div>
           <div class="board">

               <CardBoard
               agency="City of Mercedes" name="Mayor Oscar D. Montoya"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/OMONTOYA.jpg')" address="PO Box 837" address2="Mercedes, TX 78570" phone="PH: 956-565-3114" />

             <CardBoard
               agency="City of Peñitas" name="Mayor Rodrigo 'Rigo' Lopez"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/RLOPEZ.jpg')" address="P.O. Box 204" address2="Penitas, TX 78576" phone="PH: 956-581-3345" />

             <CardBoard
               agency="City of Sullivan City" name="Mayor Alma D. Salinas"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/unknown-wm.png')" address="PO Box 249" address2="Sullivan City, TX 78595" phone="PH: 956-485-2828" />

             <CardBoard
               agency="Willacy County" name="Judge Aurelio 'Keeter' Guerra"  cardHeight="500" cardWidth="350"
             :photo="require('@/assets/board/unknown.png')" address="576 W. Main Ave. #152" address2="Raymondville, TX 78580" phone="PH: 956-689-3393" />


               
           </div>
       </div>
    </div>
</template>
<script setup>
import CardBoard from "@/components/Board/CardBoard.vue"

</script>
<style scoped>
.board-con{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 0 auto;
}
.board{
    display: flex;
    margin: 20px;
    flex-direction: row;
    justify-content: center;
    align-content: center;

}

.board-managers{
    margin-bottom: 150px;
}

.board > div{
    flex:1 1 auto;
    margin: 10px;
}
.title{
    text-align: center;
    color: #273D6F !important;
    text-overflow: ellipsis;
}

@media screen and (max-width: 1024px) {

       .board{
            display: grid;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            text-align: center;
            
       }
    }
</style>