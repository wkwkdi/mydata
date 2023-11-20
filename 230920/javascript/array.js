const number = [1,2,3]
const animal = ['고양이','강아지','코끼리']

console.log(number.length)

//객체,object
const classRoom = {
    number: '202',
    students: '20',
    aircon: true,
    computer: true,
    pokemon: ['피카츄',"꼬부기"],
    func :() =>{
        console.log('함수도 담을 수 있습니다')
    }
}

//객체에는 배열도 담을 수 있다
console.log(classRoom.pokemon)
console.log(classRoom.pokemon[0])
classRoom.func()
classRoom.number='300'
//classRoom 객체에서 number라는 키를 이용해서 값을 출력한 상황
console.log(classRoom.number)
console.log(classRoom["students"]) //이렇게도 실행 가능

const lunch = [
    {name:"짜장면",cost: 7000},
    {name:"짬뽕",cost: 8000},
    {name:"김밥",cost: 3500},
    {name:"국밥",cost: 6000}
]

console.log(lunch[0].name)
console.log(lunch[0]["name"])
console.log(lunch[3]["cost"])

// for(초기화; 조건; 증가/감소){
//     반복해서 해야할 일
// }

let totalCost = 0;
// const list = document.getElementById('list')
for(let i = 0; i < lunch.length; i++){
    // console.log(i)
    // console.log(lunch[i].name);
    // console.log(lunch[i].cost);
    // console.log(`${lunch[i].name}의 가격은 ${lunch[i].cost}원 입니다`)
    totalCost = totalCost + lunch[i].cost
    // totalCost += lunch[i].cost
    
    // list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    document.body.innerHTML += `<p>${lunch[i].name} : ${lunch[i].cost}</p>`
  
}
console.log(`각 메뉴의 총 합은 ${totalCost} 입니다`)