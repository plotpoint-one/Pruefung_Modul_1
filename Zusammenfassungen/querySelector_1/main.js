console.log("Test")

var inputText = document.createElement("INPUT");
inputText.setAttribute("type", "text");
spalte1=document.getElementById("spalte1");
document.body.insertBefore(inputText, spalte1);


var btn1 = document.createElement("button1");
btn1.setAttribute("type", "button");
btn1.style.backgroundColor="red";
btn1.innerText="Click me";

let msg=inputText.value;
document.body.insertBefore(btn1, spalte1);

btn1.addEventListener("click", function(){alert(inputText.value)}, false);