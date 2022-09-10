//Создать простой калькулятор с именем сalc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
 
//Пример вызова такой функции calc
//сalc(‘add’, 1, 2) - возвращает 3
//сalc(‘multi’, 1, 2) - возвращает 2
//сalc(’subtract’, 3, 2) - возвращает 1

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

function handler1(){
    result.value = calc("+", +number1.value, +number2.value);
    let div = document.createElement('div');
    div.className = "list";
    div.innerHTML = result.value;
    div.onclick = () => div.remove();
    document.body.append(div);
}

function handler2(){
    result.value = calc("-", +number1.value, +number2.value);
    let div = document.createElement('div');
    div.className = "list";
    div.innerHTML = result.value;
    div.onclick = () => div.remove();
    document.body.append(div);
}

function handler3(){
    result.value = calc("*", +number1.value, +number2.value);
    let div = document.createElement('div');
    div.className = "list";
    div.innerHTML = result.value;
    div.onclick = () => div.remove();
    document.body.append(div);
}

function handler4(){
    let divideResult = calc(":", +number1.value, +number2.value);
    if (divideResult===(Math.round(divideResult))) {
        result.value = divideResult;
        let div = document.createElement('div');
        div.className = "list";
        div.innerHTML = result.value;
        div.onclick = () => div.remove();
        document.body.append(div);
    }
    else {
        result.value = divideResult.toFixed(2);
        let div = document.createElement('div');
        div.className = "list";
        div.innerHTML = result.value;
        div.onclick = () => div.remove();
        document.body.append(div);
    }
    }

function changeOperation(){
    if (select.value=="sum"){
        elem.addEventListener('click', handler1);

        elem.removeEventListener('click', handler2);
        elem.removeEventListener('click', handler3);
        elem.removeEventListener('click', handler4);

    }
    if (select.value=="minus"){
        elem.addEventListener('click', handler2);
        elem.removeEventListener('click', handler1);
        elem.removeEventListener('click', handler3);
        elem.removeEventListener('click', handler4);
    }
    if (select.value=="multiply"){
        elem.addEventListener('click', handler3);
        elem.removeEventListener('click', handler1);
        elem.removeEventListener('click', handler2);
        elem.removeEventListener('click', handler4);
    }
    if (select.value=="divide"){
        elem.addEventListener('click', handler4);
        elem.removeEventListener('click', handler1);
        elem.removeEventListener('click', handler2);
        elem.removeEventListener('click', handler3);
    }
}


select.addEventListener("change", changeOperation);
changeOperation();