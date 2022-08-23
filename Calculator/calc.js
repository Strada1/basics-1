function calc(operator,a,b) {
    if (typeof(a)==="number" && typeof(b)==="number"){
        switch (operator) {
        case 'add': 
            return a+b;
        case 'multi':
            return a*b;
        case 'subtract':
            return a-b;
        default: 
        return "Введите правильную операцию для вычисления"    
            }
        }
    else return('Ошибка. Введите число')
}

console.log('Результат: '+calc('multi',2,3));
console.log('Результат: '+calc('add',2,3));
console.log('Результат: '+calc('subtract',2,3));