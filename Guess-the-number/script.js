'use strict';

//setting random number range from 1-20
const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore;
document.querySelector('.score').textContent = score;
//adding eventlistener for the check button
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess)
        document.querySelector('.message').textContent = '🛑 No Number!';
    else if(guess > secretNumber){
        document.querySelector('.message').textContent = '📈 Guess too High!';
        --score;
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Guess too Low!';
        --score;
    }
    else{
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = guess;
        if(score>highScore || score>0){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    document.querySelector('.score').textContent = score;
}); 