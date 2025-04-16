// GridLock
let boxes = document.querySelectorAll(".box");
let scoreCounter = document.getElementById("correct-tiles");
let restartGame = document.getElementById("restart");

const boxesToRecall = 8;

// Generate Pattern
function generatePattern() {
  let pattern = [];
  const allBoxes = [];

  for (i = 0; i < boxes.length; i++) {
    // Add all with box class to the allBoxes array
    allBoxes.push(i)
}
// Generate an array which has a length of 8 random numbers from the allBoxes array and add to pattern.
while (pattern.length < chosenBoxes) {
    let randNum = Math.floor(Math.random() * boxes.length);
    pattern.push(randNum);
}
console.log(boxes);
console.log(allBoxes);
console.log(pattern);
}