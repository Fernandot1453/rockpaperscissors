
let userScore = 0;
const computerScore = 0;
const scoreBoard = document.querySelector("results")
let userScore_span = document.querySelector(".result-score");
let computerScore_span = document.querySelector(".result-score1");
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");


function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span = computerScore;
}


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}


function lose() {
    console.log("LOSS")
}

function draw() {
    console.log("DRAW")
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "sr":
        case "ps":
            lose();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();
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
