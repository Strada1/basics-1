const operations = {
    add: '+',
    multi:'*',
    subtract: '-',
    delenie: '/',
    stepen: '**',
    ostatok: '%',
};
function calc(operator,a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    switch(operations[operator]) {
        case '+':
        return a+b;
        case '*':
        return a*b;
        case '-':
        return a-b;
        case '/':
        return a/b;
        case '**':
        return a**b;
        case '%':
        return a%b;
    };
};
console.log(calc('add',1,2));
console.log(calc('multi',1,2));
console.log(calc('subtract',3,2));
console.log(calc('delenie',6,2));
console.log(calc('stepen',3,2));
console.log(calc('ostatok',7,2));
