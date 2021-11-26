
const btn = document.querySelectorAll('button');
const roundResult = document.querySelector('#roundResult');
const gameScore = document.querySelector('#gameScore');
const computerChoice = document.querySelector('#computerChoice');
const playerChoice_DOM = document.querySelector('#playerChoice');


let comScore = 0;
let playerScore = 0;
let round = 1;


const cpuChoice = function() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

gameScore.textContent = `${playerScore} - ${comScore}` 
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

    computerChoice.textContent = `${computerSelection}`
    round++;    

    if (playerSelection == computerSelection) {
        roundResult.textContent = "Tie Game!"

    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        roundResult.textContent = "Computer wins this round!"
        ++comScore;

    } else {
        roundResult.textContent = "Player wins this round!"
        ++playerScore;
    }

}



