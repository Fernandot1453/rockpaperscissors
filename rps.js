const Userscore = 0;
const computerScore = 0;
const scoreBoard = document.querySelector("results")
const userScore_span = document.querySelector("result-score");
const computerScore_span = document.getElementById("result-score1");
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {

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

