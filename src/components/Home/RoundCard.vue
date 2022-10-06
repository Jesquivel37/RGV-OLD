<template>
    
<div id="card" :style="{}">
    <div id="round" 
    :style="{backgroundColor: circleBackColor, height: `${circleSize}px`, 
    width: `${circleSize}px`,marginTop:-(circleSize/2) + 'px',
    marginLeft: -(circleSize/2) + 'px'}">
        <h2 :style="{color: circleTextColor}">{{statusNumber}}</h2>
    </div>
    <div class="flex-con">
        <div>
            <h3>{{title}}</h3>
        </div>
        <div>
            <!-- {#each p as para}
                <p>{para}</p>
           {/each} -->
           <p v-for="para in p" :key="para">{{para}}</p>
        </div>
            <div v-show="linkOn">
               
                <button >
                     <router-link to="Letter">{{linkTitle}}</router-link>
                </button>
            </div>
    </div>


</div>
</template>
<script>
export default {
    props: {title: String, statusNumber: Number, linkOn:{ type: Boolean, default: false}, linkTitle:String, p:Array},
    setup() {
         const cardHeight = 280;
         const cardWidth = 430;
         const circleSize = 80;
         const circleTextColor = "#fff";
         const circleBackColor = "#2B4988";

         return {cardHeight, cardWidth, circleSize, circleTextColor, circleBackColor}
    },
}
</script>
<style scoped>
a{
    color: white;
    text-decoration:none;
}
    .flex-con{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content:space-around;
    }

   
    #card {
        border: 1px solid rgb(222, 222, 222);
        height: 280px;
        width: 430px;
       
        
    }
    #round {
        position: relative;
        top:0;
        left: 50%;
        border-radius: 50%;
        border: 1px solid rgb(222, 222, 222);
        text-align: center;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
    }
    h2{
        
        text-align: center;
    }

    h3::after{
        content: '';
    width: 30%;
    margin: 15px auto 0;
    display: block;
    border-bottom: 1px solid #dedede;
    }
   
    button{
        background: #D34628;
        color: #fff;
        width: 120px;
        height: 40px;
        border: 1px solid #243C6B;
    }
    button:hover{
        background: rgba(245, 86, 50, 0.774);
        cursor: pointer;
    }

@media only screen and (max-width: 480px) {

    #card {
        height: auto;
    }
}

 
</style>