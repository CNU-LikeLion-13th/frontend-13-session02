const hoverbox = document.querySelector("#hoverBox");

hoverbox.addEventListener("mouseenter", () => {
  hoverbox.style.backgroundColor = "yellow";
  hoverbox.textContent = "hover 중!";
  hoverbox.style.color = "black";
});

hoverbox.addEventListener("mouseout", () => {
  hoverbox.style.backgroundColor = "gray";
  hoverbox.textContent = "Hover me!";
  hoverbox.style.color = "white";
});
