// -- Computer Choice Logic - getComputerChoice

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let computerChoice = getRandomInt();
    
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            console.log('Computer Selects: Rock');
            return "rock";

        case 1:
            computerChoice = "paper";
            console.log('Computer Selects: Paper');
            return "paper";

        case 2:
            computerChoice = "scissors";
            console.log('Computer Selects: Scissors');
            return "scissors";

        default:
            console.log('Computer was unable to make a selection');
            break;
    }
}

// getComputerChoice(); // **DELETE** calling function while developing to test computer selection



// -- Human Choice Logic - getHumanChoice

function getPlayerSelection() {
    return prompt('Make your selection; Rock, Paper, or Scissors?');
}
function getHumanChoice() {
    let playerSelection = getPlayerSelection().toLowerCase().trim();

    switch (playerSelection) {
        case 'rock':
            playerSelection = 'rock';
            console.log('Player Selects: Rock');
            return 'rock';

        case 'paper':
            playerSelection = 'paper';
            console.log('Player Selects: Paper');
            return 'paper';

        case 'scissors':
            playerSelection = 'scissors'
            console.log('Player Selects: Scissors');
            return 'scissors';

        default:    // Prompt again if invalid
            alert(`"${playerSelection}" is not a valid choice. Please try again picking Rock, Paper, or Scissors.`);
            console.log(`User entered: "${playerSelection}" which is not a valid choice.`);
            return getHumanChoice(); // ??? New Choice was not evaluating and adding to score, added return ???
    }
}
// getHumanChoice(); // **DELETE** calling function while developing to test human selection



// -- Score Keeping Logic

let computerScore = 0;
let humanScore = 0;



// -- Gameplay Logic, Single Round - playRound(humanChoice, computerChoice)

// Compare selections to determine game result

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

// Log round result with win or lose message
// Increment score per round results

function roundTies() {
    console.log('   The round ties');
}

function roundComputer() {
    console.log('   The Computer won the round');
    ++computerScore;
}

function roundHuman() {
    console.log('   The player won the round')
    ++humanScore;
}

// playRound(getHumanChoice(), getComputerChoice()); // **DELETE** calling function while developing to test round



// -- Gameplay Logic, Full Game - playGame()


let numRounds = 1;

function playGame(humanChoice, computerChoice) {
    if (numRounds < 5) {
        playRound(humanChoice, computerChoice);
        console.log('Player Score: ' + humanScore + '  | Computer Score: ' + computerScore + '  | Round: ' + numRounds);
        ++numRounds;
        playGame(getHumanChoice(), getComputerChoice());
    } else if (numRounds = 5) {
        playRound(humanChoice, computerChoice);
        console.log('Game Over - Final score is Player: ' + humanScore + '  | Computer: ' + computerScore );
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore == computerScore) {
        console.log('The game ends in a tie');
    } else if (humanScore > computerScore) {
        console.log('Congratulations, you won!');
    } else if (humanScore < computerScore) {
        console.log('You Lost! Better Luck next time');
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

playGame(getHumanChoice(), getComputerChoice());