const more = document.getElementsByClassName('more')
const img/* 구분할수 있는 임의값 */ = document.getElementsByTagName('img'[0]/* 앞에 입력한 태그,id,class 값 */)
const plus = document.getElementsByClassName('plus')/* plus 2개 출력에 인덱스 붙이기 */
const join = document.getElementById('join_btn')/* id이름 */
const li = document.getElementsByTagName('li')


console.log(more[0], img, join)
console.log(plus[0],plus[1])
console.log(li[0])
console.log(li[1])
console.log(li[2])
console.log(li[3])
console.log(li[4])

// ----------------------------style속성
// 객체.속성
//style == css
//속성종류 => font-size, color, font-weight,background...
//객체.style.속성 = 값
more[0]/* 정확하게 인덱스 붙여두기 */.style.color = 'red'/* 문자쓸때 꼭 따옴표붙이기 */
li[0].style.background= 'pink'
li[1].style.background= 'purple'
li[2].style.background= 'navy'
li[3].style.background= 'skyblue'
li[3].style.fontSize= '3rem'
li[4].style.background= 'yellow'
 /* 두단어가 연결될때에는 첫글자 대문자로 ex)background-color => backgroundColor */