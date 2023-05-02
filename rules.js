//Rock, Paper, Scissor - Rules

//User has three choices
const choices = ["rock", "paper", "scissors",];

//User selects an option
function userChoice (){
    let question = prompt("rock, paper, or scissors?")
    question.localeCompare(question, undefined, { sensitivity: 'accent' });
    return question
}

//Computer randomly selects an option

function getComputerChoice (){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

//Learn mode, update the page and see the different random combinations
//const playerSelection = choices[Math.floor(Math.random()*choices.length)];
const computerSelection = getComputerChoice ();
const playerSelection = userChoice();
console.log(playRound(playerSelection, computerSelection));

console.log('User chose: ' + playerSelection);
console.log('Computer chose: ' + computerSelection);

//Evaluate inputs
function playRound(playerSelection, computerSelection) {
    if (playerSelection == choices[0]){ //rock
        if (computerSelection == choices[1]){ return "paper wins"} //paper
        else if (computerSelection == choices[2]){ return "rock wins"} //scissors
        else return "It's a tie" //rock
    }
    else if (playerSelection == choices[1]){ //paper
        if (computerSelection == choices[0]){ return "paper wins"} //rock
        else if (computerSelection == choices[2]){ return "scissors wins"} //scissors
        else return "It's a tie" //paper
    }
    else if (playerSelection == choices[2]){ //scissors
        if (computerSelection == choices[0]){ return "rock wins"} //rock
        else if (computerSelection == choices[1]){ return "scissors wins"} //paper
        else return "It's a tie" //scissors
    }
}

//Return result
//Add points


//Optional features for future iterations



//Add Fire, Water Sponge, and Air

/*Add the whole extended list of options for the game 
(found at https://boardgames.stackexchange.com/questions/11280/adding-additional-weapons-to-rock-paper-scissors)*/