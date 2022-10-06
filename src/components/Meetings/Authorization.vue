<template>
    <Modal>
        <div ref="element" id="window">
            <div class="hover-close">
                <button @click="onClose" class="close">&times;</button>
            </div>
            <h2>{{title}}</h2>
            <p>
               {{body}}
            </p>
            <div class="flex-box">
                <input autofocus @keydown.enter="onEnter" v-model="passInput" type="text"
                 :placeholder="inMessage" />
                <button type="button" @click="onEnter" class="enter">Verify</button>
            </div>
            <div v-if="error">
                <p style="color: red;font-weight: bold;">Incorrect ticket number.</p>
            </div>
        </div>
    </Modal>
</template>
<script setup>
    import { ref } from 'vue'
    import Modal from '@/components/Modal'
    import sha1 from 'sha1'

    const props = defineProps({
        title: String,
        body: String,
        inMessage: String
    })

    const emit = defineEmits(['accept', 'close'])
    const passInput = ref("")
    async function onEnter(){
        let encode = btoa(passInput.value)
        let final = sha1(encode)
        let form = new FormData();
        form.append('token', final)
        let response = await fetch('https://www.lrgvdc911.org/php/agendas/thor.php',
        {
            method: 'POST',
            body: form
        })
        let result = await response.json();
        if(result.response) {
            console.log(result.response)
            emit('accept', result.response) 
            onClose();    
        } else alert('Password incorrect');
    
    }

    function onClose() {
        emit('close', false);
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
