// function calc(func, a, b) {
//     switch (func) {
//         case 'add':
//             return a + b;
//         case 'multi':
//             return a * b;
//         case 'subtract':
//             return a - b;
//     }
// }


// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 3, 2));


// function calc(operations, a, b) {
//     operations = {
//         'add': a + b,
//         'multi': a * b,
//         'subtract': a - b,
//     }
// }

// for (let key in operations) {
//     console.log(key);
// }

// console.log(calc('add', 1, 2));
// console.log(calc('multi', 1, 2));
// console.log(calc('subtract', 3, 2));


function calc(func, a, b) {
    const operations = {
        add: '+',
        multi: '*',
        subtract: '-',
    }
    switch (func) {
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.subtract:
            return a - b;
    }
}

console.log(calc('+', 1, 2));
console.log(calc('*', 1, 2));
console.log(calc('-', 3, 2));



