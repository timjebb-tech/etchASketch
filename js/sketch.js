
const containerSide = 4*200;
const squareSide = containerSide / 4;

function createSquare() {
    const square = document.createElement("div");
    square.style.height=`${squareSide}px`;
    square.style.width=`${squareSide}px`;
    square.style.background='pink';
    return square;
}

function createContainer() {
    const container = document.createElement("div");
    container.style.display="flex";
    container.style.flexFlow= "wrap";
    container.style.width=`${containerSide}px`;
    container.style.height=`${containerSide}px`;
    return container;
}

function createGrid() {
    container = createContainer();
    for (var i = 0; i < 16; i++) {
        const square = createSquare();
        container.appendChild(square);
    }
    return container;
}

var grid = createGrid();

document.body.appendChild(grid);