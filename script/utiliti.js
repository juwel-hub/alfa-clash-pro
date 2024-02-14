function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function settBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getArandomAlphabat() {
  // get or create an alphabat array
  const alphabateString = "abcdefghijklmnopqrstuvwxyz";
  const alphabates = alphabateString.split("");
  //   get a random index 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabat = alphabates[index];

  return alphabat;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

// score and life ar another way
function getTextElementValuById(elementId) {
  const element = document.getElementById(elementId);
  const elementValuText = element.innerText;
  const value = parseInt(elementValuText);
  return value;
}
function setTextElementValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
