

let board = document.querySelector("#board");
board.style.border = "black solid 1px";



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
        tile.addEventListener("mouseout", function () {
            tile.style.opacity = 0;
            tile.style.transition = "opacity 3s linear";
        })
    }
}

createTiles();


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

            tile.addEventListener("mouseover", function () {
                tile.style.backgroundColor = "black";
            })
            tile.addEventListener("mouseout", function () {
                tile.style.opacity = 0;
                tile.style.transition = "opacity 3s linear";
            })
        }
    };

    createNewTiles(totalTiles);
};


