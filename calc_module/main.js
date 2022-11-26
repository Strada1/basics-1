let output = document.getElementById('output');

output.addEventListener("click", function () {

    let result = document.getElementById('result');
    let number_1 = document.getElementById('number_1').value;
    let number_2 = document.getElementById('number_2').value;
    let operator = document.getElementById('operator').value;

    if (number_1 === '' || number_2 === '') {
        alert("Вы не ввели число");
        return;
    }
    else {
        result.textContent = calculator(operator, number_1, number_2);
        document.getElementById('number_1').value = '';
        document.getElementById('number_2').value = '';
    }
});

function calculator(operator, number_1, number_2) {

    switch (operator) {
        case 'add':
            return number_1 + number_2;
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

