const eye1=document.querySelector('.eye1');
const eye2=document.querySelector('.eye2');
const lefthand=document.querySelector('.lefthand');
const righthand=document.querySelector('.righthand');
const lefthead=document.querySelector('.left');
const righthead=document.querySelector('.right');
let nodistrub=0;
let nodistrub1=0;
let nodistrub2=0;

function closeopen()
{
    eye1.style.display='none';
    eye2.style.display='none';
    setTimeout(()=>{
    eye1.style.display='initial';
    eye2.style.display='initial';
    },800)
}

setInterval(() => {
    closeopen();
}, 2000);





function lefthello()
{
    lefthand.classList.add('animation');
    setTimeout(()=>{
        lefthand.classList.remove('animation');
        nodistrub=0;
    },4000);
}


function righthello()
{
    righthand.classList.add('animation1')
    setTimeout(() => {
        nodistrub1=0;
        righthand.classList.remove('animation1');
    }, 4000);
}


function tortureBot()
{
    lefthead.classList.add('rot');
    righthead.classList.add('rot1');
    setTimeout(()=>{
        nodistrub2=0;
        lefthead.classList.remove('rot');
        righthead.classList.remove('rot1');
    },2000)

}


window.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowLeft' && !nodistrub)
    {
        nodistrub=1;
        lefthello();
    }
    if(e.key==='ArrowRight'&& !nodistrub1)
    {
        nodistrub1=1;
        righthello();
    }
    if(e.key==='ArrowUp'&& !nodistrub2)
    {
        nodistrub2=1;
        tortureBot();
    }
});

