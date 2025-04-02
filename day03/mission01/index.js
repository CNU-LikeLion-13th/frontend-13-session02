const btn = document.querySelector('#ColorBtn');

btn.addEventListener('click', function() { // 함수 지정
    document.body.style.backgroundColor = 'lightblue'; // 배경색 변경
});

btn.addEventListener('click', () => { // 화살표 함수 지정
    document.body.style.backgroundColor = 'lightblue'; // 배경색 변경
});