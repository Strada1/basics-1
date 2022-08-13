function calc(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'multi':
            return a * b;
        default:
            return 'Error'; 
    } 
};

console.log(calc('add', 7, 10));
console.log(calc('sub', 20, 8));
console.log(calc('multi', 6, 4));
