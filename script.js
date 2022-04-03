

let board = document.querySelector("#board");
board.style.border = "black solid 1px";



function createTiles() {
    //insert number in place of 256
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


function clearButtonClick() {

    let result = window.prompt("Pick a number between 1 and 100");
    console.log(result)
    let totalTiles = result * result;
    console.log(totalTiles);
    tileLength = 320 / result;
    console.log(tileLength)

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(board);

    function createNewTiles(totalTiles) {
        for (let i = 0; i < totalTiles; i++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            board.appendChild(tile);
            tile.style.length = tileLength + "px";
            tile.style.width = tileLength + "px";

        }
    }
    createNewTiles(totalTiles);
};


