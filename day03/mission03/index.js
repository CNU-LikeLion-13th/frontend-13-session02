const btn=document.querySelector('#hoverBox');

btn.addEventListener("mouseover", ()=>{
    btn.textContent = "hover 중";
    btn.style.backgroundColor = 'lightblue';
    btn.style.color = 'yellow';
});

btn.addEventListener("mouseout", ()=>{
    btn.textContent = "Hover me!";
    btn.style.backgroundColor = 'gray';
    btn.style.color = 'white';
});
