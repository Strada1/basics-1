function calc(make, a, b){
    switch (make) {
        case 'add':
            return +a + +b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'error';
    }
}

console.log(calc('add', '5', 6));
console.log(calc('multi', 5, '6'));
console.log(calc('subtract', '5', '6'));
console.log(calc(43, '43', 42));