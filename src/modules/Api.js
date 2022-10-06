
const apiLetter = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/grabPDFESign/";
let timer = null;
const methods = {
    sendForm(form) {   
        // 1. Create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();
        // 2. Configure it: GET-request for the URL /article/.../load
        xhr.open('POST', apiLetter, true);
        
        // 4. This will be called after the response is received
        xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
          
              alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
            
            } 
        };
        
        xhr.onerror = function() {
            alert("You're request failed try again. Use Wifi if possible.");
        };
        // 3. Send the request over the network
        xhr.send(form);
    }
}


export default methods