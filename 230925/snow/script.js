/**wrapper에 snow 추가 후 animation */

const wrapper=document.querySelector('.wrapper')
console.log(wrapper)

const randomGenerator=(min,max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
for(let i=0; i < 100; i++){
    const snow=document.createElement('span')
    snow.classList.add('snow')
    snow.style.left = `${randomGenerator(0,100)}%`
    snow.style.animationDuration = `${randomGenerator(10,30)}s`
    snow.style.animationDelay = `${randomGenerator(0,100)}s`
    wrapper.append(snow)
    snow.style.opacity= Math.random();
}