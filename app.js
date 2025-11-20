const Box = document.querySelector(".box");
const BtnBox = document.getElementById("BtnBox");
const BtnRC = document.getElementById("BtnRC");
const colorBoxElement = document.querySelector("#colorBox");
const colorbodyElement = document.querySelector("#colorbody");

window.onload = function () {
  colorBoxElement.innerHTML =
    "<b>Box Color : </b><span class='colorvalue'>rgb(188, 25, 200)</span>";
  colorbodyElement.innerHTML =
    "<b>Body Color : </b><span class='colorvalue'>rgb(255, 255, 255)</span>";
};

BtnBox.onclick = function () {
  Box.style.width = "200px";
  Box.style.height = "200px";
  let colorName = rgbColor();
  colorBoxElement.innerHTML = `<b>Box Color : </b> <span class='colorvalue'> ${colorName} </span>`;
  Box.style.backgroundColor = colorName;
  Box.style.borderRadius = "30px";
  Box.style.marginTop = "30px";
  Box.style.lineHeight = "170px";
  Box.style.fontStyle = "bold";
  Box.style.color = "white";
  Box.style.fontSize = "2rem";
  Box.style.padding = "20px";
};

const randnum = () => Math.floor(Math.random() * 256);

const rgbColor = () => `rgb(${randnum()}, ${randnum()}, ${randnum()})`;

BtnRC.onclick = function () {
  let colorName = rgbColor();
  colorbodyElement.innerHTML = `<b>Body Color : </b> <span class='colorvalue'> ${colorName} </span>`;
  document.body.style.backgroundColor = colorName;
};
