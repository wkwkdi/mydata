const naveBar = document.querySelector("nav")
const menuBtns= document.querySelectorAll(".menu-icon")
const overlay= document.querySelector(".overlay")

//햄버거 버튼에 클릭 이벤트 등록
menuBtns.forEach((menuBtn)=>{
    menuBtn.addEventListener("click", ()=>{
        naveBar.classList.toggle("open");
    })
})
overlay.addEventListener("click", ()=>{
    naveBar.classList.remove("open");
})