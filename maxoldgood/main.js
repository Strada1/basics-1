const operations = {
    add: '+',
    multi: '*',
    sub: '-',
};

// 1. Юзер вводит число в первый инпут
// 2. Юзер выбирает селект
// 3. Юзер ввводит число во второй инпут
// 4. Юзер жмет на кнопку "="
// 5. В аутпут возвращается результат функции калк:
//          Оперэйшн - получает значение value из селекта
//          а и b - получают значение из инпутов

let equalsign = document.getElementById('equalsign');
equalsign.onclick = function (){
    let action = document.getElementById('select').value;
    let firstNumber = +document.querySelector('.inputnumber1').value;
    let secondNumber = +document.querySelector('.inputnumber2').value;
    
    document.querySelector('.result').value = calc(action, firstNumber, secondNumber)
    
    function calc (operation, a, b) {
        
        switch(operation) {
         case operations.add:
             return a+b;
             break;
         case operations.multi:
             return a*b;
             break;
         case operations.sub:
             return a-b;
             break;
     }
     };
}



 