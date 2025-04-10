//variables
const miaou = new Audio("assets/1095226430826217502.mp3");
const img = document.querySelector("img");
let mouseIn = false;
let intervalId;
let angle = 0;
let toupieEnded = true;

//functions
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//events listener
img.addEventListener("mouseenter", (event) => {
    if (!toupieEnded) {return;}
    toupieEnded = false;
    clearInterval(intervalId);
    event.target.style.transition = "none";
    event.target.style.transform = "rotate(360deg)";
    event.target.style.transition = "transform 1s ease-in";
  
    intervalId = setInterval(() => {
        angle += 360;
        event.target.style.transform = `rotate(${angle}deg)`;
        event.target.style.transition = "transform 1s linear";
    }, 100);
})

img.addEventListener("mouseleave", (event) => {
    event.target.style.transition = "none";
    clearInterval(intervalId);
    event.target.style.transition = "transform 1s ease-out";
    event.target.style.transform = `rotate(${angle+360}deg)`;
    setTimeout(() => {
        angle = 0;
        event.target.style.transition = "none";
        event.target.style.transform = "rotate(0deg)";
        toupieEnded = true;
    }, 1000);
})

document.querySelectorAll("h2").forEach((h2) => {
    h2.addEventListener("click", (event) => {
        event.target.style.color = randomColor();
    });
})

document.querySelector("#floppaMiaou").addEventListener("click", (event) => {
    miaou.play();
})