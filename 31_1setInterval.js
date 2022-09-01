/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/
function printNumbers(from, to){
    let number = from;
    let timerId =  setInterval(function() {
        if (number<=to) {
            alert(number); 
            number++;
        } 
        else{
        clearInterval(timerId);

        }
    }, 1000);
}
printNumbers(5, 10);

