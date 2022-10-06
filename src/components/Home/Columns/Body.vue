<template>
    <div class="body" :style="{background: bgColor}">
        <div class="inner">
            <div class="title">
                <span>{{t1Value}}</span>
                <span>{{t1Name}}</span>
            </div>
            <div class="title">
                <span>{{t2Value}}</span>
                <span>{{t2Name}}</span>
            </div>
            <div class="title">
                <span>{{t3Value}}</span>
                <span>{{t3Name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["bgColor", "t1Value", "t1Name", "t2Value", "t2Name", "t3Value", "t3Name"],
    setup() {
        
    },
}
</script>
<style scoped>
.body {
    color: white;
}
.inner{
    display: flex;  
    justify-content: center;
    

}
.title{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 18pt;
    padding: 75px;
    text-align: center;
}

 @media screen and (max-width: 880px) {
      .body {
          height: auto;
          padding: 0;
      }
      .title {
          height: auto;
      }
       .inner{
           display:flex;
           align-items: center;
           max-height: 100%;
           flex-direction: column;
           margin-top: 0;
       }
    }
</style>