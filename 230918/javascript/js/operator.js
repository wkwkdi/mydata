console.log('연산자');

let value= 1+2; //3
value =1 +Number('1'); //2
value=5-1; //4
value=10-'1'; //9
value=10-'강아지'; //nan:not a number, 숫자형이 아닌것을 계산하려고 했을때 나오는 에러
value=10*10; //100
value=1/2; //0.5
value=5%3; //나머지를 구하는 연산자,2
value=(1+2)*3
console.log(value, typeof value)

let x=5;
// console.log(x+true); //true=1
console.log(x+false); //false=0
//null:강제로 빈값을 넣어줌
console.log(x+null); //null=0

//+연산자를 이용해서 문자여을 결합하는 방법

let pokemon;
let name='피카츄'
let age=28;
pokemon='안녕 나는 '+ name+'야, 나이는 '+ age+ '살이야';
console.log(pokemon)

// let message;
// let username='강지은';
// message='안녕하세요 '+username+'님, 로그인 되었습니다';
// console.log(message)

// let userinfo;
// let username='강지은'
// let useremail='rjeh321'
// let userplace='대전'
// userinfo= username+' 님의 이메일 주소는 ' + useremail+', 거주지는 ' +userplace+ '입니다'
// console.log(userinfo);

//ES6부터 추가 된 템플릿 리터럴 방식
//문자열을 표현할때는 작은따옴표,큰따옴표,백틱(``) 다 사용 가능
let userinfo;
let username='강지은'
let useremail='rjeh321'
let userplace='대전'
let userage=25
userinfo=`${username}님의 이메일 주소는 ${useremail}, 사용자의 나이는 ${userage+1}, 거주지는 ${userplace} 입니다`;
console.log(userinfo);

let text='hello world';
console.log(text.length) //문자열의 길이를 알 수 있는. length
console.log(text.toUpperCase()) //대문자로 변환
console.log(text.toLowerCase())//소문자로 변환

let num =1;
num= num +1; // num =2
num=num -1; // num =1
num += 1; // num =num +1;
num -= 1; // num-1,num =1;
num *= 2; // num = num * 2, num = 2;
num /=2; // num = num/ 2, num=1;
num %= 1; // num = num % 1, num=0;
num++; // 증가연산자 매번 사용할때마다 +1씩 증가
num--; // 감소연산자, 매번 사용할때마다 -1씩 감소
console.log(num)

let a = 1;
let b = a++;
console.log(a,b) //2,1
//증가,감소 연산자를 뒤에 두면 값을 먼저 작동 후 증가

a= 1;
b= ++a;
console.log(a,b) //2,2
//증가,감소 연산자를 앞에 두면 값을 먼저 증가,감소시킨 후 작동