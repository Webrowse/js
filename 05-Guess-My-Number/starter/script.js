'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Yayyyyyy';

// document.querySelector('.guess').value = 22;

// console.log(document.querySelector('.guess').value);
let secret = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const numberDisplay = function(number){
    document.querySelector('.number').textContent = number;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(typeof guess);

    //When No Input
    if (!guess)  {
        // document.querySelector('.message').textContent = '🧐 No number!';
        displayMessage(" No number");
    }
    //when player wins
    else if (guess == secret) {
        displayMessage( 'Right Guess!');
        numberDisplay(secret);
        //background color
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        //highscore
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    // When number is too high
    else if (guess!=secret){
        if (score > 1){
            displayMessage( 
            guess > secret ? 'Too High!' : 'Too Low');
            document.querySelector('.score').textContent = --score;
        } else{
            displayMessage( ' You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    //reseting new number and Score
    secret = Math.trunc(Math.random() *20) + 1;
    score = 20;

    displayMessage( 'Start Guessing...');
    document.querySelector('.score').textContent = score;
    numberDisplay('?');
    document.querySelector('.guess').value = '';


    //Restoring the bg color and width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})