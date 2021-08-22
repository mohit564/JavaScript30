function playSound(event) {
  const { keyCode } = event;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return; // Invalid key pressed
  audio.currentTime = 0; // It allows to play sound multiple times without interruptions
  audio.play();
  key.classList.add("playing");
}

function playSoundOnClick(keyCode) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0; // It allows to play sound multiple times without interruptions
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return; // It means transition is not completed yet
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition.bind(key));
});

window.addEventListener("keydown", playSound);
