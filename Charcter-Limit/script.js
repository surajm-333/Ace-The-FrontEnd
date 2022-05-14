var myText=document.getElementById("my-text");
var result= document.getElementById("result");
var limit =60;

result.textContent=0+"/"+limit;

myText.addEventListener("input",()=>{
    var textLength=myText.value.length;
    result.textContent=textLength+"/"+limit;

    if(textLength>limit){
        myText.style.borderColor="#ff2851";
        result.style.color="#ff2851";
    }

    else{
        myText.style.borderColor="#1fa818";
        result.style.color="#737373";
    }
})
