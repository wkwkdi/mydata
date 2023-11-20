function add(x , y){
    return x + y
}
//실행
console.log(add(2,3))

//화살표 함수
const addFunc = (x,y) =>{
    return console.log(x+y);
}
//실행
addFunc(5,5)

//매개변수가 하나일때
// const double = (x) =>{
//     return console.log(x * x);
// }
// double(4)

//매개변수가 하나일때 축약형
const double =x => console.log(x*x);
    double(4)

// const showName = (name)=>{
//     return console.log(`제 이름은 ${name} 입니다`)
// }
// showName('강지은')

// const showName= name => console.log(`제 이름은 ${name} 입니다`)

// showName('강지은')

const 조건 = true
if(조건){
    //조건이 맞을 경우 실행되는 내용
    console.log(조건)
} else{
    //조건이 안 맞을 경우 실행되는 내용
}

function showName(name){
    console.log(`매개변수의 타입은 ${typeof name} 입니다`);
    console.log(name.length)

    if(typeof name === 'string'){
        return console.log(`제이름은 ${name}입니다`)
    }
}
showName('강지은')