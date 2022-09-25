'use strict';

function setMessage(classArg, str) {
  document.querySelector(classArg).textContent = str;
}
let num = Math.floor(Math.random() * 20) + 1;
let endGame = 0;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  num = Math.floor(Math.random() * 20) + 1;
  endGame = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setMessage('.number', '?');
  setMessage('.score', '20');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  if (!endGame) {
    setMessage('.number', '?');
    if (!guess) {
      setMessage('.message', 'No Number 🤨');
    } else {
      if (guess === num) {
        setMessage('.message', 'Correct Guess🥇');
        setMessage('.number', num);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        score++;
        setMessage('.score', String(score));
        if (highScore < score) {
          highScore = score;
          setMessage('.highscore', String(score));
        }
        endGame = 1;
      } else {
        score--;
        setMessage('.score', String(score));
        if (score === 0) {
          setMessage('.message', 'You Lost 🎃');
          document.querySelector('body').style.backgroundColor = 'red';
          setMessage('.number', num);
          document.querySelector('.number').style.width = '30rem';
          endGame = 1;
        } else {
          if (guess < num) {
            setMessage('.message', 'Too Low 📉');
          } else {
            setMessage('.message', 'Too High 📈');
          }
        }
      }
    }
  }
});
