function calc(action, a, b) {
    switch (action) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return;
    }
}

let value1 = calc('add', 1, 2);
let value2 = calc('multi', 1, 2);
let value3 = calc('subtract', 3, 2);

console.log('value1 = ' + value1);
console.log('value2 = ' + value2);
console.log('value3 = ' + value3);