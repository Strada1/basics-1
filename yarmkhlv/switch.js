let buttonEqual = document.querySelector('.equal');
let result = document.querySelector('.result');
let operator = document.querySelector('.operator');
let op1 = document.querySelector('.operand1');
let op2 = document.querySelector('.operand2');
let alert = document.querySelector('.alert');



buttonEqual.addEventListener("click", calc);



function calc() {
    let number1 = +op1.value;
    let number2 = +op2.value;
    let hasError = false;
    
    alert.textContent = '';
    if (typeof number1 !== 'number' || isNaN(number1)) {
        alert.textContent = 'Неверный тип введенных данных, нужно ввести число в 1 поле. ';
        hasError = true;
    } 
    if (typeof number2 !== 'number' || isNaN(number2)) {
        alert.textContent = alert.textContent+'Неверный тип введенных данных, нужно ввести число во 2 поле.';
        hasError = true;
    }
    if (hasError) {
        return;
    }

    let action = operator.value;
    switch(action){
    case 'add':
    result.textContent = +number1 + +number2;
    break;
    case 'subtract':
    result.textContent = number1 - number2;
    break;
    case 'multi':
    result.textContent = number1 * number2;
    break;
    case 'divide':
    result.textContent = number1 / number2;
    break;
}
};
