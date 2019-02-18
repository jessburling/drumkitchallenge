

// Declaring the sounds
const snare = document.getElementById("snare-sound");
const clap = document.getElementById("clap-sound");
const kick = document.getElementById("kick-sound");
const ride = document.getElementById("ride-sound");
const boom = document.getElementById("boom-sound");
const openhat = document.getElementById("openhat-sound");
const tink = document.getElementById("tink-sound");
const tom = document.getElementById("tom-sound")
const hihat = document.getElementById("hihat-sound");

// Snare
document.getElementById("snare-button").addEventListener("click", () => {
    snare.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
    snare.play();
    } 
});

// Clap
document.getElementById("clap-button").addEventListener("click", () => {
    clap.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "s") {
    clap.play();
    } 
});

// Kick
document.getElementById("kick-button").addEventListener("click", () => {
    kick.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "d") {
    kick.play();
    } 
});

// Ride
document.getElementById("ride-button").addEventListener("click", () => {
    ride.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "f") {
    ride.play();
    } 
});

// Boom
document.getElementById("boom-button").addEventListener("click", () => {
    boom.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "g") {
    boom.play();
    } 
});

// Hihat
document.getElementById("hihat-button").addEventListener("click", () => {
    hihat.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "h") {
    hihat.play();
    } 
});

//Openhat
document.getElementById("openhat-button").addEventListener("click", () => {
    openhat.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "j") {
    openhat.play();
    } 
});

// Tink
document.getElementById("tink-button").addEventListener("click", () => {
    tink.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "k") {
    tink.play();
    } 
});

// Tom
document.getElementById("tom-button").addEventListener("click", () => {
    tom.play();
});

document.addEventListener("keypress", (event) => {
    if (event.key == "l") {
    tom.play();
    } 
});