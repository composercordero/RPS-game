//Rock, Paper, Scissor - Rules
let resultDisplay = document.getElementsByClassName('winner')[0];
const text = document.getElementsByClassName('text')[0];
text.append(resultDisplay);
const options = document.getElementById('options');
let userScoreDisplay = document.getElementsByClassName('userscore')[0];
let computerScoreDisplay = document.getElementsByClassName('computerscore')[0];
const reloadBtn = document.querySelector('.reload');

//Score
let userScore = 0;
let computerScore = 0;
userScoreDisplay.append(userScore);
computerScoreDisplay.append(computerScore);

//Game
const checkWinner = function () {
    if (userScore == 5){
        resultDisplay.textContent = 'You Won the Game!'
        reloadGame();
    }
    else if (computerScore == 5){
        resultDisplay.textContent = 'You Lost the Game!'
        reloadGame();
    }
    }

const reloadGame = function () {
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })}

//Choices
const choices = ['rock', 'fire', 'scissors', 'sponge', 'paper', 'air', 'water'];
let userChoice;
let computerChoice;

//Functions
const handleClick = (e) => {
    userChoice = e.target.className;
    const userChoiceDisplay = document.getElementsByClassName('userchoice')[0];
    userChoiceDisplay.textContent = `You chose: ${userChoice}`;
    generateComputerChoice ();
    getResult();
    checkWinner();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random () * choices.length)];
    const computerChoiceDisplay = document.getElementsByClassName('computerchoice')[0];
    computerChoice = randomChoice;
    computerChoiceDisplay.textContent = `Computer Chose: ${randomChoice}`;
} 

for (const choice of choices) {
    const button = document.createElement('button');
    button.className = choice;
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    options.append(button);
}

//Results
const getResult = () => {
    switch (userChoice + computerChoice) {
        case (choices[0]+choices[0+1]) :
        case (choices[0]+choices[0+2]) :
        case (choices[0]+choices[0+3]) :

        case (choices[1]+choices[1+1]) :
        case (choices[1]+choices[1+2]) :
        case (choices[1]+choices[1+3]) :

        case (choices[2]+choices[2+1]) :
        case (choices[2]+choices[2+2]) :
        case (choices[2]+choices[2+3]) :

        case (choices[3]+choices[3+1]) :
        case (choices[3]+choices[3+2]) :
        case (choices[3]+choices[3+3]) :
        
        case (choices[4]+choices[4+1]) :   
        case (choices[4]+choices[4+2]) : 
        case (choices[4]+choices[4+3]) : 
        
        case (choices[5]+choices[5+1]) :
        case (choices[5]+choices[5+2]) :
        case (choices[5]+choices[5+3]) :

        case (choices[6]+choices[0]) :
        case (choices[6]+choices[6+1]) :
        case (choices[6]+choices[6+2]) :
            resultDisplay.innerHTML = 'You Win :)';
            userScore++;
            userScoreDisplay.textContent = userScore;
        break;

        case 'rockwater' :
        case 'rockair' :
        case 'rockpaper' :

        case 'firerock' :
        case 'firewater' :
        case 'fireair' :
    
        case 'scissorsfire' :
        case 'scissorsrock' :
        case 'scissorswater' :
    
        case 'spongescissors' :
        case 'spongefire' :           
        case 'spongerock' :  
            
        case 'papersponge' :   
        case 'paperscissors' :  
        case 'paperfire' :  
            
        case 'airpaper' :  
        case 'airsponge' :  
        case 'airscissors' :  

        case 'waterair' : 
        case 'waterpaper' :
        case 'watersponge' :
            resultDisplay.innerHTML = 'You Lose :(';
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case (choices[0] + choices[0]) :
        case (choices[1] + choices[1]) :
        case (choices[2] + choices[2]) :
        case (choices[3] + choices[3]) :
        case (choices[4] + choices[4]) :
        case (choices[5] + choices[5]) :   
        case (choices[6] + choices[6]) :
            resultDisplay.innerHTML = 'Tie!'
            break;
}
}

// let map = {};

// choices.forEach(function(choice, i) {
//     map[choice] = {};
//     for (var j = 0, half = (choices.length-1)/2; j < choices.length; j++) {
//         var opposition = (i+j)%choices.length
//         if (!j)
//             map[choice][choice] = "Was a tie"
//         else if (j <= half)
//             map[choice][choices[opposition]] = choices[opposition] + " wins"
//         else
//             map[choice][choices[opposition]] = choice + " wins"
//     }
// })

// function compare(userChoice, computerChoice) {
//     if (userChoice == computerChoice){
//         resultDisplay = resultDisplay.textContent("It's a tie");
//     }
// }