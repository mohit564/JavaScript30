const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(event) {
  console.log(this.classList.value);
  // This will stop bubbling
  event.stopPropagation();
}

divs.forEach((div) => div.addEventListener("click", logText));

button.addEventListener(
  "click",
  () => {
    console.log("Button will be clicked only once");
  },
  {
    once: true,
  }
);
