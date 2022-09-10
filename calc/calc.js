const answer = document.getElementById("answer");
answer.addEventListener("click", calc);

result1 = document.getElementById("result");

const CHECKS_VALUE = {
  DIVIDE_ZERO : 0,
  EMPTY_STRING : '',

}

const CHECKS_TEXT =  {
  EMPTY_STRING : 'введи число пжшка (─‿‿─)',
  THIS_IS_LETTERS : 'введи число, это буковы (─‿‿─)',
  DONT_DIVIDE_BY_ZERO : 'запрещаю делить \t на ноль (￣︿￣)'

}

function calc() {
  const action = document.getElementById("action").value;
  const a = document.getElementById("number1");
  const b = document.getElementById("number2");
  let result2;


   if (a == '' || b == '') {
    return result1.textContent = CHECKS_TEXT.EMPTY_STRING
   }
    if (isNaN(a)) {
    return result1.textContent = CHECKS_TEXT.THIS_IS_LETTERS
   }
   if (isNaN(b)) {
    return result1.textContent =  CHECKS_TEXT.THIS_IS_LETTERS
   } else {
    switch (action) {
        case "+":
          result2 = Number(a) + Number(b);
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
 //не смотри пж я думаю есчо
}
