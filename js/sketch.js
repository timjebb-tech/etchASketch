
const containerSide = 800;
var squareCount = 16;
var squareSide = containerSide / Math.sqrt(squareCount);

var container = null;


var addPromptButton = function(){
  var button = document.createElement('button');
  button.innerText = 'change number of squares';
  button.onclick = changeNumberOfSquares;
  // where do we want to have the button to appear?
  // you can append it to another element just by doing something like
  // document.getElementById('foobutton').appendChild(button);
  document.body.appendChild(button);
};

function changeNumberOfSquares() {
    var newNumber = parseInt(prompt("specify new number of squares.  I will round this up to a square number, amnd limit it to 10,000"));
    console.log(`newNumber = ${newNumber}`);
    newNumber = (newNumber > 10000)?10000 : newNumber;
    var root = Math.sqrt(newNumber);
    console.log(`root = ${root}`);
    var ceil = Math.ceil(root);
    console.log(`ceil = ${ceil}`);
    squareCount = Math.pow(ceil, 2);
    console.log(`squareCount = ${squareCount}`);
    squareSide = containerSide / Math.sqrt(squareCount);
    console.log(`squareSide = ${squareSide}`);
    container.remove();
    container=null;
    container = createGrid();
    document.body.appendChild(container);
}



function createSquare() {
    const square = document.createElement("div");
    square.style.height=`${squareSide}px`;
    square.style.width=`${squareSide}px`;
    square.style.background='pink';
    square.addEventListener("mouseover", function (e) {
        e.currentTarget.style.background='blue';
    });
    return square;
}

function createContainer() {
    container = document.createElement("div");
    container.style.display="flex";
    container.style.flexFlow= "wrap";
    container.style.width=`${containerSide}px`;
    container.style.height=`${containerSide}px`;
    return container;
}

function createGrid() {
    container = createContainer();
    for (var i = 0; i < squareCount; i++) {
        const square = createSquare();
        container.appendChild(square);
    }
    return container;
}

function onHover(e) {
    e.style.background='blue';
}

addPromptButton();

container = createGrid();

document.body.appendChild(container);