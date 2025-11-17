let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randInt = Math.random()
    let computerChoice = null

    if (randInt <= 0.33) {
        computerChoice = "rock"
    }
    else if (randInt >= 0.331 && randInt <= 0.66){
        computerChoice = "paper"
    }
    else if (randInt >= 0.661){
        computerChoice = "scissors"
    }
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = null

    humanChoice = prompt("Type Rock, Paper, or Scissors")
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice){


    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1
        console.log("Human Wins!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1
        console.log("Human Wins!")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1
        console.log("Human Wins!")
    }
    else if (humanChoice == computerChoice){
        console.log("Tie!")
    }
    else{
        computerScore += 1
        console.log("Computer Wins!")
    }

}

function playGame(){
    for (i = 0; i <= 4; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log(`Human: ${humanSelection}`)
        console.log(`Computer: ${computerSelection}`)
        playRound(humanSelection, computerSelection)
        console.log(`Human Score: ${humanScore},       Computer Score: ${computerScore}`)
        console.log("")
    }
}

playGame()

if (humanScore > computerScore){
    console.log("HUMAN WINS THE GAME!")
}
else if (humanScore == computerScore){
    console.log("GAME HAS ENDED IN A TIE!")
}
else{
    console.log("COMPUTER WINS THE GAME")
}