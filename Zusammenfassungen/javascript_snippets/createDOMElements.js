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
const cloneCarrigeReturn = carrigeReturn.cloneNode();
//////////////Append the Clone to the "newParagraph"-Element/////////
newParagraph.appendChild(cloneCarrigeReturn);
//ALTERNATIVE!!!/////Insert as a sibling of carrigeReturn1///
//carrigeReturn1.parentNode.insertBefore(cloneCarrigeReturn1, carrigeReturn1);

////////////////Create an "input"-Element////////////////////////////
const newInputBox = document.createElement("input");
//Give "newInputBox" a placeholder Text
newInputBox.placeholder = "newInputBox.placeholder";
//Append "newInputBox" to "carrigeReturn1"
newParagraph.appendChild(newInputBox);
///Give "newInputBox" an id for the "label"-Field (s.u.)
newInputBox.id = "newInputBox";

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
