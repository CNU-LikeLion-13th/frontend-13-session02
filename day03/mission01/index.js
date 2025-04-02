document
  .querySelector("#colorBtn")
  .addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  document.querySelector("body").style.backgroundColor = "skyblue";
  document
    .querySelector("body")
    .setAttribute("style", "background-color: blue");
  console.log(document.querySelector("body").getAttribute("style"));
}
