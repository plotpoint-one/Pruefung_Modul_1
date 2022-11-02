const SELECT3_BUTTON = document.getElementById("select3");
const SELECT6_BUTTON = document.getElementById("select6");
const SELECT9_BUTTON = document.getElementById("select9");
const DICE3 = document.getElementById("dice3");
const DICE6 = document.getElementById("dice6");
const DICE9 = document.getElementById("dice9");

SELECT3_BUTTON.addEventListener("click", displayDiceThree);
SELECT6_BUTTON.addEventListener("click", displayDiceSix);
SELECT9_BUTTON.addEventListener("click", displayDiceNine);
DICE3.addEventListener("click", IncreaseNumberDiceThree);
DICE6.addEventListener("click", IncreaseNumberDiceSix);
DICE9.addEventListener("click", IncreaseNumberDiceNine);

function displayDiceThree() {
    SELECT3_BUTTON.classList.add("hide");
    DICE6.classList.add("hide");
    DICE9.classList.add("hide");
}

function displayDiceSix() {
    SELECT6_BUTTON.classList.add("hide");
    DICE3.classList.add("hide");
    DICE9.classList.add("hide");
}

function displayDiceNine() {
    SELECT9_BUTTON.classList.add("hide");
    DICE3.classList.add("hide");
    DICE6.classList.add("hide");
}

function IncreaseNumberDiceThree() {
    if(DICE3.innerHTML < 3) {
        DICE3.innerHTML ++;
    } else {
        DICE3.innerHTML = 1;
    }
}

function IncreaseNumberDiceSix() {
    if(DICE6.innerHTML < 6) {
        DICE6.innerHTML ++;
    } else {
        DICE6.innerHTML = 1;
    }
}

function IncreaseNumberDiceNine() {
    if(DICE9.innerHTML < 9) {
        DICE9.innerHTML ++;
    } else {
        DICE9.innerHTML = 1;
    }
}