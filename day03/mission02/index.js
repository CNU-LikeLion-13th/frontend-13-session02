const btn = document.querySelector("#box");



btn.addEventListener('mousedown', (e) => {
    e.preventDefault();

    if (e.button === 0) {
      box2.textContent = '왼쪽 버튼';
    } else if (e.button === 1) {
      box2.textContent = '가운데 버튼';
    } else if (e.button === 2) {
      box2.textContent = '오른쪽 버튼';
    }
  });
btn.addEventListener('mouseup', () => {
    box2.textContent = '클릭해해해보세요.';
  });

