// console.log 개발자 도구에서 값을 확인할때 사용
/*주석을 여러줄 넣을때는 이렇게 사용*/
console.log('안녕하세요');
console.error('에러 메세지는 이렇게 나옵니다');
console.warn('경고메세지는 이렇게 나옵니다');

/**
 * 변수
 */

//변수 선언 키워드:let,var,const
// 주로 쓰는 것은 ES6부터 추가된 let,const

// dog라는 변수 선언
let dog;

// 변수를 선언할때 주의점
// 이름이 중복되면 안된다(스코프,scope가 달라야한다)
/*let 1dog; 
변수 이름에 숫자를 쓸 수 있다 하지만, 앞에 숫자가 먼저 나오면 안된다*/
/*let dog+ 
+,*같은 연산자를 붙여도 안된다*/
let dog1; //숫자는 뒤에 붙여서 사용
let $dog; //$ 달러 사인은 허용
let _dog; //언더바도 허용
console.log(dog1, $dog, _dog);

//변수를 선언과 동시에 할당
let cat='고양이';
console.log(cat);

// 이름 짓는 규칙
// 긴 변수명을 지을 때 소문자로만 지으면 읽기가 힘들다
//변수명은 대소문자도 가린다
let thisisusername;
//snake case: 밑줄을 활용한 변수명 짓는 방법
let this_is_user_name;

//kebab case:사용하지 않는다
//this-is-user-name

//PascalCase:모든 단어의 첫글자를 대문자로
let ThisIsUserName;

//camel case
let thisIsUserName;

// let으로 변수를 선언
//변수=변하는 값
let dogName='삼용이';
dogName='영철이';
dogName='춘향이';
console.log(dogName);

//const(상수)로 선언해서 값을 바꿀수없음
const catName='보름이';
// catName='밤이'
console.log(catName);

//몇몇의 예외적인 상황은 있지만 기본적으로 상수는 변하지 않는게 기본
const numbers=[1,2,3];
numbers.push(4);
console.log(numbers);