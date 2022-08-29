const container = document.querySelector(".container");
const slider = document.getElementById("range");

slider.addEventListener("click", () => {
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    //container.removeChild(``);
    fullSquare();
});

function updateTextInput(val) {
   let value = document.getElementById('range').value = val; 
   return value;
}



function makeContainer(){
    let val = document.getElementById("range").value;
    for(let i = 0; i < val; i++){
        let cont = document.createElement("div");
        cont.setAttribute("id",`row-container${i}`);
        container.appendChild(cont);
    }
}

/*function clearBlock(){
    clear.addEventListener("click", () => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    });
}*/

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
    }
}

const fullSquare = () => {
    let val = document.getElementById("range").value;
    for(let i = 0; i < val; i++){
        makeRow(i);
    }
}

fullSquare();