/* 
### 미션3. 콜백 함수로 메서지 포맷 바꾸기

이름을 인자로 받아서 다른 함수(콜백 함수)를 통해 출력 형식을 바꿔보세요.

콜백 함수와 대문자로 바꾸는 메서드를 사용해서 만들어주세요!
*/

const changeFormat = (e, callback) => callback(e);
const upperCase = (e) => e.toUpperCase();

console.log(changeFormat("John", upperCase));
