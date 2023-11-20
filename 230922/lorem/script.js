const sidebar=document.getElementById('sidebar')
const tigger=document.getElementById('tigger')
const overlay=document.querySelector('.overlay')

/**
 * -classlist.contains('클래스명'):"클래스명"가 있는지 유무에 따라
 *  true.false 반환
 * -classlist.add('클래스명):'클래스명' 추가
 * -sidebar.classlist.remove('클래스명):'클래스명' 제거
 */
tigger.addEventListener('click',() =>{
    // 해당요소에 클래스가 있는지 판단해서 유무에 따라 추가/삭제
    // sidebar.classList.toggle('open')
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        tigger.textContent = '열기'
        overlay.classList.remove('open')
    } else{
        sidebar.classList.add('open')
        tigger.textContent = '닫기'
        overlay.classList.add('open')
    }
})

overlay.addEventListener('click',() =>{
    if(overlay.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        tigger.textContent = '열기'
    }
})