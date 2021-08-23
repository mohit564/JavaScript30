const allHands = document.querySelectorAll(".hand");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsInDegrees = (seconds / 60) * 360 - 90;
  const minutesInDegrees = 6 * minutes - 90;
  const hoursInDegrees = 0.5 * (60 * hours + minutes) - 90;

  if (seconds === 0) {
    allHands.forEach((hand) => (hand.style.transition = "none"));
  } else {
    allHands.forEach((hand) => (hand.style.transtransition = ""));
  }

  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(setDate, 1000);
