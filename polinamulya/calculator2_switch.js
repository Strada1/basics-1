let firstOperand = prompt('Введите первое значение: ', 0);
let secondOperand = prompt('Введите второе значение: ', 0);
let operator = prompt('Введите оператор: ', '+, *, -');

alert( 'Результат: ' + firstOperand + operator + secondOperand + '=' + calc() );

function calc(){
    switch(operator){
        case '+':
            return +firstOperand + +secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '-':
            return firstOperand - secondOperand;
        default:
            alert('Ошибка! Попробуйте еще раз!');
    }
}