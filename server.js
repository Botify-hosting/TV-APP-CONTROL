/*
    TVControl Pro
    Backend Server
*/


const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const config = require("./config");

const philips =
require("./philips");



const app = express();



app.use(cors());

app.use(
bodyParser.json()
);





// Test

app.get(
"/",
(req,res)=>{


res.send(
"TVControl Pro server actief"
);


});






// TV commando ontvangen

app.post(
"/tv",
async(req,res)=>{


const {
command,
value
}
=
req.body;



console.log(
"TV opdracht:",
command,
value
);




try{


const result =
await philips.sendCommand(
command,
value
);



res.json({

success:true,

result

});


}


catch(error){


console.log(error);


res.status(500)
.json({

success:false,

error:error.message

});


}


});







app.listen(
config.server.port,
()=>{


console.log(
"TVControl server gestart op poort",
config.server.port
);


});
