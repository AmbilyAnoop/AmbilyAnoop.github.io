'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if no guess
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    displayMessage('⛔No number');
  }

  //if quess is secret Number
  else if (guess == secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = 'U win';
      displayMessage('You won the game 🎉🎉');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'blue';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You Lost the game ..🛑Try Again');
    }
  }
  //if guess is not secret Number
  else if (guess != secretNumber) {
    //if guess is too high
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number Too High 🌡' : 'Number Too Low 🌨'
      );
      {
        //document.querySelector('.message').textContent = 'Too High';
        //displayMessage('Number Too High 🌡');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You Lost the game ..🛑Try Again');
      document.querySelector('.score').textContent = 0;
    }
  }
  //if guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     //document.querySelector('.message').textContent = 'Too Low';
  //     displayMessage('Number Too Low 🌨');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     //document.querySelector('.message').textContent = 'You lost the game';
  //     displayMessage('You Lost the game ..🛑Try Again');
  //   }
});

//again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing ..');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
