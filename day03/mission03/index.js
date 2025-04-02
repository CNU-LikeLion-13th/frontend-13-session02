const btn = document.querySelector("#hoverBox");


btn.addEventListener('mouseover', () => {
    btn.textContent = 'hover 중!';
    btn.style.backgroundColor = "yellow";
    
});
btn.addEventListener('mouseout', () => {
    btn.textContent = 'hover me!';
    btn.style.backgroundColor = "gray";
});