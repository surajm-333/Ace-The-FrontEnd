let a=document.getElementsByTagName("p")[0];
let b=document.getElementsByTagName("p")[1];
let c=document.getElementsByTagName("p")[2];


let values=[
    '๐', '๐คฃ' ,'๐', '๐ข', '๐คฉ', '๐', '๐ค' ,'๐ค', '๐ฃ', '๐คจ', '๐', '๐ฎ', '๐ฅฐ', '๐', '๐', '๐','๐ฅฑ','๐ฅต','๐ก'
    ,'๐','๐ฅณ'
];

var inter;
var bool=true;

function getRandomValue(){
    return values[Math.floor(Math.random()*values.length)];
}
function add(){
    document.getElementById("display").innerHTML=" "; 
    if(bool===true){
    inter=setInterval(() => {
    a.innerText=getRandomValue();
    b.innerText=getRandomValue();
    c.innerText=getRandomValue();
}, 200);
bool=false;
    }
}



remove=()=> {
   setTimeout(() => {
       clearInterval(inter);
    if(a===b===c){
        document.getElementById("display").innerHTML="YOU WIN" 
    }
    else
    {
        document.getElementById("display").innerHTML="YOU LOSE"
    }
   }, 1000); 
        bool=true;
}




var start=document.getElementById("start");
start.addEventListener('click',add);


var stop=document.getElementById("stop");
stop.addEventListener('click',remove);