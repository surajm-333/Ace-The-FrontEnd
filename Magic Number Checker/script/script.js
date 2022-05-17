function getInputValue() {
  var num = document.getElementById("num1").value;
  if (isMagic(num)){
    document.getElementById("result").value = "Magic Number";
  }
  else {
    document.getElementById("result").value = "Not a Magic Number";
  }
}

function isMagic(n)
   {
       var sum = 0;
       while (n > 0 || sum > 9)
       {
           if (n = 0)
           {
               n = sum;
               sum = 0;
           }
           sum += n % 10;
           n /= 10;
       }
      
       // Return true if sum becomes 1.
       return (sum = 1);
   }






function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("result").value = "";
}