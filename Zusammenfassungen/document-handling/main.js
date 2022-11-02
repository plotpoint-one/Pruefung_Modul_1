console.log("test");
function change() {
  const header = document.getElementsByTagName("h2")[0];
  console.log(header);
  header.firstChild.data = "Test";

  const p = document.getElementsByTagName("p")[0];
  p.firstChild.data = "Neuer Paragraph";

  const newText = document.createTextNode("Das ist ein Textnode");
  const newPara = document.createElement("p");

  newPara.appendChild(newText);

  p.parentNode.appendChild(newPara);
}
