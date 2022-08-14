// let a = 3;
// let b = 2;
// let operate = 'multi';

function calc(a, b, operate) {
    switch (operate) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default: 
        return "not found operation";
    }
}
console.log(calc(4, 3, 'multi'));
console.log(calc(4, 3));
console.log(calc(4, 3, 'add'));
