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
    else if(score <= 1){
        document.querySelector('body').style.backgroundColor = '#ff8080';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🚨 Game Over!';
        document.querySelector('.message').style.fontSize = '4rem';
        score = 0;
    }
    else if(guess > secretNumber){
        document.querySelector('.message').textContent = '📈 Guess too High!';
        --score;
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Guess too Low!';
        --score;
    }
    else{
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.message').style.fontSize = '4rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highScore || score>0){
            highScore = score;
            document.querySelector('.highscore').innerHTML = highScore;
        }
    }
    document.querySelector('.score').textContent = score;
}); 

document.querySelector('.again').addEventListener('click',function(){
    document.location.reload();
});