//Initializing Variable
let myProgressBar = document.getElementById("myProgressBar")
let masterPlay = document.getElementById("masterPlay")
let audioElement = new Audio("songs/1.mp3")
let songItems = Array.from(document.getElementsByClassName("songItem"))
let songIndex = 0;
let masterSong = document.getElementById("masterSong")


//JavaScript Array of Songs
let songs = [
    {songName: "Tu Hai To Mujhe Fir Aur Kya Chahiye", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "3:50"},
    {songName: "Kahani Suno", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "2:33"},
    {songName: "Teri Ore", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "4:33"},
    {songName: "Ram Siya Ram", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "4:27"},
    {songName: "Pyar Karte Ho Na", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "3:28"},
    {songName: "Lag Ja Gale", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "3:28"},
    {songName: "Judaiyaan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "4:33"},
    {songName: "Gulabi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "3:50"},
    {songName: "Tenu Itna Main Pyar Kara", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", duration: "3:28"},
    {songName: "Chingariyan Yeh Jo Mere", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", duration: "4:27"}
]


//set song name and cover name programmetically
songItems.forEach((element, i)=>{
    //console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    //console.log(element.getElementsByTagName("img"))
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    //console.log(element.getElementsByClassName("songName"))
    //element.getElementsByClassName("timeStamp")[0].innerText = songs[i].duration;
    //console.log(element.getElementsByClassName("timeStamp"))

})


// Function To Play/Pause any song
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})


//update progressbar
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt(((audioElement.currentTime/audioElement.duration)*100));
    myProgressBar.value = progress;
})


//seek the song
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})


//More Logic Part
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
        (element)=>{
            element.classList.remove("fa-circle-pause")
            element.classList.add("fa-circle-play")
        }
    )
}


//play song from songList 
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
      (element)=>{
          element.addEventListener("click", (e)=>{
            makeAllPlays();
            console.log(e.target)
            e.target.classList.remove("fa-circle-play")
            e.target.classList.add("fa-circle-pause")
            songIndex = parseInt(e.target.id);

            audioElement.src = `songs/${songIndex+1}.mp3`
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterSong.innerHTML = songs[songIndex].songName;
            masterPlay.classList.remove("fa-circle-play")
            masterPlay.classList.add("fa-circle-pause")
          })
      }
)


//next button logic
document.getElementById("next").addEventListener("click",
    ()=>{
        if(songIndex == 9)
           songIndex = 0;
        else  
           songIndex += 1;

        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSong.innerHTML = songs[songIndex].songName;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
    }

)


//previous button logic
document.getElementById("previous").addEventListener("click",
    ()=>{
        if(songIndex == 0)
           songIndex = 9;
        else  
           songIndex -= 1;

        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSong.innerHTML = songs[songIndex].songName;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
    }

)