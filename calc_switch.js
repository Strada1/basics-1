//Создать простой калькулятор с именем сalc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
 
//Пример вызова такой функции calc
//сalc(‘add’, 1, 2) - возвращает 3
//сalc(‘multi’, 1, 2) - возвращает 2
//сalc(’subtract’, 3, 2) - возвращает 1

function calc(action, num1, num2) {
    switch(action){
        case 'add':
            return num1+num2;
            break;
        case 'multi':
            return num1*num2;
            break;
        case 'subtract':
            return num1-num2;
            break;
        default:
            return 'Wrong data, try again';
    } 
}
            
action  = prompt('Enter action you want to do: "add", "multi", "subtract"');
first_number = Number(prompt('Enter the first_number'));
second_number = Number(prompt('Enter the second number'));

alert(calc(action, first_number, second_number)); 