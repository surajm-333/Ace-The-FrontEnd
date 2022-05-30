// elements in index file
const creditElemArray = [
  credit1,
  credit2,
  credit3,
  credit4,
  credit5,
  credit6,
  credit7,
  credit8,
];
const acheivedElemArray = [
  acheived1,
  acheived2,
  acheived3,
  acheived4,
  acheived5,
  acheived6,
  acheived7,
  acheived8,
];
const totalCreditElemArray = [
  totalCredit1,
  totalCredit2,
  totalCredit3,
  totalCredit4,
  totalCredit5,
  totalCredit6,
  totalCredit7,
  totalCredit8,
];
const sgpaElemArray = [sgpa1, sgpa2, sgpa3, sgpa4, sgpa5, sgpa6, sgpa7, sgpa8];
const ygpaElemArray = [year1, year2, year3, year4];

const handleCalculate = () => {
  for (let i = 0; i < 8; i++) {
    sgpaElemArray[i].value =
      (
        ((parseFloat(acheivedElemArray[i].value) * 10) /
        parseFloat(totalCreditElemArray[i].value))|| 0
      ).toFixed(2);
  }
  for (let i = 0; i < 8; i += 2) {
    ygpaElemArray[Math.floor(i / 2)].value =
      (
        (((parseFloat(acheivedElemArray[i].value) + parseFloat(acheivedElemArray[i + 1].value)) * 10) /
        (parseFloat(totalCreditElemArray[i].value) + parseFloat(totalCreditElemArray[i + 1].value)))||0
      ).toFixed(2);
      console.log((
        (((acheivedElemArray[i].value + acheivedElemArray[i + 1].value) * 10) )||0
      ).toFixed(2))
  }
  cgpa.value = ((parseFloat(ygpaElemArray[0].value)*1+parseFloat(ygpaElemArray[1].value)*1+parseFloat(ygpaElemArray[2].value)*1.5+parseFloat(ygpaElemArray[3].value)*1.5)/5).toFixed(2);
};

const handleCreditValueChange = (e) => {
  for (let i = 0; i < 8; i++) {
    totalCreditElemArray[i].value = parseFloat(creditElemArray[i].value) * 10;
  }
};

calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", handleCalculate);
for (let i = 0; i < 8; i++) {
  creditElemArray[i].addEventListener("input", handleCreditValueChange);
}
