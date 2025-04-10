//variables
const miaou = new Audio("assets/1095226430826217502.mp3");

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
document.querySelector("img").addEventListener("mouseenter", (event) => {
    event.target.style.transform = "rotate(360deg)";
    event.target.style.transition = "transform 1s ease-in-out";
    setTimeout(() => {
        event.target.style.transition = "none";
        event.target.style.transform = "rotate(0deg)";
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