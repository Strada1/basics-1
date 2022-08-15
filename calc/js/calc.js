function calc(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;

        case 'sub':
            return a - b;

        case 'multi':
            return a * b;

    }
}

console.log(calc('add', 6, 7));
console.log(calc('sub', 6, 7));
console.log(calc('multi', 6, 7));
