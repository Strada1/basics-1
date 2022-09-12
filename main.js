//Создать простой калькулятор с именем сalc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
 
//Пример вызова такой функции calc
//сalc(‘add’, 1, 2) - возвращает 3
//сalc(‘multi’, 1, 2) - возвращает 2
//сalc(’subtract’, 3, 2) - возвращает 1

const firstNumber = document.getElementById("number1");
const secondNumber = document.getElementById("number2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

function runCalc() {
    let firstValue = Number(firstNumber.value);
    let secondValue = Number(secondNumber.value);
    let value = calc(operation.value, firstValue, secondValue);
    result.value = value;

    let div = document.createElement('div');
    div.className = "list";
    div.innerHTML = result.value;
    div.onclick = () => div.remove();
    document.body.append(div);
}


function calc(operation, num1, num2) {
    const operations = {
        add : '+', 
        multi : '*', 
        sub : '-',
        div: ':',
    }
    switch(operation){
        case operations.add:
            return num1+num2;
            break;
        case operations.multi:
            return num1*num2;
            break;
        case operations.sub:
            return num1-num2;
            break;
        case operations.div:
            return num1/num2;
            break;    
        default:
            return 'Wrong data, try again';
    } 
}

elem.onclick = runCalc;
