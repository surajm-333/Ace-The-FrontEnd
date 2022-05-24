$( document ).ready(function() {
  
  const changeText = function (el, text, color) {
    el.text(text).css('color', color);
  };
  
  $('.input-1').keyup(function(){
    let len = this.value.length;
    var pass = this.value;
    const pbText = $('.form-1 .progress-bar_text');

    if (len === 0) {
      $('.form-1 .progress-bar_item').each(function() {
        $(this).removeClass('active')
      });
      $('.form-1 .active').css('background-color', 'transparent');
      changeText(pbText, 'Password is blank');
      document.getElementById("input").style.borderImage = 'linear-gradient(to right, darkblue, darkorchid) 1';
    } else if (len > 0 && len <= 4) {
      $('.form-1 .progress-bar_item-1').addClass('active');
      $('.form-1 .progress-bar_item-2').removeClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#FF4B47');
      changeText(pbText, 'Too weak');
      document.getElementById("input").style.borderImage = 'linear-gradient(to right, #ff416c, #ff4b2b) 1';
    } else if (len > 4 && len <= 8) {
      $('.form-1 .progress-bar_item-2').addClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#F9AE35');
      changeText(pbText, 'Could be stronger');
      document.getElementById("input").style.borderImage = 'linear-gradient(to right, #ff9966, #ff5e62) 1';
    } else if(len > 8 && specialcharacter(pass)){
      $('.form-1 .progress-bar_item').each(function() {
        $(this).addClass('active');
      });
      $('.form-1 .active').css('background-color', '#2DAF7D');
      changeText(pbText, 'Strong password');
      document.getElementById("input").style.borderImage = 'linear-gradient(to right, #a8ff78, #78ffd6) 1';
    } 
  });
  
});
  

 function specialcharacter(n){
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if(format.test(n)){
    return true;
  } else {
    return false;
  }
 }     

