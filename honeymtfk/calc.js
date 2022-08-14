function calc (item, a, b) {
    switch (item) {
        case ("plus"):
            return a + b;
        case ("multi"):
            return a * b;
        case ("minus"):
            return a - b;
        default:
            alert ("Ошибка!");
    }
}
let a = prompt ("Введите число a", "");
a = Number(a);
let b = prompt ("Введите число b", "");
b = Number(b);
let item = prompt ("Введите название операции", "");
alert (calc (item, a, b));