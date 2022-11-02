// Header
const main = document.createElement("main");
main.setAttribute("id", "main");
main.setAttribute("class", "main");

const menues = document.createElement("menues");
menues.setAttribute("id", "menues");
menues.setAttribute("class", "menues");

const header = document.createElement("header");
header.setAttribute("id", "header");
header.setAttribute("class", "header");

const score = document.createElement("score");
score.setAttribute("id", "score");
score.setAttribute("class", "score");

const peter = document.createElement("peter");
peter.setAttribute("id", "peter");
peter.setAttribute("class", "peter");

const benito = document.createElement("benito");
benito.setAttribute("id", "benito");
benito.setAttribute("class", "benito");

const rainer = document.createElement("rainer");
rainer.setAttribute("id", "rainer");
rainer.setAttribute("class", "rainer");

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
footer.setAttribute("class", "footer");

function createMembers() {
  let member = [];
  for (i = 0; i <= 2; i++) {
    member[i] = document.createElement("member" + i);
    member[i].setAttribute("id", "member" + i);
    member[i].setAttribute("class", "member");
  }
  return member;
}

const member = createMembers();
console.log(member);

document.body.appendChild(main);
main.appendChild(menues);
main.appendChild(header);
main.appendChild(score);
main.appendChild(peter);
main.appendChild(benito);
main.appendChild(rainer);
main.appendChild(footer);

for (i = 0; i <= 2; i++) {
  main.appendChild(member[i]);
}

/*main.appendChild(member[1]);
main.appendChild(member[2]);*/

/*var isDone = false;
var listObject = {};
var listArray = [];
var listArrayOfObjects = [];

//Focus auf Input bzw. Add Button setzen
document.getElementById("addButton").addEventListener("click", () => {
  document.getElementById("new").focus();
});

//Eigentlich die Main Funktion. Hat sich so ergeben
function getTask() {
  //Input handling
  let inputVal = document.getElementById("new").value;
  //Clear Input
  document.getElementById("new").value = "";

  //Store listElements in Array
  listObject = { task: inputVal, status: isDone, visible: true };
  listArray.push(inputVal);
  listArrayOfObjects.push(listObject);

  //Kontrolle: var toDoList = document.getElementById("toDoList");
  console.log(listArray.join(" "));
  console.log(listObject);
  console.log(listArrayOfObjects);

  //Build Task Table
  var table = document.createElement("table");
  table.setAttribute("border", 0);
  table.id = "taskTable";

  console.log(table.id);

  for (var i = 0; i < listArray.length; i++) {
    var row = document.createElement("tr");
    row.style.backgroundColor = "black";
    var cell = document.createElement("td");
    cell.textContent = listArray[i];

    row.appendChild(cell);
    cell = document.createElement("td");

    var deleteButton = document.createElement("Button");
    deleteButton.setAttribute("id", "deleteButton" + i);
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.textContent = "Delete";

    var doneButton = document.createElement("Button");
    doneButton.setAttribute("id", "doneButton" + i);
    doneButton.setAttribute("class", "doneButton");
    doneButton.textContent = "Done";

    console.log(cell);

    cell.appendChild(deleteButton);
    cell.appendChild(doneButton);
    row.appendChild(cell);

    //Die HEILIGE Zeile!
    table.replaceChildren(row);
  }

  //Funktionen aller Art
  function delete_row() {
    console.log(i);
    this.parentNode.parentNode.remove();
    listArray.splice(i - 1, 1);
    listArrayOfObjects.splice(i - 1, 1);
  }
  function done_row() {
    row.style.backgroundColor = "green";
    doneButton.textContent = "ToDo";
    listObject.status = true;
    //doneButton.textContent = "Not Done";
  }
  function undo_row() {
    row.style.backgroundColor = "black";
    doneButton.textContent = "Done";
    listObject.status = false;
  }
  function switch_row() {
    if (row.style.backgroundColor === "black") {
      done_row();
    } else undo_row();
  }
  function completeAll() {
    for (var i = 0; i < listArray.length; i++) {
      row.style.backgroundColor = "green";
      doneButton.textContent = "ToDo";
      listArrayOfObjects[i].status = true;
    }
  }

  //click Events
  deleteButton.addEventListener("click", delete_row, false);
  doneButton.addEventListener("click", switch_row, false);
  allDoneButton.addEventListener("click", completeAll, false);

  //Page basteln
  document.body.appendChild(table);
  document.body.appendChild(filterBox);
  document.body.appendChild(allDoneButton);
}

//Filter außerhalb von getTask bauen
function removeRow() {
  var filterThisText = document.getElementById("filterBox").value;

  console.log(filterThisText);

  let rowArray = [];
  for (i = listArray.length - 1; i >= 0; i--) {
    if (!listArray[i].toLowerCase().includes(filterThisText.toLowerCase())) {
      rowArray.push(i);
      var row = document.getElementsByTagName("tr")[i];
      //row.style.backgroundColor = "red";
      row.classList.add("hide");
    } else {
      var row = document.getElementsByTagName("tr")[i];
      //row.style.backgroundColor = "green";
      row.classList.remove("hide");
    }
  }
  console.log(rowArray);
}

//Elemente, die auch außeralb von getTask ansprechbar sind
var allDoneButton = document.createElement("Button");
allDoneButton.setAttribute("id", "allDoneButton");
allDoneButton.setAttribute("class", "allDoneButton");
allDoneButton.textContent = "Complete all";

var filterBox = document.createElement("input");
filterBox.addEventListener("keyup", removeRow);
filterBox.id = "filterBox";
filterBox.placeholder = "filter";
filterBox.type = "text";
/*
const ele = document.createElement("div");

// Set its HTML
ele.innerText = "html und mehr und noch mehr";

console.log(ele);

document.body.appendChild(ele);*/
