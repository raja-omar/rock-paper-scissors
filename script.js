let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) return "Rock"
    else if (choice == 1) return "Paper"
    return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return "Draw"
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        computerScore++
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        playerScore++
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        playerScore++
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return "Draw!"
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        computerScore++
        return "You Lose! Scissors beat Paper"
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        computerScore++
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        playerScore++
        return "You Win! Scissors beat Paper"
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") { "Draw!" }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

function game() {
    playRound(prompt("Pick rock, paper or scissors"), getComputerChoice())
    playRound(prompt("Pick rock, paper or scissors"), getComputerChoice())
    playRound(prompt("Pick rock, paper or scissors"), getComputerChoice())
    playRound(prompt("Pick rock, paper or scissors"), getComputerChoice())
    playRound(prompt("Pick rock, paper or scissors"), getComputerChoice())

    if (playerScore > computerScore) {
        console.log(`You've won ${playerScore} out of 5 games so you win`)
    } else if (computerScore > playerScore) {
        console.log(`Computer has won ${computerScore} out of 5 games so you lose`)
    } else {
        console.log("It's a draw!")
    }
    playerScore = 0
    computerScore = 0
}
game()