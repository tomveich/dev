"use strict";

const whoami = document.querySelector("#whoami");


// I do comment my code
const things = ["Designer", "Challenger", "Web Developer"]
let i = 0;

const changeText = (() => {
    whoami.classList.remove("animated");
    setTimeout(() => {
        whoami.classList.add("animated");
    }, 1);

    if(i >= things.length) {
        i = 0;
    }
    whoami.innerText = things[i];
    i++;
    



})


setInterval(changeText, 3500);