var moment = require('moment'); // require
moment().format();
function fiftyFive() {
    return moment().add(55, 'days');
}
let date = fiftyFive().date() + '/' + (fiftyFive().month()+1) + '/' + fiftyFive().year();
console.log(date);