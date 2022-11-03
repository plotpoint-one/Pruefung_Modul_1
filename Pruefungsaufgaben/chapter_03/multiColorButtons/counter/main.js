const counterButton = document.querySelector("#count");

let counterValue = 0;
// install an event handler on it - make it alive
counterButton.addEventListener("click", (event) => {
  counterValue += 1;
  counterButton.innerHTML = counterValue;
});
