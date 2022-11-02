const newImage1 = document.createElement("img");
newImage1.src = "./images/PIC_20220718_080105.jpeg";
newImage1.style.width = "250px";

const newImage2 = new Image();
newImage2.src = "./images/PIC_20220718_082807.jpeg";
newImage2.style.width = "250px";

newImage2.addEventListener("click", function () {
  console.log("newImage2 consoleclicked");
  //alert("newImage2 writeclicked");
  imgArray[0].classList.toggle("hide");
});

imgArray = document.getElementsByTagName("img");
console.log(imgArray);

//imgArray[0].id = "firstPic";
imgArray[0] = document.getElementById("firstPic");
imgArray[0].classList.add("img-rounded-border");
//imgArray[0].classList.add("hide");

document.body.appendChild(newImage1);
document.body.insertBefore(newImage2, newImage1);

//document.ELTERN.insertBefore("EINZUFÜGENDES-Child", "VORHANDENES-Child")

//document.body.removeChild(firstPic);


