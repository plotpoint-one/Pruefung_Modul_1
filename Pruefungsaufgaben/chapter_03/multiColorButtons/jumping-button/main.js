// get the button
const flipFlopButtonLeft = document.querySelector("#flip-flop-left");
const flipFlopButtonRight = document.querySelector("#flip-flop-right");

flipFlopButtonLeft.classList.remove("hide");

// install an event handler on it - make it alive
flipFlopButtonLeft.addEventListener("click", (event) => {
  console.log(event); // event object
  console.log(event.target); // clicked button
  //flipFlopButtonLeft.classList("hide");
  flipFlopButtonRight.classList.remove("hide");
  flipFlopButtonLeft.classList.add("hide");
  // TODO check out the objects displayed in the console
  // and finish the task 1.
});

flipFlopButtonRight.addEventListener("click", (event) => {
  console.log(event); // event object
  console.log(event.target); // clicked button
  flipFlopButtonLeft.classList.remove("hide");
  flipFlopButtonRight.classList.add("hide");
  //flipFlopButtonRight("hide");
  // TODO check out the objects displayed in the console
  // and finish the task 1.
});


  