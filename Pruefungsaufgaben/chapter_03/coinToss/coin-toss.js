console.log("alles klar!");
const message = document.getElementById("message");
console.log(message.innerText);
const heads = document.getElementById("heads");
console.log(heads);
const tails = document.getElementById("tails");
console.log(tails);
//alert(message);
const randomNumber = Math.floor(Math.random() * 2);
if (randomNumber === 0) {
  message.innerText = "You have selected tails !";
  console.log("You have selected tails !");
  tails.classList.remove("hide");
} else {
  message.innerText = "You have selected heads";
  console.log("You have selected heads");
  heads.classList.remove("hide");
}
