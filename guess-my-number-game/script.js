'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
var number = document.querySelector('.number').value =secretNumber;
let score = 20;
let highscore = 0;


var checkBtn = document.getElementById("checkBtn");
var number = document.getElementById("number1").value = secretNumber;
console.log(number);

var displayMsg = function (msg) {
    document.getElementById("mssg").textContent = msg;
}

checkBtn.addEventListener("click", function () {
    const guess = Number(document.getElementById("guess1").value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMsg('no number!');
        document.querySelector('body').style.backgroundColor = 'rgb(150, 40, 40)';

    } else if (guess === secretNumber) {
        displayMsg(' Correct Number!');
        document.getElementById("number1").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
         document.getElementById("number1").style.width = '30rem';
         if(score>highscore){
         highscore=score;
         document.getElementById('highscore1').textContent=highscore;
         }
    } 
    else if(guess!==secretNumber){
        if(score>1){
          displayMsg(guess>secretNumber ?'too high!':'too low!');
          score--;
          document.getElementById('score1').textContent=score;
          document.querySelector('body').style.backgroundColor = 'rgb(150, 40, 40)';
        }
        else{
            displayMsg('You lost the game');
            document.getElementById('score1').textContent=0;
        }
    }
})
btnagain.addEventListener("click",function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

   // displayMessage('Start guessing...');
   document.getElementById('score1').textContent = score;
    document.getElementById("guess1").value="";
    document.getElementById("number1").textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(150, 40, 40)';
    document.getElementById("number1").style.width = '15rem';
})
