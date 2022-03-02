var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;
var GameStarted = false;

$(document).keypress(()=>{
    if(!GameStarted){
        $("#level-title").text("level" + level);
        nextSequence();
        GameStarted = true;
    }
});  
$(".btn").click(function handler(){
    var userChosenColor = $(this).attr('id');
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAns(userClickPattern.length-1);
});

function nextSequence(){
    userClickPattern = [];
    var n = Math.random()*4;
    var randomNumber = Math.floor(n);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level ++;
   $("#level-title").text("Level " + level);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function checkAns(currentLevel){
    if(userClickPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }
    else {
        var endSound = new Audio("sounds/wrong.mp3");
        endSound.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over")
        },200);
        $("#level-title").text("Game over, Press Any Key to Restart"); 
        startOver();
    }
}

function startOver(){
    level = 0;
    GameStarted = false;
    gamePattern = [];
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(CurrentColor){
    $("#" + CurrentColor).addClass("pressed"); 
    setTimeout(function (){
        $("#" + CurrentColor).removeClass("pressed"); 
    },100)
}