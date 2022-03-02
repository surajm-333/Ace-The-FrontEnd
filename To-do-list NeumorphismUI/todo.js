

const btn=document.querySelector("#add");
const inputBox=document.querySelector("#box")
var increment=document.querySelector("#update");
const list=document.querySelector(".todoList");
var number=increment.innerHTML;
btn.addEventListener('click',()=>{
    if(inputBox.value!==""){
      const li=document.createElement('LI');
      const span=document.createElement('span');
     span.innerHTML = '<i class="fa fa-trash"></i>';
      li.append(span);
      li.append(inputBox.value);
      list.append(li);
      inputBox.value="";
      number++;
      increment.innerHTML=number;
      span.onclick=function(){
        li.remove();
        number--;
        increment.innerHTML=number;
 }
    }
      else{
        alert("Add a valid todo");
      }
   });
   const clearBox=document.querySelector('#clear');
   clearBox.addEventListener('click',()=>{
     list.innerHTML="";
     number=0;
     increment.innerHTML=number;
   });



