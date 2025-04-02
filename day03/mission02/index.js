const bin = document.querySelector("#box");

bin.addEventListener('mousedown', function(e) {
    e.preventDefault();
    let current
    switch (e.button) {
        case 0:
            current = "왼쪽 마우스 클릭";
            break;
        case 1:
            current = "휠 버튼 클릭";
            break;
        case 2:
            current = "오른쪽 마우스 클릭";
            break;
    }
    bin.textContent = current;
});