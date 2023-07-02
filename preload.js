window.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const guessInput = document.getElementById('guess');
    const resultElement = document.getElementById('result');
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    function checkGuess() {
      const userGuess = Number(guessInput.value);  
      if (isNaN(userGuess)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
      }
      attempts++;
      if (userGuess === secretNumber) {
        resultElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
      } else if (userGuess > secretNumber) {
        resultElement.textContent = 'Too high! Try again.';
      } else {
        resultElement.textContent = 'Too low! Try again.';
      }
    }
    submitButton.addEventListener('click', checkGuess);
    guessInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        checkGuess();
      }
    });
  });
  