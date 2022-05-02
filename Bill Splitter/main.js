tips = () => {
    document.getElementById("hidy").style.display = "block";
}

add = () => {
    //To obtain total bill amount
    var x = document.getElementById("total").value;
    console.log(x);
    //To obtain number of people
    var y = document.getElementById("people").value;
    console.log(y);
    //To obtain the tip percentage
    var z = document.getElementById("tip").value;
    console.log(z);
    var k = (x / y);
    var l = (z / 100) * k;
    var tot = k + l;
    //display the output only when user gives the input in all required fields
    if (x && y && x != " " && y != " ") document.getElementById("fff").innerHTML = "₹" + tot;
    if (x && y && x != " " && y != " ") document.getElementById("result").style.display = "block";
}