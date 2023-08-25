let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let play = document.querySelector("#play");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let playBox = document.querySelector("#playBox");
let prevBox = document.querySelector("#prevBox");
let nextBox = document.querySelector("#nextBox");
let title = document.querySelector("#title");
let music = document.querySelector("#music");
let artist = document.querySelector("#artist");
let img = document.querySelector("#img");
const songs = [
  {
    name: "song-1",
    title: "Despacito",
    artist: "Luis Fonsi",
  },
  {
    name: "song-2",
    title: "Lotus lane",
    artist: "Loyalist",
  },
  {
    name: "song-3",
    title: "Sappheiros",
    artist: "Aurora",
  },
];
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.song.currentTime;
};

function playPause() {
  if (play.classList.contains("fa-pause")) {
    song.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    song.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  }
}
playBox.addEventListener("click", playPause);

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
};
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp4";
  img.src = "images/" + songs.name + ".jpg";
};
var songIndex = 0;
nextBox.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  song.play();
});
prevBox.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;

  loadSong(songs[songIndex]);
});
