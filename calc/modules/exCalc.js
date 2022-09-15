export default function calc(operator,a, b) {
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

