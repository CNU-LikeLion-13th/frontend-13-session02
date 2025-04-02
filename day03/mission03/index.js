const hoverbox = document.getElementById('hoverbox');

hoverbox.addEventListener("mouseover", function() {
    hoverbox.textContent = "hover중!";
    hoverbox.style.Color = "lightblue";
    hoverbox.style.fontSize = "30px";
    hoverbox.style.fontWeight = "bold";
    hoverbox.style.backgroundcolor = "pink";
});

hoverbox.addEventListener("mouseout", function() {
    hoverbox.textContent = "Hover me!";
    hoverbox.style.color = "lightblue";
    hoverbox.style.fontSize = "30px";
    hoverbox.style.fontWeight = "bold";
    hoverbox.style.backgroundcolor = "pink";
});
