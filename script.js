

let board = document.querySelector("#board");



function createTiles() {
    for (let i = 0; i < 10000; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
        tile.style.height = "3.2px";
        tile.style.width = "3.2px";
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


    let totalTiles = 100 * 100;
    tileLength = 320 / 100;

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


