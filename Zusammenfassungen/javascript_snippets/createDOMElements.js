//Test if the <script> is working
console.log("createDOMElements.js is online");

/////////////////////////////////////////
///CREATING ELEMENTS AND NODES
/////////////////////////////////////////

////////Create a "p"-Element///////////////////////////////////////
const newParagraph = document.createElement("p");
//Create a "TextNode"
const newTextNode = document.createTextNode(
  "This is the newTextNode inside newParagraph"
);
//Append "TextNode" to "p"
newParagraph.appendChild(newTextNode);
//Append "p" to "body"
document.body.appendChild(newParagraph);

////////Create a "h1"-Element///////////////////////////////////////
const newHeaderH1 = document.createElement("h1");
//Create a "newHeaderText" for the "h1"
const newHeaderText = document.createTextNode(
  "This is the newHeaderText inside newHeaderH1"
);
//Append "newHeaderText" tp "h1"
newHeaderH1.appendChild(newHeaderText);
//Insert "newHeader1" before "newParagraph"
newParagraph.parentNode.insertBefore(newHeaderH1, newParagraph);

////////////////Create a "br"-Carrige-Return-Element////////////////
const carrigeReturn = document.createElement("br");
//Append "carrigeReturn" to "newParagraph";
newParagraph.appendChild(carrigeReturn);

///////////////Create a "br"-CloneNode///////////////////////////////
const cloneCarrigeReturn1 = carrigeReturn.cloneNode();
//////////////Append the Clone to the "newParagraph"-Element/////////
//newParagraph.appendChild(cloneCarrigeReturn1);
//ALTERNATIVE!!!/////Insert as a sibling of carrigeReturn1///
//carrigeReturn1.parentNode.insertBefore(cloneCarrigeReturn1, carrigeReturn1);

////////////////Create an "input"-Element////////////////////////////
const newInputBox = document.createElement("input");
//Give "newInputBox" a placeholder Text
newInputBox.placeholder = "newInputBox.placeholder";
//Append "newInputBox" to "neParagraph"
newParagraph.parentNode.appendChild(newInputBox);
//Give "newInputBox" an id for the "label"-Field.
//In the moment only necessary, if newLabel will be dedicated
//newInputBox.id = "newInputBox";

//////////////Create a "button"-Element///////////////////////////////
const newButton = document.createElement("button");
///////////Text on Button
newButton.innerText = "newButton";
//Append "newButton" to "newInputBox"
newInputBox.parentNode.appendChild(newButton);
//ALTERNATIV///Append "newButton" to "body"
//Difference because of "br" in TextNode
///document.body.appendChild(newButton);

//////////////Create a "label"-Field for the "newInputBox////////////
const newLabel = document.createElement("label");
//Text on Label
newLabel.innerText = "newLabel for newInputBox:";
//OPTIONAL: Label excusive for "newInputBox"
//newLabel.setAttribute("for", "newInputBox");
//Attach it to "newInputBox"
newInputBox.parentNode.insertBefore(newLabel, newInputBox);

///////Create a "dropdown"-Menue//////////////////////////
///////First Attempt//////////////////////////////////////
const dropDown = document.createElement("select");
////Create the "options" in "dropDown"
let sumOfOptions = 5;
for (i = 0; i <= sumOfOptions; i++) {
  const option = document.createElement("option");
  option.innerText = "option" + i;
  dropDown.appendChild(option);
}

//Cosmetical two times "br"
const cloneCarrigeReturn2 = carrigeReturn.cloneNode();
const cloneCarrigeReturn3 = carrigeReturn.cloneNode();
newInputBox.parentNode.appendChild(cloneCarrigeReturn2);
newInputBox.parentNode.appendChild(cloneCarrigeReturn3);
//Appand "dropDown" to "inputBox"
newInputBox.parentNode.appendChild(dropDown);

///////Create a "dropdown"-Menue//////////////////////////
///////Alternative Attempt//////////////////////////////////////

const cloneCarrigeReturn4 = carrigeReturn.cloneNode();
const cloneCarrigeReturn5 = carrigeReturn.cloneNode();
//body.appendChild(cloneCarrigeReturn4);

////////////Create a Minimal-"table"///////////
const table = document.createElement("table");
//Create 5 table-rows "tr" (Zeilen)
for (j = 0; j <= 5; j++) {
  const row = document.createElement("tr");
  //Create 5 table-columns "td" (Spalte) inside the "tr"
  for (i = 0; i <= 5; i++) {
    const cell = document.createElement("td");
    cell.innerText = `column ${i}, row ${j}`;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
//table Cosmetics
table.setAttribute("border", "1");
//Attach table to "body"
document.body.appendChild(table);
//Cosmetics
table.parentNode.insertBefore(cloneCarrigeReturn4, table);
table.parentNode.insertBefore(cloneCarrigeReturn5, table);

//////////////Create "div"

//////////////Create "img"//////////////////////
const image = document.createElement("img");
image.src = "./images/PIC_20220717_055336.jpeg";
//image.width = 600; //Achtung!! Keine px, wenn ohne style!!!
image.style.width = "400px"; 
//Appand "image"
document.body.appendChild(image);

////////////Cosmetic "br"- CarrigeReturn Clone without "const" BEFORE "image"
image.parentNode.insertBefore(carrigeReturn.cloneNode(), image);

////////////Create li "list"
const unsortedList = document.createElement("ul");
unsortedList.innerText= "unsortedList-Header"
const list = document.createElement("li");
for (i=0;i<=5;i++){
  const list = document.createElement("li");
  list.innerText = `item ${i}`
  unsortedList.appendChild(list);
}
document.body.appendChild(unsortedList);


//////////////Create 5items "option"-Field Radiobutton
for (i=0;i<=5;i++){
const radioButton = document.createElement("input");
radioButton.type="radio";
const label = document.createElement("label")
label.innerText = "radio"+i;
const newLine = document.createElement("br");

document.body.appendChild(radioButton);
document.body.appendChild(label);
document.body.appendChild(newLine);
}


