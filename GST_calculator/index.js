let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let myname = document.getElementById('name');
    let myInput = myname.value;
    let val1 = document.getElementById('val1');
    let val2 = document.getElementById('val2');
    let val3 = document.getElementById('val3');
    let val4 = document.getElementById('val4');
    let val5 = document.getElementById('val5');
    let val6 = document.getElementById('val6');
    let rate;
    if (val1.checked) {
        rate = val1.value;
    }
    else if (val2.checked) {
        rate = val2.value;
    }
    else if (val3.checked) {
        rate = val3.value;
    }
    else if (val4.checked) {
        rate = val4.value;
    }
    else if (val5.checked) {
        rate = val5.value;
    }
    else if (val6.checked) {
        rate = val6.value;
    }
    if(myInput==""){
        myInput=0;
    }
    let per = (Number(myInput)) * (rate / 100);
    let result = (Number(myInput) + per);
    let ans=document.getElementById('ans');
    ans.style.display="block";
    ans.innerHTML=`<p>Net Amount (excluding GST) : <b>₹${myInput}</b></p>
    <p>GST (${rate}%) : <b>₹${per.toFixed(2)}</b></p>
    <p>Gross Amount (including GST) : <b>₹${result.toFixed(2)}</b></p>`;
})


