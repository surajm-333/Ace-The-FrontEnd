function menu(){
    document.querySelector(".dropdown-content").style.display = "inline-block";
}

function hide(){
    document.querySelector(".dropdown-content").style.display = "none";
}

document.querySelector(".usUnits").addEventListener("click",()=>{
    document.querySelector(".system1").textContent = "US Units";

    document.querySelector(".usMetrics").style.display = "flex";
    document.querySelector(".cms").style.display = "none";
    document.querySelector(".pounds").textContent = "pounds";

});

document.querySelector(".metricUnits").addEventListener("click",()=>{
    document.querySelector(".system1").textContent = "Metric Units";

    document.querySelector(".cms").style.display = "inline-block";
    document.querySelector(".usMetrics").style.display = "none";
    document.querySelector(".pounds").textContent = "kg";

});

function calculate(){

    var feet=0,inches=0,cm=0,weight=0;
    var finalFeet,finalInches,finalHeight1,finalHeight2,result1,result2;
    

    feet = document.getElementById("feet").value;
    inches = document.getElementById("inches").value;
    cm = document.getElementById("cm").value;
    weight = document.getElementById("weight").value;


    if(feet != 0){

        finalFeet = feet*12;
        finalInches = (+finalFeet) + (+inches);
        finalHeight1 = finalInches*finalInches;
        result1 = (weight/finalHeight1)*703;
        result1 = result1.toFixed(1);
        document.getElementById("feet").value = " ";
        document.getElementById("inches").value = " ";
        document.getElementById("weight").value = " ";



        if(result1 < 18.5){
            document.querySelector(".result").textContent = result1 + "     Underweight";
        }else if(result1>=18.5 && result1<=24.9){
            document.querySelector(".result").textContent = result1 + "     Healthy";
        }else if(result1 >= 25.0 && result1 <= 29.9){
            document.querySelector(".result").textContent = result1 + "     Overweight";
        }else if(result1 >= 30.0){
            document.querySelector(".result").textContent = result1 + "     Obese";
        }
        
    }
    else{
        finalHeight2 = (cm/100)*(cm/100);
        result2 = weight/finalHeight2; 
        result2 = result2.toFixed(1);        
        document.getElementById("cm").value = " ";
        document.getElementById("weight").value = " ";


        if(result2 < 18.5){
            document.querySelector(".result").textContent = result2 + "     Underweight";
        }else if(result2>=18.5 && result2<=24.9){
            document.querySelector(".result").textContent = result2 + "     Healthy";
        }else if(result2 >= 25.0 && result2 <= 29.9){
            document.querySelector(".result").textContent = result2 + "     Overweight";
        }else if(result2 >= 30.0){
            document.querySelector(".result").textContent = result2 + "     Obese";
        }
    }    
}