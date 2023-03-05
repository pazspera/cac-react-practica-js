let lightsOn = true;
let musicPlaying = false;

let $lightswitch = document.querySelector("#lightswitch");
let $radio = document.querySelector("#radio");
let $room = document.querySelector("#room");
let $song = document.querySelector("#song");
let $music = document.querySelector("#music");

const handleLight = () => {
  lightsOn = !lightsOn;

  if (lightsOn) {
    $room.classList.add("light-on");
    $room.classList.remove("light-off");
  } else {
    $room.classList.add("light-off");
    $room.classList.remove("light-on");
  }
};

const handleRadio = () => {
  musicPlaying = !musicPlaying;

  if (musicPlaying) {
    $song.play();
    setTimeout(() => {
      $music.classList.remove("none");
    }, 700);
  } else {
    $song.pause();
    $music.classList.add("none");
    $song.currentTime = 0;
  }
};

$lightswitch.addEventListener("click", () => {
  handleLight();
});

$radio.addEventListener("click", () => {
  handleRadio();
});
