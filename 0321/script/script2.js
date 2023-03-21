//객체지향프로그래밍 언어 자바스크립트 기본순서
//객체 변수 선언 --> 변수 속성, 메소드 활용 결과 값
//객체 아이디 변수 선언
//*변수 생성 후 콘솔로 올바른 변수인지 반드시 체크한다!


//변수(아이디 DOM)
const title/* h1이나 title 등 구분할 수 있는걸로 지정*/ = document.getElementById('title') /* 앞에 ID선언을 해서 title앞에 #을 안붙임 */
const contents= document.getElementById('contents')
const link/*a_link로 표기해도됨 */= document.getElementById('link')
//변수(클래스 DOM)
const first = document.getElementsByClassName('first')[0] /* first값이 여러개일 경우 0부터 숫자 입력해 구분 */
const last = document.getElementsByClassName('last')
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a')
//변수(태그 DOM)
const li = document.getElementsByTagName('li')

//출력
console.log(li)
console.log(a[1])
/* 변수에 일일이 인덱스를 표기하지 않고 출력 쪽에 인덱스 슷자를 넣어도 됨 {a[0],a[1],a[2],a[3]} */
// const a = document.getElementsByClassName('a')[0]
// const a = document.getElementsByClassName('a')[1]
// const a = document.getElementsByClassName('a')[2]
// const a = document.getElementsByClassName('a')[3]   ===> const a = document.getElementsByClassName('a')로 지정 후 출력에 인덱스 붙이기

console.log(menu[2])
console.log(last)
console.log(first)
console.log(title) /* console.log(title, contents, link) 한꺼번에 지정 가능 */
console.log(contents)
console.log(link)