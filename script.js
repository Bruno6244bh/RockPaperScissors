var playerChoice;
var pcChoice;
var randomGenerator;
var pcPoints = 0;
var playerPoints = 0;

function chooseRock () {
    playerChoice = "rock";
    console.log("Player chose: " + playerChoice);
}

function choosePaper () {
    playerChoice = "paper";
    console.log("Player chose: " + playerChoice);
}

function chooseScissor () {
    playerChoice = "scissor";
    console.log("Player chose: " + playerChoice);
}

function randomNumber(a,b) {

    randomGenerator = Math.floor(Math.random() * (b - a + 1)) + a;
    return randomGenerator;
    
}

function switchPcChoice (randomGenerator) {
    if (randomGenerator == 0) {
        pcChoice = "rock";
        console.log("pc choose: " + pcChoice);
    } else if (randomGenerator == 1) {
        pcChoice = "paper";
        console.log("pc choose: " + pcChoice);
    } else if (randomGenerator == 2) {
        pcChoice = "scissor";
        console.log("pc choose: " + pcChoice);
    }
}

function comparation (playerChoice, pcChoice) {

    switch (playerChoice, pcChoice) {

        case ("rock", "scissor"):
            playerPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("rock", "paper"):
            pcPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("rock", "rock"):
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("paper", "scissor"):
            pcPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("paper", "paper"):
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("paper", "rock"):
            playerPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints);
        break;

        case ("scissor", "scissor"):
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("scissor", "paper"):
            playerPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

        case ("scissor", "rock"):
            pcPoints +1;
            // console.log ("player:" + playerPoints / "pc:" + pcPoints );
        break;

    }
}



function gamePosSubmit () {
    randomNumber (0,2);
    switchPcChoice (randomGenerator);
    comparation (playerChoice, pcChoice)
    console.log ("vc: " + playerPoints);
    console.log ("pc: " + pcPoints);
}