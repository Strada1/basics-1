import restartCalculator from "./timeOut.js";

let output = document.getElementById('output');
let newResult = document.querySelector('.all__results');

output.addEventListener("click", function () {

    let result = document.querySelector('.result');
    let number_1 = document.getElementById('number_1').value;
    let number_2 = document.getElementById('number_2').value;
    let operator = document.getElementById('operator').value;

    if (number_1 === '' || number_2 === '') {
        alert("Вы не ввели число");
        return;
    }
    else {
        result.innerHTML = Number(calculator(operator, number_1, number_2));

        let newDivResult = document.createElement('div');
        newDivResult.className = 'newResult';
        newDivResult.textContent = document.querySelector('.result').textContent;

        newDivResult.addEventListener("click", function () {
            newDivResult.remove();
        })

        newResult.append(newDivResult);

        setTimeout(restartCalculator, 15000);
    };
});



function calculator(operator, number_1, number_2) {

    switch (operator) {
        case 'add':
            return +number_1 + +number_2;
        case 'subtraction':
            return number_1 - number_2;
        case 'multi':
            return number_1 * number_2;
        case 'division':
            return number_1 / number_2;
        default:
            return 'This is operation is not found';
    }
}

