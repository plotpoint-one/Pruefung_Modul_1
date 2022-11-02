function getTheName() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("name").value;
  //Write input to table-cell
  let x = document.getElementById("my-table").rows[0].cells;
  x[0].innerHTML = inputVal;
  document.getElementById("name").value = "";
}

function changeTheGender() {
  let inputVal = document.getElementById("gender").value;
  //Write input to table-cell
  let x = document.getElementById("my-table").rows[1].cells;
  x[0].innerHTML = inputVal;
}

function changeTheRace() {
  let inputVal = document.getElementById("races").value;
  //Write input to table-cell
  if (inputVal === "dog") {
    dog.classList.remove("hide");
    cat.classList.add("hide");
    elephant.classList.add("hide");
    kangaroo.classList.add("hide");
  } else if (inputVal === "cat") {
    dog.classList.add("hide");
    cat.classList.remove("hide");
    elephant.classList.add("hide");
    kangaroo.classList.add("hide");
  } else if (inputVal === "elephant") {
    dog.classList.add("hide");
    cat.classList.add("hide");
    elephant.classList.remove("hide");
    kangaroo.classList.add("hide");
  } else if (inputVal === "kangaroo") {
    dog.classList.add("hide");
    cat.classList.add("hide");
    elephant.classList.add("hide");
    kangaroo.classList.remove("hide");
  }

  /*let x = document.getElementById("my-table").rows[2].cells;
  x[0].innerHTML = inputVal;*/
}

function changeTheClass() {
  let inputVal = document.getElementById("classes").value;
  //Write input to table-cell
  let x = document.getElementById("my-table").rows[3].cells;
  x[0].innerHTML = inputVal;
}

$("#characterList li a").on("click", function () {
  //alert($(this).text());
  var text = this.text;
  //console.log(text);
  if (text === " Dog") {
    dog.classList.remove("hide");
    figCapDog.classList.remove("hide");
    cat.classList.add("hide");
    figCapCat.classList.add("hide");
    elephant.classList.add("hide");
    figCapElephant.classList.add("hide");
    kangaroo.classList.add("hide");
    figCapKangaroo.classList.add("hide");
  } else if (text === " Cat") {
    dog.classList.add("hide");
    figCapDog.classList.add("hide");
    cat.classList.remove("hide");
    figCapCat.classList.remove("hide");
    elephant.classList.add("hide");
    figCapElephant.classList.add("hide");
    kangaroo.classList.add("hide");
    figCapKangaroo.classList.add("hide");
  } else if (text === " Elephant") {
    dog.classList.add("hide");
    cat.classList.add("hide");
    elephant.classList.remove("hide");
    kangaroo.classList.add("hide");
    figCapDog.classList.add("hide");
    figCapCat.classList.add("hide");
    figCapElephant.classList.remove("hide");
    figCapKangaroo.classList.add("hide");
  } else if (text === " Kangaroo") {
    dog.classList.add("hide");
    cat.classList.add("hide");
    elephant.classList.add("hide");
    kangaroo.classList.remove("hide");
    figCapDog.classList.add("hide");
    figCapCat.classList.add("hide");
    figCapElephant.classList.add("hide");
    figCapKangaroo.classList.remove("hide");
  }
});

$("#genderList li a").on("click", function () {
  //alert($(this).text());
  var text = this.text;
  //console.log(text);
  if (text === " Female") {
    female.classList.remove("hide");
    figCapFemale.classList.remove("hide");
    male.classList.add("hide");
    figCapMale.classList.add("hide");
  } else if (text === " Male") {
    female.classList.add("hide");
    figCapFemale.classList.add("hide");
    male.classList.remove("hide");
    figCapMale.classList.remove("hide");
  }
});
