console.log('math')

//PI
console.log(Math.PI)

//절대값
console.log(Math.abs(-1))

//반올림
console.log(Math.round(1.4))
console.log(Math.round(1.5))

//올림
console.log(Math.ceil(1.2))

//버림
console.log(Math.floor(1.999999999))

//random:0부터 0.99999999999999...
console.log(Math.random())
//Math.random()*(최대값-최소값 + 1) + 최소값;

let max=45;
let min=1;
const random = Math.random() * (max - min +1) + min
console.log(Math.floor(random))

//최소,최대값을 받아 해당 범위만큼 난수를 생성하는 함수
const randomGenerator = (min,max) =>{
    return console.log (Math.floor(Math.random() * (max - min +1) + min))
}
randomGenerator(1,35)