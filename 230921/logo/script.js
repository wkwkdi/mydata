const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem)
// console.log(menuItem[menuItem.length-1])
// menuItem[4].addEventListener('click', ()=> {
//     menuItem[4].classList.add('active')
// })
// menuItem[0].addEventListener('click',()=>{
//     menuItem[0].classList.remove('active')
// })

//변수의 scope(범위,영역)
// let 키워드로 선언된 변수의 scope는 블록단위이다
// 변수를 선언할때 원칙- 동일한 이름으로 선언할 수 없다
// scope가 다르다면 동일한 이름으로 사용해도 영역이 다르기때문에 사용 가능
for(let i = 0; i < menuItem.length; i++){
    console.log(menuItem[i])
    
    menuItem[i].addEventListener('click',()=>{
        for(let btn=0; btn<menuItem.length; btn++){
            menuItem[btn].classList.remove('active')
        }
        menuItem[i].classList.add('active')
    })
}

