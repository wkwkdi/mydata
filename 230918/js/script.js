const userName = document.getElementById('username')
console.log(userName)
//pormpt(사용자에게 보여줄 메세지,기본값)
let value = prompt('이름을 입력해주세요', '강지은')
userName.textContent = value;

let color = prompt('원하는 컬러를 입력해주세요')
userName.style.color = color
//console.log(value)

let size = prompt('폰트사이즈')
userName.style.fontsize =size;
