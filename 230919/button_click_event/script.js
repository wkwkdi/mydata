const title = document.getElementById('title')
console.log(title)

const button = document.getElementById('btn')
const container = document.querySelector('.container')
button.addEventListener('click', () => {
    container.classList.add('bg')

})


//제목을 클릭했을때  alert창에 '클릭'이라는 문구 출력
//addEventlistener('이벤트 이름',실행할 함수)
title.addEventListener('click', () => {
    alert('클릭')
    if (title.style.color === 'red') {
        title.style.color = 'black'
    } else {
        title.style.color = 'red'
    }
})