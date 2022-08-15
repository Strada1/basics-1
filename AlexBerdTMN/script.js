function calc(op, a, b){
    switch(op){
        case '+': return (+a) + (+b);
        case '-': return a - b;
        case '*': return a * b;
        default: return 'Вы ввели неправельный оператор';
    }
}

console.log(calc('+', 12, 26));