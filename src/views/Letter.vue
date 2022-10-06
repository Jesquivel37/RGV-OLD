<template>
   <div class="flex-main">
        <!-- <div class="center">
            <img loading="lazy"  class="clickable" alt="LV" src="@/assets/pages/letter/ADDRESS_LETTER_STEPS_BANNER.webp" />
        </div> -->
        <div></div>
        <br />
        <br />
        <br />
        <br />
        <Authorization  v-if="authorize" @close="authorize = false" />

        <div class="input-group">

            <input v-if="mobile" type="number"  @keydown.enter="letters.methods.filterTickets(input)" v-model="input" placeholder="Enter Ticket Number" />
            <input v-else type="text" @keydown.enter="letters.methods.filterTickets(input)" v-model="input" placeholder="Enter Ticket Number" />
            
             <button @click="letters.methods.filterTickets(input)">Search</button>
             <button @click="[letters.methods.refresh(), input = '']">Refresh</button>
        </div>
        <br />
       
        <div id="table">
            Total Tickets: {{letters.state.vtickets.length}}
            <div class="card">
                <Card v-for="(ticket, index) in letters.state.vtickets" v-bind:ticket="ticket"
                    v-bind:fname="ticket.cfirst_name" v-bind:lname="ticket.clast_name"
                    :number="index" v-bind:date="ticket.created_date"
                    @authorize="processLetter"
                    :key="ticket" />
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Letter/Card'
import Authorization from '@/components/Letter/Authorization'

import {inject, ref} from 'vue'
export default {
  components: { Authorization, Card },
  setup() {
    const input = ref('')
    const authorize = ref(false)
    const mobile = window.isMobile;
    const letters = inject('letters')
    return { mobile, letters, input, authorize, name }
  },
  mounted() {
    
    this.lazyLoadingCSS()
  },
  methods: {
     async processLetter(ticket) {
            console.log('process ticket')
            console.log(ticket)
            this.authorize = true;
            let name = `${ticket.objectid}_${Date.now()}.pdf`
            console.log(name)
            this.letters.methods.setPDFName(name)
            this.letters.methods.setSelection(ticket)
            this.letters.methods.generateForm().then(() => {
            })
            
     },

     lazyLoadingCSS() {
        const links = document.getElementsByTagName("link");
        const size = links.length;
        let found = false;
      
        for(var i = 0; i < size; i++){
            
            if(links[i].rel == "stylesheet" && links[i].href.indexOf("metro-table.css") > 0){
                found = true;
                break;
            }
        }

        if(!found) {
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = './css/metro-table.css';
            
            head.appendChild(style);
        }

        window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
 .flex-main{
        padding-top: 50px; 
}
    .card {
        text-align: center;
         --auto-grid-min-size: 24rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
        grid-gap: 5px;
  
}
    #table{
        display: grid;
        padding: 20px;
        border: 1px solid #ccc!important;
        background: #f5f5f5;
    }
     img {
    max-width: 98%;
    max-height: 100%;
    border: 1px solid #ccc!important;
    padding: 4px;
}

    .center {
        text-align: center;
    }
    #table{
        overflow: auto;
    }
    button{
        background: rgb(45, 45, 97);
        color:white;
    }
    button:hover{
        background: rgba(45, 45, 97, 0.5);
        cursor: pointer;
    }
    .input-group{
        text-align: center;
    }
    input{
        width: 80%;
    }

   

   
</style>
