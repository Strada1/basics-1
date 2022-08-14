function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
            break;
        case "multi":
            return a * b;
            break;
        case "substrakt":
            return a - b;
            break;
    } 
    
}
let a = new Number(prompt("Введите число а"));
let b = new Number(prompt("Введите число b"));
let operation = prompt("Введите команду");
let result = calc(operation, a, b);
alert(result)