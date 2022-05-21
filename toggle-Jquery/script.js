var toggled=false;
var circle=$(".toggle");
var image=$("#image img")

circle.click(function(){
    $('h1').toggleClass("color-white");
    $("body").toggleClass("bck-color-black");
    if(!toggled){
        circle.css("justify-content","flex-end");
        image.show();
        toggled=true;
    }
    else{
    circle.css("justify-content","flex-start");
    image.hide();
        toggled=false;
    }
})