/*function update() {
  //Animation Pacman eating
}*/

//Main Program
var imagesRight = new Array();
imagesRight = [
  "./assets/images/pacman/pacman-0.png",
  "./assets/images/pacman/pacman-1.png",
  "./assets/images/pacman/pacman-2.png",
];

setInterval("Animate()", 150);
var x = 0;

function Animate() {
  document.getElementById("img").src = imagesRight[x];
  x++;
  if (imagesRight.length == x) {
    x = 0;
  }
}

//Bewegung
var objImage = null;
function update() {
  objImage = document.getElementById("img");
  objImage.style.position = "relative";
  objImage.style.left = "400px";
  objImage.style.top = "400px";
}

function getKeyAndMove(e) {
  var key_code = e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
}

function moveLeft() {
  objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
}
function moveRight() {
  objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
}

function moveUp() {
  objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
}

function moveDown() {
  objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
}
window.onload = update;
