<template>
    <Modal>
        <div ref="element" id="window">
            <div class="hover-close">
                <button @click="onClose" class="close">&times;</button>
            </div>
            <h2>Authorized User</h2>
            <p>
                {{fixName()}} please enter ticket number to verify this ticket is associated to you.
                To protect your private information we implemented this security measure.
            </p>
            <div class="flex-box">
            
                <input v-if="mobile" @keydown.enter="onEnter" @keyup="onValidate" v-model="value" type="number" placeholder="Enter Ticket Number" />
                <input v-else @keydown.enter="onEnter" @keyup="onValidate" v-model="value" type="text" placeholder="Enter Ticket Number" />
                <button type="button" @click="onEnter" class="enter">Verify</button>
            </div>
            <div v-if="error">
                <p style="color: red;font-weight: bold;">Incorrect ticket number.</p>
            </div>
        </div>
    </Modal>
</template>
<script>
import Modal from '@/components/Modal'
import {ref, inject} from 'vue'
export default {
    components: { Modal },
    setup() {
        const letters = inject('letters')
        const value = ref(null)
        const element = ref(null)
        const mobile = window.isMobile;
        const error  = ref(false)
        return { element, mobile, error, value, letters }
    },
    methods: {
        onClose(){
            this.$emit('close')
        },
        onEnter(){
            const id = this.letters.state.ticket.objectid;
    
            if(id == this.value){
                this.$router.push({name: 'Sign'});
            }else{
                this.error = true;
            }
        },
        fixName() {
            console.log(this.letters.state.ticket)
            let lower = this.letters.state.ticket.cfirst_name.toLowerCase();
            let arr = lower.split(" ");
            let name = "";
            
            arr.forEach(letter => {
                if(letter){
                        name += letter.replace(/^./, letter[0].toUpperCase()) + " "; 
                }else {
                        name += " "; 
                }
                
            });
            return name
        },
        onValidate(e){
            const target = e.target;
            const value = target.value;
            if(e.key.match(/[a-z]/i)){
               if(value == 1) target.value = ''
               target.value = value.replace(e.key, '')
            }
        }   
    }
}
</script>
<style scoped>
.modal{
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
 #window{   
        position: relative;   
        width: 500px;
        height: 250px;
        background: white;
        border: 4px solid rgb(219, 92, 92);
        margin: 0 auto;
    }
    h2{
        text-align: center;
    }
    p{
        text-align: center;
        padding: 8px;
    }

    .flex-box{
        display: flex;
        flex-basis: auto;
        align-items: center;
        justify-content: center;
    }
    .hover-close{
        position: absolute;
        right: -12px;
        top: -14px;       
    }
    .close{
        border-radius: 30px;
        width: 40px;
        height: 40px;
        background: rgb(209, 62, 62);
        text-align: center;
        color: white;
        border: 1px solid black;
    }
    .close:hover{
        cursor: pointer;
         background: rgb(209, 62, 62, 0.8);
    }
     .enter{
        background: rgb(45, 45, 97);
        color:white;
    }
    .enter:hover{
        background: rgba(45, 45, 97, 0.5);
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {

        #window{
            width: 90%;
            left: 0;
            margin-left:0;
            margin-top:0;
            
        }

    }
</style>