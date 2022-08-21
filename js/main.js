
function calc (operation, a, b){
    switch (operation){
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multy":
            return a * b;
    }
}
let result = calc("subtract", 2, 3);
alert(result);