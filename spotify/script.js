console.log("welcome to spotify");

//variable initializer 
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('playing')
let masterSongName = document.getElementById('masterSongName');
let alertitem=document.querySelectorAll('#red');
let songs = [
    
    {songName: "Bheegi Bheegi", filePath: "songs/1.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dil Ko Karaar Aaya", filePath: "songs/2.mp3", coverPath: "covers/5.jpg"},
    {songName: " Garmi feat. Varun Dhawan", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jai Mummy Di", filePath: "songs/4.mp3", coverPath: "covers/2.jpg"},
    {songName: "Sawan Mein Lag Gayi Aag", filePath: "songs/5.mp3", coverPath: "covers/3.jpg"},
    {songName: " Teri Aankhon Mein", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("song")[0].innerText = songs[i].songName;
})
//audioElement.play


//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
     
    }
})

let myProgressBar = document.getElementById('myProgressBar')

//listen to events 
audioElement.addEventListener('timeupdate',()=>{
   console.log(`timeupdate`)
   //update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
   myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
   
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 6
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})