const btn = document.querySelector("#colorBtn");

btn.addEventListener('click', function () {
    document.body.style.background = 'red';
})

btn.addEventListener('click', () => {
    document.body.style.background = 'red';
})