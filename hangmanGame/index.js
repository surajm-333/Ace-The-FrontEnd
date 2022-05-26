import words from "./words.js";

let lives;
let foundLetters;
let choosenLetters=[];
let wordObj;
const ctx = canvas.getContext("2d");

const getWord = async () => {
  let word = words[Math.floor(Math.random() * words.length)];
  let desc = "";
  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((wordInfo) => {
      desc = wordInfo[0].meanings[0].definitions[0].definition;
    });
  return {
    word: word.toLowerCase(),
    hint: desc,
  };
};

const showHint = () => {
  hintElem.innerText = wordObj.hint;
};

const displayMessage = (type) => {
  const modal = document.querySelector("#modal");
  if (type == "win") {
    document.querySelector(".modalTitle").innerText='Hurray You Won!'
    document.querySelector('.modalDesc').innerText=`Let's do it again.`
    modal.showModal();
  } else if (type == "dead") {
    document.querySelector(".modalTitle").innerText='Game Over!'
    document.querySelector('.modalDesc').innerText=`Alas, U lost.\n Word was: ${wordObj.word}`
    modal.showModal();
  }
};

const checkDead = () => {
  if (!lives > 0) {
    displayMessage("dead");
  }
};

const checkWin = (foundLetters, word) => {
  if (foundLetters == word.length) {
    displayMessage("win");
  }
};

const drawHangman = (lives) => {
  const drawPlatformTop = () => {
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(150, 20);
    ctx.lineTo(150, 30);
    ctx.stroke();
  };
  const drawHead = () => {
    ctx.beginPath();
    ctx.arc(150, 60, 30, 0, 2 * Math.PI);
    ctx.stroke();
  };
  const drawHands = () => {
    ctx.beginPath();
    ctx.moveTo(150, 130);
    ctx.lineTo(200, 90);
    ctx.moveTo(150, 130);
    ctx.lineTo(100, 90);
    ctx.stroke();
  };
  const drawTorso = () => {
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(150, 180);
    ctx.stroke();
  };
  const drawLegs = () => {
    ctx.beginPath();
    ctx.moveTo(150, 180);
    ctx.lineTo(200, 220);
    ctx.moveTo(150, 180);
    ctx.lineTo(100, 220);
    ctx.stroke();
  };

  switch (lives) {
    case 4:
      drawPlatformTop();
      break;
    case 3:
      drawHead();
      break;
    case 2:
      drawTorso();
      break;
    case 1:
      drawHands();
      break;
    case 0:
      drawLegs();
      break;
    default:
      break;
  }
};

const handleWrongAnswer = () => {
  lives--;
  drawHangman(lives);
  lifeElem.innerText = `Lives Left: ${lives}`;
};

const handleKeyPress = (e, word, foundLetters) => {
  e.target.classList.add("clicked");
  const key = e.target.dataset.key.toLowerCase();
  if(!choosenLetters.includes(key)){
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          document.getElementById(`index${i}`).value = key;
          choosenLetters.push(key)
          foundLetters++;
          checkWin(foundLetters, word);
        }
      }
    } else {
      handleWrongAnswer();
    }
  }
  checkDead();
  return foundLetters;
};

const startGame = async () => {
  lives = 5;
  foundLetters = 0;
  choosenLetters=[]
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  wordObj = await getWord();
  console.log(wordObj);

  document.querySelectorAll(".key").forEach((key)=>{key.classList.remove('clicked')})

  let HTMLvalue = ``;
  for (let i = 0; i < wordObj.word.length; i++) {
    HTMLvalue += `<input type="text" class="inputField" disabled value="" id="index${i}">`;
  }
  input.innerHTML = HTMLvalue;

  lifeElem.innerText = `Lives Left: ${lives}`;

  hintElem.innerText = ''  

  //drawing platform
  ctx.beginPath();
  ctx.moveTo(280, 280);
  ctx.lineTo(20, 280);
  ctx.lineTo(20, 20);
  ctx.stroke();
};

const keysNodeList = document.querySelectorAll(".key");
keysNodeList.forEach((node) => {
    node.addEventListener("click", (e) => {
      foundLetters = handleKeyPress(e, wordObj.word, foundLetters);
      console.log("clicked");
    });
});

document.querySelector(".modalBtn").addEventListener("click", () => {
  startGame();
  modal.close();
});

hintBtnElem.addEventListener("click", showHint);

startGame();
