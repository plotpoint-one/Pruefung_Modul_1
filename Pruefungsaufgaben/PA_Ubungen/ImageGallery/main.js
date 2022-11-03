const FIRST_IMAGE = document.getElementsByTagName("img"); 
const PRODUCT_GALLERY = document.getElementsByClassName("my-products-gallery");
const BIG_PICUTRE = document.getElementById("img-box");
const TITLE = document.querySelector("h1");


document.addEventListener("keydown", pressKeyDown);
document.addEventListener("mousedown", backgroundChange);
document.addEventListener("mouseup", backgroundDefault);



for (let i = 0; i < FIRST_IMAGE.length; i++) {
    FIRST_IMAGE[i].addEventListener('click', displayImageBig);
}

function displayImageBig(e) {
    BIG_PICUTRE.src = e.target.src;
    e.target.style.border = "";
    setBorderRed(e);
}


function pressKeyDown(e) {
    if(e.key === "w") {
        let number = parseInt(TITLE.style.fontSize.replace("px", ""));
        let titleHight = number + 10 + "Px";
        TITLE.style.fontSize = titleHight;
    } if (e.key === "s") {
        let number = parseInt(TITLE.style.fontSize.replace("px", ""));
        let titleHight = number - 10 + "Px";
        TITLE.style.fontSize = titleHight;
    }
}

function setBorderRed(event) {
    let children = PRODUCT_GALLERY[0].children;
    for(let i = 0; i < children.length; i++) {
        if(event == null || (event.target.src != children[i].src)) { // noch frage warum es so ist
            children[i].style.border = "4px solid red";
        }
    }
};
setBorderRed();

function backgroundChange() {
    document.body.style.backgroundColor = "red";
}
function backgroundDefault() {
    document.body.style.backgroundColor = "";
}


let biggestUrl = 0;
let biggestUrlFind;
for(let i = 0; i < FIRST_IMAGE.length; i++) {    
    if(biggestUrl < FIRST_IMAGE[i].src.length) {
        biggestUrlFind = FIRST_IMAGE[i].src;
    }
};

let findFileName = biggestUrlFind.lastIndexOf('/');
let result = biggestUrlFind.substring(findFileName + 1);
























// function myImageFunction(productSmallImg) {
//     const productFullImg = document.getElementById("img-box");
//     productFullImg.src = productSmallImg.src;
// }
// myImageFunction();

