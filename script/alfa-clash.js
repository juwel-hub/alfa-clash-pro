// function play() {
//   // 1  hide the home scrin
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // 2 show the plaground
//   const plagroundSection = document.getElementById("play-ground");
//   plagroundSection.classList.remove("hidden");
// }
function handelKeybordButtonPress(event) {
  const playerPresed = event.key;
  // stop the game if pressed `Esc`
  if (playerPresed === `Escape`) {
    gameOver();
  }
  //  get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabat");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPresed, expectedAlphabet);
  // chacke match or not
  if (playerPresed === expectedAlphabet) {
    console.log("you get a point");

    const currentScore = getTextElementValuById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValue("current-score", updatedScore);

    // -------------------------
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const getNewScore = currentScore + 1;
    // currentScoreElement.innerText = getNewScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you loss life");

    const currentLife = getTextElementValuById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValue("current-life", updatedLife);
    if (currentLife === 0) {
      gameOver();
    }

    // --------------------
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const getNuwLIfe = currentLife - 1;
    // currentLifeElement.innerText = getNuwLIfe;
  }
}
// kepture ketbord key press
document.addEventListener("keyup", handelKeybordButtonPress);

function continueGame() {
  // 1 generate a random alphabate
  const alphabat = getArandomAlphabat();
  // console.log("your alphabat", alphabat);
  // set randomely alphabat on screen
  const currentAlphabet = document.getElementById("current-alphabat");
  currentAlphabet.innerText = alphabat;

  // set background color
  settBackgroundColorById(alphabat);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValue("current-life", 5);
  setTextElementValue("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // updaite final score
  // 1 get the final score
  const finalScore = getTextElementValuById("current-score");
  setTextElementValue("game-score", finalScore);

  // clear the last hilight alphabates
  const currentAlphabet = getElementTextById("current-alphabat");
  removeBackgroundColorById(currentAlphabet);
}
