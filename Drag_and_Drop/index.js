const whiteBoxes=document.getElementsByClassName('whiteBox');
const imgBoxes=document.querySelector('.imgBox');

imgBoxes.addEventListener('dragstart',(e)=>{
    e.target.className +=' hold';
    setTimeout(() => {
        e.target.className='hide';
    }, 0);
});
imgBoxes.addEventListener('dragend',(e)=>{
    e.target.className ='imgBox';
   
});
for(white of whiteBoxes){
    white.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });

    white.addEventListener('dragenter',(e)=>{
        e.target.className+=' border'
    });

    white.addEventListener('dragleave',(e)=>{
        e.target.className='whiteBox'
    })
    white.addEventListener('drop',(e)=>{
        e.target.append(imgBoxes)
    })
}
