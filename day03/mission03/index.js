var ho = document.querySelector("#hoverBox");

ho.addEventListener("mouseover", textChange);
ho.addEventListener("mouseleave", backOrigin);

function textChange() {
    ho.textContent = "hover 중!";
    ho.style.backgroundColor = "orange";
}
function backOrigin() {
    ho.textContent = "Hover me";
    ho.style.backgroundColor = "gray";
}