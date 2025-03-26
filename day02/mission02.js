// 미션2. 콜백 함수로 숫자 변환하기
// 조건: 콜백 함수, map() 메서드를 사용

function mapWithCallback(array, callback) {
    result = callback(array);
    return result;
}

function double(array) {
    let result = array.map(x=>x**2);
    return result;
}

function addTen(array) {
    let result = array.map(x=>x+10)
    return result;
}

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));