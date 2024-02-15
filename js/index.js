// function play() {
//   //hide the home screen
//   const homeSection = document.querySelector(".home");
//   homeSection.classList.add("hidden");

//   //show the play ground
//   const playGround = document.querySelector(".play-ground");
//   playGround.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // get the expected alphabet
  const expectedAlphabet = document
    .getElementById("currentAlphabet")
    .innerText.toLowerCase("You missed, you got a life");

  // check if the player pressed is equal to the expected alphabet
  if (playerPressed === expectedAlphabet) {
    //update the score

    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);

    //remove background color by id
    removeBackgroundColorById(expectedAlphabet);

    //Start a new round
    continueGame();
  } else {
    //Update life score
    const currentLifeValue = getTextElementValueById("current-life");
    const newLife = currentLifeValue - 1;
    setTextElementValueById("current-life", newLife);

    //check if the life score is 0
    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  //step-1 : generate a random alphabet
  const alphabet = getRandomAlphabet();
  // Set randomly alphabet in the screen
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = alphabet;

  //set background color by id
  setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only the play ground
  hideElement(".home");
  hideElement(".score");
  showElement(".play-ground");

  //reset score and life
  setTextElementValueById("current-score", 0);
  setTextElementValueById("current-life", 5);
  continueGame();
}

function gameOver() {
  hideElement(".play-ground");
  showElement(".score");
}
