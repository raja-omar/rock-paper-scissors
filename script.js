let playerScore = 0
let computerScore = 0
const btns = document.querySelectorAll("button")
const scoreDiv = document.querySelector("#score")
const result = document.querySelector('#result')
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) return "Rock"
    else if (choice == 1) return "Paper"
    return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    result.textContent = ""
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        console.log("Draw")
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        computerScore++
        console.log("You Lose! Paper beats Rock")
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        playerScore++
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        playerScore++
        console.log("You Win! Paper beats Rock")
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        console.log("Draw!")
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        computerScore++
        console.log("You Lose! Scissors beat Paper")
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        computerScore++
        console.log("You Lose! Rock beats Scissors")
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        playerScore++
        console.log("You Win! Scissors beat Paper")
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") { console.log("Draw!") }
    scoreDiv.textContent = `Playerscore: ${playerScore} Computerscore: ${computerScore}`
    if (playerScore == 5 || computerScore == 5) {
        checkWin()
    }
}

function checkWin() {
    if (playerScore == 5) {
        console.log(`You've won ${playerScore} out of 5 games so you win`)
        result.textContent = "YOU WIN!"
    } else if (computerScore == 5) {
        console.log(`Computer has won ${computerScore} out of 5 games so you lose`)
        result.textContent = "YOU LOSE!"
    } else {
        console.log("Draw")
        result.textContent = "DRAW!"
    }
    playerScore = 0
    computerScore = 0
}
btns.forEach(btn => btn.addEventListener('click', () => playRound(btn.textContent, getComputerChoice())));
