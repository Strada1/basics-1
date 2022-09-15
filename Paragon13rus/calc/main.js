
let operator = document.getElementById("math-operations");
let a = document.getElementById("firstNumber");
let b = document.getElementById("secondNumber");
let result = document.getElementById("totalResult");
let counter = document.getElementById("equal");


counter.addEventListener("click", ()=> {
  const total = calc(operator.value, Number(a.value), Number(b.value));
  result.innerHTML = total.toFixed(3);
});



function calc(operator, a, b){
    // 
  switch (operator){
    case "+":
      return (a + b);
    case '*':
      return a * b;
    case 'subtract':
      return a - b;
    case '/':
      return a / b;
    default:
      "Fail"
  }
}

console.log(operator)
console.log(a)
console.log(b)
console.log(result)