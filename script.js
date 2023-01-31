const wordList = ["Viber", "WhatsApp", "Telegram", "Facebook", "Instagram"];
const hints = ["A cross-platform instant messaging app", "A popular messaging app", "A cloud-based instant messaging app", "A social networking website", "A photo and video sharing app"];

let word = wordList[Math.floor(Math.random() * wordList.length)];
let hint = hints[wordList.indexOf(word)];
let remainingGuesses = 8;
let lettersGuessed = [];

document.querySelector("#hint").innerHTML = `Hint: ${hint}`;
document.querySelector("#submitBtn").addEventListener("click", function() {
  let letterInput = document.querySelector("#letterInput").value;
  if (letterInput.length > 1) {
    alert("Please enter a single letter.");
    return;
  }
  if (lettersGuessed.includes(letterInput)) {
    alert("You have already tried that letter. Please try another one.");
    return;
  }
  if (!word.includes(letterInput)) {
    remainingGuesses--;
    document.querySelector("#remainingGuesses").innerHTML = `Remaining Guesses: ${remainingGuesses}`;
  }
  lettersGuessed.push(letterInput);
  updateDisplay();
});

document.querySelector("#resetBtn").addEventListener("click", function() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  hint = hints[wordList.indexOf(word)];
  remainingGuesses = 8;
  lettersGuessed = [];
  document.querySelector("#remainingGuesses").innerHTML = `Remaining Guesses: ${remainingGuesses}`;
  document.querySelector("#message").innerHTML = "";
  document.querySelector("#letterInput").disabled = false;
  document.querySelector("#submitBtn").disabled = false;
  document.querySelector("#letterInput").value = "";
  document.querySelector("#hint").innerHTML = `Hint: ${hint}`;
  updateDisplay();
});

function updateDisplay() {
  let wordDisplay = "";
  for (let i = 0; i < word.length; i++) {
    if (lettersGuessed.includes(word[i])) {
      wordDisplay += word[i];
    } else {
      wordDisplay += "_";
    }
  }
  document.querySelector("#word").innerHTML = wordDisplay;

  if (!wordDisplay.includes("_")) {
    document.querySelector("#message").innerHTML = "You win!";
    document.querySelector("#letterInput").disabled = true;
    document.querySelector("#submitBtn").disabled = true;
  }
  if (remainingGuesses === 0) {
    document.querySelector("#message").innerHTML = `You lose! The word was ${word}.`;
    document.querySelector("#letterInput")
  };
}
