// GridLock
let boxes = document.querySelectorAll(".box");
let scoreCounter = document.getElementById("correct-tiles");
let restartGame = document.getElementById("restart");

const boxesToRecall = 8;
let pattern = [];
let correctTiles = 0;

// Generate Pattern
function generatePattern() {
  pattern = [];
  const allBoxes = [];

  for (i = 0; i < boxes.length; i++) {
    // Add all with box class to the allBoxes array
    allBoxes.push(i)
  };
  // Generate an array which has a length of 8 random numbers from the allBoxes array and add to pattern.
  while (pattern.length < boxesToRecall) {
    let randNum = Math.floor(Math.random() * boxes.length);
    //pattern.push(randNum);
  /* Ensure that no numbers are repeats.
  If the pattern includes randNum already , dont include in pattern*/
  if (!pattern.includes(randNum)) {
    pattern.push(randNum);
  };
};
  console.log(boxes);
  console.log(allBoxes);
  console.log(pattern);
}
generatePattern();


// Reveal Pattern 

function revealPattern(){
  let revealTime = 10000 // Reveal time is 10s

  for (let i = 0 ; i < pattern.length ; i++) {
    boxes[pattern[i]].style.backgroundColor = "#ed9121";
  }
// Will ensure that the pattern disappears within the time limit 
setTimeout(function () {
  for (let i = 0; i < pattern.length; i++) {
    boxes[pattern[i]].style.backgroundColor = "";
    // Restores color back to normal for all highlighted tiles
  }
}, revealTime);
}

revealPattern();

// Click Tile

function clickTile (){
  for (let i = 0 ; i < boxes.length ; i++){
    boxes.addEventListener("click", userClick);
  }
};

// User Click
// Takes care of what will happen when user clicks correct or incorrect tile

function userClick(e){
  let selectedBox = e.target;
  let boxIndex = indexOf.selectedBox; // Get index of box that player has selected

  if (pattern.includes(boxIndex)){
    if (!selectedBox.style.backgroundColor) // if box isnt already green ,then user can click and inc score if it is part of array
    selectedBox.style.backgroundColor="#568203" //Change Colour to Green if player has selected box that is inc in array.
    scoreCounter.textContent = correctTiles;
    correctTiles++;//increment score by 1
    
    if (correctTiles === pattern.length){
      alert("Congratulations! You are a winner :)");
    restartGame()}

 }else{
  selectedBox.style.backgroundColor="#c21807"//Change Colour to Red if otherwise
  alert("Oh no ! This is the Wrong tile :( Game Over.")
 }
};

userClick(e);

// Win Game 