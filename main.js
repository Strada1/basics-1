// сalc(‘add’, 1, 2) - возвращает 3
// сalc(‘multi’, 1, 2) - возвращает 2
// сalc(’subtract’, 3, 2) - возвращает 1



//calc function, can add, subtrackt and multiplay 2 variables

function calc(id, a, b) {
    switch(id) {
        case "add": return a + b;
        case "multi": return a * b;
        case "subtract": return a - b;
        // default : return "я не знаю такой операции " + id;
    }
}

console.log("1 плюс 2 = " + calc("add", 1, 2));
console.log("1 умножить на 2 = " + calc("multi", 1, 2));
console.log("3 минус 2 = " + calc("subtract", 3, 2));
// console.log("3 разделить 2 = " + calc("devide", 3, 2));

