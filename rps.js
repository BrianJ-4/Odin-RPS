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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        return "Tie!";
    }
    
    const outcomes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    
    if(computerSelection == outcomes[playerSelection]){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playGame(){
    console.log("Game Starting");

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Choose Rock, Paper, or Scissors");
        let result = playRound(userChoice, getComputerChoice());
        console.log(result);
        if(result.includes("Win")){
            playerScore++;
        }
        else if(result.includes("Lose")){
            computerScore++;
        }
        console.log("Player: " + playerScore + "      Computer: " + computerScore);
    }

    if(playerScore > computerScore){
        console.log("Player Wins!");
    }
    else{
        console.log("Computer Wins!");
    }
}

playGame()