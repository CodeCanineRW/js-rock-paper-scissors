// -- Computer Choice Logic - getComputerChoice


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

let computerChoice;

function getComputerChoice() {
    let randomNum = getRandomInt();
    
    switch (randomNum) {
        case 0:
            computerChoice = "rock";
            return "rock";

        case 1:
            computerChoice = "paper";
            return "paper";

        case 2:
            computerChoice = "scissors";
            return "scissors";

        default:
            break;
    }
}




// -- Human Choice Logic - getHumanChoice


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        humanChoice = e.target.id;
        playRound(humanChoice, getComputerChoice());
    })
});



// -- Gameplay Logic, Single Round


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundTies();
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        roundComputer();
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        roundHuman();
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        roundHuman();
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        roundComputer();
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        roundComputer();
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundHuman();
    }
}



// -- Display Results

let numRounds = 0;
let computerScore = 0;
let humanScore = 0;

const resultBox = document.getElementById('Result');
const scoreBox = document.getElementById('Score');
const gameBox = document.getElementById('Game');

function roundTies() {
    numRounds++;
    resultBox.textContent = `Your ${humanChoice} vs the computer's ${computerChoice}: The round ties`;
    scoreBox.textContent = `Round ${numRounds} - Player: ${humanScore}      Computer: ${computerScore}`;
    checkWinner();
}

function roundComputer() {
    numRounds++;
    resultBox.textContent = `Your ${humanChoice} vs the computer's ${computerChoice}: The computer wins the round`;
    computerScore++;
    scoreBox.textContent = `Round ${numRounds} - Player: ${humanScore}      Computer: ${computerScore}`;
    checkWinner();
}

function roundHuman() {
    numRounds++;
    resultBox.textContent = `Your ${humanChoice} vs the computer's ${computerChoice}: You win the round`;
    humanScore++;
    scoreBox.textContent = `Round ${numRounds} - Player: ${humanScore}      Computer: ${computerScore}`;
    checkWinner();
}



// -- Gameplay Logic, Full Game and Results


function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        declareWinner();
        resetGame();
    } else {
        gameBox.textContent = '';
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        gameBox.textContent = ` Congratulations, you won!`;
    } else if (humanScore < computerScore) {
        gameBox.textContent = ` You Lost! Better Luck next time`;
    }
}

function resetGame() {
    numRounds = 0;
    humanScore = 0;
    computerScore = 0;
}

