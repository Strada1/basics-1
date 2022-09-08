let answer = document.getElementById("answer");
answer.addEventListener("click", calc);

result1 = document.getElementById("result");

function calc() {
  let action = document.getElementById("action").value;
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  let result2;


   if (a == '' || b == '') {
    return result1.textContent = 'введи число пжшка (─‿‿─)'
   }
    else {
    switch (action) {
        case "+":
          result2 = (+a + +b);
          result1.innerHTML = result2;
          break;

        case "-":
          result2 = a - b;
          result1.innerHTML = result2;
          break;

        case "*":
          result2 = a * b;
          result1.innerHTML = result2;
          break;

        case "/":
          if (+b === 0) {
            return result1.textContent = 'запрещаю делить \t на ноль (￣︿￣)'
          } else {
            result2 = a / b;
            result1.innerHTML = result2
          }
      }
} 

}