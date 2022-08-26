// // Калькулятор в конструкции if.. else..

function calc(a, b, ident) {
    if (ident === 'add') {
        return (a + b)
    } else if (ident === 'multi') {
        return (a * b);
    } else if (ident === 'subtract') {
        return (a - b)
    }
}

console.log(calc(1, 2, 'add'));
console.log(calc(1, 2, 'multi'));
console.log(calc(3, 2, 'subtract'));


// Калькулятор на Switch:

function calc(a, b, ident) {
    switch(ident) {
        case 'add':
            return (a + b);
        case 'multi':
            return (a * b);
        case 'subtract':
            return (a - b);
    }
}

console.log(calc(1, 2, 'add'));
console.log(calc(1, 2, 'multi'));
console.log(calc(3, 2, 'subtract'));

