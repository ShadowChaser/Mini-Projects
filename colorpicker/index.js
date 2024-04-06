const body = document.getElementsByTagName("body")[0];

function changeColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const color = `rgb(${red},${blue},${green})`;
  body.style.backgroundColor = color;
}
