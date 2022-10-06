<template>
    <div id="card" style="height: 500px; width: 350px;">
        <div id="photo"  >
            <h2 class="content">{{title}}</h2>
            <img :src="photo" on:error loading="lazy" alt="Stock" style="width: 80%; height:300px;object-fit:cover;">
               <p> 
                <span class="content">{{name}}</span>
                <span class="content">{{agency}}</span>
                <span class="content">{{address}}</span>
                <span class="content">{{address2}}</span>
                <span class="content">{{phone}}</span>
                </p>
            </div>
        
        </div>
</template>
<script>
export default {
    props: ['title','photo','name','agency', 'address', 'address2', 'phone']
}
</script>
<style scoped>
 .card{
     width: 80px;
 }
 ul{
     list-style-type: none;
 }
 span {
     
     display: block;
     margin-top: 5px;
     font-weight: bold;
 }

 @media screen and (max-width: 1024px) {

    p {
        margin-left: 35px;
        text-align: justify;
    }
            
       
    }


</style>