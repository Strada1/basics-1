function calc(operation,a,b){
    switch(operation){
        case 'сложение':
            alert(a+b);
            break;
        case 'вычитание':
            alert(a-b);
            break;
        case 'умножение':
            alert(a*b);
            break;
    }
}

let a = prompt("Первое число?");
let b = prompt("Второе число?");
let operation = prompt("Выберете действие");
calc(operation,Number(a),Number(b));
