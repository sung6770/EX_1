let x = document.getElementById('text')
let y = document.getElementById('button')
let z = document.getElementById('color')
z.onclick = () => {
    if(x.style.backgroundColor === 'black') {
        z.value = "야간모드"
        document.body.style.backgroundColor = 'beige'
        x.style.backgroundColor = 'white'
        x.style.color = 'black'
        alert("야간모드 비활성화")
    }
    else {
        z.value = '주간모드'
        document.body.style.backgroundColor = 'grey'
        x.style.backgroundColor = 'black'
        x.style.color = 'white'
        alert("야간모드 활성화")
    }
}
function changeTxt() {
    if(x.innerText==='안녕하세요 황보성우 입니다.'){
        x.innerText='프론트엔드 비기너 과정에 있습니다.'
    }
    else
        x.innerText='안녕하세요 황보성우 입니다.'
}
y.addEventListener('click', changeTxt)