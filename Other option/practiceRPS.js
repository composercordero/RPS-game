const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(
    userChoiceDisplay, computerChoiceDisplay, resultDisplay
    )


const choices = ['rock', 'fire', 'scissors', 'sponge', 'paper', 'air', 'water'];
let userChoice;
let computerChoice;


const handleClick = (e) => {
    userChoice = e.target.className;
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
    generateComputerChoice ();
    getResult();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random () * choices.length)];
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice;
} 
/* for example
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.className = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button);
}*/

//for...of example
for (const choice of choices) {
    const button = document.createElement('button');
    button.className = choice;
    button.innerHTML = choice;
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button);
}


const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'rockfire' :
        case 'rockscissors' :
        case 'rocksponge' :

        case 'firescissors' :
        case 'firesponge' :
        case 'firepaper' :

        case 'scissorssponge' :
        case 'scissorspaper' :
        case 'scissorsair' :

        case 'spongepaper' :
        case 'spongeair' :
        case 'spongewater' :  
        
        case 'paperair' :   
        case 'paperwater' :  
        case 'paperrock' :  
        
        case 'airwater' :  
        case 'airrock' :  
        case 'airfire' :  

        case 'waterrock' : 
        case 'waterfire' :
        case 'waterscissor' :
            resultDisplay.innerHTML = 'You Win :)'
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
            resultDisplay.innerHTML = 'You Lose :('
            break;

        case 'rockrock' :
        case 'firefire' :
        case 'scissorsscissors' :
        case 'spongesponge' :
        case 'paperpaper' :
        case 'airair' :       
        case 'waterwater' :
            resultDisplay.innerHTML = 'Tie!'
            break;
}
}

/* I tried to do it with a formula but might not be switch but conditional instead
    case 'rock' "computerChoice == ['fire', 'scissors', 'sponge'] :
    case 'fire' "computerChoice == ['scissors', 'sponge', 'paper'] :
    case 'scissors', computerChoice == ['sponge', 'paper', 'air'] :
    case 'sponge', computerChoice == ['paper', 'air', 'water'] :
    case 'paper', computerChoice == ['air', 'water', 'rock'] :
    case 'air', computerChoice == ['water', 'rock', 'fire'] :
    case 'water', computerChoice == ['rock', 'fire', 'scissors'] :
        resultDisplay.innerHTML = 'You Win :)'
        break;
    case 'rock', computerChoice == ['paper', 'air', 'water'] :
    case 'fire', computerChoice == ['air', 'water', 'rock'] :
    case 'scissors', computerChoice == ['water', 'rock', 'fire'] :
    case 'sponge', computerChoice == ['rock', 'fire', 'scissors'] :
    case 'paper', computerChoice == ['fire', 'scissors', 'sponge'] :
    case 'air', computerChoice == ['scissors', 'sponge', 'paper'] :
    case 'water', computerChoice == ['sponge', 'paper', 'air'] :
        resultDisplay.innerHTML = 'You Lose :('
        break;   
    case userChoice === computerChoice :
        resultDisplay.innerHTML = 'It\'s a tie'
        break;       
}

To Study
https://stackoverflow.com/questions/17976883/rock-paper-scissors-in-javascript

*/


Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.


let userChoice = (x) => {
    num = prompt('input a number greater than 100', '')
    while (num <= 100) {
        alert('input a number greater than 100, please')
    }
}


The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
