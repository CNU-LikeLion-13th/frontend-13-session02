const box = document.querySelector("#box");
box.changeTextByMouseButton = function (e) {
  if (e.button == 0) {
    box.textContent = "LEFT";
  } else if (e.button == 1) {
    box.textContent = "WHEEL";
  } else if (e.button == 2) {
    box.textContent = "RIGHT";
  }
};

box.addEventListener("mousedown", (e) => {
  box.changeTextByMouseButton(e);
});

box.addEventListener("contextmenu", (e) => e.preventDefault());
box.addEventListener("mouseup", () => (box.textContent = "클릭해보세요"));
