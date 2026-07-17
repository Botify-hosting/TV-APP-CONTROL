// ============================
// TVControl Pro
// script.js
// ============================

console.log("TVControl Pro gestart!");

// Status
let tvOnline = true;
let volume = 68;
let currentApp = "YouTube";

// Dashboard elementen
const statusElement = document.querySelector(".cards .card:nth-child(1) h2");
const volumeElement = document.querySelector(".cards .card:nth-child(2) h2");
const progressBar = document.querySelector(".bar");
const appElement = document.querySelector(".cards .card:nth-child(3) h2");

// Remote knoppen
const buttons = document.querySelectorAll(".remote-grid button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const action = button.innerText;

        console.log("Knop:", action);

        toast(action + " verzonden");

    });

});

// Apps

document.querySelectorAll(".app").forEach(app => {

    app.addEventListener("click", () => {

        currentApp = app.innerText.trim();

        appElement.innerText = currentApp;

        toast(currentApp + " geopend");

    });

});

// Macro's

document.querySelectorAll(".macro").forEach(card => {

    card.addEventListener("click", () => {

        toast(card.innerText + " gestart");

    });

});

// TV Status wisselen

function toggleTV(){

    tvOnline = !tvOnline;

    statusElement.innerHTML = tvOnline ? "🟢 Online" : "🔴 Offline";

}

setInterval(toggleTV,15000);

// Volume demo

setInterval(()=>{

    if(volume>=100){

        volume=20;

    }else{

        volume++;

    }

    volumeElement.innerText=volume+"%";

    progressBar.style.width=volume+"%";

},1200);

// Toast

function toast(text){

    const div=document.createElement("div");

    div.className="toast";

    div.innerText=text;

    document.body.appendChild(div);

    setTimeout(()=>{

        div.classList.add("show");

    },50);

    setTimeout(()=>{

        div.classList.remove("show");

        setTimeout(()=>{

            div.remove();

        },300);

    },2500);

}

// Sidebar

document.querySelectorAll(".sidebar li").forEach(item=>{

    item.addEventListener("click",()=>{

        document.querySelectorAll(".sidebar li").forEach(li=>{

            li.classList.remove("active");

        });

        item.classList.add("active");

    });

});

// Welkomstbericht

setTimeout(()=>{

    toast("Welkom bij TVControl Pro 👋");

},700);
