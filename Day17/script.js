const list = document.getElementById("bands");

function strip(name) {
  return name
    .toLowerCase()
    .replace(/^(a |an |the )/i, "")
    .trim();
}

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

list.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
