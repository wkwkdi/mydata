const img=document.querySelectorAll('.img')
console.log(img)

for(let i=0; i < img.length; i++){
    console.log(img[i])

    img[i].addEventListener('click',() =>{
        for(let btn=0; btn< img.length; btn++){
        img[btn].classList.remove('show')
    }
        img[i].classList.add('show')
    })
}
