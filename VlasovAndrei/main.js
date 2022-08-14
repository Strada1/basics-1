function calc(operator, a, b) {
    switch(operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multi':
            return a * b;
    }
}