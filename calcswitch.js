function calc(op, a, b){
    switch (op){

    case ('+'):
    return a+b
    
    case ('-'):
    return a-b
    
    case ('*'):
    return a*b

    default:
    return ('Такой операции нет')
}
}
let a = +prompt('Введите число a');
let b = +prompt('Введите число b');
let op = prompt('Какое действие выполняем ?');
let result = calc(op, a, b)
alert(result);