let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const historyList = document.getElementById("history");

function checkGuess() {
  const guess = Number(guessInput.value);

  if (guessInput.value === "") {
    message.textContent = "Please enter a number.";
    return;
  }

  if (guess < 1 || guess > 100) {
    message.textContent = "Enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;

  const listItem = document.createElement("li");
  listItem.textContent = guess;
  historyList.appendChild(listItem);

  if (guess < secretNumber) {
    message.textContent = "Too low! 📉";
  } else if (guess > secretNumber) {
    message.textContent = "Too high!📈";
  } else {
    message.textContent = `Correct ✅! You found the number in ${attempts} attempts.`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    playAgainBtn.classList.remove("hidden");
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsText.textContent = "Attempts: 0";
  message.textContent = "Start guessing...";
  historyList.innerHTML = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  playAgainBtn.classList.add("hidden");
  guessInput.focus();
}

submitBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

playAgainBtn.addEventListener("click", resetGame);
