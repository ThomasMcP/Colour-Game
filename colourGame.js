const squares = document.getElementsByClassName('square');
const h1Span = document.querySelector('#rgbDisplay');
let container = document.querySelector("#container");

// GAME SET UP
fillSquares();
selectedColour();
createThreeSquares();


function createThreeSquares() {
  newSquare = document.createElement('div');
  newSquare.classList.add('square');
  newSquare2 = document.createElement('div');
  newSquare2.classList.add('square');
  newSquare3 = document.createElement('div');
  newSquare3.classList.add('square');
  container.appendChild(newSquare);
  container.appendChild(newSquare2);
  container.appendChild(newSquare3);
  fillSquares();
}

// Generate Random Colours for All Squares
function fillSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style["background-color"] = colourGenerator();
  }
}

// Random RGB Colour Generator
function colourGenerator() {
  return "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
}

// Random Number between 0 and 255
function randomNumber() {
  return Math.floor(Math.random() * Math.floor(255));
}

// Colour Set for User to Guess
function selectedColour() {
  // Choose 1 of 6 square Colours
  let randomSquare = squares[Math.floor(Math.random() * Math.floor(squares.length))];
  let colorChosen = randomSquare.style["background-color"];
  // Display in h1
  h1Span.textContent = colorChosen.toUpperCase();
}


function threeSquares() {

}

function createThreeSquares() {
  newSquare = document.createElement('div');
  newSquare.classList.add('square');
  newSquare2 = document.createElement('div');
  newSquare2.classList.add('square');
  newSquare3 = document.createElement('div');
  newSquare3.classList.add('square');
  container.appendChild(newSquare);
  container.appendChild(newSquare2);
  container.appendChild(newSquare3);
}
