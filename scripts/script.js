
const btn = document.querySelectorAll('button');
const roundResult = document.querySelector('#roundResult');
const gameScore = document.querySelector('#gameScore');
const computerChoice = document.querySelector('#computerChoice');
const playerChoice_DOM = document.querySelector('#playerChoice');


let comScore = 0;
let playerScore = 0;
let round = 1;


let cpuChoice = function() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

// function comChoice() {
//      let choice = ["rock", "paper", "scissors"]
//      return choice[Math.floor(Math.random()*choice.length)]
// }

// function playerChoice() {
//     return playerChoice
// }


// function displayVictor() {
//     if (comScore == playerScore) {
//         console.log("This game was a tie!");
    
//     } else if (comScore > playerScore) {
//         console.log("The computer won this game. Better luck next time!");

//     } else {
//         console.log("You won this game!");
//     }
// }
gameScore.textContent = `${playerScore} - ${comScore}` // displays the default 0 - 0 value
roundResult.textContent = `Round ${round}`

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);

        playerChoice_DOM.textContent = `${button.id}`

        gameScore.textContent = `${playerScore} - ${comScore}`
    });
});


function playRound(playerSelection) {
    let computerSelection = cpuChoice();

    // playerChoice_DOM.textContent = `${button.id}`
    computerChoice.textContent = `${computerSelection}`

    round++;    

    if (playerSelection == computerSelection) {
        console.log(playerSelection, computerSelection)
        console.log("tie")
        roundResult.textContent = "Tie Game!"

    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        roundResult.textContent = "Computer wins this round!"
        ++comScore;
    } else {
        roundResult.textContent = "Player Wins"
        ++playerScore;
    }

}

// display current round
// update score
    // display current score for player and com in #gameScore



// gameScore.textContent = `${playerScore} - ${comScore}` // displays the default 0 - 0 value
// roundResult.textContent = `Round ${round}`

// btn.forEach((button) => {
//     button.addEventListener('click', () => {
//         playRound(button.id);

//         gameScore.textContent = `${playerScore} - ${comScore}`
//     });
// });


