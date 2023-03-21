const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')


console.log(btn)
console.log(btn1) /* btn1,btn한꺼번에 표시가능 */
console.log(btn1.innerHTML)


//내용변경 
btn1.innerHTML = '확인완료'/*  바로 적용하는 거라서 console log 없이 */
// vtn1 영문으로 바꾸기
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'cafe'
btn[3].innerHTML = 'blog'