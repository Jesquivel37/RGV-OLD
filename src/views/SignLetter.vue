<template>
    <div>
        <Signature @complete="onClose" v-if="sign" />
        <div class="grid">
            <div class="tools print-nav">
                <h1>What's Next?<br />
                    Select your option.
                </h1>
                <ul>
                    <li>
                       <span v-show="error" class="txt-error">E-mail is not valid</span>
                       <br/>
                       <input type="email" :class="{error : error}" @blur="verifyEmail" v-model="email" placeholder="Enter E-mail" />
                       <input type="email" :class="{error : error}" @blur="verifyEmail" v-model="cemail" placeholder="Confirm E-mail" />
                        <button :disabled="disabled" type="button" ref="btn" @click="sendEmail" >Send E-Mail</button>
                    </li>
                    <li><button @click="letters.methods.downloadPDF">Download</button></li>
                </ul>
            </div>
            <iframe ref="pdf" id="letter"  name="letter" />
        </div>
        
    </div>
</template>
<script>
import { ref, inject } from 'vue'
import Signature from '@/components/Letter/Signature'
export default {
    components: { Signature },
    setup() {
        const sign = ref(true)
        const error = ref(false)
        const disabled = ref(true)
        const pdf = ref(null)
        const email = ref('')
        const cemail = ref('')
        const letters = inject('letters')
        return { pdf, letters, sign, email, cemail, error, disabled }
    },
    mounted() {

        if(this.letters.state.pdf) { 
            console.log("hello")
            this.pdf.src = this.letters.state.pdf + '#zoom=80'
            
        }
        else if(this.$route.params.id){
            console.log("ROUTER ID")
             this.letters.methods.setPDFName(`${this.$route.params.id}_${Date.now()}.pdf`);
            console.log(this.letters.state.pdf)
            console.log(this.letters.state.ticket)
            if(this.letters.state.ticket){
                console.log('generate form')
                this.generateForm()
            }else{
                console.log('get tickets')
                this.letters.methods.getTickets().then(() => {
                    this.generateForm()
                })
            }
            
        }else{
            this.$router.push('/')
        } 
        
        console.log(this.$route.params.id)
        this.letters.methods.setObject(this.pdf)
         
        //this.pdf.addEventListener("cat", (e) =>  { this.pdf.src = this.letters.state.pdf;  });
    },
    methods: { 
        verifyEmail() {
             if(this.email.length == 0){
                 this.error = false;
                 return this.disabled = true;
             }
             if(!this.email.includes('@') || !this.email.includes('.')) {
                this.error = true;
                return this.disabled = true;
            }
            if(this.email != this.cemail){
                return this.disabled = this.error = true;
            }
            this.error = false;
            return this.disabled = false
        },
        onClose() {
            this.sign = false;
            this.pdf.src = this.letters.state.pdf;
        },
        generateForm() {
            this.letters.methods.findTicket(this.$route.params.id)
            this.letters.methods.generateForm().then((src) => {
               this.pdf.src = src
            })
        },
        sendEmail() {
            this.error = false;
            let data = new FormData()
            data.append('pdfName', this.letters.state.pdf_name)
            data.append('email', this.email)
            data.append('id', this.letters.state.ticket.objectid)
            //https://gis.lrgvdc911.org/php/spartan/api/v3/sendEmail.php
            fetch('https://gis.lrgvdc911.org/php/spartan/api/v3/sendEmail.php', {method: 'post', body: data}).then((e) => {
                alert("E-mail has been sent please check mailbox.");
            })

        }
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
    }

    ul{
        padding: 0 20px 0 80px;
        list-style-type: decimal;
    }
    li {
        padding: 4px;
    }
    button{
        width: 88%;
        cursor: pointer;
        font-weight: bold;
        color: white;
        background: rgb(53, 33, 33);
    }
    input[type="email"]{
        width: 88%;
        height: 55px;
    }
    .txt-error {
        color: red;
        font-weight: bold;
    }
    .error {
        border: 1px solid red;
    }
    .tools{
        margin: 0 auto;
        margin-right: 10px;
    }
    .grid{
        display: flex;
        flex-flow: row wrap;
        height: 100vh;
    }
    iframe { 
        width: 100%;
        height: 100%;
    }

    @media(min-width:768px){
        .grid {
            flex-flow: row nowrap;
        }
    }
</style>