function plag_check(){
  var ch = document.getElementById("textbox").value;
  var ch1 = document.getElementById('inputbox').value;
  var p1 = ch.toString().toLowerCase();
  var p2 = ch1.toString().toLowerCase();
  if(ch == ch1){
    alert("Plagiarism Detected. Text Case is same");
  }
  else if(p1 == p2){
   alert("Plagiarism Detected. Text Case has been changed");
  }
  else{
    alert("No Plagiarism Detected");
  }
}