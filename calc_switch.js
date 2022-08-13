function calc(action, a, b) {
    switch(action) {
        case 'add':
            return (a + b);
        case 'multi':
            return (a * b);
        case 'substract':
            return (a - b);
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 3, 2));
