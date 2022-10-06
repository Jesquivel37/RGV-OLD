<template>
    <div id="card" style="height: 500px; width: 350px;">
        <div id="photo"  >
            <img :src="photo" on:error loading="lazy" alt="Stock" style="width: 80%; height:300px;object-fit:cover;">
            <div id="title">
                <h2>{{name}}</h2>
                <h2 class="small-line">{{title}}</h2>
                <p><a :href="`mailto:${email}`">{{email}}</a></p>
                <h2 class="small-line">{{office}}</h2>
            </div>
        
        </div>
    </div>
</template>
<script>
export default {
    props: ['name', 'title', 'email', 'office', 'photo']
}
</script>
<style scoped>
   h2{
        text-align: center;
       
    }
    .small-line{

        line-height: 2px;
    }
    a{
        color: white;
    }
    #title{
        position: relative;
        bottom: 23px;
        color: white;
        height: 132px;
        background: rgba(20, 57, 117, 1);
    }

    #photo{
        height: 435px;
        padding: 16px;
        text-align: center;
        background: rgba(20, 57, 117, 1);
        border: 6px solid rgba(255, 255, 255, 0.685);
       
    }

    img{
        border: 2px solid #ccc!important;
    }
</style>