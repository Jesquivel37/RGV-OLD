<template>
     <div id="title">
                <h1>Address Requests</h1>
               
                <div class="flex">
                    <RoundCard :statusNumber="stats.state.statusYear"
                    :p="['Above is the total address requests', 'completed since 2010']"
                    title="Completed Requests" />
                   
                   <RoundCard  :statusNumber="stats.state.statusMonth"
                    :p="['Above is our current address requests', 'completed for this month. ']"
                    title="Current Requests this Month" />
                    
                    <RoundCard  :statusNumber="stats.state.statusCurrent"
                    :linkOn="true" 
                    linkTitle="Check Status"
                    :p="['Have you called to register for your 9-1-1 address?','Click below to see if your address letter is ready!',]"
                    title="Open Requests" />
                </div>
            </div>
</template>
<script>
import RoundCard from '@/components/Home/RoundCard'
import { inject } from 'vue'
export default {
    components: {RoundCard},
    setup() {
        const stats = inject('stats')
        return {stats}

    },
    mounted() {
        let lastScrollTop = 0;
        document.body.onscroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                if (st > lastScrollTop){
                    // downscroll code
                    this.stats.methods.viewYear();
                    this.stats.methods.viewMonth();
                    this.stats.methods.viewCurrent();
                
                } else {
                    // upscroll code
                }
                lastScrollTop = st <= 0 ? 0 : st;
                
        };
    }

    
}
</script>
<style scoped>
 .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 27pt;
        text-align: center;
        line-height: 50px;
        padding: 75px;
        width: 350px;
        height: 250px;
                
    }

     .flex{
        margin: 80px auto;
        display: flex;
        flex-direction: row;
        justify-items: center;
        text-align: center;
        
    }
    h1{
        font-size: 50px;
        color: #F62817;
        text-align: center;
    }


</style>