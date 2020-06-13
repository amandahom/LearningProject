// Declaring the elements of the game in an array
const options=["rock","paper","scissors"]

// This function is to simulate the computer's play
function computerPlay() {
    return options[Math.floor(Math.random()*3)];
}

// This function is to calculate the result for one round of RPS
function gamePlay(playerSelection,computerSelection) {
    let result;
    switch(playerSelection) {
        case "rock":
            if (computerSelection==="paper") {
                result = "Paper beats Rock. You lost!";
            } else if (computerSelection==="rock") {
                result = "Both of you chose Rock. Tied round.";
            } else {
                result = "Rock beats Scissors. You won!";
            }
            break;
        case "paper":
            if (computerSelection==="rock") {
                result = "Paper beats Rock. You won!";
            } else if (computerSelection==="paper") {
                result = "Both of you chose Paper. Tied round.";
            } else {
                result = "Scissors beats Paper. You lost!";
            }
            break;
        case "scissors":
            if (computerSelection==="paper") {
                result = "Scissors beats Paper. You won!";
            } else if (computerSelection==="scissors") {
                result = "Both of you chose Scissors. Tied round.";
            } else {
                result = "Rock beats Scissors. You lost!";
            }
            break;
        default:
            result = "Please try again.";
    }
    let report="Computer chose "+computerSelection+"<br><br>" + result;
    report=report.concat("<br><br>");
    if(result.search("won") >= 0) {
        playerPoints++;
        report=report.concat("<br>Your Score: "+playerPoints+"<br>Computer's Score: "+computerPoints);
    } else if (result.search("lost") >= 0) {
        computerPoints++;
        report=report.concat("<br>Your Score: "+playerPoints+"<br>Computer's Score: "+computerPoints);
    } else {
        report=report.concat("<br>Your Score: "+playerPoints+"<br>Computer's Score: "+computerPoints);
    }
    if(playerPoints === 5) {
        report=report.concat("<br><br>Yay, you won against a computer!<br><br>");
    } else if (computerPoints === 5) {
        report=report.concat("<br><br>Awe, you lost to a computer!<br><br>");
    }
    computerInfo.innerHTML = report;
    if(playerPoints === 5 || computerPoints === 5) {
        endGame();      
    }
    return result;
}

function endGame () {
    playerPoints = 0;
    computerPoints = 0;
    activeGame = false;
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id','restartGame');
    restartBtn.textContent = "Restart Game";
    computerInfo.appendChild(restartBtn);
    restartBtn.addEventListener('click', function (e) {
        activeGame = true;
        userInfo.textContent = "";
        computerInfo.textContent = "";
    });
}

// Main program starts here
let playerPoints = 0;
let computerPoints = 0;
let activeGame = true;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const userInfo = document.querySelector('#userInfo');
const computerInfo = document.querySelector('#computerInfo');

btnRock.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You chose Rock";
        gamePlay("rock",computerPlay());
    }
});

btnPaper.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You chose Paper";
        gamePlay("paper",computerPlay());
    }
});

btnScissors.addEventListener('click', function (e) {
    if (activeGame) {
        userInfo.textContent = "You chose Scissors";
        gamePlay("scissors",computerPlay());
    }
});