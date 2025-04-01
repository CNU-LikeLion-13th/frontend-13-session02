/* 
### 미션3. 콜백 함수로 메서지 포맷 바꾸기

이름을 인자로 받아서 다른 함수(콜백 함수)를 통해 출력 형식을 바꿔보세요.

콜백 함수와 대문자로 바꾸는 메서드를 사용해서 만들어주세요!

구현해야 하는 메서드는 다음과 같습니다.

1. 이름을 대문자로 바꾸어 출력하는 메서드
2. "안녕하세요, (입력한 글자)님" 형태로 바꾸어 출력하는 메서드

- 모든 문제는 console.log 를 통해 출력해 확인할 수 있습니다.

console.log문은 다음과 같습니다!

console.log(formatName("본인 이름(소문자로)", upperCase));

console.log(formatName("본인 이름(소문자로)", greeting));
*/

const formatName = (e, callback) => "안녕하세요, " + callback(e) + "님";
const upperCase = (e) => e.toUpperCase();

console.log(formatName("mincheol", upperCase));
