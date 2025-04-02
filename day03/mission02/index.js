/* const boxxx = document.querySelector("#box");

boxxx.addEventListener('click', (e) => {
    document.querySelector("#box").textContent= "왼클릭";
    alert(e.which);
});
boxxx.addEventListener('contextmenu', (e) => {
    e.preventDefault() // 우클릭 막기
    document.querySelector("#box").textContent="우클릭";
    alert(e.which);
});
boxxx.addEventListener('mouseleave', (e) => {
    document.querySelector("#box").textContent="클릭해보세요";
});
*/

const boxxx = document.querySelector("#box");

boxxx.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        boxxx.textContent = '왼쪽 버튼 눌림';
    } else if (e.button === 1) {
        boxxx.textContent = '휠버튼 눌림';
    } else if (e.button === 2) {
        boxxx.textContent = '오른쪽 버튼 눌림';
    }
});

boxxx.addEventListener("mouseup", function() {
    boxxx.textContent = "클릭해보세요";
});

boxxx.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});