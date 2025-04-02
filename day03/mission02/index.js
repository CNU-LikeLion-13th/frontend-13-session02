const box = document.getElementById(box);

box.addEventListener('click', function(e) {
    box.textContent = "클릭해보세요"
    if (e.button === 0) {
        box.textContent = "왼쪽 버튼 클릭"
    } else if (e.button === 2) {
        box.textContent = "가운데 버튼 클릭"}
    });

box.addEventListener('mouseup', function() {
    box.textContent = "클릭해보세요"
});

box.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});