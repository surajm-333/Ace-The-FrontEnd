function getInputValue() {
  const names = ["Mary Watson", "Samuel Kim", "Ada lee", "Ryan Kim", "Rohan Shaw", "Bran Adams", "Thomas Shelby"];
  const r = Math.floor(Math.random() * names.length);
  var card_no = "";
  var cvv = "";
  for(var i=1;i<=16;i++){
    
    var rand_cardno = Math.floor(Math.random() * 10);
    card_no = card_no+rand_cardno;
    if(i%4==0){
      card_no = card_no+" ";
    }
  }
  document.getElementById("card_no").value = card_no;

  for(var i=1;i<=3;i++){
    
    var cvv = cvv+Math.floor(Math.random() * 10);
  }
  document.getElementById("cvv").value = cvv;
  
var exp_month = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var exp_year = Math.floor(Math.random() * (30 - 22 + 1) + 22);
var exp = exp_month+"/"+exp_year;

document.getElementById("exp").value = exp;
document.getElementById("name").value = names[r];

}






function reset() {
  document.getElementById("card_no").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("exp").value = "";
  document.getElementById("name").value = "";
}