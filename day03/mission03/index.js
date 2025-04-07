const btn = document.querySelector('#hoverBox');

btn.addEventListener('mouseover', () => {
    btn.textContent = 'hover중!';
    btn.style.color = 'white';
    btn.style.background = 'pink';
    btn.style.fontSize = '1.3rem';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 0 10px pink';
    btn.style.transition = 'all 0.3s ease';
});

btn.addEventListener('mouseout', () => {
    btn.textContent = 'Hover me!';
    btn.style.color = 'white';
    btn.style.background = 'gray';
    btn.style.fontSize = ''; // 기본값으로 초기화
    btn.style.fontWeight = '';
    btn.style.boxShadow = '';
});