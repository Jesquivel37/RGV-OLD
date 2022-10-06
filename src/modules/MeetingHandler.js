import moment from "moment";

const methods = {
    // Format the date using UTC because of Febraury throws it off
    // The format library utilize is moment
    getMonthAndYear(date){  
        if(date){
            return moment(date).utc().format('MMMM DD');
        }
    },
    getMonthForDate(date){ 
        return moment(date).utc().format('YYYY-MM-DD')
    },
    //This returns the year of the date..
    getYear(date){ 
        if(date) return date.getFullYear();
    },
    hasKey(key, keys){
        console.log(typeof(key))
        return keys.includes(key);
    },
    convertLink(pdf, original) {
        return (pdf) ? `./pdf/${pdf}` : original;
    }
}


export default methods