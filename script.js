

let board = document.querySelector("#board");
board.style.border = "black solid 1px";



function createTiles() {
    for (let i = 0; i < 256; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }
}

createTiles();



function numberOfTiles(result) {
    return result ^ 2;
}


let clearButton = document.querySelector("button");

clearButton.addEventListener("click", clearButtonClick);

let result = window.prompt("Pick a number between 1 and 100", 16);

function clearButtonClick() {
    window.prompt("Pick a number between 1 and 100", 16);
}



