const time_left = document.getElementById("time_left");

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

const today = new Date();
let birthday = new Date();

let clearTime;

function sa(){
    let dMonth = document.querySelector(".month"); 
    let dDate = document.querySelector(".date");
    let dYear = document.querySelector(".year");

    birthday.setDate(dDate.value);
    birthday.setFullYear(dYear.value);
    birthday.setMonth(dMonth.value-1);

    clearTime = setInterval(countDown,1000);

}

function countDown(){
    const today = new Date();
    const timespan = birthday - today;
    if(timespan<=-day){
        time_left.innerHTML="You have already attended Your Birthday!!!😁😁";
        clearInterval(clearTime);
        return

    }
    if(timespan<=0){
        time_left.innerHTML="Happy Birthday!!🎂🍰";
        clearInterval(clearTime);
        return
    }

    const days = Math.floor(timespan/day);
    const hours = Math.floor((timespan%days)/hour);
    const minutes = Math.floor((timespan%hour)/minute);
    const seconds = (timespan%minute) / second;

    time_left.innerHTML=`Date:<span>${days}</span> Hour:<span>${hours}</span> Month:<span>${minutes}</span> Seconds:<span>${seconds}</span>`;
}

