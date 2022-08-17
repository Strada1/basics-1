
function calc(op, a, b){
    if(isNaN(a) || isNaN(b)) return 'Не правильный операнд';
    
    const operations = {
    add: 'add',
    multi: 'mul',
    sub: 'sub',
    }

    switch(op){
        case operations.add: return (+a) + (+b);
        case operations.sub: return a - b;
        case operations.multi: return a * b;
        default: return 'Вы ввели неправельный оператор';
    }
}

console.log(calc('add', 'b', '5'));
console.log(calc('sub', '2', '5'));
console.log(calc('mul', '2', '5'));