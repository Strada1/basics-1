
function calc(operation, a, b) {
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'multi':
            result = a * b;
            break;
        case 'sub':
            result = a - b;
            break;
    }
    return result;
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('sub', 3, 2));



