"use strict";

let currentScore, activeplayer, score, playing;

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const diceNew = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');

const init = function () {
    currentScore = 0;
    activeplayer = 0;
    score = [0, 0];
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    diceEL.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
};

init();

const switchPlayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
};

diceRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});


diceHold.addEventListener('click', function () {
    if (playing) {
        score[activeplayer] += currentScore;
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

        if (score[activeplayer] >= 100) {
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});


diceNew.addEventListener('click', init);
