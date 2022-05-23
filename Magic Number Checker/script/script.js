function getInputValue() {
  var num = document.getElementById("num1").value;
  if (num % 9 == 1){
    document.getElementById("result").value = "Magic Number";
  }
  else {
    document.getElementById("result").value = "Not a Magic Number";
  }
}







function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("result").value = "";
}