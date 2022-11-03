const COMBO_BOX = document.getElementById("combobox");
const FROM = document.getElementById("from");
const TO = document.getElementById("to");

FROM.addEventListener("change", converter);
COMBO_BOX.addEventListener("change", setToZero);

function toPounds(kilos) {
    return kilos * 2.20462;
}

function toKilos(pounds) {
    return pounds / 2.20462;
}

function converter() {
    if(COMBO_BOX.value === "Pounds-Kilo") {
        let kilograms = FROM.value;
        console.log(FROM);
        TO.value = toPounds(kilograms);
        console.log(TO)
    } else {
        let pounds = FROM.value;
        TO.value = toKilos(pounds);
    }
};

function setToZero() {
    FROM.value = 0;
    TO.value = 0;
}

