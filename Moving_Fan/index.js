let on=document.getElementById('on');
let off=document.getElementById('off');
let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let fan=document.getElementsByClassName('fan')[0];
on.addEventListener('click',()=>{
    fan.classList.add('animate');
})
off.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('one');
    fan.classList.remove('two');
    fan.classList.remove('three');
    fan.classList.remove('four');
    fan.classList.remove('five');
})
one.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('two');
    fan.classList.remove('three');
    fan.classList.remove('four');
    fan.classList.remove('five');
    fan.classList.add('one');
})
two.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('one');
    fan.classList.remove('three');
    fan.classList.remove('four');
    fan.classList.remove('five');
    fan.classList.add('two');
})
three.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('one');
    fan.classList.remove('two');
    fan.classList.remove('four');
    fan.classList.remove('five');
    fan.classList.add('three');
})
four.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('one');
    fan.classList.remove('two');
    fan.classList.remove('three');
    fan.classList.remove('five');
    fan.classList.add('four');
})
five.addEventListener('click',()=>{
    fan.classList.remove('animate');
    fan.classList.remove('one');
    fan.classList.remove('two');
    fan.classList.remove('three');
    fan.classList.remove('four');
    fan.classList.add('five');
})