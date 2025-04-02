const box = document.querySelector("#hoverBox");

box.addEventListener("mouseover", (e) => {
    box.textContent = "hover 중!";
    e.target.style.background = "skyblue";
})

box.addEventListener("mouseout", (e) => {
    box.textContent = "Hover me!";
    e.target.style.background = "skyblue";
})