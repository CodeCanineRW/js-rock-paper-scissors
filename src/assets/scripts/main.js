// -- Computer Choice Logic - getComputerChoice

// Get random number between 0 and 3 Rounded down to integer
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// Assign 0-1 as Rock, 1-2 as Paper, 2-3 as Scissors and log computer's choice
function getComputerChoice() {
    let computerChoice = getRandomInt();
    
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            console.log('Computer Selects: Rock');
            return "rock";
            break;

        case 1:
            computerChoice = "paper";
            console.log('Computer Selects: Paper');
            return "paper";
            break;

        case 2:
            computerChoice = "scissors";
            console.log('Computer Selects: Scissors');
            return "scissors";
            break;

        default: // Added to alert to and help debug unexpected result of computer selection
            console.log('Computer was unable to make a selection');
            break;
    }
}

// getComputerChoice(); // **DELETE** calling function while developing to test computer selection



// -- Human Choice Logic - getHumanChoice

// Prompt user for a selection
function getPlayerSelection() {
    return prompt('Make your selection; Rock, Paper, or Scissors?');
}
// confirm string entered is a valid choice and log playerSelection
function getHumanChoice() {
    let playerSelection = getPlayerSelection().toLowerCase().trim(); // Allow human choice to be case insensitive, remove spaces

    switch (playerSelection) {
        case 'rock':
            playerSelection = 'rock';
            console.log('Player Selects: Rock');
            return 'rock';
            break;

        case 'paper':
            playerSelection = 'paper';
            console.log('Player Selects: Paper');
            return 'paper';
            break;

        case 'scissors':
            playerSelection = 'scissors'
            console.log('Player Selects: Scissors');
            return 'scissors';
            break;

        default:    // Prompt again if invalid
            alert(`"${playerSelection}" is not a valid choice. Please try again picking Rock, Paper, or Scissors.`);
            console.log(`User entered: "${playerSelection}" which is not a valid choice.`);
            return getHumanChoice(); // ??? New Choice was not evaluating and adding to score, added return ???
            break;
    }
}
// getHumanChoice(); // **DELETE** calling function while developing to test human selection



// -- Score Keeping Logic

// Start game with both values at 0
// Declare variable for Computer's score - computerScore
let computerScore = 0;
// Declare variable for Human's score - humanScore
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
    console.log('The round ties');
}

function roundComputer() {
    console.log('The Computer won the round');
    ++computerScore;
}

function roundHuman() {
    console.log('The player won the round')
    ++humanScore;
}

// playRound(getHumanChoice(), getComputerChoice()); // **DELETE** calling function while developing to test round



// -- Gameplay Logic, Full Game - playGame()

// Repeat game round for 5 rounds
// Track scores and compare after 5 rounds
// Log and or alert game winner

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