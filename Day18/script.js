const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

let seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, time) => total + time, 0);

const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
const minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log(
  `%cTotal Duration : ${hours}:${minutes}:${seconds}`,
  "font-weight: bold; font-size: 24px"
);
