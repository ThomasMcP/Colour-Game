const squares = document.getElementsByClassName('square');
const h1Span = document.querySelector('#rgbDisplay');
let container = document.querySelector("#container");
const header = document.querySelector("#header");
const body = document.querySelector("body");
let winningColour = "";
let gameEnd = false;

// GAME SET UP
// createThreeSquares();
fillSquares();
selectedColour();

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (gameEnd === false) {
      handleColourClick(this);
    }
  })
}

function handleColourClick(selectedColor) {
  if (selectedColor.style["background-color"] === winningColour) {
    // backgroundColor over ["background-color"] ? Don't know.
    header.style.backgroundColor = selectedColor.style["background-color"];
    gameEnd = true;
  } else {
    selectedColor.style["background-color"] = body.style["background-color"];
  }
}

// Generate Random Colours for All Squares
function fillSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style["background-color"] = colourGenerator();
    console.log(squares[i]);
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
  winningColour = colorChosen;
  // Display in h1
  h1Span.textContent = colorChosen.toUpperCase();

}
