
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');
const resultText = document.getElementById('result-text');

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorBtn.addEventListener('click', playGame);

function playGame(event) {
    const userChoice = event.target.textContent;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((userChoice === 'Rock' && computerChoice === 'Scissor') ||
               (userChoice === 'Paper' && computerChoice === 'Rock') ||
               (userChoice === 'Scissor' && computerChoice === 'Paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}