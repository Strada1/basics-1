let operator, a, b;

function calc(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'This operation ' + operator + ' is not found';
    }

}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('undefind', 3, 4));