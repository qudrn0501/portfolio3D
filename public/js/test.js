// 1. 변수, 함수 정의
const value = 'one'
const method = (msg) => {console.log(msg)}

// 2. 변수, 함수를 하나의 변수에 담기
const test = { value, method }

// 3. 이 변수 내보내기 (반드시 해야함)
export default test

// es6 문법의 export, import
// 2번부터 시작
// export { value, method }