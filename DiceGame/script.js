'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activeplayer = 0;
let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate a random no. for the roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display the corresponding side of dice
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + dice + '.png';
    //check for roll 1
    if (dice == 1) {
      //switch player

      document.getElementById('current--' + activeplayer).textContent = 0;
      currentScore = 0;

      activeplayer = 1 - activeplayer;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      //add to score
      currentScore += dice;

      document.getElementById(
        'current--' + activeplayer
      ).textContent = currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById('score--' + activeplayer).textContent =
      scores[activeplayer];
    document.getElementById('current--' + activeplayer).textContent = 0;

    if (scores[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector('.player--' + activeplayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activeplayer)
        .classList.remove('player--active');
    } else {
      currentScore = 0;
      activeplayer = 1 - activeplayer;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector('.player--' + activeplayer)
    .classList.remove('player--winner');
  document.querySelector('.player--' + 0).classList.add('player--active');

  for (let i = 0; i < 2; i++) {
    scores[i] = 0;
    document.getElementById('score--' + i).textContent = 0;
    document.getElementById('current--' + i).textContent = 0;
  }
  playing = true;
});
