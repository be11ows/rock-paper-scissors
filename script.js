function getComputerChoice() {
    // create variable moves
    let moves = ['rock', 'paper', 'scissors'];
    // create variable n generated and use Math.random to generate a number between 0-2
    let n = Math.floor(Math.random() * 3);
    // use random number to select a move from moves array
    let move = moves[n];

    // return computers 'choice'
    console.log('computer move is ', move)
    return move;
}

function playRound(playerSelection, computerSelection) {
  // create winLose variable
  let outcome = '';
  // change to lowercase
  playerSelection = playerSelection.toLowerCase();
  
  // validate move is an option
  if(playerSelection === 'rock') {
    // if yes, continue and compare moves to each other

    // player choice rock
    if(computerSelection === 'rock') {
      outcome = 'tie';
    } else if (computerSelection === 'paper') {
      outcome = 'lose';
    } else if (computerSelection === 'scissors') {
      outcome = 'win';
    }
    // player choice paper
  } else if(playerSelection === 'paper') {
    if(computerSelection === 'rock') {
      outcome = 'win';
    } else if (computerSelection === 'paper') {
      outcome = 'tie';
    } else if (computerSelection === 'scissors') {
      outcome = 'lose';
    }
  } else if (playerSelection === 'scissors') {
    // player choice scissor
    if(computerSelection === 'rock') {
      outcome = 'lose';
    } else if (computerSelection === 'paper') {
      outcome = 'win';
    } else if (computerSelection === 'scissors') {
      outcome = 'tie';
    }
  } else {
    console.log('not a valid move. try again.');
  }
  
  if(outcome === 'win') {
    console.log(`you ${outcome} this round.  ${playerSelection} beats ${computerSelection}.`);
  } else if (outcome === 'lose') {
    console.log(`you ${outcome} this round.  ${computerSelection} beats ${playerSelection}.`);
  } else {
    console.log(`its a ${outcome} this round.  both played ${playerSelection}.`);
  }

  return outcome;
}

function game() {
  // create variables to keep track of scores
  let playerPoints = 0;
  let compPoints = 0;

  alert('hi, lets play a game.');

  // loop through 5 games (or until a score === 3)
  for(let round = 1; round <= 5; round++) {
    
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('whats your move?  rock, paper, or scissors?');

    let roundResult = playRound(playerSelection, computerSelection);

    if (playerPoints < 3 && compPoints < 3) {
      if(roundResult === 'win') {
        playerPoints++;
      } else if(roundResult === 'lose') {
        compPoints++;
      } else if(roundResult === 'tie') {
        round--;
      }
      console.log('round is ', round)
      console.log(`Score is human = ${playerPoints} to comp ${compPoints}`)
      } 
    
      if (playerPoints === 3) {
        alert('you won!');
        playerPoints = 0;
        compPoints = 0;
        break;
      } else if (compPoints === 3) {
        alert('you lost. randomness wins out this time.');
        playerPoints = 0;
        compPoints = 0;
        break;
    }
      }
    }


game();
