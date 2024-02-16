function hideElement(elemetnClassName) {
  const element = document.querySelector(elemetnClassName);
  element.classList.add("hidden");
}

function showElement(elemetnClassName) {
  const element = document.querySelector(elemetnClassName);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

//update the score
//1. get the current score
// const currentScore = document.getElementById("current-score");
// const currentScoreValue = parseInt(currentScore.innerText);

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
//3. show the new score
// currentScore.innerText = newScore;
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function findTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

// get random alphabet
function getRandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabets.split("");
  return alphabetsArray[Math.floor(Math.random() * alphabets.length)];
}
