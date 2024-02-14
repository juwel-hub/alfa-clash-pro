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
