
let operator = document.getElementById("math-operations").value;
let a = Number(document.getElementById("firstNumber").value);
let b = Number(document.getElementById("secondNumber").value);
let result = document.getElementById("totalResult").textContent;


document.getElementById("equal").addEventListener("click", showResult);

function showResult(){
     document.getElementById("totalResult").innerHTML = calc()
    
 }

function calc (operator, a, b){
    // 
  switch (operator){
      case '+':
        result = (a + b);
     break;
    case '*':
        result = a * b;
     break;
    case 'subtract':
        result = a - b;
     break;
    default:
        result = 0;
  }
  return result;
}

console.log(operator)
console.log(firstNumber)
console.log(secondNumber)
console.log(result)