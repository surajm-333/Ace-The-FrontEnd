//anime.js library
let drawer_open = false;

document.querySelector(".cta-button").addEventListener("mouseup",function(){
  cta_button_hide.play();
})

document.querySelector(".back-btn").addEventListener("mouseup",function(){
  if(drawer_open) {
  slidedown.play();
  cta_button_show.play();
  }
})

let cta_button_show = anime({
    targets: ['.cta-button','.cta-text'],
    translateY: ['-15','0'],
    opacity: ['0','1'],
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    autoplay: false,
    // loop: false
  duration: 500,
  complete: function(){
    }
  });

let cta_button_hide = anime({
    targets: ['.cta-button','.cta-text'],
    translateY: ['0','-15'],
    opacity: ['1','0'],
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    autoplay: false,
    // loop: false
  duration: 500,
  complete: function(){
      slideup.play();
    drawer_open = true;
    }
  });


let slidedown = anime({
    targets: '.order-details-container',
    translateY: ['-560','-40px'],
   duartion: 1000,
    autoplay: false,
    begin: function(){
      show_hideCTA("block");
      drawer_open = false;
    }
})

let slideup = anime({
    targets: '.order-details-container',
    translateY: ['-40px','-560px'],
    autoplay: false,
    begin: function(){
     show_hideCTA("none");
    }
})



function show_hideCTA(param){
    document.querySelector(".cta-button").style.display=param;
     document.querySelector(".cta-text").style.display=param;
}