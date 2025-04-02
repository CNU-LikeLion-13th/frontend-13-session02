const bin = document.querySelector("#hoverBox");

bin.addEventListener('mouseover', () => {
    bin.textContent = 'hover 중!';
    bin.backgroundColor= 'red';
});
bin.addEventListener('mouseout', () => {
    bin.textContent = 'Hover me';
    bin.backgroundColor = 'blue';
});