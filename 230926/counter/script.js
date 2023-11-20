const dataList=document.querySelectorAll('[data-counter]')
console.log(dataList)

for(let i=0; i < dataList.length; i++){
    const target=dataList[i].dataset.counter
    const timerText  = dataList[i].querySelector('.timer')
    const step = Math.floor(target /200)
    console.log(step)
    let index=0;
    setInterval(()=>{
        if(index< target){
            index=index+step
            console.log(index)
            timerText.textContent=index
        }
    },1)
}
dataList.forEach(item => {
    let index=0;
    const target = item.dataset.counter
    const timerText = item.querySelector('.timer')
    const step = Math.floor(target/200)
    setInterval(()=>{
        if(index< target){
            index=index+step
            timerText.textContent=index
        }
    })

})