const hoverBox = document.querySelector("#hoverBox");
hoverBox.onHover = () => {
  hoverBox.textContent = "hover 중!";
  hoverBox.style.backgroundColor = "orange";
};

hoverBox.outHover = () => {
  hoverBox.textContent = "Hover me";
  hoverBox.style.backgroundColor = "gray";
};

document
  .querySelector("#hoverBox")
  .addEventListener("mouseover", () => hoverBox.onHover());
document
  .querySelector("#hoverBox")
  .addEventListener("mouseout", () => hoverBox.outHover());
