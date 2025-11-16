function getComputerChoice(){
    let randInt = Math.random();
    let computerChoice = null;

    if (randInt <= 0.33) {
        computerChoice = "Rock";
    }
    else if (randInt >= 0.331 && randInt <= 0.66){
        computerChoice = "Paper";
    }
    else if (randInt >= 0.661){
        computerChoice = "Scissors";
    }
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = null;

    humanChoice = prompt("Type Rock, Paper, or Scissors");
    return humanChoice;
}

console.log(`Human: ${getHumanChoice()}`);
console.log(`Computer: ${getComputerChoice()}`);
