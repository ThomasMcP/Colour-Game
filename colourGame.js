alert("Connected!");

const squares = document.getElementsByClassName('square');

// Generate Random Colours for All Squares
function fillSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style["background-color"] = colourGenerator();
    console.log(squares[i].style["background-color"]);
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

fillSquares();
