"use strict";

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const diceNew = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');

diceEL.classList.add('hidden');

diceRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
});
