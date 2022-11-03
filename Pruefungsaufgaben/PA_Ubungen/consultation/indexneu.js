const total = document.getElementById("total");
const maxSum = document.querySelector("input");

function addItemToCart(clickEvent) {
  clickEvent.target.disabled = true;

  //console.log(parseInt(clickEvent.target.innerText.split(" ").pop()));
  //console.log(parseInt(document.getElementById("total").innerText));

  //let totalCost = parseInt(document.getElementById("total").innerText);
  //let productPrice = parseInt(clickEvent.target.innerText.split(" ").pop());
  //totalCost = totalCost + productPrice;
  //total.innerText = totalCost;
  document.getElementById("total").innerText =
    parseInt(document.getElementById("total").innerText) +
    parseInt(clickEvent.target.innerText.split(" ").pop());
  //console.log(parseInt(document.getElementById("total").innerText));

  // let array = clickEvent.target.innerText.split(" ");
  // let totalCost = parseInt(total.innerText);
  // let productValue = parseInt(array.pop());

  // total.innerText = totalCost + productValue;
  console.log(parseInt(maxSum.value));
  /*if (parseInt(document.getElementById("total").innerText)>parseInt(maxSum.value)){
    document.getElementById("total").classList.add('over-budget');
  }*/
  console.log(document.getElementById("total").innerText);

  if (
    parseInt(document.getElementById("total").innerText) >
    parseInt(document.querySelector("input").value)
  ) {
    console.log("BUDGET!!!");
    //document.getElementById("total").classList.add("over-budget");
    document.getElementById("total").style.color = "red";
  }
  //checkOverBudget();
}
