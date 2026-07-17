/* ==========================================
   TVControl Pro
   script.js
   Frontend Controller
========================================== */


// ==========================
// Basis instellingen
// ==========================

const TV = {

    connected: false,

    ip: null,

    volume: null,

    app: null,

    source: null,

    ambilight: false

};



// ==========================
// Meldingen
// ==========================

function showNotification(message){

    const notification =
    document.getElementById("notification");


    if(!notification) return;


    notification.innerText = message;


    notification.classList.add("show");


    setTimeout(()=>{

        notification.classList.remove("show");

    },2500);

}



// ==========================
// Remote knoppen
// ==========================


document.querySelectorAll(".remote-btn")
.forEach(button=>{


    button.addEventListener("click",()=>{


        const action =
        button.dataset.action;


        console.log(
            "TV actie:",
            action
        );


        sendTVCommand(action);


    });


});




// ==========================
// Apps
// ==========================


document.querySelectorAll(".app-card")
.forEach(app=>{


    app.addEventListener("click",()=>{


        const appName =
        app.dataset.app;


        console.log(
            "App starten:",
            appName
        );


        sendTVCommand(
            "openApp",
            appName
        );


    });


});





// ==========================
// Ambilight
// ==========================


const ambiToggle =
document.getElementById("ambiToggle");


if(ambiToggle){


ambiToggle.addEventListener(
"click",
()=>{


    TV.ambilight =
    !TV.ambilight;


    document.getElementById(
        "ambiStatus"
    ).innerText =

    TV.ambilight
    ?
    "Aan"
    :
    "Uit";



    sendTVCommand(
        "ambilight",
        TV.ambilight
    );


});


}




// Helderheid

const brightness =
document.getElementById(
"ambiBrightness"
);


if(brightness){


brightness.addEventListener(
"input",
()=>{


    document.getElementById(
        "brightnessValue"
    ).innerText =

    brightness.value + "%";



    sendTVCommand(
        "ambilightBrightness",
        brightness.value
    );


});


}





// ==========================
// Ambilight kleuren
// ==========================


document.querySelectorAll(
".color-picker button"
)
.forEach(color=>{


color.addEventListener(
"click",
()=>{


    const value =
    color.dataset.color;


    sendTVCommand(
        "ambilightColor",
        value
    );


});


});





// ==========================
// Macro's
// ==========================


document.querySelectorAll(
".macro-card"
)
.forEach(macro=>{


macro.addEventListener(
"click",
()=>{


    const action =
    macro.dataset.macro;


    sendTVCommand(
        "macro",
        action
    );


});


});






// ==========================
// Favorieten
// ==========================


document.querySelectorAll(
".favorite-card"
)
.forEach(card=>{


card.addEventListener(
"click",
()=>{


showNotification(
card.innerText +
" gestart"
);


});


});






// ==========================
// Voice
// ==========================


const voiceButton =
document.getElementById(
"voiceButton"
);


if(voiceButton){


voiceButton.addEventListener(
"click",
()=>{


showNotification(
"Luisteren..."
);


startVoice();


});


}




function startVoice(){


if(!("webkitSpeechRecognition" in window)){


showNotification(
"Spraak niet ondersteund"
);


return;


}



const recognition =
new webkitSpeechRecognition();



recognition.lang =
"nl-NL";



recognition.start();



recognition.onresult =
function(event){


const text =
event.results[0][0].transcript;



document.getElementById(
"voiceText"
).innerText =
text;



sendTVCommand(
"voice",
text
);


};


}







// ==========================
// Toetsenbord
// ==========================


const keyboard =
document.getElementById(
"sendKeyboard"
);



if(keyboard){


keyboard.addEventListener(
"click",
()=>{


const text =
document.getElementById(
"tvKeyboard"
).value;



sendTVCommand(
"text",
text
);



});


}





// ==========================
// Verbinden knop
// ==========================


const connect =
document.getElementById(
"connectTV"
);



if(connect){


connect.addEventListener(
"click",
()=>{


showNotification(
"Verbinding zoeken..."
);



connectTV();


});


}





// ==========================
// TV verbinding
// ==========================


async function connectTV(){


/*

Later:

fetch naar server.js

server zoekt Philips TV

*/


console.log(
"TV verbinding starten..."
);



showNotification(
"Backend nog niet gekoppeld"
);


}





// ==========================
// Commando versturen
// ==========================


async function sendTVCommand(
command,
value=null
){



console.log(
"Command:",
command,
value
);



/*

Later vervangen door:

fetch(
"http://localhost:3000/tv",
{
method:"POST",
headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({
command,
value
})

})

*/


showNotification(
command
+
" verzonden"
);



}
