let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let temp = document.getElementById('temp').value;
    let celsius = Number(temp);
    let farenheit = (celsius * (9 / 5)) + 32;
    let kelvin = celsius + 273.15;
    let ans = document.getElementById('ans');
    if(temp!=''){
    ans.style.display="block";
    ans.innerHTML = `<p>Temperature in Fahrenheit : <b>${farenheit.toFixed(2)} °F</b></p>
    <p>Temperature in Kelvin : <b>${kelvin.toFixed(2)} K</b></p>`;
    }
    else{
        let alert=document.getElementById('alert');
        alert.innerHTML=`<div>
        <strong>Error !</strong> Please enter a value in °C to convert.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      setTimeout(() => {
          alert.innerHTML="";
      }, 1000);
    }
})
function reset() {
    document.getElementById("formSubmit").reset();
}   