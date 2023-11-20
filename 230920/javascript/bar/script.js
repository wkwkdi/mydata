const num=document.getElementById('number')
const inc=document.querySelector('#inc')
const dec=document.getElementById('dec')
const bar=document.querySelector('.bar')

let counter = 0;
// inc.addEventListener('click',function(){})
inc.addEventListener('click',() => {
    //누적시키는 방법
    if(counter < 100){
    counter += 10;
    num.textContent = counter
    }
    bar.style.width = `${counter}%`
    console.log(counter)
    
    //증가 연산자
    // counter++;
    // console.log(counter)
    // inc.style.transform = `rotate(${counter}deg)`
})
dec.addEventListener('click', () => {
    if(counter > 0){
        counter -= 10;
        num.textContent = counter
    }

    bar.style.width = `${counter}%`
    console.log(counter)
    // dec.style.transform = `rotate(-${counter}deg)`
})

// console.log('감소')
// counter--;
// num.textContent = counter