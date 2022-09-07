let a = document.querySelector('.numberOne');
let b = document.querySelector('.numberTwo');
let operation = document.querySelector('.operator');
let btn = document.querySelector('.result')
let result = document.querySelector('.showResult')

btn.addEventListener('click', calc)

function calc() {

    if (a.value !== '' && b.value !== '') {

        switch (operation.value) {
            case '+':
                result.textContent = String(Number((Number(a.value) + Number(b.value)).toFixed(3)));
                break
            case '*':
                result.textContent = String(Number((a.value * b.value).toFixed(3)));
                break
            case '-':
                result.textContent = String(Number((a.value - b.value).toFixed(3)));
                break
            case '/':
                result.textContent = String(Number((a.value / b.value).toFixed(3)));
        }
    }

    if (a.value === '') {
        a.placeholder = 'enter number'
    }
    if (b.value === '') {
        b.placeholder = 'enter number'
    }
    if (a.value === '' && b.value === '') {
        a.placeholder = 'enter number'
        b.placeholder = 'enter number'

    }
}








