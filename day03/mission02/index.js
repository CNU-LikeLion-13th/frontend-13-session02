const box = document.querySelector('#box');
box.addEventListener('mousedown', (e) => {
    if(e.button === 0){
        box.innerHTML = '왼쪽 누르셨는데유?';
    }
    else if(e.button === 1) {
        box.innerHTML = '휠 누르셨는데유?';
    }
    else if(e.button === 2) {
        box.innerHTML = '오른쪽 누르셨는데유?';
    };
});

box.addEventListener('mouseout', (e) => {
    box.innerHTML = '안 누르셨는데유?';
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });