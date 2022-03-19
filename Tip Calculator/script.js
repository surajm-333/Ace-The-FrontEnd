let billAmount = document.querySelector("#billAmount");
let selectTipAmount = document.querySelector("#tipPercentage")
let tipPercentage = Number(selectTipAmount.options[selectTipAmount.selectedIndex].value);
let noOfPeople = document.querySelector("#noOfPeople");
let perPerson = document.querySelector("#perPerson");
let tipAmount = document.querySelector("#tipAmount");
let btn = document.querySelector("#btn");

let incrementBtn = document.querySelector("#incrementBtn")
let decrementBtn = document.querySelector("#decrementBtn")

function incrementFunc(){
    noOfPeople.stepUp();
}

function decrementFunc(){
    noOfPeople.stepDown();
}

incrementBtn.addEventListener("click", incrementFunc);
decrementBtn.addEventListener("click", decrementFunc);

function tipAmountFinder(){
    let tip = Number(billAmount.value)*(tipPercentage/100)
    return tip.toFixed(2);
}

function amountPerPersonFinder(){
    let amountAfterTip = Number(billAmount.value) + Number(tipAmountFinder())
    let amountPerPerson = amountAfterTip/Number(noOfPeople.value)
    if (Number.isNaN(amountPerPerson)){
        return 0;
    }
    return amountPerPerson.toFixed(2);
}

function btnClickHandler(){
    tipAmount.innerText = `₹ ${tipAmountFinder()}`;
    perPerson.innerText = `₹ ${amountPerPersonFinder()}`;
}

btn.addEventListener("click", btnClickHandler);