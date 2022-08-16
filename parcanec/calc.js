let action = prompt("Введите нужно действие (+, *, -)", "")
let firstNumb = Number(prompt("Первое число", ""))
let secondNumb = Number(prompt("Второе число", ""))
function add(firstNumb, secondNumb) {
        return (firstNumb + secondNumb)
    }
function multi(firstNumb, secondNumb) {
        return (firstNumb * secondNumb)
    }
function subtract(firstNumb, secondNumb) {
        return (firstNumb - secondNumb)
    }
let operations = {
    '+': add(firstNumb, secondNumb),
    '*': multi(firstNumb, secondNumb),
    '-': subtract(firstNumb, secondNumb)
}
let result = operations[action]
if (action in operations) {
    alert (`Результат вычислений: ${result}`)
} else {
    alert ('Введено неизвестное действие')
}