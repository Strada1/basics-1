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
   } if (isNaN(a)) {
    return result1.textContent = 'введи число, это буковы (─‿‿─)'
   } if (isNaN(b)) {
    return result1.textContent = 'введи число, это буковы (─‿‿─)'
   } else {
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
answer.addEventListener("click", save);
 function save() {
 let saveResult = document.createElement('div')
 document.body.firstElementChild.nextElementSibling.append(saveResult)
 saveResult.textContent = result2
 }
}
