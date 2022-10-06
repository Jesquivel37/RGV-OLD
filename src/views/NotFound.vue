<template>
    <div>
       <div class="flex-container">
            
            <h1><center>Sorry, we're doing some work on this page</center></h1>
                    <div class="grid-container-2"></div>             
        <div class="center-image">
            <center>
            <img class="imgResponsive" src="@/assets/pages/pubed/UnderConstruction.jpg" alt="Under Construction" /> 
            <h1> Thank you for being patient.</h1>
            </center>
        </div>
    </div>
    </div>
</template>
<style scoped>
  h1 {
        color: #36454f ;
        
    }

    .flex-container {
        max-width: 1200px;
        margin: auto;
        padding: 10px;
        height: 80vh;
    }

    img {
        margin-right: 30px;
        padding-bottom: 25px;
    }

    .grid-container-2{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .imgResponsive {
        width: 590px;
        height: 375px;
        align-self: center;
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

     @media only screen and (max-width: 1290px) {

         .grid-container-2{
             display: flex;
             flex-direction: column;
             justify-content: space-around;
         }


       
     }
</style>