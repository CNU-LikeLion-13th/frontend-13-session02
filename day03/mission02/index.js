let btn = document.querySelector("#box");

btn.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        btn.textContent = "왼쪽"
    } else if (e.button === 1) {
        btn.textContent = "휠"
    } else if (e.button === 2) {
        btn.textContent = "오른쪽"
    }
})

btn.addEventListener("mouseup", function () {
    btn.textContent = "클릭해보세요";
})

btn.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})