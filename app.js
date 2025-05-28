const song = document.getElementById("song");
const progress = document.getElementById("progress-bar");
const controlIcon = document.getElementById("control-icon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  song.autoplay = false;
};

function playPause() {
  if (controlIcon.classList.contains("fa-pause")) {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  } else {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
};

controlIcon.addEventListener("click", playPause);

song.onended = function () {
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
};
