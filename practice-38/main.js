document.getElementById('equal').addEventListener('click', calc);

function calc() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let operator = document.getElementById('select').value;
    let result = document.querySelector('.result')
    switch(operator) {
        case 'add':
            result.innerHTML = a + b;
            break;
        case 'subtract':
            result.innerHTML = a - b;
            break;
        case 'multi':
            result.innerHTML = a * b;
            break;
        case 'divide':
            result.innerHTML = a / b;
            break;
        default:
            alert('Houston, we have a problem');   
    }
}





