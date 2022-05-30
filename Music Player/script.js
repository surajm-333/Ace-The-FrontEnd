const music = document.querySelector('audio')
const img = document.querySelector("img");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let isPlaying = false;

const playMusic = ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause")
    img.classList.add("anime");
};

const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play")
    img.classList.remove("anime") ;
};


play.addEventListener('click',()=>{
    isPlaying ? pauseMusic() : playMusic();
});



const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `./Music Player/music/${songs.name}.mp3`;
    img.src = `./Music Player/images/${songs.name}.jpg`
}

// loadSong(songs[1]);
songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex +1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

