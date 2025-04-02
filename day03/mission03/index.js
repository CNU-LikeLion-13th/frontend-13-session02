const btn = document.querySelector('#hoverBox');

btn.addEventListener('mouseover', (e) => {
    btn.textContent = 'hover중!';
    btn.style.color = 'black';
    btn.style.background = 'yellow';
})

btn.addEventListener('mouseout', (e) => {
    btn.textContent = 'Hover me!';
    btn.style.color = 'black';
    btn.style.background = 'gray';
})