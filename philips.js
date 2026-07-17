/*
    Philips Android TV Controller
*/


const axios = require("axios");

const config =
require("./config");





async function sendCommand(
command,
value
){


console.log(
"Philips opdracht:",
command,
value
);




/*

Hier komt straks:

- Android TV Remote Protocol
- Philips JointSpace API
- ADB commands

*/


return {


command,

value,

status:
"Nog niet gekoppeld"


};


}







module.exports = {


sendCommand


};
