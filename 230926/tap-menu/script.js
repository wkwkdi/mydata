const tabButton=document.querySelectorAll('.tab-button')
console.log(tabButton)
const tabItem=document.querySelectorAll('.tab-item')
console.log(tabItem)



for(let i=0; i < tabButton.length; i++){
    tabButton[i].addEventListener('click',()=>{
        for(let j=0; j < tabButton.length; j++){
            tabButton[j].classList.remove('selected')
            tabItem[j].classList.remove('show')
        }
            tabButton[i].classList.add('selected')
            tabItem[i].classList.add('show')
        
    })
}

tabButton.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        tabButton.forEach((item,idx)=>{
            item.classList.remove('selected')
            tabItem[idx].classList.remove('show')
        })
        button.classList.add('selected')
        tabItem[index].classList.add('show')
    })
})