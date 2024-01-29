function getComputerChoice(){
    choices = ["ROCK", "PAPER" , "SCISSORS"]
    let computerChoice = choices[Math.floor(Math.random()*3)]
    return (computerChoice)
}
let userScore = 0
let machineScore = 0
for (let index = 0; index < 7; index++) {
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection === computerSelection){
        console.log(`I'ts a tie! the machine also choosed ${playerSelection}`)
        index--
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" ){
        console.log("You Won!, Rock beats Scissors")
        userScore++
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER" ){
        console.log("You Lost!, Paper wraps Rock")
        machineScore++
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS" ){
        console.log("You Lost!, Scissors cut Paper")
        machineScore++
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK" ){
        console.log("You Lost!, Rock beats Scissors")
        machineScore++
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK" ){
        console.log("You Won!, Paper wraps Rock")
        userScore++
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER" ){
        console.log("You Won!, Scissors cut Paper")
        userScore++
    }
    else {
        console.log(`${playerSelection} is not an option!`)
        index--
    }
  }
  const playerSelection = window.prompt("Choose between: Rock, Paper or Scissors");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`the computer choose ${computerSelection}`)
}
if (userScore > machineScore){
    alert(`You Won! with the whopping amount of ${userScore} wins`)
}
else if (machineScore > userScore){
    alert(`You Lost! with the whopping amount of ${machineScore} losses`)
}