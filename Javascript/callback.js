// console.log("One");
// console.log("Two");
// setTimeout(()=>{
//     console.log("Sucessfully wasted 7 seconds");
// },7000);
// console.log("Three");
// console.log("Four");

function sum(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function mult(a, b) {
  console.log(a * b);
}

function div(a, b) {
  console.log(a / b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(10, 12, sum);
calculator(10, 12, sub);
calculator(10, 12, mult);
calculator(10, 12, div);
