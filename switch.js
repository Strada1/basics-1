/*Конструкция switch заменяет собой сразу несколько if.

Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.*/

let a = parseFloat(parseInt(prompt('Введите 1-ое число')));
let b = parseFloat(parseInt(prompt('Введите 2-ое число')));
let operator = prompt('Введите оператор');




  
let result;

switch(operator){
  case '+' : result = a + b;
  alert('Результат сложения ' + result);
  break;
  case '-' : result = a - b;
   alert("Результат вычитания " + result);
  break;
  case '*' : result = a * b;
   alert("Результат умножения " + result);
  break;
  case '/' : result = a / b;
  alert("Результат деления " + result);
  break;
  default: result !== '+', '-','*','/'; alert('Неизвестное значение');
}



  //для теста

    

