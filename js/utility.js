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

// get random alphabet
function getRandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabets.split("");
  return alphabetsArray[Math.floor(Math.random() * alphabets.length)];
}
