captcha = document.getElementById("login").textContent;
const regexpp = /(\d\d\d|\d\d|\d)/g ;
let numbers = [...captcha.matchAll(regexpp)];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(Number(numbers[0][0])+Number(numbers[1][0]));
