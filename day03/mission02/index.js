let boxBtn = document.querySelector("#box");

boxBtn.addEventListener("mousedown", (e) => {
  switch (e.button) {
    case 0:
      boxBtn.textContent = "Left";
      break;
    case 1:
      boxBtn.textContent = "Middle";
      break;
    case 2:
      boxBtn.textContent = "Right";
      break;
    case 3:
      boxBtn.textContent = "Back";
      break;
    case 4:
      boxBtn.textContent = "Forward";
      break;
    default:
  }
});

boxBtn.addEventListener("mouseup", () => {
  boxBtn.textContent = "클릭해보세요";
});

boxBtn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
