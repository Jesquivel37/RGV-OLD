<template>
    <div class="center">
        <div style="text-align: center;padding: 30px;">
            <img src="@/assets/logo_line.break3.png" />
        </div>
        <div>
            <h2>9-1-1 Call & Text Volume</h2>
        </div>
        <Body bgColor="#8a0303" t1Value="882,416" t1Name="RESIDENTS SERVE"
        t2Value="41,075" t2Name="AVERAGE 9-1-1 CALLS PER MONTH" t3Value="1,369" t3Name="AVERAGE 9-1-1 CALLS PER DAY" />
    </div>
</template>
<script>
import Body from '@/components/Home/Columns/Body'
export default {
    components: {Body},
    setup() {

    },
}
</script>
<style scoped>
    .center {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        margin-bottom: 20px;

    }h2 {
        font-size: 50px;
        color: rgba(20, 57, 117, 1);
        text-align: center;
        margin-left: 20px;
    }
    .lcolumn {
        background: #8a0303;
    }    

    img {
        width: 100%;
    }

    @media only screen and (max-width: 480px) {

    h2 {
        font-size: 28px;
    }
}




</style>