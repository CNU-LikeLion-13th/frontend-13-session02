const btn = document.querySelector("#colorBtn");

btn.addEventListener("click", (e) => {

    var change = document.body.style.backgroundColor; 
    
    if (change === "white") {
        document.body.style.backgroundColor = "blue";
    }else  {
        document.body.style.backgroundColor = "white";
    }
});
