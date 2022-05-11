// JS Functions
// accessing button,bloodSpot,COntainer
const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");

// Adding moving object image
const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "https://i.pinimg.com/736x/cd/5e/4a/cd5e4a89cb098dd5a20d0a7f0ccccaac.jpg");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

// Interval of apperance
setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  terrorist.style.position = "absolute";
  terrorist.style.top = randTop + "px";
  terrorist.style.left = randLeft + "px";
}, 1000);

let score = 0;
// For successful click increment Score
startBtn.addEventListener("click", () => {
  container.appendChild(terrorist);

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === terrorist) score++;

  startBtn.innerText = "SCORE: " + score;
});
// Executing Score
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});