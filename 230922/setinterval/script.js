console.log('run')

const counter=document.getElementById('counter')
const startBtn=document.getElementById('start')
const stopBtn=document.getElementById('stop')
const resetBtn=document.getElementById('reset')



let index=0;
let timerId;
startBtn.addEventListener('click',()=>{
    if(timerId){
        //만약 timerid에 값이 들어있다면
        clearInterval(timerId)
        //setinterval 함수 취소
    }

    //비어있는 timerid에 setinterval 함수 할당
    timerId = setInterval(() =>{
        //index값 증가
        index++
        counter.textContent=index
        //증가된 인덱스 값을 counter 내용에 할당
        // console.log(index)
    },100);
    console.log(timerId)

})
stopBtn.addEventListener('click',() =>{
    clearInterval(timerId)
})

resetBtn.addEventListener('click',() =>{
    index=0;
    counter.textContent=index
    clearInterval(timerId)
})