function update() {}

const gameGround = {
  boundaries: [],
  innerWalls: [],
};

const pacman = document.getElementById("pacman");
pacman.style.left = "100px";
pacman.style.top = "100px";

window.addEventListener("keydown", getKeyAndMove);

console.log(pacman.offsetHeight);

function getKeyAndMove(event) {
  if (event.keyCode === 39) {
    // arrow-left
    pacman.style.left = parseInt(pacman.style.left) + 10 + "px";
    if (parseInt(pacman.style.top) < 1000 - pacman.offsetHeight) {
      pacman.style.top = parseInt(pacman.style.top) + 5 + "px";
    }
  }
  if (event.keyCode === 38) {
    // arrow-up
    pacman.style.top = parseInt(pacman.style.top) - 10 + "px";
  }

  if (event.keyCode === 40) {
    // arrow-down
    if (parseInt(pacman.style.top) < 800 - pacman.offsetHeight) {
      pacman.style.top = parseInt(pacman.style.top) + 5 + "px";
    }
  }
  if (event.keyCode === 37) {
    // arrow-rigth
    pacman.style.left = parseInt(pacman.style.left) - 10 + "px";
  }

  console.log(pacman.style.left);
  console.log(pacman.style.top);
}
