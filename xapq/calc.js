function calc(symbol, a, b) {
    a = Number(a);
    b = Number(b);
    switch(symbol) {
        case "add":
            console.log(a + b);
            break;
        case "multi":
            console.log(a * b);
            break;
        case "subtract":
            console.log(a - b);
            break;
        default:
            console.log("this symbol is not supported")
    }
}
