let firstNumber= +(prompt("Введите первое число",""));
let action = prompt("Введите операцию (add, multi или sub)","");
let secondNumber= +(prompt("Введите второе число",""));
function calc(a,b) {
   let operations = {
        add:a+b,
        sub:a-b,
        multi:a*b,
    }
   alert(operations[action]);
}

calc(firstNumber,secondNumber);

