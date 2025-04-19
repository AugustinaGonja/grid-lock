// GridLock
let boxes = document.querySelectorAll(".box");
let scoreCounter = document.getElementById("correct-tiles");
let restartButton = document.getElementById("restart");


let boxesToRecall = 10;
let pattern = [];
let correctTiles = 0;

// Generate Pattern

function generatePattern() {
  pattern = [];
  const allBoxes = [];

  for (i = 0; i < boxes.length; i++) {
    // All .box elements added to Array
    allBoxes.push(i)
  };
  // Generate pattern array of randomised numbers
  while (pattern.length < boxesToRecall) {
    let randNum = Math.floor(Math.random() * boxes.length);
    // Ensure that array has no repeated numbers
    if (!pattern.includes(randNum)) {
      pattern.push(randNum);
    };
  };
  console.log(boxes);
  console.log(allBoxes);
  console.log(pattern);
};


// Reveal Pattern 

function revealPattern() {
  // Reveal time is 5s
  let revealTime = 5
  let countdown = document.getElementById("countdown")


  for (let i = 0; i < pattern.length; i++) {
    boxes[pattern[i]].style.backgroundColor = "#ed9121";
  }
  countdown.textContent = `Pattern will disappear in ... ${revealTime}s`

  let timer = setInterval(() => {
    revealTime--;
    // Pattern will disapper once time is equal to 0
    if (revealTime > 0) {
      countdown.textContent = `Pattern will disappear in ... ${revealTime}s`
    } else {
      clearInterval(timer);

      // Ensure that the pattern disappears in time limit
      for (let i = 0; i < pattern.length; i++) {
        // Restores color for all highlighted tiles
        boxes[pattern[i]].style.backgroundColor = "";
      }
      // Clear text content
      countdown.textContent = "";
      clickTile();
    }
  }, 1000); // 1 second delay
}

// Click Tile

function clickTile() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", userClick);
  }
};
// Stop Click

function stopClick() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", stopClick);
  }
};

/*User Click
What will happen when user clicks correct or incorrect tile*/

function userClick(e) {
  let selectedBox = e.target;
  // Get index of box selected by player
  let boxIndex = Array.from(boxes).indexOf(selectedBox);

  if (pattern.includes(boxIndex)) {
    if (!selectedBox.style.backgroundColor) {
      selectedBox.style.backgroundColor = "#568203" // Green
      correctTiles++; //increment score by 1
      scoreCounter.textContent = correctTiles;
    };

    if (correctTiles === pattern.length) {
      alert("Congratulations! You are a winner :)");
      stopClick();
    }

  } else {
    selectedBox.style.backgroundColor = "#c21807" // Red
    alert("Oh no ! This is the Wrong tile :( Game Over.")
    stopClick();
  }
};
restartGame();

// Restart Game

function restartGame() {
  // Clear Score Count
  correctTiles = 0;
  scoreCounter.textContent = 0;
  // Restore all boxes to original state
  for (let box of boxes) {
    box.style.backgroundColor = "";
  }
  // Call generatePattern and revealPattern
  stopClick();
  generatePattern();
  revealPattern();
};

restartGame();

// Add Event Listener to Restart Game button  

restartButton.addEventListener("click", restartGame);
