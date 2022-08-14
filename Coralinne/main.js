'use strict';

function calc (operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default: 
        return 'Попробуйте еще раз';
            }
}

console.log(calc ('+', 1, 2));
console.log(calc ('-', 5, 2));
console.log(calc ('*', 6, 2));
console.log(calc ('/', 6, 2));