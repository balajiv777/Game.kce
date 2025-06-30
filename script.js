let guessNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const messageBox = document.getElementById("message");
  const livesText = document.getElementById("lives");

  const userGuess = Number(input.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    messageBox.innerHTML = "Enter a number between 1 and 100!";
    return;
  }

  if (userGuess === guessNumber) {
    messageBox.innerHTML = `Correct! The number was ${guessNumber}. You won!`;
    messageBox.style.backgroundColor = "#4caf50";
    disableInput();
  } 
  else {
    lives--;
    if (lives === 0) {
      messageBox.innerHTML = `Game Over! The number was ${guessNumber}.`;
      messageBox.style.backgroundColor = "#f44336";
      disableInput();
    } 
    else {
      const hint = userGuess > guessNumber ? "too high" : "too low";
      messageBox.innerHTML = `Oops! Your guess is ${hint}. You have ${lives} lives remaining.`;
    }
  }

  livesText.textContent = lives;
  input.value = "";
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}
