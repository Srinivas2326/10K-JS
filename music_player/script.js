let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let songCountElem = document.getElementById("songCount");

let songs = [
    {
        title: "Despacito",
        artist: "Luis Fonsi",
        src: "./songs/daddy-yankee-justin-bieber-luis-fonsi-despacito.mp3",
        img: "./468-thumbnail.png"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        src: "./songs/ed-sheeran-shape-of-you.mp3",
        img: "https://tse2.mm.bing.net/th/id/OIP.TLRlQP7N61REDvgV_OAdHgHaHa?pid=Api&P=0&h=220"
    },
    {
        title: "Love me Like You Do",
        artist: "Ed Sheeran",
        src: "./songs/Ellie_Goulding_-_Love_Me_Like_You_Do_ScaryBeatz.com.mp3",
        img: "https://tse1.mm.bing.net/th/id/OIP.0rUu281DnYwsFJ0K2L2r_AHaEK?pid=Api&P=0&h=220"
    },
    {
        title: "Middle Of The Night",
        artist: "Elley Duhé",
        src: "./songs/Elley_Duh_-_Middle_Of_The_Night_CeeNaija.com_.mp3",
        img: "https://tse3.mm.bing.net/th/id/OIP.RTQdqMLlOay4PdIGRFe64wHaHa?pid=Api&P=0&h=220"
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    song.src = songs[index].src;
    songImg.src = songs[index].img;
    songTitle.textContent = songs[index].title;
    songArtist.textContent = songs[index].artist;
    song.load();
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

setInterval(() => {
    if (!isNaN(song.duration)) {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }
}, 500);

progress.onchange = function(){
    song.currentTime = progress.value;
};

document.getElementById("nextControl").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
});

document.getElementById("prevControl").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
});

songCountElem.textContent = `Total songs: ${songs.length}`;
loadSong(currentSongIndex);
