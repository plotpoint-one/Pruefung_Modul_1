const NAME = document.getElementById("name");
const METERS = document.getElementById("meters");
const ADD_TO_SCORE = document.getElementById("add-new-score");
const SCORES = document.getElementById("scores");
const DELETE = document.getElementById("delete");

ADD_TO_SCORE.addEventListener("click", addToTextarea);
DELETE.addEventListener("click", deleteSmallestScore);

let userInput = [];

function main() {
    addToTextarea();
    deleteSmallestScore(userInput);
}

function addToTextarea() {
    console.log("ich bin drinnen");
    let valueName = NAME.value;
    let valueMeters = METERS.value;

    let valueBoth = valueName + ":" + " " + valueMeters;
    userInput.push(valueBoth);
    console.log(valueBoth);

    for(let i = 0; i < userInput.length; i++) {
        SCORES.value = userInput.join("\n");
    }
    return userInput;
}

function deleteSmallestScore() {
    console.log("bla")
    let smallestNumber;
    let index; 
    for(let i = 0; i < userInput.length; i++) {

        let stringToNumber = parseInt(userInput[i].slice(-2));

        if (!smallestNumber) {
            smallestNumber = stringToNumber
            index = i; 
        }

        if(smallestNumber > stringToNumber) {
            smallestNumber = stringToNumber;
            index = i; 
        }
    }
    userInput.splice(index, 1);
    SCORES.value = userInput;
}