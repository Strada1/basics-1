



function calc(selection_action, a, b){
    switch(selection_action){
        case "multi":
        case "*":
         return a*b;

        case "add":
        case "+":
            return a+b;

        case "substract":
        case "-":
            return a-b;
    }
}
console.log(calc("-", 4, 6))
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 3, 2));