function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! rock beats scissors'; 
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! paper beats rock';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! scissors beats paper'; 
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}` 
    }
}


function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! rock beats scissors'; 
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! paper beats rock';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! scissors beats paper'; 
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}` 
    }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = getComputerChoice(); 
console.log(playGame(playerSelection, computerSelection));