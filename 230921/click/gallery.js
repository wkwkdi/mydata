const data =[
    {title: '진돗개',url: '1.jpeg'},
    {title: '포메라니안',url: '2.webp'},
    {title: '웰시코기',url: '3.webp'},
    {title: '비글',url: '4.webp'},
    {title: '시츄',url: '5.webp'},
    {title: '시바',url: '1.jpeg'},
]
const list=document.querySelector('#list')
console.log(list)

for(let i =0; i <data.length; i++ ){
    list.innerHTML += `<li class="btn">${data[i].title}</li>`
}
const btns=document.querySelectorAll('.btn')
const image=document.getElementById('image')
const title=document.getElementById('title')


for(let i=0; i < btns.length; i++){
    btns[0].classList.add('check')
    title.textContent =data[0].title
    console.log(btns[i])


    btns[i].addEventListener('click', () => {
        image.src=data[i].url
        title.innerHTML=data[i].title
        for(let j=0; j < btns.length; j++){
            btns[j].classList.remove('check')
        }
        btns[i].classList.add('check')
    })
}