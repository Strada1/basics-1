const calc = (method,a,b) => {
    let result;
    switch(method) {
        case 'add':
            result = +a + +b;
            break;
        case 'subtrack':
            result = +a - +b;
            break;
        case 'multi':
            result = +a * +b;
            break;
        default:
            result = NaN;
    }
}

сalc('add', 1, 2);
сalc('multi', 1, 2);
сalc('subtrack', 3, 2);