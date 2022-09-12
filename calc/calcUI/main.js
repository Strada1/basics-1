const result = document.querySelector('.result')
const valueOne = document.querySelector('.inputCalcOne')
const valueTwo = document.querySelector('.inputCalcTwo')
const operation = document.querySelector('.calculateSelect')
const total = document.querySelector('a')



function calc(operator, a, b) {
    console.log(a)
    switch (operator) {
        case "+":
            return +a + +b
        case "*":
            return a * b
        case "-":
            return a - b
        case "/":
            return a / b
        default:
            console.log("Error")
    }
}

result.addEventListener('click', function () {
    if( valueOne.value !== "" && valueTwo.value !== "" ) {
        total.textContent = calc(operation.value, valueOne.value, valueTwo.value).toFixed(2)
    } else  {
        total.textContent = 'Заполните поле'
    }
})
