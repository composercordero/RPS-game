//Rock, Paper, Scissor - Rules

//User has three choices
const choices = ["rock", "paper", "scissors",];

//User selects an option
function userChoice (){
    let playerSelection = choices (x);
    choices[x].localeCompare(choices[y], undefined, { sensitivity: 'accent' });
    return playerSelection
}

//Computer randomly selects an option

function getComputerChoice (){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

//Evaluate inputs

const playerSelection = choices[0];
const computerSelection = getComputerChoice ();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == choices[0]){ //rock
        if (computerSelection == choices[1]){ return "paper wins"} //paper
        else if (computerSelection == choices[2]){ return "rock wins"} //scissor
        else return "It's a tie" //rock
    }
}

//Return result
//Add points


//Optional features for future iterations

//Learn mode in which user can see what the computer will choose

//Add Fire, Water Sponge, and Air

/*Add the whole extended list of options for the game 
(found at https://boardgames.stackexchange.com/questions/11280/adding-additional-weapons-to-rock-paper-scissors)*/