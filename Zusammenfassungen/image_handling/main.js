const newImage1 = document.createElement("img");
newImage1.src = "./images/PIC_20220718_080105.jpeg";
newImage1.style.width = "200px";

const newImage2 = new Image();
newImage2.src = "./images/PIC_20220718_082807.jpeg";
newImage2.style.width = "250px";

newImage2.addEventListener("click", function () {
  console.log("newImage2 consoleclicked");
  alert("newImage2 writeclicked");
});

document.body.appendChild(newImage1);
document.body.appendChild(newImage2);


