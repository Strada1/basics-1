function calc(action, a, b) {
    switch (action) {
        case "add":
            return a + b
        
        case "multi":
            return a * b
        
        case "subtract":
            return a - b
        
    }
}

console.log(calc("add", 3, 3));
console.log(calc('multi', 5, 10));
console.log(calc("subtract", 10, 5));

