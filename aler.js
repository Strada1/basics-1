function add(a, b) {
    alert(+a + +b);
}

function substraction(a, b) {
    alert(+a - +b);
}

function multiplication(a, b) {
    alert(+a * +b);
}

function calc() {
    let a, b, operation;
    operation = prompt("Введите операцию: add, sub, multi");
    a = prompt("Введите превый операнд -> ");
    b = prompt("Введите второй операнд -> ");
    switch (operation) {
        case 'add':
            add(a, b);
            break;
        case 'sub':
            substraction(a, b);
            break;
        case 'multi':
            multiplication(a, b);
            break;
        default:
            alert("Некорректный ввод!");
            return false;
    }
}
while (true) {
    if (calc() === false) { break; }
} 