import { reactive } from 'vue';


const state = reactive({yearOn: false, statusYear: 0, Yearly: 0,
    monthOn: false, statusMonth: 0, Month: 0,
    currentOn: false, statusCurrent: 0, Current: 0})
const overAllYears = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/overAllYears/";
const currentMonth = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/currentMonth/";
const openTickets = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/openTickets/";
    

const methods = {
    async getYear() {
        let response = await fetch(overAllYears);
        let data = await response.json()
        if(data){
           state.statusYear = parseInt(data['total']);
        }
    },
    async getMonth() {
        let response = await fetch(currentMonth);
        let data = await response.json()
        if(data){
           state.statusMonth = parseInt(data['total']);
        }
     
    },
    async getCurrent() {
        let response = await fetch(openTickets);
        let data = await response.json()
        if(data){
           state.statusCurrent = parseInt(data['total']);
        }
    },

    viewYear() {
        if(!state.yearOn){
            state.yearOn = true;
            let incrementValue = 20;

            let interval = setInterval(() => {
                if(state.Yearly > state.statusYear) {
                      state.statusYear += incrementValue;
                  }else{// when they are the same number
                      state.statusYear = state.Yearly;
                      clearInterval(interval);
                  }
              }, 40);

        }
       
    }, viewMonth() {
        if(!state.monthOn){
            state.monthOn = true;
            let incrementValue = 10;

            let interval = setInterval(() => {
                if(state.statusMonth > state.Month) {
                      state.statusMonth += incrementValue;
                  }else{// when they are the same number
                      state.statusMonth = state.Month;
                      clearInterval(interval);
                  }
              }, 40);

        }
       
    }, 
    viewCurrent() {
        if(!state.currentOn){
            state.currentOn = true;
            let incrementValue = 10;

            let interval = setInterval(() => {
                if(state.Current > state.statusCurrent) {
                      state.statusCurrent += incrementValue;
                  }else{// when they are the same number
                      state.statusCurrent = state.Current;
                      clearInterval(interval);
                  }
              }, 40);

        }
       
    }
    
}

export default { state, methods }