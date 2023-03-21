//F12 ->console 항상 실행하기
//javascript == 객체지향프로그래밍언어
//변수 = 데이터 저장소
//var, let, const
//var vs let ==> 중복변수명 / 에러여부로 구분
//const 상수
//console.log('a') ==> 문자 'a'를  log로 consol창에 표시한다.
//window.alert(10) ==> 숫자 10을 alert(팝업창)으로 window창에 표시한다.
//console.log('안녕하세요'.length) -==> 객체.메소드(객체.속성) 안녕하세요라는 문구를 콘솔에 log로 표시한다.

let a = 10 // a라는 변수의 데이터는 10
let b = 'hello' //b라는 변수의 데이터는 문자 hello
let c = a //c라는 변수의 데이터는  a
console.log(a.length) // a의 길이를 콘솔에 로그로 표시 ==> a는 길이를 알수 없어서 // undefined
console.log(a+b)//10hello를 콘솔에 로그로 표시
console.log(typeof b)//hello의 타입을 콘솔에 로그로 표시 //string(문자열)
window.alert(c)//10을 팝업창으로 window에 표시 //10
window.alert(a+c)//20을 팝업창으로 window에 표시 //20