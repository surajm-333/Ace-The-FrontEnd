let pic=document.getElementById('pic');
let btn=document.getElementById('btn');
let imgcont=document.getElementById('imgcont');

btn.addEventListener('click',(e)=>{
    let val=pic.value;
    imgcont.style.backgroundImage=`url('http://source.unsplash.com/500x500/?${val},${val}')`;
    e.preventDefault();
})