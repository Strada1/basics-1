let action = prompt("Введите нужно действие (+, *, -)", "")
let firstNumb = Number(prompt("Первое число", ""))
let secondNumb = Number(prompt("Второе число", ""))
let result
function add(firstNumb, secondNumb) {
        return result = (firstNumb + secondNumb)
    }
function multi(firstNumb, secondNumb) {
        return result = (firstNumb * secondNumb)
    }
function subtract(firstNumb, secondNumb) {
        return result = (firstNumb - secondNumb)
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