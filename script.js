let resultsDiv = document.querySelector('.result');
resultsDiv.style.margin = '20px 0';

let playerPointsDiv = document.querySelector('.playerPoints');
let compPointsDiv = document.querySelector('.compPoints');

function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);
    let move = moves[n];

    return move;
}

function playRound(playerSelection, computerSelection) {

  let outcome = '';
  
  if(playerSelection === 'rock') {
    if(computerSelection === 'rock') {
      outcome = 'tie';
    } else if (computerSelection === 'paper') {
      outcome = 'lose';
    } else if (computerSelection === 'scissors') {
      outcome = 'win';
    }
  } else if(playerSelection === 'paper') {
    if(computerSelection === 'rock') {
      outcome = 'win';
    } else if (computerSelection === 'paper') {
      outcome = 'tie';
    } else if (computerSelection === 'scissors') {
      outcome = 'lose';
    }
  } else if (playerSelection === 'scissors') {
    if(computerSelection === 'rock') {
      outcome = 'lose';
    } else if (computerSelection === 'paper') {
      outcome = 'win';
    } else if (computerSelection === 'scissors') {
      outcome = 'tie';
    }
  } 

  if(outcome === 'win') {
    resultsDiv.textContent = `you ${outcome} this round.  ${playerSelection} beats ${computerSelection}.`;
  } else if (outcome === 'lose') {
    resultsDiv.textContent = `you ${outcome} this round.  ${computerSelection} beats ${playerSelection}.`;
  } else {
    resultsDiv.textContent = `its a ${outcome} this round.  both played ${playerSelection}.`;
  }
  return outcome;
}

function game() {

  alert('hi, lets play a game.');

  let playerPoints = 0;
  let compPoints = 0;
  let round = 1
  let roundResult;

  
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
      let playerSelection = e.target.textContent; 
      let computerSelection = getComputerChoice();
      
      roundResult = playRound(playerSelection, computerSelection);
      round++;

      switch (roundResult) {
        case 'win':
          playerPoints++;
          break;
        case 'lose':
          compPoints++;
          break;
        case 'tie':
          round--;
          break;
        };
    
      playerPointsDiv.textContent = `Player: ${playerPoints}`;
      compPointsDiv.textContent = `Machine: ${compPoints}`;
      
      if (playerPoints === 5) {
        resultsDiv.textContent = 'you won!';
        playerPoints = 0;
        compPoints = 0;
        return;
      } else if (compPoints === 5) {
        resultsDiv.textContent = 'you lost. randomness wins out this time.';
        playerPoints = 0;
        compPoints = 0;
        return;
      }
    });
  });
  
}

game();