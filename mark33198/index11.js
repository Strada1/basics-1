const calc = (a, b, action) => {
    switch (action) {
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        default: console.log('operation not valid');
    }
};