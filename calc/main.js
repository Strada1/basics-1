/*function calc(identifier, a, b) {
    if (identifier == "add") {
        return a + b;
    } else if (identifier == "multi") {
        return a * b;
    } else if (identifier == "substract") {
        return a - b;
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 1, 2));*/

function calc(identifier, a, b) {
    switch (identifier) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "substract":
            return a - b
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 1, 2));

