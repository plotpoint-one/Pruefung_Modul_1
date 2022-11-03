const changeColorButton = document.querySelector("#change-color");

changeColorButton.classList.remove("red");
//var colorStatus = false;
let colorStatus = true;
// install an event handler on it - make it alive
changeColorButton.addEventListener("click", (event) => {
  if (!colorStatus) {
    changeColorButton.classList.remove("red");
    colorStatus = true;
  } else {
    changeColorButton.classList.add("red");
    colorStatus = false;
  }
});
