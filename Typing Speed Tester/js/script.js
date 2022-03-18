const typingText = document.querySelector(".typing-text p");
inpField = document.querySelector(".wrap .input-field");
mistakeTag = document.querySelector(".mistake span");
(timeTag = document.querySelector(".time span")),
  (wpmTag = document.querySelector(".wpm span")),
  (cpmTag = document.querySelector(".cpm span")),
  (repeatBtn = document.querySelector("button"));

let charIndex = (mistakes = isTyping = 0),
  timer,
  maxTime = 60,
  timeLeft = maxTime;

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * para.length);
  typingText.innerHTML += "";
  para[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  const chars = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < chars.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      charIndex--;
      if (chars[charIndex].classList.contains("incorrect")) {
        mistakes--;
      }
      chars[charIndex].classList.remove("correct", "incorrect");
    } else {
      if (chars[charIndex].innerText === typedChar) {
        chars[charIndex].classList.add("correct");
      } else {
        mistakes++;
        chars[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }

    chars.forEach((span) => span.classList.remove("active"));
    chars[charIndex].classList.add("active");

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inpField.value = "";
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
  } else {
    clearInterval(timer);
  }
}

function resetTest() {
  randomParagraph();
  location.reload();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

randomParagraph();
inpField.addEventListener("input", initTyping);
repeatBtn.addEventListener("click", resetTest);
