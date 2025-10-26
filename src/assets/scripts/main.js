// -- Computer Choice Logic - getComputerChoice

// Get random number between 0 and 3 Rounded down to integer
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
// Assign 0-1 as Rock, 1-2 as Paper, 2-3 as Scissors and log computer's choice
function computerChoice() {
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

computerChoice(); // **DELETE** calling function while developing to test computer selection



// -- Human Choice Logic - getHumanChoice

// Prompt user for a selection
// Declare variable for player's choice
// confirm string entered is a valid choice
// Prompt again if invalid
// Log Player's choice



// -- Score Keeping Logic

// Declare variable for Computer's score - computerScore
// Declare variable for Human's score - humanScore
// Start game with both values at 0



// -- Gameplay Logic, Single Round - playRound(humanChoice, computerChoice)

// Allow human and computer choices to be case insensitive
// Compare selections to determine game result
// Log round result with win or lose message
// Increment score per round results



// -- Gameplay Logic, Full Game

// Repeat game round for 5 rounds
// Track scores and compare after 5 rounds
// Log and or alert game winner