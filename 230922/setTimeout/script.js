//setTimeout:지연된 시간 후 실행되는 함수
//setTimeout(함수,시간:1s=1000ms)
setTimeout(() =>{
console.log('1번째')
},1000)

setTimeout(() =>{
console.log('2번째')
},3000)

setTimeout(() =>{
console.log('3번째')
},500)

let index= 0;
setTimeout(() =>{
    console.log(index+1)
},2000)

setTimeout(() =>{
    document.body.style.backgroundColor='green'
},1000)

//setinterval:정해진 시간마다 반복 실행되는 비동기 함수
//setinterval(함수,시간)

setInterval(() =>{
    document.body.textContent = index
    console.log(index++)
},1000)