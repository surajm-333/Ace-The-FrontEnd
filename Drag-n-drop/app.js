const drop = document.querySelector(".drop");
const input = document.querySelector(".drop input");
const text = document.querySelector(".text");
const progress = document.querySelector(".progress");

let files = [];

input.addEventListener("change", () => {
  drop.style.display = "none";
  upload();
});

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  text.innerHTML = "Release your mouse to drop.";
  drop.classList.add("active");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  text.innerHTML = "Drag and drop your documents, photos, and video here.";
  drop.classList.remove("active");
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  drop.style.display = "none";
  upload();
});

// Upload Logic
function upload() {
  // fake Upload Logic
  let intervalCount = 0.25;
  progress.style.display = "block";
  progress.style.width = `${20 * intervalCount}%`;
  const interval = setInterval(() => {
    intervalCount += 0.25;
    progress.style.width = `${20 * intervalCount}%`;
    if (intervalCount == 5) {
      clearInterval(interval);
    }
  }, 100);
}