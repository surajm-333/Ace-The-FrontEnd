function CalculateSI() {
  let p = document.getElementById("amount").value;
  let t = document.getElementById("time").value;
  let r = document.getElementById("rate").value;

  let SI = (p * t * r) / 100;

  document.getElementById("si").innerHTML = "The Simple Interest is: " + SI;
}

function CalculateCI() {
  var p = document.getElementById("principal").value;
  var R = document.getElementById("annual-interest-rate").value;
  var t = document.getElementById("number-of-years").value;
  var cf = document.getElementById("compounding-frequency").value;
  var n = 0;
  if (cf == "Yearly") n = 1;
  else if (cf == "Half Yearly") n = 2;
  else if (cf == "Quaterly") n = 4;
  else if (cf == "Monthly") n = 12;

  var r = R / 100;
  var nt = n * t;
  var CI = p * (Math.pow(1 + r / n, nt) - 1);
  document.getElementById("ci").innerHTML =
    "The Compound Interest is: " + CI.toFixed(2);
}
