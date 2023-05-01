var playerChoice;
var pcChoice;
var randomGenerator;
var pcPoints = 0;
var playerPoints = 0;

const buttonRock = document.querySelector("#rockButton");
const buttonPaper = document.querySelector("#paperButton");
const buttonScissor = document.querySelector("#scissorButton");

buttonRock.addEventListener("click", chooseRock);
buttonPaper.addEventListener("click", choosePaper);
buttonScissor.addEventListener("click", chooseScissor);


function chooseRock () {
    playerChoice = "rock";
    console.log("Player chose: " + playerChoice);
    document.getElementById("rockButton").style.backgroundColor = "#023C40";
    document.getElementById("paperButton").style.backgroundColor = "white";
    document.getElementById("scissorButton").style.backgroundColor = "white";
    gamePosSubmit();
}

function choosePaper () {
    playerChoice = "paper";
    console.log("Player chose: " + playerChoice);
    document.getElementById("rockButton").style.backgroundColor = "white";
    document.getElementById("paperButton").style.backgroundColor = "#023C40";
    document.getElementById("scissorButton").style.backgroundColor = "white";
    gamePosSubmit();
}

function chooseScissor () {
    playerChoice = "scissor";
    console.log("Player chose: " + playerChoice);
    document.getElementById("rockButton").style.backgroundColor = "white";
    document.getElementById("paperButton").style.backgroundColor = "white";
    document.getElementById("scissorButton").style.backgroundColor = "#023C40";
    gamePosSubmit();
}

function randomNumber(a,b) {
    randomGenerator = Math.floor(Math.random() * (b - a + 1)) + a;
    return randomGenerator;
}

function switchPcChoice (randomGenerator) {
    if (randomGenerator === 0) {
        pcChoice = "rock";
        console.log("pc choose: " + pcChoice);
    } else if (randomGenerator === 1) {
        pcChoice = "paper";
        console.log("pc choose: " + pcChoice);
    } else if (randomGenerator === 2) {
        pcChoice = "scissor";
        console.log("pc choose: " + pcChoice);
    }
}

function comparation (playerChoice, pcChoice) {
    if (playerChoice==="rock" & pcChoice==="scissor" | playerChoice==="paper" & pcChoice==="rock" | playerChoice==="scissor" & pcChoice==="paper" ) {
        playerPoints++;
        console.log("You Win!")
        document.getElementById("resultOutput").innerHTML = `Computer chooses  ${pcChoice}, You win!`;
    } else if (playerChoice==="rock" & pcChoice==="paper" | playerChoice==="paper" & pcChoice==="scissor" | playerChoice==="scissor" & pcChoice==="rock" ) {
        pcPoints++;
        document.getElementById("resultOutput").innerHTML = `Computer chooses  ${pcChoice}, You Lose!`;
    } else {
        document.getElementById("resultOutput").innerHTML = `Computer chooses  ${pcChoice}, It's a draw!`;
    }
}

function cleanRound () {
    playerChoice = undefined;
    document.getElementById("rockButton").style.backgroundColor = "white";
    document.getElementById("paperButton").style.backgroundColor = "white";
    document.getElementById("scissorButton").style.backgroundColor = "white";
}

function gamePosSubmit () {

    if (playerChoice === undefined) {
        alert ("Choose one option!")
        document.getElementById("resultOutput").innerHTML = ` `;
    } else {
    randomNumber (0,2);
    switchPcChoice (randomGenerator);
    comparation (playerChoice, pcChoice)
    console.log ("vc: " + playerPoints);
    console.log ("pc: " + pcPoints);
    cleanRound();
    }
    
}