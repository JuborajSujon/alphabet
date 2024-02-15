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
    //1. get the current score
    const currentScore = document.getElementById("current-score");
    const currentScoreValue = parseInt(currentScore.innerText);
    //2. increase the score by 1
    const newScore = currentScoreValue + 1;
    //3. show the new score
    currentScore.innerText = newScore;

    //remove background color by id
    removeBackgroundColorById(expectedAlphabet);

    //Start a new round
    continueGame();
  } else {
    //Update life score
    //1. get the current life score
    const currentLife = document.getElementById("current-life");
    const currentLifeValue = parseInt(currentLife.innerText);
    //2. decrease the life score
    const newLife = currentLifeValue - 1;
    //3. show the new life score
    currentLife.innerText = newLife;
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
  hideElement(".home");
  showElement(".play-ground");
  continueGame();
}
