/*
### 미션2. 콜백 함수로 숫자 변환하기 

mapWithCallback이라는 함수를 만들어보세요.
이 함수는 숫자 배열과 콜백 함수를 받아서, 배열의 각 요소에 콜백 함수를 적용한 새 배열을 반환합니다.

콜백 함수, map() 메서드를 사용해서 만들어주세요!

console.log문은 다음과 같습니다!

console.log(mapWithCallback([1, 2, 3], double));

console.log(mapWithCallback([1, 2, 3], addTen));
*/

const mapWithCallback = (list, callback) => list.map(callback);

const double = (e) => 2 * e;
const addTen = (e) => e + 10;

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));
