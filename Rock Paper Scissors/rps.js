for (let i = 0; i < 5; i++) {
   

function getComputerChoice () {
const options = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * options.length);
return options[randomIndex];
}

function determineWinner(userChoice, computerChoice)
{
let result;
if (userChoice === computerChoice) {
    result = "its a tie!";
}
else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
) {
    result = "you win!";
}
else {
    result = "You Lose!";
}
return result;
}
function playGame() {
    const userChoice = prompt("Choose rock, paper, or scissors:");
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    console.log(result);
  }
playGame();

 
}
