<template>
   <Modal>
        <div class="container" :class="{close: close}">
            <div class="header">
                <h2>Add Signature</h2>
            </div>
            <div class="input-group">
                <input ref="target" v-model="input" type="text" 
                @keyup="onDisplay" @keydown.enter="onSign"
                placeholder="Enter Full Name for Signature" autofocus />
                
                <button 
                @click="onClear">Clear</button>
            </div>
            <div class="wrapper">
                <canvas style="border:1px solid #d3d3d3;" 
                width="380" height="100" ref="sign">
                </canvas>
            </div>
            <div class="footer">
                <span>I consent to use Electronic Records and Signatures</span>
                <br/>
                <button @click="onSign">Accept/Sign</button>
            </div>
        </div>
    </Modal>
</template>
<script>
import API  from '@/modules/Api'
import Modal from '@/components/Modal'
import { ref, inject } from 'vue'
export default {
    components: {Modal},
    setup() {
        const target = ref(null)
        const close = ref(false)
        const sign = ref(null)
        const ctx  = null;
        const input = ref('')
        const letters = inject('letters');
       
        return { sign, ctx, input, letters, close, target }
    },
    mounted() {
       this.target.focus()
       this.ctx = this.sign.getContext('2d')
       this.ctx.font = '60px Dancing'
    },
    methods: {
        onDisplay(e) {
            this.ctx.font = '60px Dancing'
            this.ctx.clearRect(0, 0, this.sign.width, this.sign.height)
            if(this.input.length < 15){
                 this.ctx.font = '60px Dancing'
            }else{
                 this.ctx.font = '40px Dancing'
            }
           
            this.ctx.fillText(this.input, 10, 60); 
        },
        async onSign() {
                const response = await this.letters.methods.onSignature(this.sign, this.input)
                const results = await this.letters.methods.generateJPG(response.pdf)
                this.close = true;
                this.$emit('complete')

                //Send PDF to the server for attachment to spartan pro.
                let data = new FormData();

                data.append("pdfName", this.letters.state.pdf_name);
                data.append('jpgName', this.letters.methods.getJPGName())
                data.append("pdf64", response.pdf);
                data.append('jpg64', results.jpg)
                data.append('id', this.letters.state.ticket.id_ticket)
                API.sendForm(data)
            
        },
        onClear(){
            this.input = ''
            this.ctx.clearRect(0, 0, this.sign.width, this.sign.height)
        }
    }
}
</script>
<style scoped>
h2{ text-align: center}
 .close{ display: none; }
 .container {
     position: absolute;
     left: 50%;
     top:50%;
     width: 550px;
     height: 300px;
     margin-left: -225px;
     margin-top: -200px;
     background: white;
     z-index: 999;
 }
 .header{
     position: relative;
     color: white;
     border: 1px solid green;
     background: #263E70;
     margin-bottom: 20px;
 }
 .wrapper{
     display: flex;
     justify-content: center;
     margin-bottom: 20px;
 }
 .footer{
     display: flex;
     justify-content: center;
     flex-direction: column;
     text-align: center;
 }
 .input {
     display: flex;
     justify-content: center;
 }
 span{
    font-weight: bold;
 }

 input:focus{
     outline: none;
     border-color: #0274be;
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