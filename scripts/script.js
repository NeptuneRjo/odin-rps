//  computerSelection randomly returns  //
//  playerSelection gets player choice, case-insentitive
//  compare both choices
//  if computer wins, display loss message to player
//  if player wins, display win message to player
//  player choice is entered with prompt()

// for loop calls playRound 5 times
// playRound takes both choices and compares them
// 

function computerSelection() {
    let comChoice = ["Rock", "Paper", "Scissors"]
    return comChoice[Math.floor(Math.random()*comChoice.length)]
}
console.log(computerSelection())

function playerSelection() {
    return prompt("Enter your choice: ")
}

// playRound
// for 5 times
// get computerSelection and playerSelection
// compare
// return results

// get results from computerSelection and playerSelection
// compare results with if statements
let comScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("Tie game!")
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log("The computer won this round")
        comScore = comScore++;
    } else {
        console.log("You won this round")
        playerScore = playerScore++;
    }
}

console.log(playRound())