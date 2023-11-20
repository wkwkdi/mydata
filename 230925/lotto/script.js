//const result=document.getElementById('result')
const li=document.querySelectorAll('#result >li')
const button=document.getElementById('generate');


function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let lottoNumber = [];

button.addEventListener('click',()=>{
    button.textContent=('번호생성중')
    button.classList.add('processing')
if(lottoNumber.length > 0){
    lottoNumber = [];
    }
for(let i = 0; lottoNumber.length < 6; i++){
    const random = randomNumber(1,45)
    const isEntry = lottoNumber.includes(random)
    !isEntry ? lottoNumber.push(random) : ''
    
}
lottoNumber = lottoNumber.sort((a,b) => a-b)


for(let i = 0; i < lottoNumber.length; i++){
        
setTimeout(()=>{
    console.log(lottoNumber[i])
    li[i].textContent = lottoNumber[i]
    },300*[i])

    }
setTimeout(()=> {
    button.classList.remove('processing')
    button.textContent=('로또번호생성중')
    },1800)
})
 
    
