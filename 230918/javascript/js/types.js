console.log('types');

/**
 * 자료형
 * number:숫자
 * string:문자
 * boolean: 참,거짓
 * underfined: 정의 되지 않은 값
 * null:빈 값
 */

let value=5; //숫자형
value='5'; //문자형
value= true; //boolean
// 변수 이름 앞에 typeof를 붙이면 자료형을 확인 할 수 있다
console.log(value, typeof value)

//ex.
//'5개'라는 문자열이 왔고, 거기서 '개'를 지우고
//'5'라는 값이 왔으나 여전히 문자열인 상태
//'5'를 숫자형으로 변환하는 방법

let number='5';
number= parseInt(number); //정수로 변환
number= Number(number); //숫자로 변환하는 메소드
number= +number; //숫자가 문자형으로 들어갔을때 +를 붙이면  숫자형으로 변환
console.log(number,typeof number)

let number2= '9.5';
number2= parseFloat(number2); //형 변환시 소수점을 표현할때
console.log(number2) //9.5

//숫자를 문자로 형변환
let string='100';
string=String(string)
string = string.toString()
console.log(string, typeof string)