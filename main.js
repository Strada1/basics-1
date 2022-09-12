/*В вашей только что написанной программе “Калькулятор” добавьте сохранение всех результатов: после каждого расчёта (клика по кнопке “=” ) добавляйте новый div под строкой калькулятора и записывайте в него результат вычислений. После нескольких расчетов у вас получится что-то похожее на:
12
32
43
545
12
По клику на каждое из этих чисел - удаляйте его див из разметки. 
У вас будет 2 операции из новой темы: добавление узла в DOM и удаление узла. А еще вам нужно будет “вешать” события на только что созданные “дивы”. Это не самая простая задача, но разве вас уже можно хоть чем-то напугать
*/
import {calc} from './calc.js'; 


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


elem.onclick = runCalc;
