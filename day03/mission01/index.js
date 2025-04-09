document.querySelector("#colorBtn").addEventListener("click", function () {
  const body = document.querySelector("body");
  const BGcolor = body.style.backgroundColor;

  if ((BGcolor === "") | (BGcolor === "white")) {
    body.style.backgroundColor = "blue";
  }
  if (BGcolor === "blue") {
    body.style.backgroundColor = "red";
  }
  if (BGcolor === "red") {
    body.style.backgroundColor = "white";
  }
});
