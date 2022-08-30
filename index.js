const container = document.querySelector(".container");
const slider = document.getElementById("range");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeColor(){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    fullSquare();
}

slider.addEventListener("click", removeColor);
clear.addEventListener("click", removeColor);

function makeRow(rowNum){
    let cont = document.createElement("div");
    let val = document.getElementById("range").value;
    cont.setAttribute("class",`row-container`);
    container.appendChild(cont);
    for(let i = 0; i < val; i++){
    let square = document.createElement("div");
    square.setAttribute("class", `line${rowNum}`);
    cont.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
    eraser.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        });
    });
    black.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
    rainbow.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor();
        });
    });
    }
}

const fullSquare = () => {
    let val = document.getElementById("range").value;
    for(let i = 0; i < val; i++){
        makeRow(i);
    }
}

fullSquare();
