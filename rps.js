const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const messageDisplay = document.getElementById("message");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;

playerScoreSpan.textContent = "0";
computerScoreSpan.textContent = "0";

rockButton.addEventListener("click", () => {
    console.log("ROCK");
    playRound("rock", getComputerChoice())
})

paperButton.addEventListener("click", () => {
    console.log("PAPER");
    playRound("paper", getComputerChoice())
})

scissorsButton.addEventListener("click", () => {
    console.log("SCISSORS");
    playRound("scissors", getComputerChoice())
})

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        messageDisplay.textContent = "Tie!";
        return
    }
    
    const outcomes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    if(computerSelection == outcomes[playerSelection]){
        playerScore++;
        messageDisplay.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else{
        computerScore++;
        messageDisplay.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if(playerScore > 4 || computerScore > 4){
        endGame();
    }
}

function endGame(){
    if(playerScore > computerScore){
        messageDisplay.textContent = "Player Wins!";
    }
    else{
        messageDisplay.textContent = "Computer Wins!";
    }

    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true

    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    document.getElementById("resetSection").append(resetButton);

    resetButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;

        rockButton.disabled = false
        paperButton.disabled = false
        scissorsButton.disabled = false

        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;

        messageDisplay.textContent = "";
        
        document.getElementById("resetSection").removeChild(resetButton);
    })
}