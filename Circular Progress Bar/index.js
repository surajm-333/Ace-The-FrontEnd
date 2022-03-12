let counter = 0;
setInterval(()=>{
    if(counter === 90){
        clearInterval();
    }else{
        counter += 1;
        document.getElementsByClassName("number")[0].innerHTML = counter + "%";
    }
},2000/90);