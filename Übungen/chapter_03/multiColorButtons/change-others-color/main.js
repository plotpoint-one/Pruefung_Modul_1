const changeColorButton = document.querySelector("#change-color");

text.classList.remove("red");
//var colorStatus = false;
let colorStatus = true;
// install an event handler on it - make it alive
changeColorButton.addEventListener("click", (event) => {
  if (!colorStatus) {
    text.classList.remove("red");
    colorStatus = true;
  } else {
    text.classList.add("red");
    colorStatus = false;
  }
});
