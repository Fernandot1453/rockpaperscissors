let userScore = 0;
let computerScore = 0;    
const scoreBoard = document.querySelector("results")
let userScore_span = document.querySelector(".result-score");
let computerScore_span = document.querySelector(".result-score1");
let result = document.querySelector(".directions")
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");

function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "s") return "scissors";
    if (letter === "p") return "paper";
}

function win(userChoice, computerChoice) {
    userScore++;  
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "YOU WIN! " + convertToWord(userChoice) + " beats " + convertToWord(computerChoice);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "DRAW " + convertToWord(userChoice) + "-" + convertToWord(computerChoice);
}

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rockdiv.addEventListener('click', function() {
        game("r")
    } )

    paperdiv.addEventListener('click', function() {
        game("p")
    } )

    scissorsdiv.addEventListener('click', function() {
        game("s")
    } )
}

main();
