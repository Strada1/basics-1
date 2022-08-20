function calc(a, b, action) {
    let result;
    switch (action) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'multi':
            result = a * b;
            break;
    }
    return result;
}
console.log(calc(5, 7, '+'));
console.log(calc(5, 7, '-'));
console.log(calc(5, 7, '*'));
