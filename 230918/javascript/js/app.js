console.log('app')

//문서안에서 title이라는 아이디를 가진 요소를 찾아서 text라는 변수에 담은 상황
const size = 60
const text = document.getElementById('title')
console.log(text)
text.style.color='red';
text.style.fontSize= size +'px'; //문자열 결합방식
text.style.fontSize= `${size} px`; //템플릿 결합방식
text.textContent= '바뀐 내용입니다'
text.innerText= '이렇게도 바꿀 수 있습니다'
text.innerHTML='<span>이렇게 태그를 넣어서 바꿀 수도 있습니다</span>'
//HTML 요소를 추가할 수 있는 방식

const barGraph= document.getElementById('graph')
const graphValue= barGraph.dataset.value;
barGraph.style.width= graphValue + '%';
barGraph.innerText= `${graphValue}`+ '%';
//graph요소의 텍스트를 graphvalue값으로 넣음
console.log(barGraph, graphValue)

