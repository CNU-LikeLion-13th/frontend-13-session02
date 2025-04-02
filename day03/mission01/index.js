// var back = document.querySelector("#colorBtn");
// back.addEventListener('click', () => document.querySelector("body").style.backgroundColor="red");

var back = document.querySelector("#colorBtn");
back.onclick = changeBack;

function changeBack() {
    document.querySelector("body").style.backgroundColor = "red";
}


/* 
const btn = document.querySelector("#colorBtn");

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
}); 

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
}); 
*/