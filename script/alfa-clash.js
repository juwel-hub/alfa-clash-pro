// function play() {
//   // 1  hide the home scrin
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // 2 show the plaground
//   const plagroundSection = document.getElementById("play-ground");
//   plagroundSection.classList.remove("hidden");
// }

function continueGame() {
  // 1 generate a random alphabate
  const alphabat = getArandomAlphabat();
  console.log("your alphabat", alphabat);
  // set randomely alphabat on screen
  const currentAlphabet = document.getElementById("current-alphabat");
  currentAlphabet.innerText = alphabat;

  // set background color
  settBackgroundColorById(alphabat);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
