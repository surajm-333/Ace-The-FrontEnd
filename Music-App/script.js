window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors=[
        "#604394",
        "#d36060",
        "#03fc88",
        "#34ebe8",
        "#4287f5",
        "#f099e7"
    ];
 //lets get going with thue sound here
    pads.forEach((pad,index) => { 
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            //
            createBubbles(index);
    });
}); 
//create a function
const createBubbles = (index) => {
    const bubble=document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump is ease";
    bubble.addEventListener('animationed',function() {
        visual.removeChild(this);
    });
  };
});