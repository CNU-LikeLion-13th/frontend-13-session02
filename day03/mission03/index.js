const hoverBox = document.querySelector("#hoverBox");

document
  .querySelector("#hoverBox")
  .addEventListener("mouseover", () => (hoverBox.textContent = "hover 중!"));
document
  .querySelector("#hoverBox")
  .addEventListener("mouseout", () => (hoverBox.textContent = "Hover me"));
