// script.js
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resultElement = document.getElementById('result');

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < numberToGuess) {
        resultElement.textContent = `Too low! Try again. Attempts: ${attempts}`;
        resultElement.style.color = 'red';
    } else if (userGuess > numberToGuess) {
        resultElement.textContent = `Too high! Try again. Attempts: ${attempts}`;
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = ` Congratulations! You guessed the number in ${attempts} attempts.`;
        resultElement.style.color = 'green';
        guessBtn.disabled = true;
    }
});