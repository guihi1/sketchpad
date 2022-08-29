const container = document.querySelector(".container");
const slider = document.getElementById("range");
const clear = document.querySelector(".clear");
//const eraser = document.querySelector(".eraser");

function removeColor(){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    fullSquare();
}

slider.addEventListener("click", removeColor);
clear.addEventListener("click", removeColor);

function makeRowBlack(rowNum){
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
    }
}

const fullSquare = () => {
    let val = document.getElementById("range").value;
    for(let i = 0; i < val; i++){
        makeRowBlack(i);
    }
}

fullSquare();