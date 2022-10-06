<template>
  
    <div id="card">
        <div class="icon round"><font-awesome-icon icon="signature" /></div>
        <h5>{{ticket.cfirst_name}} {{ticket.clast_name}}</h5>
        <div class="body">
            <ul>
                <li>{{ticket.created_date}}</li>
                <li>{{parseLegal()}}</li>
                <li>{{ticket.property_id}}</li>
            </ul>
             <button type="button" @click="$emit('authorize', ticket)">Sign Letter</button>
        </div>
       
    </div>
</template>
<script>
export default {
    props: ['ticket'],
    methods: {
        parseLegal() {
            if(this.ticket){
                if(this.ticket.subdivision && this.ticket.lot_num){
                    return `${this.ticket.subdivision} LOT ${this.ticket.lot_num}`;
                }
                else{
                    return this.ticket.subdivision;
                }
            }
        },
    }
}
</script>
<style scoped>
    #card {
        width: 330px;
        height: 300px;
        border: 2px solid black;
        background-color: white;
    }
    .icon {
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
    }
    .round{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid rgb(222, 222, 222);
        text-align: center;
        background: rgb(45, 45, 97);
        color: white;
    }
    button{
        color: white;
        background-color: rgb(45, 45, 97);
    }
    h5{ text-align: center;
    }
    ul{
        padding: 0;
        list-style-type: none;
    }
    .body {
        padding: 0;
        text-align: center;
        width: 280px;
        height: 140px;
        margin: 0 auto;
    }

  
</style>