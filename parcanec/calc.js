let action = prompt("Введите нужно действие (+, *, -)", "")
let firstNumb = Number(prompt("Первое число", ""))
let secondNumb = Number(prompt("Второе число", ""))
let result
function add(firstNumb, secondNumb) {
        const result = (firstNumb + secondNumb)
        return result
    }
function multi(firstNumb, secondNumb) {
        const result = (firstNumb * secondNumb)
        return result
    }
function subtract(firstNumb, secondNumb) {
        const result = (firstNumb - secondNumb)
        return result
    }
switch (action) {
    case "+": result = add(firstNumb, secondNumb)
    break
    case "*": result = multi(firstNumb, secondNumb)
    break
    case "-": result = subtract(firstNumb, secondNumb)
    break
    default: result = "Вы ввели недопустимое значение"
}
alert (result)