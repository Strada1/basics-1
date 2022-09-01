/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя рекурсивный setTimeout.
*/

function printNumbers(from,to) {
    let number = from;
    let timerId = setTimeout(function tick() {
        if (number<= to){
            alert(number);
            number++;
            timerId = setTimeout(tick, 1000);
        }
        else {
            clearInterval(timerId);
        }
    }, 1000);
}
printNumbers(5, 10);