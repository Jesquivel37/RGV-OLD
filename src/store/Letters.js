import { reactive } from 'vue';
import { PDFDocument } from 'pdf-lib'

const state = reactive({tickets: [],vtickets: [],object: null, pdf: null,ticket: null, pdfBytes: null,pdfReady: false, pdf_name: 'test.pdf'})
let pdfjsLIb = null;

const url = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/getAllReadyTickets/";
const pdfURL = 'https://gis.lrgvdc911.org/PDF/LETTER_TEMPLATE.pdf'//"https://www.lrgvdc911.org/pdf/LETTER_TEMPLATE.pdf"

const methods = {
    async getTickets() {
        let response = await fetch(url);
        let data = await response.json()
        state.tickets = data;
        state.vtickets = data;
    },
    async getPDFBytes() {
        state.pdfBytes = await fetch(pdfURL).then(res => res.arrayBuffer())
        state.pdfReady = true;
    },
    refresh() {
        state.vtickets = state.tickets;
    },
    findTicket(id) {
        state.ticket = state.tickets.find(ticket => ticket.objectid === id)
        console.log(state.tickets)
        console.log(state.ticket, id)
        return state.ticket
    },
    filterTickets(id) {
        state.vtickets = state.tickets.filter(ticket => ticket.objectid === id)
    },
    async generateForm() {
        var today = new Date()
       
        const month = today.
        toLocaleString('default', { month: 'long' });
        const full_date = `${month} ${today.getDate()}, ${today.getFullYear()}`
        state.ticket.full_date = full_date;
        const document = await PDFDocument.load(state.pdfBytes);
        
        // Set MetaData.
        document.setTitle(state.pdf_name);
        document.setAuthor('RGV9-1-1')
        document.setSubject('Address Notification Letter')
        document.setCreator('RGV 9-1-1')



        const form = document.getForm()
        form.getTextField('date').setText(full_date)
        form.getTextField('customer_name')
        .setText(`${state.ticket.cfirst_name} ${state.ticket.clast_name}`)
        form.getTextField('ref').setText(`${state.ticket.property_id}`)
        form.getTextField('ticket').setText(state.ticket.objectid)
        form.getTextField('address').setText(state.ticket.full_address)
        form.getTextField('city').setText(`${state.ticket.msag_comm}, TX`)
        form.flatten();  
        const pdfDataUri = await document.saveAsBase64({ dataUri: true });
        state.pdf = pdfDataUri
        return pdfDataUri
    },
    async onSignature(sign, input) {
        var today = new Date()

        const month = today.toLocaleString('default', { month: 'long' });
        const full_date = `${month} ${today.getDate()}, ${today.getFullYear()}`

        var image = sign.toDataURL().split(",");
        const arrayBuffer = Uint8Array.from(atob(image[1]), c => c.charCodeAt(0))
        const document = await PDFDocument.load(state.pdfBytes);


        // Set MetaData.
            document.setTitle(state.pdf_name);
            document.setAuthor('RGV9-1-1')
            document.setSubject('Address Notification Letter')
            document.setCreator('RGV 9-1-1')

            const sigIMG = await document.embedPng(arrayBuffer)
            const form = document.getForm()
           
            form.getTextField('date').setText(state.ticket.full_date)
            form.getTextField('customer_name').
            setText(`${state.ticket.cfirst_name} ${state.ticket.clast_name}`)
            form.getTextField('ref').
            setText(`${state.ticket.property_id}`)
            form.getTextField('ticket').
            setText(state.ticket.objectid)
            form.getTextField('address').
            setText(state.ticket.full_address)
            form.getTextField('city').
            setText(`${state.ticket.msag_comm}, TX`)
            form.getTextField('printed_name').setText(input)
            form.getButton('signature').setImage(sigIMG)

            form.getTextField('date_signature').setText(full_date)
            form.flatten();  
            let pdfDataUri = await document.saveAsBase64({ dataUri: true });
            let pdfToJpg = await document.saveAsBase64()

          
            this.setPDF(pdfDataUri)

            return {'success' : true, 'pdf' : pdfToJpg};
        
          
    },
    async generateJPG(pdfData) {
        pdfjsLIb = window['pdfjs-dist/build/pdf'];
        pdfjsLIb.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        var loadingTask = pdfjsLib.getDocument({data: atob(pdfData)});
        return loadingTask.promise.then((pdf) => {
           return pdf.getPage(1).then((page) => {
                var scale = 1.5;
                var viewport = page.getViewport({scale: scale});
                var canvas = document.createElement("CANVAS");
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                var task = page.render({canvasContext: context, viewport: viewport})
                return task.promise.then(() => {
                   
                    return { "success" : true, "jpg" : canvas.toDataURL('image/jpeg') }
                });
            })
        })
    },
    downloadPDF() {
        const downloadLink = document.createElement('a')
        const fileName = state.pdf_name;
        downloadLink.href = state.pdf
        downloadLink.download = fileName
        downloadLink.click()
    },
    setSelection(ticket){
        state.ticket = ticket;
    },
    setObject(ele){
        state.object = ele;
    },
    setPDF(pdf) {
        state.pdf = pdf
    },
    setPDFName(name) {
        state.pdf_name = name
    },

    getJPGName() {
        return state.pdf_name.replace(".pdf", ".jpg")
    }
}


export default { state, methods }