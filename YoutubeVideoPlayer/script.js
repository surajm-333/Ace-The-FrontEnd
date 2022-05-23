const video = document.querySelector('.videoplayer');
const videoCovered = document.querySelector('.videocovered');
const volumecontrole = document.querySelector('.volumecontrol');
const selecters = document.querySelectorAll('.inter');
const pausedbutton = document.querySelector('.pausebutton');
const playbutton = document.querySelector('.playbutton');
const playpause = document.querySelector('.changing');
const controllers = document.querySelector('.controllers');
const videoBar = document.querySelector('.bar');
const videoBarCover = document.querySelector('.bigcovering');
const LastCover = document.querySelector('.DarkCover');
const FastForward = document.querySelector('.FastForward');
const FastBackward = document.querySelector('.FastBackWard');
const time = document.querySelector('.time');
let seconds;
let minutes;
let ispaused = 0;
let ismute = 1;
let videoSize;
let value;

function mouseIn() {
  selecters.forEach((data) => {
    data.classList.remove('inter');
  });
}
function mouseOut() {
  selecters.forEach((data) => {
    data.classList.add('inter');
  });
}
video.addEventListener('mouseenter', mouseIn);
video.addEventListener('mouseleave', mouseOut);

controllers.addEventListener('mouseenter', () => {
  mouseIn();
});

controllers.addEventListener('mouseleave', () => {
  mouseOut();
});

videoBarCover.addEventListener('mouseenter', mouseIn);
videoBarCover.addEventListener('mouseleave', mouseOut);

// videoBar.addEventListener('mouseenter',()=>{
//     mouseIn();
// })

// videoBar.addEventListener('mouseleave',()=>{
//     mouseOut();
// })

// videoCovered.addEventListener('mouseenter',()=>{
//     mouseIn();
// })
// videoCovered.addEventListener('mouseleave',()=>{
//     mouseOut();
// })

function generateGraphics() {
  videoCovered.style.width = '0px';
  let start = setInterval(() => {
    value = video.currentTime;
    let Barwidth = (value / videoSize) * 98;
    videoCovered.style.width = `${Barwidth}%`;
    if (value === videoSize) {
      clearInterval(start);
      LastCover.classList.remove('hidden');
      controllers.classList.add('hidden');
      videoBarCover.classList.add('hidden');
    }
  }, 500);
}

const startTimer = function () {
  let current = video.currentTime;
  seconds = current % 60;
  minutes = current / 60;
  minutes = Math.trunc(minutes);
  seconds = Math.trunc(seconds);
  time.innerHTML = '';
  time.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

video.addEventListener('loadedmetadata', function () {
  videoSize = video.duration;
  generateGraphics();
  setInterval(() => {
    startTimer();
  }, 1000);
});

function adjustPlayPause() {
  if (ispaused === 0) {
    pausedbutton.classList.remove('hidden');
    playpause.src = '/content/play.png';
    pausedbutton.classList.add('animate');
    let timer = setInterval(() => {
      pausedbutton.classList.remove('animate');
      pausedbutton.classList.add('hidden');
      clearInterval(timer);
    }, 400);
    video.pause();
    ispaused = 1;
  } else {
    playbutton.classList.remove('hidden');
    playpause.src = '/content/largerPause.png';
    playbutton.classList.add('animate');
    let timer1 = setInterval(() => {
      playbutton.classList.remove('animate');
      playbutton.classList.add('hidden');
      clearInterval(timer1);
    }, 400);
    video.play();
    ispaused = 0;
  }
}

video.addEventListener('click', () => {
  adjustPlayPause();
});
playpause.addEventListener('click', () => {
  adjustPlayPause();
});

volumecontrole.addEventListener('click', function () {
  if (ismute === 0) {
    volumecontrole.src = '/content/mute.png';
    video.muted = true;
    ismute = 1;
  } else {
    volumecontrole.src = '/content/volume.png';
    video.muted = false;
    ismute = 0;
  }
});

function moveBar(e) {
  console.log(e.offsetX);
  let width = videoBarCover.offsetWidth;
  console.log(width);
  let percentChange = (e.offsetX / width) * 100;
  videoCovered.style.width = `${percentChange}%`;
  // console.log(`${value}/${videoSize}*98=${percentChange}`);
  let definedValue = (videoSize * percentChange) / 98;
  video.currentTime = definedValue;
  seconds = video.currentTime % 60;
  minutes = video.currentTime / 60;
  minutes = Math.trunc(minutes);
  seconds = Math.trunc(seconds);
  time.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

const restartVideo = function () {
  generateGraphics();
  LastCover.classList.add('hidden');
  video.currentTime = 0;
  video.play();
};

videoBarCover.addEventListener('click', moveBar.bind(this));
LastCover.addEventListener('click', () => {
  controllers.classList.remove('hidden');
  videoBarCover.classList.remove('hidden');
  restartVideo();
});

window.addEventListener('keydown', (e) => {
  let inter, inter1;
  if (inter || inter1) {
    clearInterval(inter1);
    clearInterval(inter);
  }
  if (e.key === 'ArrowLeft') {
    FastBackward.classList.remove('hide');
    inter = setInterval(() => {
      FastBackward.classList.add('hide');
      clearInterval(inter);
    }, 700);
    video.currentTime = video.currentTime - 5;
  } else if (e.key === 'ArrowRight') {
    FastForward.classList.remove('hide');
    inter1 = setInterval(() => {
      FastForward.classList.add('hide');
      clearInterval(inter1);
    }, 700);
    video.currentTime = video.currentTime + 5;
  }
});


window.addEventListener('keypress',function(e){
  if(e.keyCode==32)
  {
    console.log("You entered space");
    adjustPlayPause();
  }
})