function getComputerChoice() {
    let choice = Math.random() 
        if (choice <= 0.33) {
            choice = "rock"
        } else if (choice <= 0.66) {
            choice = "scissors"
        } else {
            choice = "paper"
        }
        return choice
}

console.log(getComputerChoice())
let computerChoice = getComputerChoice()

function game(player, computer) {
     computer = getComputerChoice()

    if (computer === "rock"  player === "scissors")
        console.log("Computer wins")


}






game(playerChoice, computerChoice)