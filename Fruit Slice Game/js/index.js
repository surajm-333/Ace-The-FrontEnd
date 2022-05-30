var playing = false;
var score;
var trialleft = 3;
var step;
var action;
var fruits = ['apple', 'cherry', 'grapes', 'mango', 'orange',
    'pineapple', 'pomegranate', 'strawberry', 'watermelon'
];
//the user clicks on start/reset button//
$(function() {
    debugger;
    $("#startreset").click(function() {
        //if we are playing 
        if (playing == true) {
            //reload the page//
            location.reload();
        } else {
            //we are not playing//
            playing = true;
            $("#trialsleft").show();
            trialleft = 3;
            score = 0; //set score to 0//
            $("#score-value").html(score);
            $("#gameover").hide();
            addhearts();
            $("#startreset").html("Reset Game");
            startaction();
        }
    });

    //when we hover over the fruits//
    $("#fruit1").mouseover(function() {
        score++;
        $("#score-value").html(score); //set the score//
        clearInterval(action); //stop the fruit from falling//
        $("#fruit1").hide('explode', 500); // slice the fruit and then hide//
        //after slicing repeat the function for more falling of the fruits//
        setTimeout(startaction, 550);
    });

    function addhearts() {
        //set the trialleft to 3 at initial state//
        $("#trialsleft").empty();

        for (var i = 0; i < trialleft; i++) {
            $("#trialsleft").append('<img src="img/heart.png" class="life">');
        }
    }

    //generate random fruits//
    function startaction() {
        $("#fruit1").show();
        chooseFruit(); // choode a random fruit//
        //setting the dimesions of fruits//
        $("#fruit1").css({ 'left': Math.round(600 * Math.random()), 'top': -30 });
        //generate random postion vertically//
        step = 1 + Math.round(5 * Math.random());
        action = setInterval(function() {
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            //if fruit is too slow//
            if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
                if (trialleft > 1) {
                    $("#fruit1").show();
                    chooseFruit();

                    $("#fruit1").css({ 'left': Math.round(600 * Math.random()), 'top': -30 });
                    step = 1 + Math.round(5 * Math.random());
                    trialleft--;
                    addhearts();

                }
                //if no trials left//
                else {
                    playing = false;
                    $("#gameover").show();
                    $("#gameover").html('<p>game over</p><p>your score is: ' + score + '</P>');
                    $("#trialsleft").hide();
                    $("#startreset").html("Start Game");
                    stopaction();

                }

            }
        }, 10);

    }

    //show some random fruits//
    function chooseFruit() {
        $("#fruit1").attr('src', 'img/' + fruits[Math.round(8 * Math.random())] + '.png')
    }
    // stop the fruits from falling when game over//
    function stopaction() {
        clearInterval(action);
        $("#fruit1").hide();
    }
});