var moment = require('moment'); // require
moment().format();
const prompt = require('prompt-sync')();
let birthday = prompt("Enter the brirthday in dd/mm/yyyy format: ");
var bday = moment(birthday, "DD/MM/YYYY");
var now = moment().startOf('day');

var d = moment.duration(bday.diff(now)).asDays();
console.log(d);