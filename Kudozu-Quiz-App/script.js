let quizDb = [
  {
    question: "Q1. Which type of JavaScript language is ___",
    a: " Object-Oriented ",
    b: " Object-Based ",
    c: " Assembly-language ",
    d: " High-level ",
    ans: "ans2",
  },
  {
    question:
      "Q2. Which one of the following also known as Conditional Expression:",
    a: " Alternative to if-else ",
    b: " Switch statement ",
    c: " If-then-else statement ",
    d: " immediate if ",
    ans: "ans4",
  },
  {
    question:
      "Q3. When interpreter encounters an empty statements, what it will do:",
    a: " Shows a warning ",
    b: " Prompts to complete the statement ",
    c: " Throws an error ",
    d: " Ignores the statements ",
    ans: "ans4",
  },
  {
    question: "The 'function' and 'var' are known as:",
    a: " Keywords ",
    b: " Data types ",
    c: " Declaration statements ",
    d: " Prototypes ",
    ans: "ans3",
  },
];

let questionD = document.getElementsByClassName("question");
let op1 = document.querySelector("#option1");
let op2 = document.querySelector("#option2");
let op3 = document.querySelector("#option3");
let op4 = document.querySelector("#option4");

let radioOp1 = document.querySelector("#ans1");
let radioOp2 = document.querySelector("#ans2");
let radioOp3 = document.querySelector("#ans3");
let radioOp4 = document.querySelector("#ans4");
let submitBtn = document.querySelector("#submit");
let result = 0;
let Qcount = 0;

let loadQuestion = () => {
  let quesionList = quizDb[Qcount];
  questionD[0].textContent = quesionList.question;
  op1.textContent = quesionList.a;
  op2.textContent = quesionList.b;
  op3.textContent = quesionList.c;
  op4.textContent = quesionList.d;
};

loadQuestion();

// submitBtn.addEventListener("click", () => {
//   if (
//     radioOp1.checked == false &&
//     radioOp2.checked == false &&
//     radioOp3.checked == false &&
//     radioOp4.checked == false
//   ) {
//     alert("kindly Select any one option!!!!");
//   } else {
//     if (document.querySelectorAll(".answer") == quesionList.ans) {
//       result = result + 1;
//     }
//     console.log(result);
//   }
// });

let answers = document.querySelectorAll(".answer");
let checkedAnswer = () => {
  let answer = 0;

  answers.forEach((currElement) => {
    if (currElement.checked) {
      answer = currElement.id;
    }
  });
  return answer;
};

const deselectAll = () => {
    answers.forEach((currElement) => currElement.checked = false)
}

let showScore = document.querySelector("#showScore");
submitBtn.addEventListener("click", () => {
    if (
        radioOp1.checked == false &&
            radioOp2.checked == false &&
            radioOp3.checked == false &&
            radioOp4.checked == false
          ) {
           alert("kindly Select any one option!!!!");
       return;
  }
  let checkOption = checkedAnswer();
  if (checkOption == quizDb[Qcount].ans) {
    result++;
  }

  deselectAll();

  Qcount++;
  if (Qcount < quizDb.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> You Scored ${result}/${quizDb.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
