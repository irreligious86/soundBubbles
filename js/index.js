"use strict";

window.addEventListener('load', () => {
const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
    "#60d394",
    "#1d68d7",
    "#972cee",
    "#e9d613",
    "#ef582a",
    "#0ccbea",
];


pads.forEach( (pad, i) => {
    pad.addEventListener('click', () => {
        sounds[i].currentTime = 0;
        sounds[i].play();
        createBubbles(i);
    });
});

const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation =`jump 1s ease`;
    bubble.addEventListener('animationend', () => {
        // visual.removeChild(this);
        console.log(this);
    });
};




});