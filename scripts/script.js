//  computerSelection randomly returns  //
//  playerSelection gets player choice, case-insentitive
//  compare both choices
//  if computer wins, display loss message to player
//  if player wins, display win message to player
//  player choice is entered with prompt()

let comScore = 0;
let playerScore = 0;
let comChoice = ["Rock", "Paper", "Scissors"]
 


function displayVictor() {
    if (comScore == playerScore) {
        console.log("This game was a tie!");
        console.log(playerScore, comScore);
    
    } else if (comScore > playerScore) {
        console.log("The computer won this game. Better luck next time!");

    } else {
        console.log("You won this game!");
    }
}


function playRound() {
    let computerSelection = comChoice[Math.floor(Math.random()*comChoice.length)];
    let playerSelection = prompt("Enter your choice: ");

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    

    if (playerSelection == computerSelection) {
        console.log("Tie round!")

    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log("The computer won this round");
        console.log(`${computerSelection} beats ${playerSelection}!`);
        comScore++;

    } else {
        console.log("You won this round");
        console.log(`${playerSelection} beats ${computerSelection}!`);
        playerScore = ++playerScore;
    }
}


function game() {

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`);
        playRound();
    }

    displayVictor();
    console.log(`The score was ${playerScore} to ${comScore}`);
}

game();

