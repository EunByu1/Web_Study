// 계산 기능을 하는 파일 

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 객체 단위로 모듈을 내보낼 수 있음 
module.exports = {
    moduleName : "calc module",
    add : add,
    sub : sub
};