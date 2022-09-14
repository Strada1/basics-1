export function getResult() {
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    const operation = document.getElementById('operation').value;

    switch (operation) {
        case "sum":
            return a + b;
        case "multiply":
            return a * b;
        case "subtract":
            return a - b;
        case "division":
            if (b === 0) {
                alert('0 in divisor')
            } else {
                return a / b;
            }
        default:
            alert('Unsuported operation');
    }
}
