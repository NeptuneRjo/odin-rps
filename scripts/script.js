//  computerSelection randomly returns  //
//  playerSelection gets player choice, case-insentitive
//  compare both choices
//  if computer wins, display loss message to player
//  if player wins, display win message to player
//  player choice is entered with prompt()

 

function computerSelection() {
    let comChoice = ["Rock", "Paper", "Scissors"]
    return comChoice[Math.floor(Math.random()*comChoice.length)]
}


function playerSelection(value) {
    return prompt("Enter your choice: ")
}


// playRound
// for 5 times
// get computerSelection and playerSelection
// compare
// return results

let comScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection().toLowerCase();
    computerSelection = computerSelection().toLowerCase();
    console.log(computerSelection)

    if (playerSelection == computerSelection) {
        console.log("Tie game!")
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log("The computer won this round")
        console.log(`${computerSelection} beats ${playerSelection}!`)
        comScore = ++comScore;

    } else {
        console.log("You won this round")
        console.log(`${playerSelection} beats ${computerSelection}!`)
        playerScore = ++playerScore;
    }
}

console.log(playRound(playerSelection, computerSelection))