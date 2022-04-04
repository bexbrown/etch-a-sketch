

let board = document.querySelector("#board");



function createTiles() {
    for (let i = 0; i < 256; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
        tile.style.height = "20px";
        tile.style.width = "20px";
        tile.addEventListener("mouseover", function () {
            tile.style.backgroundColor = "black";

        })

    }
}

createTiles();


let clearButton = document.querySelector("button");

clearButton.addEventListener("click", clearButtonClick);


function clearButtonClick() {

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(board);

    let result = window.prompt("Pick a number between 1 and 100");


    let totalTiles = result * result;
    tileLength = 320 / result;

    function createNewTiles(totalTiles) {
        for (let i = 0; i < totalTiles; i++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            board.appendChild(tile);
            tile.style.length = tileLength + "px";
            tile.style.width = tileLength + "px";

            tile.addEventListener("mouseover", function () {
                tile.style.backgroundColor = "black";
            })

        }
    };

    createNewTiles(totalTiles);


};


