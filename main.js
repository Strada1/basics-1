let a = document.querySelector('.numberOne');
let b = document.querySelector('.numberTwo');
let operation = document.querySelector('.operator');
let btn = document.querySelector('.result')
let result = document.querySelector('.showResult')
let div = document.querySelector('.row')

btn.addEventListener('click', calc)

function calc() {

    if (a.value !== '' && b.value !== '') {

        switch (operation.value) {
            case '+':
                result.textContent = `${Number((Number(a.value) + Number(b.value)).toFixed(3))}`;
                break
            case '*':
                result.textContent = `${Number((a.value * b.value).toFixed(3))}`;
                break
            case '-':
                result.textContent = `${Number((a.value - b.value).toFixed(3))}`;
                break
            case '/':
                result.textContent = `${Number((a.value / b.value).toFixed(3))}`;
        }


        div.insertAdjacentHTML('afterend', '<div class="show"></div>')
        let newDiv = document.querySelector('.show')

        newDiv.textContent = result.textContent

        newDiv.addEventListener('click', (event) => {
            event.currentTarget.remove()
        })
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










