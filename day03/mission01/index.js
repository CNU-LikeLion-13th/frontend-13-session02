document.querySelector("#colorBtn").addEventListener("click", function () {
  const BGcolor = document.querySelector("body").style.backgroundColor;
  if (BGcolor === "") {
    BGcolor = "blue";
  }
  if (BGcolor === "blue") {
    BGcolor = "red";
  }
  if (BGcolor === "red") {
    BGcolor = "white";
  }
});
