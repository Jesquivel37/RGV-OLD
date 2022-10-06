<template>
    <Modal>
         <div id="window">
            <div id="body">
                <div>
                    <p>Do you want to delete?</p>
                    <div>
                        <button @click="onAccept">Yes</button>
                        <button @click="onDecline">No</button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>
<script setup>
    import Modal from "@/components/Modal"
    const emit = defineEmits('accept', 'decline')
    function onAccept() {
        emit('accept')
    }
    function onDecline() {
        emit('decline')
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

#body{
    display: flex;
    align-items: center;
    justify-content: center;
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
