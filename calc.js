let button = document.getElementById("button")
let result = document.getElementById("result")

button.addEventListener('click', calc)

function calc() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let operation = document.getElementById('operation').value;


    switch (operation) {
        case "sum":
            result.innerHTML = a + b;
            break;

        case "multiply":
            result.innerHTML = a * b;
            break;

        case "subtract":
            result.innerHTML = a - b;
            break;

        case "division":
            if (b === 0) {
                alert('0 in divisor')
            }
            else {
                result.innerHTML = a / b;
                break;
            }
        default:
            alert('Unsuported operation');
    }
}
