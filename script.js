//ROCK--------------------------------------------------------

function rock() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'You lose';
  } else if (computerMove === 'scissors') {
    result = 'You win';
  }
  document.getElementById(
    'result'
  ).innerText = `You pick pick rock. Computer picked ${computerMove}. \n${result}`;
}

// PAPER ------------------------------------------------------------

function paper() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You Win';
  } else if (computerMove === 'paper') {
    result = 'Tie';
  } else if (computerMove === 'scissors') {
    result = 'You lose';
  }
  document.getElementById(
    'result'
  ).innerText = `You pick pick paper. Computer picked ${computerMove}.\n${result}`;
}

// SCISSORS ------------------------------------------------------------

function scissors() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You Win';
  } else if (computerMove === 'paper') {
    result = 'You lose';
  } else if (computerMove === 'scissors') {
    result = 'Tie';
  }
  document.getElementById(
    'result'
  ).innerText = `You pick pick scissors. Computer picked ${computerMove}. \n${result}`;
}
