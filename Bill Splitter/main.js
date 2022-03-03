
/* var x=document.getElementById("total").value;
console.log(x); */

tips=()=>{
    document.getElementById("hidy").style.display="block";
}

add=()=>{
    var x=document.getElementById("total").value;
console.log(x);
    var y=document.getElementById("people").value;
console.log(y);
    var z=document.getElementById("tip").value;
console.log(z);
    var k=(x/y);
    var l=(z/100)*k;
    var tot=k+l;
if(x&&y&&x!=" "&&y!=" ")document.getElementById("fff").innerHTML="₹" + tot;
if(x&&y&&x!=" "&&y!=" ")document.getElementById("result").style.display="block";
}