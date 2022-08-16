
function calc(value , a, b) {
    // return value === 'add' ? a + b : value === 'minus' ? a - b : value ==='multi' ? a * b : x ='Неизвестная операция' ;
    switch(value) {
        case 'add':
            return ( a + b);
            break;
        case 'minus':
            return ( a - b);
            break;

        case 'multi':
            return ( a * b);
            break;
        default:
            return ('Неизвестная операция');
    }
}
let a = +prompt('Введите число' , '');
let value = prompt('Выберите действие' , '');
let b = +prompt('Выберите число' , '')

alert (calc(value, a, b))