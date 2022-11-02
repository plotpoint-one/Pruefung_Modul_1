function update() {}

const pacman = document.getElementById("pacman");
pacman.style.left = "0px"; 
pacman.style.top = "0px";

const knotPoints = {
    "1, 1": ["down", "right"], 
    "4, 1": ["up", "right"], 
    "4, 4": ["up", "left"], 
    "1, 4": ["down", "left"], 
}

function getMovingDirections(string) {
    for (const key in knotPoints) {
        if( key === string) {
             return knotPoints[key]; 
        }
    }
    if(moveDirection === "left" || moveDirection === "right") {
        return ["left", "right"]; 
    }
    if(moveDirection === "up" || moveDirection === "down") {
        return ["up", "down"]; 
    }
} 

function createMapCells() {
    const BORDER_PIXEL_HEIGHT = 1000; 
    const BORDER_PIXEL_WEIGHT = 1000; 
    const NUM_CELLS_HORIZONTAL = 4; 
    const NUM_CELLS_VERTICAL = 4;  
    const cellHeight = BORDER_PIXEL_HEIGHT / NUM_CELLS_VERTICAL; 
    const cellWidth = BORDER_PIXEL_WEIGHT / NUM_CELLS_HORIZONTAL;
    
    const MAP = new Object; 

    for (i=1; i<=NUM_CELLS_HORIZONTAL; i++) {
        for (j=1; j<=NUM_CELLS_VERTICAL; j++) {
            MAP[`${i}, ${j}`] = []; 
            MAP[`${i}, ${j}`].push((j-1)*cellHeight); 
            MAP[`${i}, ${j}`].push((i-1)*cellWidth); 
        }
    }
    return MAP; 
    }

function getMapCoordinates(character) {
        for (const key in MAP) {
            if(parseInt(character.style.left) >= MAP[key][0] && parseInt(character.style.left) <= (MAP[key][0]+5) 
                && parseInt(character.style.top) >= MAP[key][1] && parseInt(character.style.top) <= (MAP[key][1]+5)) { 
                    return key; 
            }
        }
        return undefined; 
    }
    
let MAP = createMapCells();   
let possibleMoveDirections; 
let moveDirection; 
let newPressedKey; 
let oldPressedKey; 

window.addEventListener("keydown", (event) => {

    newPressedKey = event.keyCode; 
    
    movePacman(); 

    while(newPressedKey === oldPressedKey) {
        setTimeout(movePacman, 60); 
        window.addEventListener("keydown", )
    }

    function movePacman() {
    
    let mapCoord = getMapCoordinates(pacman); 

    console.log(oldPressedKey);
    console.log(newPressedKey); 
    console.log(mapCoord); 
    console.log(moveDirection); 
    console.log(possibleMoveDirections); 

    if( mapCoord !== undefined ) { 
        possibleMoveDirections = getMovingDirections(mapCoord); 

        if (newPressedKey === 39 && possibleMoveDirections.includes("right")) {   // 39 ... arrow-right
            moveDirection = "right"; 
            pacman.style.left = (parseInt(pacman.style.left) + 10) + 'px';
        }  
        if (newPressedKey === 38 && possibleMoveDirections.includes("up")){   // arrow-up
            pacman.style.top = (parseInt(pacman.style.top) - 10) + 'px';
            moveDirection = "up";
        }
        if (newPressedKey === 40 && possibleMoveDirections.includes("down")){   // arrow-down
            pacman.style.top = (parseInt(pacman.style.top) + 10) + 'px';
            moveDirection = "down";
            }
        if (newPressedKey === 37 && possibleMoveDirections.includes("left")){   // arrow-left
            pacman.style.left = (parseInt(pacman.style.left) - 10) + 'px';
            moveDirection = "left";
        }
    }
    if( mapCoord === undefined )  {
        if (oldPressedKey === newPressedKey) {
            if (moveDirection === "right") {
                pacman.style.left = (parseInt(pacman.style.left) + 10) + 'px';
                moveDirection = "right"; 
                possibleMoveDirections = ["right", "left"];
            }
            if (moveDirection === "up") {
                pacman.style.top = (parseInt(pacman.style.top) - 10) + 'px';
                moveDirection = "up"; 
                possibleMoveDirections = ["up", "down"];
            }
            if (moveDirection === "down") {
                pacman.style.top = (parseInt(pacman.style.top) + 10) + 'px';
                moveDirection = "down"; 
                possibleMoveDirections = ["up", "down"];
            }
            if (moveDirection === "left") {
                pacman.style.left = (parseInt(pacman.style.left) - 10) + 'px';
                moveDirection = "left"; 
                possibleMoveDirections = ["right", "left"];
            }
        }  else{
            if (newPressedKey === 39 && possibleMoveDirections.includes("right")) {   // 39 ... arrow-right
                moveDirection = "right"; 
                possibleMoveDirections = ["right", "left"];
                pacman.style.left = (parseInt(pacman.style.left) + 10) + 'px';
            }  
            if (newPressedKey === 38 && possibleMoveDirections.includes("up")){   // arrow-up
                pacman.style.top = (parseInt(pacman.style.top) - 10) + 'px';
                moveDirection = "up";
                possibleMoveDirections = ["up", "down"];
            }
            if (newPressedKey === 40 && possibleMoveDirections.includes("down")){   // arrow-down
                pacman.style.top = (parseInt(pacman.style.top) + 10) + 'px';
                moveDirection = "down";
                possibleMoveDirections = ["up", "down"];
                }
            if (newPressedKey === 37 && possibleMoveDirections.includes("left")){   // arrow-left
                pacman.style.left = (parseInt(pacman.style.left) - 10) + 'px';
                moveDirection = "left";                
                possibleMoveDirections = ["right", "left"];
            }

        }
    }       
        oldPressedKey = event.keyCode; 
}
}
);  





