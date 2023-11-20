const listItem=document.querySelectorAll('.list-item')



for(let i=0; i < listItem.length; i++){
    listItem[i].addEventListener('click',() =>{
        for(let j=0; j < listItem.length; j++){
        listItem[j].classList.remove('selected')
        }
        listItem[i].classList.add('selected')
    })
}
