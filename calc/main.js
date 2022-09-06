const operations = {
    add: '+',
    multi: '*',
    sub: '-',
};

function makeCalculation(operator, num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {return console.log('Ошибка, используйте только числовые значения')};
    switch (operator) {
        case operations.add:
            console.log(num1 + num2);
            break;
        case operations.sub:
            console.log(num1 - num2);
            break;
        case operations.multi:
            console.log(num1 * num2);
            break;
        default:
            console.log("Ошибка, введите operations.add для сложения, operations.sub для вычитания, operations.multi для умножения")
            break;
    }
};

makeCalculation(operations.add, 4, 7);
makeCalculation(operations.multi, 4, 7);
makeCalculation(operations.sub, 4, 7);
makeCalculation(operations.divide, 4, 7);
makeCalculation(operations.add, 'qweq', 8);
makeCalculation(operations.add, 2, 'tutu');