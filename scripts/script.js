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


let comScore = 0;
let playerScore = 0;


function game(playRound) {
    for (let i = 0; i < 5; i++) {
        console.log(i)

        playerSelection()
        computerSelection()

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection().isLowerCase();
            computerSelection = computerSelection().isLowerCase();
            console.log(computerSelection)
        
            if (playerSelection == computerSelection) {
                console.log("Tie round!")
        
            } else if (
                (computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "rock")
            ) {
                console.log("The computer won this round")
                console.log(`${computerSelection} beats ${playerSelection}!`)
                comScore++;
        
            } else {
                console.log("You won this round")
                console.log(`${playerSelection} beats ${computerSelection}!`)
                playerScore = ++playerScore;
            }
        }

    }
}
console.log(playerScore, comScore)


function displayVictor(playerScore, comScore) {
    if (comScore == playerScore) {
        console.log("This game was a tie!");
        console.log(playerScore, comScore)
    
    } else if (comScore > playerScore) {
        console.log("The computer won this game. Better luck next time!");

    } else {
        console.log("You won this round!");
    }
}

game();
displayVictor();