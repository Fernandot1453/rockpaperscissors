const Userscore = 0;
const computerScore = 0;
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");

function game(userChoice) {
    bruh + userChoice
}

rockdiv.addEventListener('click', function() {
    console.log("You clcked on rock")
} )

paperdiv.addEventListener('click', function() {
    console.log("You clcked on paper")
} )

scissorsdiv.addEventListener('click', function() {
    console.log("You clcked on scissors")
} )



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

    if (computer === "rock" || player === "scissors")
        console.log("Computer wins")


}




game(playerChoice, computerChoice)